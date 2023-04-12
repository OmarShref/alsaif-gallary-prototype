import styles from "./NavigationBar.module.css";
import { A } from "@solidjs/router";
import homeIcon from "../../assets/home-icon.svg";
import homeIconActive from "../../assets/home-icon-active.svg";
import categoriesIcon from "../../assets/categories-icon.svg";
import categoriesIconAvtive from "../../assets/categories-icon-active.svg";
import shoppingCartIcon from "../../assets/shopping-cart-icon.svg";
import shoppingCartIconAvtive from "../../assets/shopping-cart-icon-active.svg";
import offersIcon from "../../assets/offers-icon.svg";
import shoppingCartIconActive from "../../assets/offers-icon-active.svg";
import profileIcon from "../../assets/profile-icon.svg";
import profileIconAvtive from "../../assets/profile-icon-active.svg";

const NavigationBar = () => {
  return (
    <>
      <div class={styles.container}>
        <div class={styles.grid_col}>
          <A href="#">
            <img src={profileIcon} alt="home icon" />
            <span>حسابي</span>
          </A>
        </div>
        <div class={styles.grid_col}>
          <A href="#">
            <img src={offersIcon} alt="home icon" />
            <span>العروض</span>
          </A>
        </div>
        <div class={styles.grid_col}>
          <span class={styles.active_indicator}></span>
          <A href="#" class={styles.active_link}>
            <img src={shoppingCartIcon} alt="home icon" />
            <span>عربة التسوق</span>
          </A>
        </div>
        <div class={styles.grid_col}>
          <A href="#">
            <img src={categoriesIcon} alt="home icon" />
            <span>الفئات</span>
          </A>
        </div>
        <div class={styles.grid_col}>
          <A href="#">
            <img src={homeIcon} alt="home icon" />
            <span>الرئيسية</span>
          </A>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
