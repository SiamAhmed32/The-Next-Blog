import ArticlesFeed from "@/components/ArticlesFeed";
import articles from "../articles/data.json";
import Sidebar from "@/components/Sidebar";
import { getAllCategories } from "@/lib/data";
import { Suspense } from "react";

export default function HomePage({ searchParams }) {
  const blogCategories = getAllCategories(articles);

  const selectedCategories = searchParams.category
    ? [].concat(searchParams.category)
    : [];

  const filteredArticle =
    selectedCategories.length > 0
      ? articles.filter((article) =>
          selectedCategories.includes(article.category)
        )
      : articles;

  const sortBy = searchParams.sort || "latest";

  filteredArticle.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (sortBy === "oldest") {
      return dateA - dateB;
    }
    return dateB - dateA;
  });

  return (
    <>
      <ArticlesFeed articles={filteredArticle} />
      <Suspense fallback={<div>Loading categories...</div>}>
        <Sidebar blogCategories={blogCategories} />
      </Suspense>
    </>
  );
}
