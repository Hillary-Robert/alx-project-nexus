import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Product, ProductResponse } from "@/interface";
import ProductCard from "./ProductCard";
import InfiniteStatus from "./InfiniteStatus";
import { gridProps } from "@/interface";


function buildApiUrl({
  searchQuery,
  selectedCategory,
  itemsPerPage,
  skipCount,
}: {
  searchQuery: string;
  selectedCategory: string;
  itemsPerPage: number;
  skipCount: number;
}) {

  if (searchQuery.trim()) {
    return `https://dummyjson.com/products/search?q=${encodeURIComponent(
      searchQuery
    )}&limit=${itemsPerPage}&skip=${skipCount}`;
  }
  if (selectedCategory && selectedCategory !== "all") {
    return `https://dummyjson.com/products/category/${encodeURIComponent(
      selectedCategory
    )}?limit=${itemsPerPage}&skip=${skipCount}`;
  }
  return `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skipCount}`;
}

export default function ProductGrid({
  searchQuery,
  selectedCategory,
  sortField,
  sortDirection,
  itemsPerPage,
  useInfiniteScroll,
  refreshSignal,
}: gridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isLoadingLocked = useRef(false);

  const hasMoreProducts = products.length < totalProducts;

  
  const fetchProducts = useCallback(
    async (pageNumber: number, signal?: AbortSignal): Promise<Product[]> => {
      setIsLoading(true);
      setErrorMessage(null);

      const skipCount = (pageNumber - 1) * itemsPerPage;
      
      const url = buildApiUrl({
        searchQuery,
        selectedCategory,
        itemsPerPage,
        skipCount,
      });

      const response = await fetch(url, { signal });
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data: ProductResponse = await response.json();
      let productList = data.products ?? [];

      
      if (searchQuery.trim() && selectedCategory !== "all") {
        productList = productList.filter(
          (product) => product.category === selectedCategory
        );
      } else {
        setTotalProducts(data.total ?? productList.length);
      }


      if (sortField) {
        productList = productList.slice().sort((a, b) => {
          const aValue = a[sortField];
          const bValue = b[sortField];
          if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
          if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
          return 0;
        });
      }

      setIsLoading(false);
      return productList;
    },
    [searchQuery, selectedCategory, itemsPerPage, sortField, sortDirection]
  );

  useEffect(() => {
    let aborted = false;
    const controller = new AbortController();

    (async () => {
      try {
        isLoadingLocked.current = true;
        setCurrentPage(1);
        setProducts([]);
        setTotalProducts(0);
        setErrorMessage(null);

        const firstPage = await fetchProducts(1, controller.signal);
        if (!aborted) {
          setProducts(firstPage);
          if (!searchQuery.trim() || selectedCategory === "all") {
       
          } else if (totalProducts === 0) {
            
            setTotalProducts(firstPage.length);
          }
        }
      } catch (error: any) {
        if (!aborted && error.name !== "AbortError") {
          setErrorMessage(error.message || "Error loading products");
        }
      } finally {
        isLoadingLocked.current = false;
        setIsLoading(false);
      }
    })();

    return () => {
      aborted = true;
      controller.abort();
    };
  }, [fetchProducts, refreshSignal, searchQuery, selectedCategory]);

 
  useEffect(() => {
    if (!useInfiniteScroll) return;

    const sentinel = document.getElementById("scroll-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      async (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) return;
        if (isLoadingLocked.current) return;
        if (!hasMoreProducts) return;

        try {
          isLoadingLocked.current = true;
          const nextPage = currentPage + 1;
          const moreProducts = await fetchProducts(nextPage);
          setCurrentPage(nextPage);
          setProducts((prev) => [...prev, ...moreProducts]);
        } catch (error: any) {
          if (error.name !== "AbortError") {
            setErrorMessage(error.message || "Error loading more products");
          }
        } finally {
          isLoadingLocked.current = false;
        }
      },
      { rootMargin: "800px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [useInfiniteScroll, currentPage, hasMoreProducts, fetchProducts]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(totalProducts / itemsPerPage)),
    [totalProducts, itemsPerPage]
  );

  return (
    <div>
      
      <div
        role="grid"
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        aria-busy={isLoading ? "true" : "false"}
      >
        {products.map((product) => (
          <ProductCard key={product.id} p={product} />
        ))}
      </div>

      
      {!isLoading && !errorMessage && products.length === 0 && (
        <div className="py-8 text-center text-sm text-gray-600">
          No products match your filters.
        </div>
      )}

    
      {errorMessage && (
        <div className="py-4 text-center text-red-600 text-sm">
          {errorMessage}
        </div>
      )}

      {/* Infinite scroll vs Pagination */}
      {useInfiniteScroll ? (
        <>
          <div id="scroll-sentinel" aria-hidden="true" />
          <InfiniteStatus loading={isLoading} hasMore={hasMoreProducts} />
        </>
      ) : (
        <nav
          className="mt-6 flex items-center justify-center gap-2"
          aria-label="Pagination"
        >
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            const isActive = pageNumber === currentPage;
            return (
              <button
                key={pageNumber}
                onClick={async () => {
                  if (isActive) return;
                  try {
                    isLoadingLocked.current = true;
                    setIsLoading(true);
                    const pageProducts = await fetchProducts(pageNumber);
                    setCurrentPage(pageNumber);
                    setProducts(pageProducts);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } catch (error: any) {
                    if (error.name !== "AbortError") {
                      setErrorMessage(error.message || "Error loading page");
                    }
                  } finally {
                    setIsLoading(false);
                    isLoadingLocked.current = false;
                  }
                }}
                className={`px-3 py-1 rounded-lg border ${
                  isActive ? "bg-gray-900 text-white" : "bg-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {pageNumber}
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}
