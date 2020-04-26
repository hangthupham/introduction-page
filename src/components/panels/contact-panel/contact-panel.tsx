import styles from "./styles.scss";
import CloseIcon from "~/assets/images/close.png";
import { sendContact } from "../../../api/contact";
import { useState } from "react";

interface ContactPanelPropTypes {
  visible: boolean;
  onChangeVisible: Function;
}

export const ContactPanel: React.FC<ContactPanelPropTypes> = ({ visible, onChangeVisible }) => {
  const [name, setName] = useState("");
  const [furigana, setFurigana] = useState("");
  const [email, setEmail] = useState("");
  const [radioContent, setRadioContent] = useState("");
  const [detailRequire, setDetailRequire] = useState("");

  const handleSubmitForm = () => {
    const form = new FormData();
    form.append("お名前", name);
    form.append("ふりがな", furigana);
    form.append("Email", email);
    form.append("内容", radioContent);
    form.append("お問い合わせ内容", detailRequire);

    sendContact(form);
    onChangeVisible(false);
  };
  const visibleStyle = !visible
    ? { marginTop: "100vh", display: "none" }
    : { marginTop: "0px", display: "block" };
  return (
    <div
      style={visibleStyle}
      className={[styles.panels, styles.contact, styles.slideInUp].join(" ")}
      id="contact"
    >
      <div className={styles.closeAreaTop}>
        <a
          className="close over"
          onClick={() => {
            const contact = document.getElementById("contact");
            contact.classList.remove(styles.slideInUp);
            contact.classList.add(styles.slideOutDown);
            setTimeout(() => {
              onChangeVisible(false);
            }, 600);
          }}
        >
          <img src={CloseIcon} alt="Closed button" />
        </a>
      </div>
      <h2>CONTACT</h2>

      <h3>お問い合わせ</h3>

      <div id="contact-container" className={styles.contactContainer}>
        <p>
          お仕事のご依頼やご相談など、下記フォームよりお気軽にお問い合わせください。
          <br />
          担当者より返答をさせていただきます。
        </p>

        <form method="post" action="https://revue.co.jp/mail.php" id="js-contact-form">
          <dl>
            <dt>
              お名前<span className={styles.required}>必須</span>
            </dt>
            <dd>
              <input
                size={20}
                type="text"
                name="お名前"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </dd>
            <dt>
              <span className={styles.indent}>ふりがな</span>
            </dt>
            <dd>
              <input
                size={20}
                type="text"
                name="ふりがな"
                value={furigana}
                onChange={(e) => setFurigana(e.target.value)}
              />
            </dd>
            <dt>
              Email<span className={styles.required}>必須</span>
            </dt>
            <dd>
              <input
                size={30}
                type="email"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </dd>
            <dt>
              ご質問内容<span className={styles.required}>必須</span>
              <br />
              <span className={styles.indent}>(選択してください)</span>
            </dt>
            <dd>
              <input
                type="radio"
                name="内容"
                value="制作見積り依頼"
                onChange={(e) => {
                  if (e.target.checked) setRadioContent("制作見積り依頼");
                }}
              />{" "}
              制作のご依頼・ご相談・お見積り
              <br />
              <input
                type="radio"
                name="内容"
                value="サービスについて"
                onChange={(e) => {
                  if (e.target.checked) setRadioContent("サービスについて");
                }}
              />{" "}
              弊社サービスについて
              <br />
              <input
                type="radio"
                name="内容"
                value="取材"
                onChange={(e) => {
                  if (e.target.checked) setRadioContent("取材");
                }}
              />{" "}
              弊社ならびに弊社サービスへの取材等
              <br />
              <input
                type="radio"
                name="内容"
                value="採用"
                onChange={(e) => {
                  if (e.target.checked) setRadioContent("採用");
                }}
              />{" "}
              採用のご相談
              <br />
              <input
                type="radio"
                name="内容"
                value="その他"
                onChange={(e) => {
                  if (e.target.checked) setRadioContent("その他");
                }}
              />{" "}
              その他
            </dd>
            <dt>
              お問い合わせ内容<span className={styles.required}>必須</span>
            </dt>
            <dd>
              <textarea
                name="お問い合わせ内容"
                value={detailRequire}
                onChange={(e) => setDetailRequire(e.target.value)}
                cols={50}
                rows={5}
              ></textarea>
            </dd>
          </dl>
          <button
            className={styles.btn}
            disabled={!name || !email || !detailRequire || !radioContent}
            onClick={(e) => {
              e.preventDefault();
              handleSubmitForm();
            }}
          >
            送信
          </button>
        </form>
      </div>
      <div className={styles.closeAreaBottom}>
        <a
          className="close over"
          onClick={() => {
            const contact = document.getElementById("contact");
            contact.classList.remove(styles.slideInUp);
            contact.classList.add(styles.slideOutDown);
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
