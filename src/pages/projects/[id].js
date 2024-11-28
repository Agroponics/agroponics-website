import Navbar from '@/components/Navbar';
import Head from 'next/head.js';
import Image from 'next/image.js';
import Link from 'next/link.js';
import ArticleLayout from '../../components/ArticleLayout';
import { getAllPostIds, getPostData, getPostContent, getSortedPostsData } from '../../utils/posts.js';
import styles from '../../styles/ProjectArticle.module.css'

export default function Project({ postData, postContent, allPostsData }) {

  //An array of each character in the content of the post file
  const fileBody = Object.values(postContent).map((item) => {
    return(
      <>{(item == '\n') ? <br/> : item}</>
    );
  });

  const post_image = "../../images/projectIMGs/".concat(postData.cover_image);

  return (
    <ArticleLayout>
      <Navbar setActive={true}/>
      
      <Head>
        <title>{postData.title} | UBC Agroponics</title>
      </Head>
      
      <div className={styles.postdata}>
        <span>{postData.id}</span>
        <span>{postData.date}</span>
      </div>

      <main>                
        <img src={post_image} width={100} height={100}></img>
        <h1>{postData.header}</h1>
        <p className={styles.articleBody}>{fileBody}</p>
      </main>
 
      <section> 
        <h3>Check out our other projects:</h3>
        <ul>
          {allPostsData.map(({ id, cover_image, title }) => (
            <li key={id}>
              <Link href={`/projects/${id}`}>{title}</Link>
              <br/>
              <img src={"/../../images/projectIMGs/".concat(cover_image)} width={40} height={40}></img>
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
  const postData = getPostData(params.id);
  const postContent = getPostContent(params.id);
  const allPostsData = getSortedPostsData();

  return {
    props: {
      postData, postContent, allPostsData,
    },
  };
}