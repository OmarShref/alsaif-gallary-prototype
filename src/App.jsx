import styles from "./App.module.css";
import CountryLanguageSelect from "./components/country-language-select/CountryLanguageSelect";

function App() {
  return (
    <>
      <div class={styles.App}>
        <CountryLanguageSelect />
      </div>
    </>
  );
}

export default App;
