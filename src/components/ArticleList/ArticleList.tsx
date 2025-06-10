import type { ReactElement } from "react";
import type { Article } from "./ArticleList.types";
import type { User } from "../UserList/UserList.types";

import style from "./ArticleList.module.css";
import ArticleCard from "./components/ArticleCard/ArticleCard";

const ArticleList = ({
  articles,
  user,
}: {
  articles: Article[];
  user: User;
}): ReactElement => {
  return (
    <>
      <h2 className={style.title}>Articles</h2>
      <div className="flex">
        <p className={style.author__label}>Author</p>
        <p className={style.author__value}>{user.name}</p>
      </div>
      <div className={style.list}>
        {articles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </div>
    </>
  );
};

export default ArticleList;
