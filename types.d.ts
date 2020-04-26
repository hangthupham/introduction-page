declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.svg *.png *.jpg" {
  const content: string;
  export default content;
}
