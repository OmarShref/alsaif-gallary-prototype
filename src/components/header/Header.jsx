import styles from "./Header.module.css";
import logoWithoutText from "../../assets/logo_without_text.svg";

const Header = () => {
  return (
    <>
      <div class={styles.container}>
        <img src={logoWithoutText} alt="company logo" class={styles.logo} />
        <div class={styles.search_box}>
          <input type="text" dir="auto" placeholder="وش اللي في خاطرك" />
          {/* search icon  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#939090"
            class={`w-6 h-6 ${styles.search_icon}`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        {/* notification icon  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.4"
          stroke="#646464"
          class={`w-6 h-6 ${styles.notification_icon}`}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
      </div>
    </>
  );
};

export default Header;
