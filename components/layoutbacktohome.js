import styles from "./layout.module.css";
import Link from "next/link";

export const BackToHome = ({ flag }) => {
  let compo = <></>;
  if (!flag) {
    compo = (
      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    );
  }

  return <>{compo}</>;
};

export default BackToHome;
