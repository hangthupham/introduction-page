import styles from "./styles.scss";
import CloseIcon from "~/assets/images/close.png";

interface RecruitPanelPropTypes {
  visible: boolean;
  onChangeVisible: Function;
}

export const RecruitPanel: React.FC<RecruitPanelPropTypes> = ({ visible, onChangeVisible }) => {
  const visibleStyle = !visible
    ? { marginTop: "100vh", display: "none" }
    : { marginTop: "0px", display: "block" };
  return (
    <div
      style={visibleStyle}
      className={[styles.panels, styles.recruit, styles.slideInUp].join(" ")}
      id="recruit"
    >
      <div className={styles.closeAreaTop}>
        <a
          className="close over"
          onClick={() => {
            const recruit = document.getElementById("recruit");
            recruit.classList.remove(styles.slideInUp);
            recruit.classList.add(styles.slideOutDown);
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
      <div id="recruit-container" className={styles.recruitContainer}>
        <p>現在、募集はありません。</p>
      </div>
      <div className={styles.closeAreaBottom}>
        <a
          className="close over"
          onClick={() => {
            const recruit = document.getElementById("recruit");
            recruit.classList.remove(styles.slideInUp);
            recruit.classList.add(styles.slideOutDown);
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
