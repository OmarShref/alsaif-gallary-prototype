import styles from "./App.module.css";
import { createEffect, createSignal } from "solid-js";
import { Routes, Route, Navigate } from "@solidjs/router";
import MainPage from "./components/main-page/MainPage";
import Home from "./components/home/Home";
import Categories from "./components/categories/Categories";
import Cart from "./components/cart/Cart";
import Offers from "./components/offers/Offers";
import Account from "./components/account/Account";

export const [language, setLanguage] = createSignal("ar");
function App() {
  // change layout direction according to language selected
  createEffect(() => {
    if (language() === "en") {
      document.documentElement.style.setProperty("--layout-direction", "ltr");
    } else if (language() === "ar") {
      document.documentElement.style.setProperty("--layout-direction", "rtl");
    } else {
      document.documentElement.style.setProperty("--layout-direction", "rtl");
    }
  });
  return (
    <>
      <div class={styles.App}>
        <Routes>
          <Route path="/" component={MainPage}>
            <Route path="/" element={<Navigate href="/home" />} />
            <Route path="/home" component={Home} />
            <Route path="/categories" component={Categories} />
            <Route path="/cart" component={Cart} />
            <Route path="/offers" component={Offers} />
            <Route path="/account" component={Account} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
