import styles from "./Header.module.css";
import logoWithoutText from "../../assets/logo_without_text.svg";
import notificationIcon from "../../assets/notification_icon.svg";

const Header = () => {
  return (
    <>
      <div class={styles.container}>
        <img src={notificationIcon} alt="notification icon" />
        <img src={logoWithoutText} alt="company logo" />
      </div>
    </>
  );
};

export default Header;
