import Head from 'next/head.js';
import Image from 'next/image.js';
import Link from 'next/link.js';
import { getAllPostIds, getPostData, getSortedPostsData } from '../../utils/posts.js';

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


export default function Project({ postData, allPostsData }) {
  return (
    <>
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
    </>
  );
}
