import styles from "./NavigationBar.module.css";
import { A } from "@solidjs/router";
import { Show, createSignal, onMount } from "solid-js";
import homeIcon from "../../assets/home-icon.svg";
import homeIconActive from "../../assets/home-icon-active.svg";
import categoriesIcon from "../../assets/categories-icon.svg";
import categoriesIconAvtive from "../../assets/categories-icon-active.svg";
import shoppingCartIcon from "../../assets/shopping-cart-icon.svg";
import shoppingCartIconAvtive from "../../assets/shopping-cart-icon-active.svg";
import offersIcon from "../../assets/offers-icon.svg";
import offersIconActive from "../../assets/offers-icon-active.svg";
import profileIcon from "../../assets/profile-icon.svg";
import profileIconAvtive from "../../assets/profile-icon-active.svg";

const NavigationBar = () => {
  // signals to set links appearance
  const [profileIsSelected, setProfileIsSelected] = createSignal(false);
  const [offersIsSelected, setOffersIsSelected] = createSignal(false);
  const [shoppingCartIsSelected, setShoppingCartIsSelected] =
    createSignal(true);
  const [categoriesIsSelected, setCategoriesIsSelected] = createSignal(false);
  const [homeIsSelected, setHomeIsSelected] = createSignal(false);
  onMount(() => {
    // get the moving span
    const activeIndicator = document.getElementById(
      `${styles.active_indicator}`
    );
    // set span moving according to every link
    [...document.getElementsByClassName(`${styles.grid_col}`)].map(
      (link, i) => {
        link.addEventListener("click", () => {
          activeIndicator.style.left = `calc(${i}*100%)`;
        });
      }
    );
  });
  return (
    <div class={styles.container}>
      <div class={styles.active_indicator_container}>
        <div class={styles.active_indicator_grid_col}>
          <span id={styles.active_indicator}></span>
        </div>
        <div class={styles.active_indicator_grid_col}></div>
        <div class={styles.active_indicator_grid_col}></div>
        <div class={styles.active_indicator_grid_col}></div>
        <div class={styles.active_indicator_grid_col}></div>
      </div>
      {/* profile link  */}
      <div
        class={styles.grid_col}
        onclick={() => {
          setProfileIsSelected(true);
          setCategoriesIsSelected(false);
          setShoppingCartIsSelected(false);
          setOffersIsSelected(false);
          setHomeIsSelected(false);
        }}
      >
        <A
          href="#"
          class={`${profileIsSelected() && styles.active_link} ${
            styles.nav_link
          }`}
        >
          <Show
            when={profileIsSelected()}
            fallback={<img src={profileIcon} alt="profile icon" />}
          >
            {/* <img src={profileIconAvtive} alt="profile icon" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#be1e2d"
              class={`w-6 h-6`}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </Show>
          <span>حسابي</span>
        </A>
      </div>
      {/* offes link  */}
      <div
        class={styles.grid_col}
        onclick={() => {
          setProfileIsSelected(false);
          setOffersIsSelected(true);
          setCategoriesIsSelected(false);
          setShoppingCartIsSelected(false);
          setHomeIsSelected(false);
        }}
      >
        <A
          href="#"
          class={`${offersIsSelected() && styles.active_link} ${
            styles.nav_link
          }`}
        >
          <Show
            when={offersIsSelected()}
            fallback={<img src={offersIcon} alt="offers icon" />}
          >
            <img src={offersIconActive} alt="offers icon" />
          </Show>
          <span>العروض</span>
        </A>
      </div>
      {/* shopping cart link  */}
      <div
        class={styles.grid_col}
        onclick={() => {
          setProfileIsSelected(false);
          setCategoriesIsSelected(false);
          setShoppingCartIsSelected(true);
          setOffersIsSelected(false);
          setHomeIsSelected(false);
        }}
      >
        <A
          href="#"
          class={`${shoppingCartIsSelected() && styles.active_link} ${
            styles.nav_link
          }`}
        >
          <Show
            when={shoppingCartIsSelected()}
            fallback={<img src={shoppingCartIcon} alt="shopping cart icon" />}
          >
            <img src={shoppingCartIconAvtive} alt="shopping cart icon" />
          </Show>
          <span>عربة التسوق</span>
        </A>
      </div>
      {/* categories link  */}
      <div
        class={styles.grid_col}
        onclick={() => {
          setProfileIsSelected(false);
          setShoppingCartIsSelected(false);
          setOffersIsSelected(false);
          setCategoriesIsSelected(true);
          setHomeIsSelected(false);
        }}
      >
        <A
          href="#"
          class={`${categoriesIsSelected() && styles.active_link} ${
            styles.nav_link
          }`}
        >
          <Show
            when={categoriesIsSelected()}
            fallback={<img src={categoriesIcon} alt="categories icon" />}
          >
            <img src={categoriesIconAvtive} alt="categories icon" />
          </Show>
          <span>الفئات</span>
        </A>
      </div>
      {/* home link  */}
      <div
        class={styles.grid_col}
        onclick={() => {
          setProfileIsSelected(false);
          setCategoriesIsSelected(false);
          setShoppingCartIsSelected(false);
          setOffersIsSelected(false);
          setHomeIsSelected(true);
        }}
      >
        <A
          href="#"
          class={`${homeIsSelected() && styles.active_link} ${styles.nav_link}`}
        >
          <Show
            when={homeIsSelected()}
            fallback={<img src={homeIcon} alt="home icon" />}
          >
            <img src={homeIconActive} alt="home icon" />
          </Show>
          <span>الرئيسية</span>
        </A>
      </div>
    </div>
  );
};

export default NavigationBar;
