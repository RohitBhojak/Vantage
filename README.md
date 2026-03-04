# [Vantage: E-Commerce Shopping Cart](https://vantage-teal.vercel.app/)

<img width="100%" alt="Screenshot 2026-03-04 at 9 58 13 PM" src="https://github.com/user-attachments/assets/091fe851-5c9f-4ce7-98b7-6c1690ce26f5" />

> **Live Link:** [https://vantage-teal.vercel.app/](https://vantage-teal.vercel.app/)

Vantage is a high-performance, responsive e-commerce front-end designed to simulate a real-world shopping experience. Built with a focus on robust state management and thorough testing, the application dynamically fetches data from the FakeStore API and provides users with a seamless, dark-themed interface for browsing products and managing their cart.

---

## 🚀 Features

### **Dynamic Product Catalog**

- **Live Data Fetching**: Products are pulled directly from the FakeStore API, ensuring a realistic and varied inventory.
- **Detailed Listings**: Each product card displays high-quality images, titles, pricing, and dynamic star ratings based on user reviews.
- **One-Click Add**: Instantly add items to your cart directly from the product grid.

### **Comprehensive Cart Management**

- **Interactive Cart Items**: Easily adjust quantities using increment/decrement buttons or remove items entirely.
- **Real-Time Order Summary**: The checkout panel instantly calculates and updates the subtotal, applies dynamic discounts, adds shipping fees, and outputs the final total amount.
- **Visual Feedback**: The cart badge in the navigation bar stays perfectly synced with the number of unique items selected.

### **Test-Driven Reliability**

- **Extensive Test Coverage**: Backed by a robust test suite with 59 passing tests across 12 files.
- **Component & Integration Testing**: Thoroughly tested using Vitest and React Testing Library to ensure UI components, reducers, and pages render and behave exactly as expected.

### **Responsive & Intuitive UI**

- **Modern Dark Theme**: A sleek, accessible dark-mode design that highlights product imagery.
- **Client-Side Routing**: Smooth, page-reload-free navigation between the Home, Products, and Cart views.

---

## 🛠️ Technical Highlights

- **Modular Component Architecture**: Highly decoupled UI components (Modals, NumberInputs) to ensure easy maintenance and scalability across the app.
- **Advanced State Management**: Utilizes React Hooks and custom Reducers (`src/reducers`) to handle complex cart logic, quantity mutations, and price calculations efficiently.
- **Test-First Approach**: Built with reliability in mind, utilizing Vitest for lightning-fast unit testing and RTL for user-centric DOM testing.
- **Vite Tooling**: Blazing fast local development server and optimized production builds.

---

## 📸 Screenshots

<div align="center">
<img width="45%"  alt="Screenshot 2026-03-04 at 10 16 26 PM" src="https://github.com/user-attachments/assets/3cf32332-f024-4722-a7ec-95c78e008d78" />
<img width="45%"  alt="Screenshot 2026-03-04 at 10 16 41 PM" src="https://github.com/user-attachments/assets/79eed4a6-a55e-4f39-b610-04d23c9a79d6" />
<img width="45%"  alt="Screenshot 2026-03-04 at 10 16 33 PM" src="https://github.com/user-attachments/assets/e2e094a0-7f7a-450a-bd46-fdc896b21064" />
<img width="45%" alt="Screenshot 2026-03-04 at 10 22 11 PM" src="https://github.com/user-attachments/assets/51a0450c-f038-4fdc-9e06-5a49671944fd" />
</div>


---


## 🏗️ Built With

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
