declare module "*.json" {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const value: { [key: string]: any };
  export default value;
}
