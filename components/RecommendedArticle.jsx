import React from "react";
import Image from "next/image";
import { generateExcerpt } from "@/lib/generateExcerpt";

const RecommendedArticle = ({ blogs }) => {
  return (
    <section className="bg-gray-50 py-12 mt-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h3 className="text-xl font-bold mb-6">Recommended Blogs</h3>

        <div className="grid grid-cols-2 gap-4">
          {blogs.map((blog) => {
            return (
              <article
                key={blog.category}
                className="mb-10 pb-10 border-b border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={blog.author.avatar}
                    alt="Author"
                    width={48}
                    height={48}
                    className="rounded-full mr-2"
                  />
                  <span className="text-sm font-medium">
                    {blog.author.name}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2 hover:underline cursor-pointer">
                  {blog.title}
                </h2>
                <p className="text-gray-700 mb-4">
                  {generateExcerpt(blog.description, 180)}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-500 text-sm">
                    <span>{blog.date}</span>
                    <span className="mx-1">·</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full">
                      {blog.category}
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
          })}
        </div>
      </div>
    </section>
  );
};

export default RecommendedArticle;
