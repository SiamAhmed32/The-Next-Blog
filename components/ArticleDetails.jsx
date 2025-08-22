import React from "react";

const ArticleDetails = ({description}) => {
  return <div className="prose lg:prose-xl max-w-none">
    <div dangerouslySetInnerHTML={{__html: description}} />
  </div>;
};

export default ArticleDetails;
