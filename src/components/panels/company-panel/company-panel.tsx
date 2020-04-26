import styles from "./styles.scss";
import CloseIcon from "~/assets/images/close.png";
import { nanoid } from "nanoid";

interface ComanyPanelPropTypes {
  visible: boolean;
  onChangeVisible: Function;
}

interface AddressItem {
  position: string;
  address: string;
}

interface CompanyPropTypes {
  companyName: string;
  dateEstablished: string;
  representative: string;
  numOfEmployees: number;
  address: AddressItem[];
  bussinessContent: string[];
  relatedCompany: string;
  relatedDate: string;
  relatedLink: string;
}

const companyData = {
  companyName: "re-vue 合同会社",
  dateEstablished: "2015年2月9日",
  representative: "津田柊太朗",
  numOfEmployees: 8,
  address: [
    {
      position: "本社",
      address: "〒105-0014 東京都港区芝2丁目26-6",
    },
    {
      position: "シアトル・ブランチ(アメリカ)",
      address: "P.O.Box 562 Medina, WA",
    },
    {
      position: "ブンタウ・ブランチ(ベトナム)",
      address: "Lapen Center, Phuong 9, Thanh pho Vung Tau, Ba Ria",
    },
  ],
  bussinessContent: [
    "WEBサービス開発",
    "プロモーション事業",
    "モバイルアプリ開発",
    "WEBコンサルティング事業",
    "グッズ開発・イベント事業　など",
  ],
  relatedCompany: "株式会社フィデア",
  relatedDate: "2011年創業",
  relatedLink: "https://fidea.in/",
};

export const CompanyPanel: React.FC<ComanyPanelPropTypes> = ({ visible, onChangeVisible }) => {
  const visibleStyle = !visible
    ? { marginTop: "100vh", display: "none" }
    : { marginTop: "0px", display: "block" };
  return (
    <div
      style={visibleStyle}
      className={[styles.panels, styles.company, styles.slideInUp].join(" ")}
      id="company"
    >
      <div className={styles.closeAreaTop}>
        <a
          className="close over"
          onClick={() => {
            const company = document.getElementById("company");
            company.classList.remove(styles.slideInUp);
            company.classList.add(styles.slideOutDown);
            setTimeout(() => {
              onChangeVisible(false);
            }, 600);
          }}
        >
          <img src={CloseIcon} alt="Closed button" />
        </a>
      </div>
      <h2>COMPANY</h2>

      <h3>会社概要</h3>

      <div id="company-container" className={styles.companyContainer}>
        <div className={styles.companyGrids}>
          <dl>
            <dt>社名</dt>
            <dd>{companyData.companyName}</dd>
            <dt>創業日</dt>
            <dd>{companyData.dateEstablished}</dd>
            <dt>代表者</dt>
            <dd>{companyData.representative}</dd>
            <dt>従業員数</dt>
            <dd>{companyData.numOfEmployees}名(役員含む)</dd>
            <dt>住所</dt>
            <dd>
              {companyData.address.length > 0 &&
                companyData.address.map((item) => {
                  return (
                    <span key={nanoid()}>
                      ■{item.position}：
                      <br />
                      {item.address}
                    </span>
                  );
                })}
            </dd>
            <dt>事業内容</dt>
            <dd>
              {companyData.bussinessContent.length > 0 &&
                companyData.bussinessContent.map((item, index) => {
                  if (index === 0) {
                    return <span key={nanoid()}>{item}</span>;
                  }
                  return (
                    <span key={nanoid()}>
                      <br />
                      {item}
                    </span>
                  );
                })}
            </dd>
            <dt>関連会社</dt>
            <dd>
              <a href={companyData.relatedLink} target="_blank" rel="noreferrer">
                {companyData.relatedCompany}
              </a>
              ({companyData.relatedDate})
            </dd>
          </dl>
        </div>

        <div className={[styles.companyGrids, styles.map].join(" ")} id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.062454023083!2d139.74999961525802!3d35.650832880201335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bb7d418c863%3A0x2c1e6f80b6336272!2z44CSMTA1LTAwMTQg5p2x5Lqs6YO95riv5Yy66Iqd77yS5LiB55uu77yS77yW4oiS77yW!5e0!3m2!1sja!2sjp!4v1551844078903"
            width="450"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className={styles.closeAreaBottom}>
        <a
          className="close over"
          onClick={() => {
            const company = document.getElementById("company");
            company.classList.remove(styles.slideInUp);
            company.classList.add(styles.slideOutDown);
            setTimeout(() => {
              onChangeVisible(false);
            }, 600);
          }}
        >
          <img src={CloseIcon} alt="Closed button" />
        </a>
      </div>
    </div>
  );
};
