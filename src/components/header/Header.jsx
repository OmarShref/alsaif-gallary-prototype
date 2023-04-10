import styles from "./Header.module.css";
import logoWithoutText from "../../assets/logo_without_text.svg";
import notificationIcon from "../../assets/notification_icon.svg";
import searchIcon from "../../assets/search_icon.svg";

const Header = () => {
  return (
    <>
      <div class={styles.container}>
        <img
          src={notificationIcon}
          alt="notification icon"
          class={styles.notification_icon}
        />
        <div class={styles.search_box}>
          <input type="text" dir="auto" placeholder="وش اللي في خاطرك" />
          <img src={searchIcon} alt="search icon" class={styles.search_icon} />
        </div>
        <img src={logoWithoutText} alt="company logo" class={styles.logo} />
      </div>
    </>
  );
};

export default Header;
