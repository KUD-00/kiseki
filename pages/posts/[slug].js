import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import remarkPrism from 'remark-prism';

import 'katex/dist/katex.min.css'

export async function getStaticProps({ params }) {
  const file = fs.readFileSync(`posts/${params.slug}.md`, 'utf-8');
  const { data, content } = matter(file);
  return { props: { frontMatter: data, content } };
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

const Post = ({ frontMatter, content }) => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="border">
        <Image
          src={`/${frontMatter.image}`}
          width={1000}
          height={600}
          alt={frontMatter.title}
        />
      </div>
      <h1 className="mt-12">{frontMatter.title}</h1>
      <ReactMarkdown children={content}
                     remarkPlugins={[remarkMath, remarkGfm, remarkToc, rehype-slug, remark-prism]}
                     rehypePlugins={[rehypeKatex]} />
      <span>{frontMatter.date}</span>
    </div>
  );
};


export default Post;
