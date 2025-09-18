# 🛍️ Productify  

> **Productify** – A modern e-commerce web app built with **Next.js** and **TypeScript** that allows users to browse, filter, and purchase products seamlessly. Powered by the [DummyJSON API](https://dummyjson.com/products).  

---

## 📖 Table of Contents  

- [Overview](#-overview)  
- [Features](#-features)  
- [Tech Stack](#-tech-stack)  
- [Project Structure](#-project-structure)  
- [Getting Started](#-getting-started)  
- [Usage](#-usage)  
- [Demo Screenshots](#-demo-screenshots)  
- [Future Improvements](#-future-improvements)  
- [Contributing](#-contributing)  
- [Author](#-author)  
- [License](#-license)  

---

## 📌 Overview  

**Productify** is designed as a lightweight yet powerful **e-commerce platform prototype**.  
It fetches real products from the **DummyJSON API** and provides an interactive shopping experience with filtering, sorting, cart persistence, and a checkout flow.  

This project is perfect for learning:  

- How to integrate APIs in Next.js  
- How to manage state with Redux Toolkit  
- How to build a reusable and scalable component structure  
- How to persist data (cart) using LocalStorage  

---

## 🚀 Features  

- **Dynamic Product Catalog** – Fetches products from DummyJSON API in real-time  
- **Filtering & Sorting** – Filter by categories and sort by name or price  
- **Infinite Scroll (Optional)** – Load more products as you scroll  
- **Cart Management** – Add, remove, and update quantities of items  
- **Redux statemanagement** – Keeps cart data even after reload  
- **Checkout Page** – Summarize selected products before purchase  
- **Type Safety** – Full TypeScript integration  
- **Scalable Architecture** – Modular and reusable components  

---

## 🛠 Tech Stack  

- **Framework**: [Next.js](https://nextjs.org/)  
- **Language**: [TypeScript](https://www.typescriptlang.org/)  
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)  
- **API**: [DummyJSON Products API](https://dummyjson.com/products)  
- **Styling**: CSS / TailwindCSS (optional depending on setup)  
- **Persistence**: Redux  

---

## 📂 Project Structure  

```bash
productify/
├── components/        # Reusable UI components (Filters, SortBar, ProductCard, etc.)
├── pages/             # Next.js pages (Home, Products, Checkout, etc.)
│   ├── index.tsx      # Homepage
│   ├── products/      # Products page with filtering & sorting
│   └── checkout.tsx   # Checkout page
├── store/             # Redux slices for cart and state management
│   └── cartSlice.ts   # Handles cart actions (add, remove, hydrate, save)
├── interface.ts       # TypeScript interfaces & types
├── public/            # Static assets
├── styles/            # Global styles
├── package.json       # Dependencies & scripts
└── README.md          # Documentation
```

---

## ⚙️ Getting Started  

### 1️⃣ Clone the repository  

```bash
git clone https://github.com/Hillary-Robert/alx-project-nexus.git
cd productify
```  

### 2️⃣ Install dependencies  

```bash
npm install
```  

### 3️⃣ Run development server  

```bash
npm run dev
# or
yarn dev
```  

App will be live at 👉 [http://localhost:3000](http://localhost:3000)  

---

## 🖥 Usage  

### Browse Products  
- The homepage lists products from the DummyJSON API.  

### Filter & Sort  
- Use the **Filters** panel to search or filter by category.  
- Use the **SortBar** to sort products by name or price.  

### Cart Management  
- Add products to the cart from product cards.  
- Update item quantities or remove items.  
- Cart state is **saved in localStorage**.  

### Checkout  
- Navigate to `/checkout` to view your cart summary.  
- *(Future: Integrate payment processing).*  

---


## 🔮 Future Improvements  

- 🔑 Authentication (login/register system)  
- 🛍️ Order history & profile dashboard  
- 💳 Payment gateway integration (Stripe, PayPal)  
- 🌐 Multi-language & multi-currency support  
- 📱 Improved responsive design with animations  

---



## 👨‍💻 Author  

**Hillary Robert**  
- GitHub: [Hillary-Robert](https://github.com/Hillary-Robert)  
- LinkedIn: [hillaryrobert30 ](https://www.linkedin.com/in/hillaryrobert30/) 

---
