// import styles from "./styles.scss";
// import CloseIcon from "~/assets/images/close.png";
// import { nanoid } from "nanoid";

// interface BusinessPanelPropTypes {
//   visible: boolean;
//   onChangeVisible: Function;
// }

// interface DetailContent {
//   id: string;
//   name: string;
//   content: string;
//   link: string;
//   imgUrl: string;
//   tag: string;
//   nameTag: string[];
// }

// interface BusinessPropTypes {
//   id: string;
//   fieldTitle: string;
//   name: string;
//   introduction: string[];
//   content: DetailContent[];
// }

// const fakeBussiness = {
//   id: nanoid(),
//   fieldTitle: "BUSINESS FIELD | 業務領域 レビュー",
//   name: "1.Webサービス開発",
//   introduction: [
//     "ブラウザの進化に伴い、Webでも様々なサービスを提供できるようになりました",
//     "オリジナルのCMSを組むことも、Wordpressなどの",
//     "オープンソースのソフトウェアを利用しての開発も可能です。",
//     "費用面も考慮したご提案をいたします。",
//   ],
//   content: [
//     {
//       id: nanoid(),
//       name: "飲み放題パスポートサービス「nomiho」",
//       content: "サブスクリプション型飲み放題サイトの制作",
//       link: "https://nomiho.jp/",
//       imgUrl: "assets/images/1_20.jpg",
//       tag: "開発内容",
//       nameTag: ["html", "css", "ruby on rails", "mysql"],
//     },
//     {
//       id: nanoid(),
//       name: "ラテ肌フェイスフィルター",
//       content: "アップした画像を日焼けした自分にチェンジ",
//       link: "",
//       imgUrl: "assets/images/1_19.jpg",
//       tag: "開発内容",
//       nameTag: ["html", "css", "react.js", "javascript"],
//     },
//     {
//       id: nanoid(),
//       name: "シェアタウン",
//       content: "各種SNS投稿等地図化Webアプリ",
//       link: "https://share-town.jp",
//       imgUrl: "assets/images/1_1.jpg",
//       tag: "開発内容",
//       nameTag: [
//         " html",
//         "css",
//         "react.js",
//         "google maps",
//         "elasticsearch engine",
//         "python indexer",
//         "node.js express api",
//         "rails api",
//         "aws",
//         "mysql",
//       ],
//     },
//     {
//       id: nanoid(),
//       name: "our-Table",
//       content: "食のイベントのマッチングサイト",
//       link: "https://your-table.net/",
//       imgUrl: "assets/images/1_2.jpg",
//       tag: "開発内容",
//       nameTag: ["html", "scss", "react.js", "ruby on rails", "varitrans", "aws", "mysql"],
//     },
//     {
//       id: nanoid(),
//       name: "rev-stamp",
//       content: "スマホを利用したスタンプシステム",
//       link: "https://rev-stamp.com/",
//       imgUrl: "assets/images/1_3.jpg",
//       tag: "開発内容",
//       nameTag: ["html", "css", "javascript", "ruby on rails", "aws", "mysql"],
//     },
//     {
//       id: nanoid(),
//       name: "TBS世界陸上",
//       content: "複数動画を編集してオリジナル動画を",
//       link: "",
//       imgUrl: "assets/images/1_18.jpg",
//       tag: "開発内容",
//       nameTag: ["html", "css", "flash action script 4", "javascript"],
//     },
//     {
//       id: nanoid(),
//       name: "相対屋",
//       content: "ビットコイントレードマッチングサイト",
//       link: "",
//       imgUrl: "assets/images/1_4.jpg",
//       tag: "開発内容",
//       nameTag: ["html", "css", "javascript", "ruby on rails", "aws", "mysql"],
//     },
//     {
//       id: nanoid(),
//       name: "CONCENT",
//       content: "オリジナルCMSで制作する連載系サイト",
//       link: "http://www.concent-f.jp/",
//       imgUrl: "assets/images/1_5.jpg",
//       tag: "開発内容",
//       nameTag: ["html", "python", "scss", "django", "aws", "mysql"],
//     },
//     {
//       id: nanoid(),
//       name: "キレイモくじびきサイト",
//       content: "管理画面でアレンジ可能なくじびきWeb",
//       link: "",
//       imgUrl: "assets/images/1_6.jpg",
//       tag: "開発内容",
//       nameTag: ["html", "css", "javascript", "ruby on rails", "aws", "mysql"],
//     },
//     {
//       id: nanoid(),
//       name: "ねこねこ横丁",
//       content: "オリジナルCMSで漫画を連載。SEO対応",
//       link: "http://comip.jp/nekoyoko/",
//       imgUrl: "assets/images/1_7.jpg",
//       tag: "開発内容",
//       nameTag: ["html", "css", "react.js", "javascript"],
//     },
//     {
//       id: nanoid(),
//       name: "東京ビアウイーク2017",
//       content: "WordPress利用のイベントサイト",
//       link: "https://beerweek.jp/2017/",
//       imgUrl: "assets/images/1_8.jpg",
//       tag: "開発内容",
//       nameTag: ["html", "css", "react.js", "javascript"],
//     },
//     {
//       id: nanoid(),
//       name: "晴れ干しタオルにくるまる写真館",
//       content: "画像投稿～アルバム化表示webアプリ",
//       link: "https://beerweek.jp/2017/",
//       imgUrl: "assets/images/1_9.jpg",
//       tag: "開発内容",
//       nameTag: ["html", "css", "react.js", "javascript"],
//     },
//     {
//       id: nanoid(),
//       name: "寿司ペディア",
//       content: "WordPress利用の2か国語サイト",
//       link: "http://sushipedia.tokyo/",
//       imgUrl: "assets/images/1_10.jpg",
//       tag: "開発内容",
//       nameTag: ["html", "css", "react.js", "javascript"],
//     },
//     {
//       id: nanoid(),
//       name: "Welbox",
//       content: "会員制福利厚生サイト特集LP",
//       link: "https://beerweek.jp/2017/",
//       imgUrl: "assets/images/1_11.jpg",
//       tag: "開発内容",
//       nameTag: ["html", "css", "react.js", "javascript"],
//     },
//     {
//       id: nanoid(),
//       name: "猫報",
//       content: "WordPress利用の猫情報サイト",
//       link: "https://nekoho.com/",
//       imgUrl: "assets/images/1_13.jpg",
//       tag: "開発内容",
//       nameTag: ["html", "css", "react.js", "javascript"],
//     },
//     {
//       id: nanoid(),
//       name: "画楽の杜",
//       content: "オリジナルCMSで漫画連載。",
//       link: "https://beerweek.jp/2017/",
//       imgUrl: "assets/images/1_14.jpg",
//       tag: "開発内容",
//       nameTag: ["html", "css", "react.js", "javascript"],
//     },
//   ],
// };

// export const BusinessItemContent: React.FC<DetailContent> = ({
//   id,
//   content,
//   imgUrl,
//   name,
//   nameTag,
//   tag,
//   link,
// }) => {
//   return (
//     <div key={id} className={styles.businessEach}>
//       <h5>{name}</h5>

//       <p>{content}</p>

//       <a
//         href={link}
//         target={!link.includes("#") ? "_blank" : null}
//         rel={!link.includes("#") ? "noreferrer" : null}
//       >
//         <img src={imgUrl} className="over" alt="nomiho" />
//       </a>

//       <span className={styles.language}>{tag}</span>

//       <p className="for-pc">{nameTag}</p>
//     </div>
//   );
// };

// export const BusinessPanel: React.FC<BusinessPanelPropTypes> = ({ visible, onChangeVisible }) => {
//   const visibleStyle = !visible
//     ? { marginTop: "100vh", display: "none" }
//     : { marginTop: "0px", display: "block" };
//   return (
//     <div style={visibleStyle} className={[styles.panels, styles.bussiness].join(" ")} id="company">
//       <div className={styles.closeAreaTop}>
//         <a className="close over" onClick={() => onChangeVisible(false)}>
//           <img src={CloseIcon} alt="Closed button" />
//         </a>
//       </div>
//       <h2>{fakeBussiness.fieldTitle}</h2>

//       <h3>{fakeBussiness.name}</h3>

//       <div class="business-container clearfix">

// <p>
//   ブラウザの進化に伴い、Webでも様々なサービスを提供できるようになりました。<br />
//   オリジナルのCMSを組むことも、Wordpressなどの<br />
//   オープンソースのソフトウェアを利用しての開発も可能です。<br />
//   費用面も考慮したご提案をいたします。
// </p>

// <h4>レビュー 実績紹介</h4>

// <div class="business-grids">

//   <div class="business-each">

//     <h5>飲み放題パスポートサービス「nomiho」</h5>

//     <p>
//       サブスクリプション型飲み放題サイトの制作
//     </p>

//     <a href="https://nomiho.jp/" target="_blank" rel="noreferrer">
//       <img src="img/1_20.jpg" class="over" alt="nomiho">
//     </a>

//     <span class="language">
//       開発内容
//     </span>

//     <p class="for-pc">
//       html,css,ruby on rails,mysql
//     </p>

//   </div>
//   <!--//business-each-->

//   <div class="business-each second">

//     <h5>ラテ肌フェイスフィルター</h5>

//     <p>
//       アップした画像を日焼けした自分にチェンジ
//     </p>

//     <a href="javascript:void(0);" target="_blank" rel="noreferrer">
//       <img src="img/1_19.jpg" class="over" alt="ラテ肌フェイスフィルター">
//     </a>

//     <span class="language">
//       開発内容
//     </span>

//     <p class="for-pc">
//       html,css,react.js,javascript
//     </p>

//   </div>
//   <!--//business-each-->

//   <div class="business-each third">

//     <h5>シェアタウン</h5>

//     <p>
//       各種SNS投稿等地図化Webアプリ
//     </p>

//     <a href="https://share-town.jp/" target="_blank" rel="noreferrer">
//       <img src="img/1_1.jpg" class="over" alt="Share-town screenshot">
//     </a>

//     <span class="language">
//       開発内容
//     </span>

//     <p class="for-pc">
//       html,css,react.js,google maps, elasticsearch engine, python indexer, node.js express api, rails api, aws,
//       mysql
//     </p>

//   </div>
//   <!--//business-each-->

//   <div class="business-each second">

//     <h5>Your-Table</h5>

//     <p>
//       食のイベントのマッチングサイト
//     </p>

//     <a href="https://your-table.net/" target="_blank" rel="noreferrer">
//       <img src="img/1_2.jpg" class="over" alt="your-table screenshot">
//     </a>

//     <span class="language">
//       開発内容
//     </span>

//     <p class="for-pc">
//       html, scss, react.js, ruby on rails, varitrans, aws, mysql
//     </p>

//   </div>
//   <!--//business-each-->

//   <div class="business-each">

//     <h5>rev-stamp</h5>

//     <p>
//       スマホを利用したスタンプシステム
//     </p>

//     <a href="https://rev-stamp.com/" target="_blank" rel="noreferrer">
//       <img src="img/1_3.jpg" class="over" alt="rev-stamp screenshot">
//     </a>

//     <span class="language">
//       開発内容
//     </span>

//     <p class="for-pc">
//       html, css, javascript, ruby on rails, aws, mysql
//     </p>

//   </div>
//   <!--//business-each-->

//   <div class="business-each second third">

//     <h5>TBS世界陸上</h5>

//     <p>
//       複数動画を編集してオリジナル動画を
//     </p>

//     <a href="javascript:void(0);" target="_blank">
//       <img src="img/1_18.jpg" class="over" alt="TBS世界陸上 screenshot">
//     </a>

//     <span class="language">
//       開発内容
//     </span>

//     <p class="for-pc">
//       html, css, flash action script 4, java script
//     </p>

//   </div>
//   <!--//business-each-->

//   <div class="business-each">

//     <h5>相対屋</h5>

//     <p>
//       ビットコイントレードマッチングサイト
//     </p>

//     <img src="img/1_4.jpg" class="over" alt="aitaiya screenshot">

//     <span class="language">
//       開発内容
//     </span>

//     <p class="for-pc">
//       html, css,java script, ruby on rails, aws, mysql
//     </p>

//   </div>
//   <!--//business-each-->

//   <div class="business-each second">

//     <h5>CONCENT</h5>

//     <p>
//       オリジナルCMSで制作する連載系サイト
//     </p>

//     <a href="http://www.concent-f.jp/" target="_blank" rel="noreferrer">
//       <img src="img/1_5.jpg" class="over" alt="concent-f screenshot">
//     </a>

//     <span class="language">
//       開発内容
//     </span>

//     <p class="for-pc">
//       html, python, scss, django, aws, mysql
//     </p>

//   </div>
//   <!--//business-each-->

//   <div class="business-each third">

//     <h5>キレイモくじびきサイト</h5>

//     <p>
//       管理画面でアレンジ可能なくじびきWeb
//     </p>

//     <a href="javascript:void(0);" target="_blank">
//       <img src="img/1_6.jpg" class="over" alt="キレイモくじびきサイト screenshot">
//     </a>

//     <span class="language">
//       開発内容
//     </span>

//     <p class="for-pc">
//       html, css,java script, ruby on rails, aws, mysql
//     </p>

//   </div>
//   <!--//business-each-->

//   <div class="business-each second">

//     <h5>ねこねこ横丁</h5>

//     <p>
//       オリジナルCMSで漫画を連載。SEO対応
//     </p>

//     <a href="http://comip.jp/nekoyoko/" target="_blank" rel="noreferrer">
//       <img src="img/1_7.jpg" class="over" alt="nekoyoko screenshot">
//     </a>

//     <span class="language">
//       開発内容
//     </span>

//     <p class="for-pc">
//       html, css,java script, ruby on rails, aws, mysql
//     </p>

//   </div>
//   <!--//business-each-->

//   <div class="business-each">

//     <h5>東京ビアウイーク2017</h5>

//     <p>
//       WordPress利用のイベントサイト
//     </p>

//     <a href="https://beerweek.jp/2017/" target="_blank" rel="noreferrer">
//       <img src="img/1_8.jpg" class="over" alt="beerweek screenshot">
//     </a>

//     <span class="language">
//       開発内容
//     </span>

//     <p class="for-pc">
//       html, css, wordpress
//     </p>

//   </div>
//   <!--//business-each-->

//   <div class="business-each second third">

//     <h5>晴れ干しタオルにくるまる写真館</h5>

//     <p>
//       画像投稿～アルバム化表示webアプリ
//     </p>

//     <a href="javascript:void(0);" target="_blank">
//       <img src="img/1_9.jpg" class="over" alt="晴れ干しタオルにくるまる写真館 screenshot">
//     </a>

//     <span class="language">
//       開発内容
//     </span>

//     <p class="for-pc">
//       html, css,java script, ruby on rails, aws, mysql
//     </p>

//   </div>
//   <!--//business-each-->

//   <div class="business-each">

//     <h5>寿司ペディア</h5>

//     <p>
//       WordPress利用の2か国語サイト
//     </p>

//     <a href="http://sushipedia.tokyo/" target="_blank" rel="noreferrer">
//       <img src="img/1_10.jpg" class="over" alt="sushipedia screenshot">
//     </a>

//     <span class="language">
//       開発内容
//     </span>

//     <p class="for-pc">
//       html, css, wordpress
//     </p>

//   </div>
//   <!--//business-each-->

//   <div class="business-each second">

//     <h5>Welbox</h5>

//     <p>
//       会員制福利厚生サイト特集LP
//     </p>

//     <a href="javascript:void(0);" target="_blank">
//       <img src="img/1_11.jpg" class="over" alt="welbox screenshot">
//     </a>

//     <span class="language">
//       開発内容
//     </span>

//     <p class="for-pc">
//       html, css,java script
//     </p>

//   </div>
//   <!--//business-each-->

//   <div class="business-each third">

//     <h5>猫報</h5>

//     <p>
//       WordPress利用の猫情報サイト
//     </p>

//     <a href="https://nekoho.com/" target="_blank" rel="noreferrer">
//       <img src="img/1_13.jpg" class="over" alt="nekoho screenshot">
//     </a>

//     <span class="language">
//       開発内容
//     </span>

//     <p class="for-pc">
//       html, css, wordpress
//     </p>

//   </div>
//   <!--//business-each-->

//   <div class="business-each second">

//     <h5>画楽の杜</h5>

//     <p>
//       オリジナルCMSで漫画連載。
//     </p>

//     <a href="javascript:void(0);" target="_blank">
//       <img src="img/1_14.jpg" class="over" alt="画楽の杜 screenshot">
//     </a>

//     <span class="language">
//       開発内容
//     </span>

//     <p class="for-pc">
//       html, css, ruby on rails, aws</p>

//   </div>
//   <!--//business-each-->

//   <div class="business-each">

//     <h5>SPゲームLP</h5>

//     <p>
//       スマホゲームキャンペーンLP(実装のみ)
//     </p>

//     <a href="https://duelsxmachina.com/jp/cardset/mexica/" target="_blank" rel="noreferrer">
//       <img src="img/1_15.jpg" class="over" alt="mexica screenshot">
//     </a>

//     <span class="language">
//       開発内容
//     </span>

//     <p class="for-pc">
//       html, css, angular, java script
//     </p>

//   </div>
//   <!--//business-each-->

// </div>
// <!--//business-grids-->

// </div>
//       <div className={styles.closeAreaBottom}>
//         <a className="close over" onClick={() => onChangeVisible(false)}>
//           <img src={CloseIcon} alt="Closed button" />
//         </a>
//       </div>
//     </div>
//   );
// };
