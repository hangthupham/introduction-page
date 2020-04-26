import Link from "next/link";
import styles from "./styles.scss";

interface NavigationItemPropTypes {
  srcImg?: string;
  altImg?: string;
  href?: string;
  children?: any;
}

const NavigationItem: React.FC<NavigationItemPropTypes> = ({
  srcImg = "",
  altImg = "image",
  href = "#",
  children,
}) => {
  return (
    <li>
      <Link href={href}>
        <a className={styles.item} target={href ? "_blank" : null} rel={href ? "noreferrer" : null}>
          {srcImg ? (
            <h1>
              <img src={srcImg} alt={altImg} />
            </h1>
          ) : (
            children
          )}
        </a>
      </Link>
    </li>
  );
};

export default NavigationItem;
