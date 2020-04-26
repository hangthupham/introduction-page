import { nanoid } from "nanoid";
import React from "react";
import styles from "./styles.scss";
import { FooterItemMenu } from "./footer-item-menu";

export const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <div id="foot-menu" className={styles.footMenu}>
        <ul>
          <FooterItemMenu key={nanoid()} href="#wrapper" content="TOP" />
          <FooterItemMenu key={nanoid()} href="#wrapper" content="レビューの理念" />
          <FooterItemMenu
            key={nanoid()}
            href="https://rev-stamp.com/"
            content="デジタルスタンプ事業"
          />
          <FooterItemMenu key={nanoid()} href="#grid-3" content="業務領域" />
          <FooterItemMenu key={nanoid()} href="#wrapper" content="会社概要" />
          <FooterItemMenu key={nanoid()} href="#wrapper" content="採用情報" />
          <FooterItemMenu key={nanoid()} href="#wrapper" content="お問い合わせ" />
        </ul>
      </div>
      <div id="footer" className={styles.footer}>
        <p>&copy;re-vue LLC.</p>
      </div>
    </React.Fragment>
  );
};
