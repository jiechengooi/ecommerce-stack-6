import { BsInstagram, BsTwitter } from "react-icons/bs";
import styles from "./index.module.css";

const Footer = () => (
  <footer className={styles.container}>
    <p>&copy; 2022 CoffeeStore. All Rights Reserved</p>
    <p>
      <BsInstagram size={20} /> <BsTwitter size={20} />
    </p>
  </footer>
);

export default Footer;
