import styles from "./MainPage.module.css";
import { Outlet } from "@solidjs/router";
import Header from "../header/Header";
import NavigationBar from "../navigation-bar/NavigationBar";

const MainPage = () => {
  return (
    <>
      <div class={styles.container}>
        <Header />
        <Outlet />
        <NavigationBar />
      </div>
    </>
  );
};

export default MainPage;
