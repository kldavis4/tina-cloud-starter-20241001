import Layout from "../../components/layout/layout";
import client from "../../tina/__generated__/client";

export default async function PostsPage() {
  const posts = await client.queries.postConnection();

  if (!posts) {
    return null;
  }

  return (
    <Layout rawPageData={posts.data}>
    </Layout>
  );
}
