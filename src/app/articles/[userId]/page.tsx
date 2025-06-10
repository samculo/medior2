import publicRuntimeConfig from "@/utils/config";
import { ArticleList } from "@/components";

const Page = async ({ params }: { params: { userId: string } }) => {
  const { userId } = await params;
  const articles = await (
    await fetch(publicRuntimeConfig.articlesUrl.replace("{userId}", userId))
  ).json();
  const user = await (
    await fetch(publicRuntimeConfig.userUrl.replace("{userId}", userId))
  ).json();

  return <ArticleList articles={articles} user={user} />;
};

export default Page;
