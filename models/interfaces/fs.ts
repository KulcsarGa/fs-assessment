interface FSInterface {
  store: (filename: string, content: string) => void,
  get: (filename: string) => string
}
