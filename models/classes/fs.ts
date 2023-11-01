import FSInterface from "../interfaces/fs";
import crypto from "crypto";
import { fileDataType, hashMapType } from "../types";
class FS implements FSInterface {
  directory: string;
  fileData: fileDataType;
  hashMap: hashMapType;

  constructor(directory: string) {
    this.directory = directory;
    this.fileData = {};
    this.hashMap = {};
  }
  store(filename: string, content: string): void {
    const hashedContent = this.generateHash(content);
    if (!this.hashMap[hashedContent]) {
      this.hashMap[hashedContent] = content;
    }
    this.fileData[filename] = hashedContent;
  }
  get(filename: string): string {
    if (this.fileData[filename]) {
      const hashKey = this.fileData[filename];
      const content = this.hashMap[hashKey];
      return content;
    }
    return `There are no files with the filename ${filename}!` 
  }

  private generateHash(content: string) {
    return crypto.createHash("md5").update(content).digest("hex");
  }
}

export default FS;
