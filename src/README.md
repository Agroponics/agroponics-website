# \src

The ```\src``` folder of our project contains the majority of the user-written code, and is where we as the developers work 95% of the time.


## File Organization

```\components```: This folder contains each of our components. They're separated into different files, and make it easy to perform unit testing as well as incorporate code that we'd otherwise be copy-pasting a bunch of times throughout different files. They're also reusable across projects! Just pay attention to what stylesheets each component uses (some may have multiple). 

```\fonts```: Contains the fonts we use throughout the website

```\images```: This folder has all the images for our project that aren't publicly fetchable with an HTML GET request. We use these throughout our website for, get this, images. In Next.js, avoid using the default ```<img />``` tag, and instead opt for the Next.js ```<Image />``` component, which will load faster and more smoothly. 

```pages```: This folder contains each of our project's pages, which are each their own JavaScript function defined in their own file. Notice that they're not too different from the way components are defined, the only real difference being that the function for pages are defined with ```export default function PageName(props)```, whereas components are just defined by ```function ComponentName(props)```.

```styles```: This folder contains all the stylesheets we use throughout the site. A LOT of time is spent doing CSS in these projects (you'd think coding takes the longest, nope it's the artistic part). W3 schools has a good reference for CSS [here](https://www.w3schools.com/css/).

```utils```: This folder contains backend JavaScript functions. As of now (November 2025) it only contains the functions used for extracting project post content from markdown files with the ```gray-matter``` package.
