Got it 👍 You want a **polished README.md** that looks professional and covers everything needed for submission, including where to put screenshots. I’ll keep it aligned with your assignment requirements. Since you decided **not to use Quicksand & Montserrat**, I’ll stick with the default Tailwind fonts.

Here’s a complete README you can drop into your project root:

---

# 📦 Product List (React + Vite + Tailwind)

A simple product listing page built with **React** and **Tailwind CSS**.
Features include searching, filtering by category, sorting by price/rating, and adding products to the cart (console log).

---

## 🚀 Features

* 📋 **Product Grid** – Displays all products in a clean responsive grid layout.
* 🔍 **Search** – Filter products by name.
* 🏷️ **Category Filter** – Filter products by category using a dropdown.
* ↕️ **Sorting Options** – Sort products by:

  * Price (Low → High, High → Low)
  * Rating (High → Low, Low → High)
* 🛒 **Add to Cart** – Each product has an *Add to Cart* button which logs the product name to the console.
* 📱 **Responsive UI** – Works well on mobile and desktop.
* 🎨 **Tailwind Styling** – Simple, modern design with reusable components.

---

## 🖼️ Screenshots (suggested)

Take these screenshots after running the project:

1. **Homepage (Full View)**
   → Show all products in a desktop layout.

2. **Responsive View (Mobile/Tablet)**
   → Resize browser to mobile width (grid should stack).

3. **Search in Action**
   → Type part of a product name and capture filtered results.

4. **Category Filter Applied**
   → Select a category and show only products in that category.

5. **Sorting by Price/Rating**
   → Capture products sorted by "Price: Low → High".

6. **Add to Cart Button Click**
   → Show browser console with the log `"Add to cart: Product Name"` after clicking the button.

*(Include these images in a `/screenshots` folder inside your repo and embed them here with markdown like `![Homepage Screenshot](screenshots/home.png)`.)*

---

## 📂 Project Structure

```
Entri_Elevate_FSD_Assignment10/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── FilterBar.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProductGrid.jsx
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.cjs
├── postcss.config.cjs
├── package.json
└── README.md
```

---

## ⚙️ Installation & Running

1. Clone the repo:

```bash
git clone https://github.com/rovxn/Entri_Elevate_FSD_Assignment10.git
cd Entri_Elevate_FSD_Assignment10
```

2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm run dev
```

4. Open the URL shown in terminal (e.g. `http://localhost:5173`).

---

## 📝 Notes

* Product data is defined in `src/data/products.js`.
* *Add to Cart* currently just logs the product name to the console for simplicity (as per assignment instructions).
* Styling is done entirely with **Tailwind CSS** for responsiveness.
