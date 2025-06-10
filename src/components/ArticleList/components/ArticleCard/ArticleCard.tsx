import type { ReactElement } from "react";
import type { Article } from "../../ArticleList.types";

import style from "./ArticleCard.module.css";

const ArticleCard = ({ article }: { article: Article }): ReactElement => (
  <div className={style.card}>
    <h3 className={style.card__title}>{article.title}</h3>
    <p className={style.card__body}>{article.body}</p>
  </div>
);

export default ArticleCard;
