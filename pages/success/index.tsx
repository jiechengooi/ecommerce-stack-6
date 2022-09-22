import { NextPage } from "next";
import Link from "next/link";

import styles from "./index.module.css";

const Success: NextPage = () => (
  <div className={styles.container}>
    <main>
      <div>
        <h1>Thank you for your purchase</h1>
        <p>Check your email inbox for the receipt.</p>
      </div>
      <Link href="/">Continue shopping</Link>
    </main>
  </div>
);

export default Success;
