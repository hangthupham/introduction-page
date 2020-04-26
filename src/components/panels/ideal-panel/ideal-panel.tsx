import CloseImg from "~/assets/images/close.png";
import IdealImg1 from "~/assets/images/ideal_1.png";
import IdealImg2 from "~/assets/images/ideal_2.png";
import IdealImg3 from "~/assets/images/ideal_3.png";
import styles from "./styles.scss";
import { nanoid } from "nanoid";

interface IdealItemPropTypes {
  idItem: string;
  classNameStyles: string;
  imageUrl: string;
  title: string;
  h5PreTitle?: string;
  h5Title?: string;
  content: string;
}

export const IdealItem: React.FC<IdealItemPropTypes> = ({
  idItem,
  classNameStyles,
  imageUrl,
  title,
  h5PreTitle,
  h5Title,
  content,
}) => {
  return (
    <div className={[styles.idealGrids, classNameStyles].join(" ")} id={idItem}>
      <img src={imageUrl} alt="" />
      <h4>{title}</h4>
      <h5>
        {h5PreTitle}
        <br />
        {h5Title}
      </h5>
      <p>{content}</p>
    </div>
  );
};

interface IdealPanelPropTypes {
  visible: boolean;
  onChangeVisible: Function;
}

const idealItemData = [
  {
    idItem: "ideal-grid-1",
    title: "1 LEVERAGE DIVERSITY",
    h5PreTitle: "多様性が資源を",
    h5Title: "最適化する",
    content:
      "人はそれぞれ好きなことが違います。人はそれぞれ得意なことが違います。お互いの嗜好や長所を認め合うことで、限りのあるこの世の中で、画一的な社会では実現できなかった生産性や創造力を生み出せるとレビューは考えます。",
  },
  {
    idItem: "ideal-grid-2",
    title: "2 BREAKTHROUGH WITH IDEA",
    h5PreTitle: "アイデアいっぱいの人は",
    h5Title: "深刻化しない",
    content:
      "困難に直面したとき、不都合な状況に陥ったとき「アイデアで解決しよう」という気持ちを持ち続けたいと考えます。他者を責めたり、何かにはけ口を求めても、本質的な解決には結びつきません。アイデアを求めること自体が、内向きで閉塞的な状況から解放される、健全で最短の道であるとレビューは考えます。",
  },
  {
    idItem: "ideal-grid-2",
    title: "3 HAVE OPTIONS AVAILABLE",
    h5PreTitle: "選択肢を増やす",
    h5Title: "",
    content:
      "「選択の自由」は、個人のアイデンティティーを形成するために不可欠なものです。選択肢がなければ、人類の普遍的価値である基本的人権の基礎ともなる自由権を享受することはできません。「多くの選択肢が市場原理を完成させる」ポジティブな要素と「選択肢が多すぎると選べなくなる」ネガティブな要素を解決することがこれからの技術であるとレビューは考えます。",
  },
];
export const IdealPanel: React.FC<IdealPanelPropTypes> = ({ visible, onChangeVisible }) => {
  const idealItems =
    idealItemData.length > 0
      ? idealItemData.map((item, index) => {
          return (
            <IdealItem
              key={nanoid()}
              classNameStyles={styles[`idealGrid${index + 1}`]}
              idItem={`ideal-grid-${index + 1}`}
              title={item.title}
              imageUrl={index === 0 ? IdealImg1 : index === 1 ? IdealImg2 : IdealImg3}
              h5PreTitle={item.h5PreTitle}
              h5Title={item.h5Title}
              content={item.content}
            />
          );
        })
      : null;

  const visibleStyle = !visible
    ? { marginTop: "100vh", display: "none" }
    : { marginTop: "0px", display: "block" };
  return (
    <div
      style={visibleStyle}
      className={[styles.panels, styles.ideal, styles.slideInUp].join(" ")}
      id="ideal"
    >
      <div
        className={styles.closeAreaTop}
        onClick={() => {
          const ideal = document.getElementById("ideal");
          ideal.classList.remove(styles.slideInUp);
          ideal.classList.add(styles.slideOutDown);
          setTimeout(() => {
            onChangeVisible(false);
          }, 600);
        }}
      >
        <a className={styles.over}>
          <img src={CloseImg} alt="Closed button" />
        </a>
      </div>
      <h2>PHILOSOPHY | レビューの理念</h2>
      <h3>レビューが大切にする3つのこと</h3>

      <div id="ideal-container" className={styles.idealContainer}>
        {idealItems}
      </div>

      <div
        className={styles.closeAreaBottom}
        onClick={() => {
          const ideal = document.getElementById("ideal");
          ideal.classList.remove(styles.slideInUp);
          ideal.classList.add(styles.slideOutDown);
          setTimeout(() => {
            onChangeVisible(false);
          }, 600);
        }}
      >
        <a className="close over">
          <img src={CloseImg} alt="Closed button" />
        </a>
      </div>
    </div>
  );
};
