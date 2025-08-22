import React from "react";

import Image from "next/image";
import articles from "../../../articles/data.json";
import { getAllCategories, slugify } from "@/lib/data";
import ArticleDetails from "@/components/ArticleDetails";
import Sidebar from "@/components/Sidebar";
import RecommendedArticle from "@/components/RecommendedArticle";
import { notFound } from "next/navigation";
import ArticleInfo from "@/components/ArticleInfo";
import NoRecommendations from "@/components/NoRecommendedSections";

const ArticleDetailsPage = ({ params }) => {
  const { title } = params;

  const blog = articles.find((article) => slugify(article.title) === title);
  if (!blog) {
    notFound();
  }
  const recommendedBlogs = articles.filter(
    (article) =>
      article.category === blog.category && slugify(article.title) !== title
  );

  const blogCategories = getAllCategories(articles);

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 lg:pr-12">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
              <ArticleInfo blog={blog} />
              <ArticleDetails description={blog.description} />

              {recommendedBlogs.length > 0 ? (
                <RecommendedArticle blogs={recommendedBlogs} />
              ) : (
                <NoRecommendations />
              )}
            </div>
          </div>

          <Sidebar blogCategories={blogCategories} />
        </div>
      </div>
    </section>
  );
};

export default ArticleDetailsPage;
