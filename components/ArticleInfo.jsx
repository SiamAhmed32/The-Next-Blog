import React from "react";
import Image from "next/image";
const ArticleInfo = ({blog}) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        {blog.title}
      </h1>

      <div className="flex items-center mb-6">
        <Image
          src={blog.author.avatar}
          alt={blog.author.name}
          width={48}
          height={48}
          className="rounded-full mr-4"
        />
        <div>
          <div className="flex items-center">
            <span className="font-medium mr-2">{blog.author.name}</span>
            <button className="text-green-600 text-sm font-medium">
              Follow
            </button>
          </div>
          <div className="flex items-center text-gray-500 text-sm mt-1">
            <span>{blog.date}</span>
            <span className="mx-1">·</span>
            <span className="bg-gray-100 px-2 py-1 rounded-full">
              {blog.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleInfo;
