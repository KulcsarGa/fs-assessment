

class FS implements FSInterface {

  store (filename: string, content: string): void {
    console.log(filename)
    console.log(content)
  }
  get (filename: string) : string{
    return filename
  }
}