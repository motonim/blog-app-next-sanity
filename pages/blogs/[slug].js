import PageLayout from 'components/PageLayout';
import { getBlogBySlug } from 'lib/api';

const BlogDetail = ({ blog }) => {
  return (
    <PageLayout>
      <h1>Hello Detail Page - {blog.slug}</h1>
    </PageLayout>
  );
};

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);

  return {
    props: { blog },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { slug: 'three-helpful-websites' },
      },
      {
        params: { slug: 'what-im-doing-thesedays' },
      },
      {
        params: { slug: 'im-excited-to-make-my-own-blog' },
      },
      {
        params: { slug: 'how-i-decided-my-career' },
      },
    ],
    fallback: false,
  };
}

export default BlogDetail;
