import remarkHtml from 'remark-html' //converts md string object into html

// https://www.npmjs.com/package/parse-md
import fs from 'fs'
import parseMD from 'parse-md' //converts md file to string

const fileContents = fs.readFileSync('posts/first.md', 'utf8')
const { metadata, content } = parseMD(fileContents)

console.log(metadata) // { title: 'Great first post', description: 'This is my first great post. Rawr' }
console.log(content) // "# My first post..."




