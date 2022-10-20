// import fs from 'fs';
// import matter from 'gray-matter';

// export const getStaticProps = () => {
//   const files = fs.readdirSync('pages/posts');
//   const posts = files.map((fileName) => {
//     const slug = fileName.replace(/\.md$/, '');
//     const fileContent = fs.readFileSync(`pages/posts/${fileName}`, 'utf-8');
//     const { data } = matter(fileContent);
//     return {
//       frontMatter: data,
//       slug,
//     };
//   });

//   return {
//     props: {
//       posts,
//     },
//   };
// };

// export default function Home({ posts }) {
//   return (
//     <div className="my-8">
//       {posts.map((post) => (
//         <div key={post.slug}>
//           <Link href={`pages/post/${post.slug}`}>
//             <a>{post.frontMatter.title}</a>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import PostCard from '../components/PostCard';

export const getStaticProps = () => {
  const files = fs.readdirSync('pages/posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(`pages/posts/${fileName}`, 'utf-8');
    const { data, content } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });
  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }) {
  return (
    <div className="my-8">
      <div className="grid grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
