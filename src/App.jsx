import styles from "./App.module.css";
import { createEffect, createSignal } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import MainPage from "./components/main-page/MainPage";
import Home from "./components/home/Home";
import Categories from "./components/categories/Categories";

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
            <Route path="/" component={Home} />
            <Route path="/categories" component={Categories} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
