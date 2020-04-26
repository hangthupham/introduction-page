import React from "react";
import styles from "./styles.scss";
import { nanoid } from "nanoid";

interface TagPropTypes {
  key: string;
  href: string;
  title: string;
}

interface NewMessageItemPropTypes {
  keyid: string;
  time: string;
  title: string;
  tags: TagPropTypes[];
  content: string;
  preContent?: string;
}

const NewMessageItem: React.FC<NewMessageItemPropTypes> = ({
  keyid,
  time,
  title,
  tags,
  preContent = "",
  content,
}) => {
  return (
    <p key={keyid}>
      {time}
      <span className={styles.icons}>{title}</span>
      {preContent}
      {tags.length > 0 &&
        tags.map((item) => {
          return (
            <a
              key={item?.key ? item.key : nanoid()}
              href={item.href}
              target={item.href !== "#" ? "_blank" : null}
              rel={item.href !== "#" ? "noreferrer" : null}
            >
              {item.title}
            </a>
          );
        })}
      {content}
    </p>
  );
};

interface NewMessagePropTypes {
  data: NewMessageItemPropTypes[];
}

export const NewMessages: React.FC<NewMessagePropTypes> = ({ data }) => {
  return (
    <div className={[styles.grid, styles.grid9, styles.fadeIn].join(" ")}>
      <div className={styles.stitle}>
        <h2>
          NEWS <span className={styles.titleSmall}>おしらせ</span>
        </h2>
      </div>
      <div id="new-area" className={styles.newsArea}>
        {data.length > 0 &&
          data.map((item) => {
            return (
              <NewMessageItem
                key={item.keyid}
                keyid={item.keyid}
                preContent={item.preContent}
                content={item.content}
                tags={item.tags}
                time={item.time}
                title={item.title}
              />
            );
          })}
      </div>
    </div>
  );
};
