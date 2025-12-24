import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.name}>
        <span>{"Gustavo "}</span>
        <span className={styles.secondName}>{"Jordão"}</span>
        <span className={styles.title}>{"Engineering Lead"}</span>
      </h1>
      <hr className={styles.line} aria-hidden="true" />
      <nav className={styles.headerLowerLine}>
        <address className={styles.email}>
          <a href="mailto:jordao.f.gustavo@gmail.com">{"jordao.f.gustavo@gmail.com"}</a>
        </address>
        <span className={styles.separator} aria-hidden="true"></span>
        <a
          href={"https://www.linkedin.com/in/gjord%C3%A3o/"}
          rel={"noopener noreferrer"}
          className={styles.link}
          target={"_blank"}
          aria-label="LinkedIn profile"
        >
          <Image
            src="/images/ic_linkedin.svg"
            alt=""
            width={15}
            height={15}
            className={styles.icon}
            aria-hidden="true"
          />
          /in/gjordão
        </a>
        <span className={styles.separator} aria-hidden="true"></span>
        <a
          href={"https://github.com/gjordao"}
          rel={"noopener noreferrer"}
          className={styles.link}
          target={"_blank"}
          aria-label="GitHub profile"
        >
          <Image
            src="/images/ic_github.svg"
            alt=""
            width={15}
            height={15}
            className={styles.icon}
            aria-hidden="true"
          />
          gjordao
        </a>
      </nav>
    </header>
  );
}
