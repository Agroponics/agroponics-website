import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import {read} from 'to-vfile'
import {unified} from 'unified'

const matter = require('gray-matter'); 

const file = await unified()
  .use(remarkParse)
  .use(remarkHtml)
  .process(await read('example.md'))

console.log(String(file))