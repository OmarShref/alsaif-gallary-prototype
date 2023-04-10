import styles from "./CountryLanguageSelect.module.css";
import logo from "../../assets/logo.svg";
import saFlag from "../../assets/Flag_of_Saudi_Arabia_(state).svg.png";
import uaFlag from "../../assets/Flag_of_the_United_Arab_Emirates.svg.png";
import kuFlag from "../../assets/Flag_of_Kuwait.svg.png";

const CountryLanguageSelect = () => {
  return (
    <>
      <div class={styles.container}>
        <div class={styles.contents}>
          <img src={logo} alt="comoany logo" class={styles.logo} />
          <div class={styles.devider}>
            <div class={styles.line}></div>
            <p>Country</p>
            <div class={styles.line}></div>
            <p>البلد</p>
            <div class={styles.line}></div>
          </div>
          <div class={styles.countries}>
            <div class={styles.country}>
              <i
                class={"fa-solid fa-location-pin " + styles.selectedCountry}
              ></i>
              <i class="fa-solid fa-location-pin"></i>
              <img src={kuFlag} alt="" />
            </div>
            <div class={styles.country}>
              {/* <i
                class={"fa-solid fa-location-pin " + styles.selectedCountry}
              ></i> */}
              <i class="fa-solid fa-location-pin"></i>
              <img src={uaFlag} alt="" />
            </div>
            <div class={styles.country}>
              {/* <i
                class={"fa-solid fa-location-pin " + styles.selectedCountry}
              ></i> */}
              <i class="fa-solid fa-location-pin"></i>
              <img src={saFlag} alt="" />
            </div>
          </div>
          <div class={styles.devider}>
            <div class={styles.line}></div>
            <p>Language</p>
            <div class={styles.line}></div>
            <p>اللغة</p>
            <div class={styles.line}></div>
          </div>
          <div class={styles.languages}>
            <button>English</button>
            <button>العربية</button>
          </div>
        </div>
        <div class={styles.forward}>
          <i class="fa-solid fa-angles-right"></i>
          <span>تخطي</span>
        </div>
      </div>
    </>
  );
};

export default CountryLanguageSelect;
