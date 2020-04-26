import dynamic from "next/dynamic";

const HomePage = dynamic(
  () => import("../src/containers/home-page/home-page.page").then((m) => m.HomePage),
  {
    ssr: false,
  }
);

export default HomePage;
