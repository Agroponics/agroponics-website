import Navbar from '@/components/Navbar';
import Head from 'next/head.js';
import Image from 'next/image.js';
import Link from 'next/link.js';
import ArticleLayout from '../../components/ArticleLayout';
import { getAllPostIds, getPostData, getSortedPostsData } from '../../utils/posts.js';

import remarkHtml from 'remark-html' //converts md string object into html

export default function Project({ postData, allPostsData }) {
  return (
    <ArticleLayout>
      <Navbar setActive={true}/>
      <Head>
          <title>{postData.title}</title>
      </Head>
      
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br/>

      <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }}></div>

      {/* THIS SECTION GETS ALL POSTS FOR THE USER TO GO THROUGH */}

      <section> 
        <h3>Check out our other projects:</h3>
        <ul >
          {allPostsData.map(({ id, cover_image, title }) => (
            <li key={id}>
              <Link href={`/projects/${id}`}>{title}</Link>
              <br />
              <Image src={cover_image} width={40} height={40}></Image>
            </li>
          ))}
        </ul>
      </section>
    </ArticleLayout>
  );
}


export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params }) {
  // Add the "await" keyword
  const postData = getPostData(params.id);
  const allPostsData = getSortedPostsData();

  return {
    props: {
      postData, allPostsData,
    },
  };
}