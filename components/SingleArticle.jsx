import React from "react";
import Image from "next/image";
import Link from "next/link";
import { generateExcerpt } from "@/lib/generateExcerpt";
import { slugify } from "@/lib/data";

const SingleArticle = ({ article }) => {
    const excerpt = generateExcerpt(article.description, 180);
    const slugifiedTitle = slugify(article.title)
  return (
    <article className="mb-10 pb-10 border-b border-gray-200">
      <div className="flex items-center mb-4">
        <Image
          src={article.author.avatar}
          alt={article.author.name} 
          width={24}
          height={24}
          className="rounded-full mr-2"
        />
        <span className="text-sm font-medium">{article.author.name}</span>
      </div>
      <Link
        href={`/blog/${slugifiedTitle}`}
        className="text-xl font-bold mb-2 hover:underline cursor-pointer"
      >
        {article.title}
      </Link>
      <p className="text-gray-700 mb-4">
        {excerpt}
        
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-gray-500 text-sm">
          <span>{article.date}</span>
          <span className="mx-1">·</span>
          <span className="bg-gray-100 px-2 py-1 rounded-full">
            {article.category}
          </span>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default SingleArticle;
