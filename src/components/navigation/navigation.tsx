import NavigationItem from "./navigation-item/navigation-item";
import styles from "./styles.scss";
import Logo from "~/assets/images/logo.png";

const Navigation: React.FC = () => {
  return (
    <div id="header" className={styles.header}>
      <ul id="navi" className={styles.navi}>
        <NavigationItem srcImg={Logo} altImg="レビュー合同会社(re-vue LLC.)" />
        <NavigationItem href="#wrapper">PHILOSOPHY</NavigationItem>
        <NavigationItem href="#grid-2">DIGITAL STAMP</NavigationItem>
        <NavigationItem href="#">BUSINESS FIELD</NavigationItem>
        <NavigationItem href="#grid-9">NEWS</NavigationItem>
        <NavigationItem href="#">COMPANY</NavigationItem>
        <NavigationItem href="#">RECRUIT</NavigationItem>
        <NavigationItem href="#">CONTACT</NavigationItem>
      </ul>
    </div>
  );
};

export default Navigation;
