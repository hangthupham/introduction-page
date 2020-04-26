import React from "react";
import styles from "./styles.scss";

interface GridLitterPropTypes {
  classNameGrid: string;
  imgUrl: string;
  href: string;
  title: string;
  span: string;
  idDiv: string;
}

export const GridLittle: React.FC<GridLitterPropTypes> = ({
  classNameGrid,
  idDiv,
  imgUrl,
  href,
  title,
  span,
}) => {
  return (
    <div className={[styles.grid, classNameGrid, styles.fadeIn].join(" ")} id={idDiv}>
      <a className="open-2" href={href}>
        <div className={styles.mtitle}>
          <h2>{title}</h2>
          <h3>{span}</h3>
        </div>
        <div className={styles.topTiles1} style={{ backgroundImage: `url(${imgUrl})` }}></div>
      </a>
    </div>
  );
};
