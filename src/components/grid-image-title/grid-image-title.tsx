import React from "react";
import styles from "./styles.scss";

interface GridWithImageAndTitlePropTypes {
  imgUrl: string;
  title: string;
  smallTitle: string;
  classNameStyles: string;
  styleImages: string;
  handleClick?: any;
}
export const GridWithImageAndTitle: React.FC<GridWithImageAndTitlePropTypes> = ({
  imgUrl,
  title,
  smallTitle,
  classNameStyles,
  styleImages,
  handleClick,
}) => {
  return (
    <div
      onClick={handleClick}
      className={[styles.grid, classNameStyles, styles.fadeIn].join(" ")}
      id="grid-10"
    >
      <a className="open-8" href="#">
        <div className={styles.stitle}>
          <h2>
            {title}
            <span className={styles.titleSmall}>{smallTitle}</span>
          </h2>
        </div>
        <div className={styleImages} style={{ backgroundImage: `url(${imgUrl})` }}></div>
      </a>
    </div>
  );
};
