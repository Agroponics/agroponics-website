/*  
    Takes a md filename such as "README.md" and converts it to
    HTML like so:

    markdownToHtml("example.md").then((html) => console.log(html));


    CAN EXPLORE!!
    https://www.npmjs.com/package/parse-md // converts md file to string 
*/

import { remark } from "remark";
import html from "remark-html";
import fs from "fs";

export default async function markdownToHtml(filename) {
    const markdown = fs.readFileSync(filename, "utf8");  // Read file content
    const result = await remark().use(html).process(markdown);
    return result.toString();
}
