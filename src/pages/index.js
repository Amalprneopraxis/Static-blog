import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {GraphQLClient,gql} from 'graphql-request';
import Blogcard from '../../components/Blogcard';
import React from 'react';

const graphcms = new GraphQLClient("https://api-ap-south-1.hygraph.com/v2/clemi9tt321t801uhbxmqaykf/master");
const QUERY = gql`
{
  posts{
    id
    title
    coverphoto {
      id
      url
    }
    content
    {
     text
      
    }
    
    author{
      name
      
    }
  }
 
 

} 
`;

export async function getStaticProps() {
  const {posts} = await graphcms.request(QUERY);
  console.log("test", posts);
  return{
    props:{
      posts,
    },
  
  };
}
export default function Home({posts}) {
  return (
    <>
      <main className={styles.mainDiv}>
       {posts.map((post) => (
        < Blogcard  title={post.title} author={post.author} coverphoto={post.coverphoto} key={post.id} slug={post.slug} content={post.content}  />
      
      
      ))}
      </main>
    </>
  )
}
