import FSInterface from "../interfaces/fs";
import crypto from "crypto";
import fs from "fs";
import { fileDataType } from "../types";
class FS implements FSInterface {
  directory: string;
  fileData: fileDataType;

  constructor(directory: string) {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    }
    this.directory = directory;
    this.fileData = {};
  }
  async store(filename: string, content: string): Promise<void> {
    const hashedContent = this.generateHash(content);
    const storedHashes = Object.keys(this.fileData).map((key) => {
      return this.fileData[key];
    });
    if (!storedHashes.find((hash) => hash === hashedContent)) {
      await fs.promises.writeFile(`${this.directory}/${hashedContent}`, content)
    }
    this.fileData[filename] = hashedContent;
  }
  get(filename: string): string {
    if (this.fileData[filename]) {
      const hashKey = this.fileData[filename];
      const content = fs.readFileSync(`${this.directory}/${hashKey}`, "utf-8")
      return content;
    }
    return `There are no files with the filename ${filename}!`;
  }

  private generateHash(content: string) {
    return crypto.createHash("md5").update(content).digest("hex");
  }
}

export default FS;
