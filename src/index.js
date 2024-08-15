import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Pão com azeite de oliva italiano e manjericão",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomate e  mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Espinafre",
    ingredients: "Tomate, mozarella, espinafre e ricota",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomate, mozarella, cogumelos e cebola",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Pepperoni",
    ingredients: "Tomate, mozarella e  pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Presunto",
    ingredients: "Tomate, mozarella, presunto e queijo burrata",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>React Pizza</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Nosso menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}Estamos funcionando!!!
    </footer>
  );
}

function Pizza() {
  return (
    <div>
      <h3>Pizza Spinaci</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci"></img>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
