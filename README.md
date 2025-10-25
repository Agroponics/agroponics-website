# agroponics-website


## Writing posts

The projects page of this site contains links to project articles that are dynamically generated from Markdown files. They are all stored in ```/posts``` in the route directory of this repository. Their respective images for the projects are stored under ```public/projectIMGS```. The Markdown files follow the following format

```
---
title: "Post Title" 
date: "xx-xxxx" *//format is month-year*
id: "lowercase_id" *//name of file stored in ```public/projectIMGs```* 
cover_image: "filename.jpg" *//name of file stored in ```public/projectIMGs```*
subteam: 'subteam' *//must be either ```automation```, ```structure```, or ```plants```*
header: "Header Of Article"   *//more detailed than title*
---
The bodytext goes here
```

- [Markdown File Syntax](https://www.markdownguide.org/basic-syntax/)


## Getting Started With Development 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To get it running, first initiate the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the live result.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub repository](https://github.com/vercel/next.js/)

For React, you can look to this link:
- [React Quick Start](https://react.dev/learn)

## Deploying to GitHub Pages

We've already done this once and so should never need to do it again (hopefully). In case this repository magically explodes or something, this is a tutorial on how we did it: https://www.freecodecamp.org/news/how-to-deploy-next-js-app-to-github-pages/