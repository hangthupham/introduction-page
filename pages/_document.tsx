import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Logo from "../public/favicon.ico";
import "./body.css";

class CustomDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>レビュー合同会社(re-vue LLC.)</title>
          <link rel="shortcut icon" href={Logo} style={{ width: "12px" }} />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap&subset=vietnamese"
            rel="stylesheet"
          />
        </Head>
        <body className="override">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
