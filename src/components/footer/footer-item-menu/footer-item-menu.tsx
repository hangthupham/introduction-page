interface FooterItemMenuPropTypes {
  href?: string;
  content: string;
}
export const FooterItemMenu: React.FC<FooterItemMenuPropTypes> = ({ href = "#", content }) => {
  return (
    <li>
      <a
        href={href}
        target={!href.includes("#") ? "_blank" : null}
        rel={!href.includes("#") ? "noreferrer" : null}
      >
        {content}
      </a>
    </li>
  );
};
