import styles from "./MainPage.module.css";
import { Route, Routes } from "@solidjs/router";
import Header from "../header/Header";
import NavigationBar from "../navigation-bar/NavigationBar";
import Home from "../home/Home";

const MainPage = () => {
  return (
    <>
      <div class={styles.container}>
        <Header />
        <Routes>
          <Route path="/" component={Home} />
        </Routes>
        <NavigationBar />
      </div>
    </>
  );
};

export default MainPage;
