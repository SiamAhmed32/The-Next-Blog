import React from "react";
import SortDropDown from "./SortDropDown";
import Articles from "./Articles";

const ArticlesFeed = ({ articles }) => {
  return (
    <div className="lg:w-2/3 lg:pr-12">
      <SortDropDown />
      <Articles articles={articles} />
    </div>
  );
};

export default ArticlesFeed;
