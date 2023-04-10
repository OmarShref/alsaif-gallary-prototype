import styles from "./App.module.css";
import { Routes, Route } from "@solidjs/router";
import CountryLanguageSelect from "./components/country-language-select/CountryLanguageSelect";
import MainPage from "./components/main-page/MainPage";

function App() {
  return (
    <>
      <div class={styles.App}>
        <Routes>
          <Route path="/" component={CountryLanguageSelect} />
          <Route path="/main" component={MainPage} />
        </Routes>
      </div>
    </>
  );
}

export default App;
