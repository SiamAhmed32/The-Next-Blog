import React from "react";

import SingleArticle from "./SingleArticle";

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article) => {
        return <SingleArticle key={article.title} article={article} />;
      })}
    </>
  );
};

export default Articles;
