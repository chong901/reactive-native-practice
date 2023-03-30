declare module "*.png" {
  const value: any;
  export = value;
}
declare module "*.jpg" {
  const value: any;
  export = value;
}

declare module "@env" {
  export const RAPID_API_KEY: string;
}
