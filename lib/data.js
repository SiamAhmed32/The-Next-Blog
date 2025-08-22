export function slugify(link) {
  return link
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export function getAllCategories(articles) {
  const blogCategories = [];
  articles.forEach((article) => {
    if (!blogCategories.includes(article.category)) {
      blogCategories.push(article.category);
    }
  });
  return blogCategories;
}
