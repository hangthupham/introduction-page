import React, { useState } from "react";
import { nanoid } from "nanoid";

import styles from "./styles.scss";

import imgGrid1 from "~/assets/images/top_1.jpg";
import imgGrid2 from "~/assets/images/top_2.jpg";
import imgGrid3 from "~/assets/images/top_3.jpg";
import imgGrid4 from "~/assets/images/top_4.jpg";
import imgGrid5 from "~/assets/images/top_5.jpg";
import imgGrid6 from "~/assets/images/top_6.jpg";
import imgGrid7 from "~/assets/images/top_7.jpg";
import imgGrid8 from "~/assets/images/top_8.jpg";
import imgGrid9 from "~/assets/images/top_9.jpg";
import imgGrid10 from "~/assets/images/top_10.jpg";
import imgGrid11 from "~/assets/images/top_11.jpg";

const Navigation = dynamic(
  () => import("../../components/navigation/navigation").then((m) => m.default),
  {
    ssr: false,
  }
);

const GridLittle = dynamic(
  () => import("../../components/grid-title/grid-title").then((m) => m.GridLittle),
  {
    ssr: false,
  }
);

const NewMessages = dynamic(
  () => import("../../components/new-areas/new-areas").then((m) => m.NewMessages),
  {
    ssr: false,
  }
);

import { newsData } from "../../common/mockdata";

const GridWithImageAndTitle = dynamic(
  () =>
    import("../../components/grid-image-title/grid-image-title").then(
      (m) => m.GridWithImageAndTitle
    ),
  {
    ssr: false,
  }
);

const Footer = dynamic(() => import("../../components/footer/footer").then((m) => m.Footer), {
  ssr: false,
});

const IdealPanel = dynamic(
  () => import("../../components/panels/ideal-panel").then((m) => m.IdealPanel),
  {
    ssr: false,
  }
);

import { CompanyPanel } from "../../components/panels/company-panel";
import { RecruitPanel } from "../../components/panels/recruit-panel/recruit-panel";
import { ContactPanel } from "../../components/panels/contact-panel/contact-panel";
import dynamic from "next/dynamic";

export const HomePage: React.FC = () => {
  const [visibleIdeal, setVisibleIdeal] = useState(false);
  const [visibleCompany, setVisibleCompany] = useState(false);
  const [visibleRecruit, setVisibleRecruit] = useState(false);
  const [visibleContact, setVisibleContact] = useState(false);
  return (
    <div key={nanoid().toString()}>
      <div className={styles.wrapper} id="wrapper">
        <Navigation />
        <div id="top-menu" className={styles.topMenu}>
          {/* Container */}
          <div id="container" className={styles.container}>
            {/* first card */}
            <div
              style={{ backgroundImage: `url(${imgGrid1})`, backgroundSize: "cover" }}
              className={[styles.grid, styles.grid1, styles.fadeIn].join(" ")}
              id="grid-1"
              onClick={() => setVisibleIdeal(true)}
            >
              <a>
                <h2>PHILOSOPHY</h2>

                <h3>
                  レビューが大切にする
                  <br className={styles.pcBr} />
                  3つのこと
                </h3>

                <p>
                  1 LEVERAGE DIVERSITY
                  <br />
                  2 BREAKTHROUGH WITH IDEA
                  <br />3 HAVE OPTIONS AVAILABLE
                </p>
              </a>
            </div>
            {/* second card */}
            <div className={[styles.grid, styles.grid2, styles.fadeIn].join(" ")} id="grid-2">
              <a href="https://rev-stamp.com/" target="_blank" rel="noreferrer">
                <div className={styles.stitle}>
                  <h2>
                    DIGITAL STAMP
                    <span className={styles.titleSmall}>デジタルスタンプ事業「レヴスタンプ」</span>
                  </h2>
                </div>
                <div
                  style={{ backgroundImage: `url(${imgGrid2})`, backgroundSize: "cover" }}
                  className={styles.topTiles0}
                ></div>
              </a>
            </div>

            {/* 6 litle card  */}
            <GridLittle
              classNameGrid={styles.grid3}
              href="#"
              idDiv="grid-3"
              imgUrl={imgGrid3}
              span="Webサービス開発"
              title="BUSINESS FIELD 1"
            />
            <GridLittle
              classNameGrid={styles.grid4}
              href="#"
              idDiv="grid-4"
              imgUrl={imgGrid4}
              span="プロモーション事業"
              title="BUSINESS FIELD 2"
            />
            <GridLittle
              classNameGrid={styles.grid5}
              href="#"
              idDiv="grid-5"
              imgUrl={imgGrid5}
              span="モバイルアプリ開発"
              title="BUSINESS FIELD 3"
            />
            <GridLittle
              classNameGrid={styles.grid6}
              href="#"
              idDiv="grid-6"
              imgUrl={imgGrid6}
              span="Webコンサルティング事業"
              title="BUSINESS FIELD 4"
            />
            <GridLittle
              classNameGrid={styles.grid7}
              href="#"
              idDiv="grid-7"
              imgUrl={imgGrid7}
              span="Webコンサルティング事業"
              title="BUSINESS FIELD 5"
            />
            <GridLittle
              classNameGrid={styles.grid8}
              href="#"
              idDiv="grid-8"
              imgUrl={imgGrid8}
              span="その他事業"
              title="BUSINESS FIELD 6"
            />

            {/* News areas */}
            <NewMessages data={newsData} />

            {/* company - contact - recruit */}
            <GridWithImageAndTitle
              classNameStyles={styles.grid10}
              imgUrl={imgGrid9}
              smallTitle="会社概要"
              title="COMPANY"
              styleImages={styles.topTiles2}
              handleClick={() => setVisibleCompany(true)}
            />

            <GridWithImageAndTitle
              classNameStyles={styles.grid11}
              imgUrl={imgGrid10}
              smallTitle="お問い合わせ"
              title="CONTACT"
              styleImages={styles.topTiles3}
              handleClick={() => setVisibleContact(true)}
            />
            <GridWithImageAndTitle
              classNameStyles={styles.grid12}
              imgUrl={imgGrid11}
              smallTitle="採用情報"
              title="RECRUIT"
              styleImages={styles.topTiles3}
              handleClick={() => setVisibleRecruit(true)}
            />
          </div>
          {/* End grid*/}
        </div>
        {/* footer */}
        <Footer />
      </div>
      <IdealPanel
        key={nanoid()}
        visible={visibleIdeal}
        onChangeVisible={(valueVisible) => setVisibleIdeal(valueVisible)}
      />
      <CompanyPanel
        key={nanoid()}
        visible={visibleCompany}
        onChangeVisible={(valueVisible) => setVisibleCompany(valueVisible)}
      />
      <RecruitPanel
        key={nanoid()}
        visible={visibleRecruit}
        onChangeVisible={(valueVisible) => setVisibleRecruit(valueVisible)}
      />
      <ContactPanel
        key={nanoid()}
        visible={visibleContact}
        onChangeVisible={(valueVisible) => setVisibleContact(valueVisible)}
      />
    </div>
  );
};
