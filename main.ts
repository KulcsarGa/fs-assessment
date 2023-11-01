import FS from './models/classes/fs.ts'


//Test with the given example
const fs = new FS("/topdir")
fs.store("filename1", "a very long string1")
fs.store("filename2", "a very long string1")
fs.store("filename3", "a very long string3")
const result1 = fs.get("filename1")// gets 'a very long string1'
const result2 = fs.get("filename2")// gets 'a very long string1'
const result3 = fs.get("filename3")// gets 'a very long string3'


console.log(fs)

console.log("Content for filename1: " + result1)
console.log("Content for filename2: " + result2)
console.log("Content for filename3: " + result3)