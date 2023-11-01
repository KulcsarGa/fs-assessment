interface FSInterface {
  store: (filename: string, content: string) => Promise<void>;
  get: (filename: string) => string;
}
export default FSInterface;
