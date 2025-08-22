'use client'
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SortDropDown = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentSort = searchParams.get('sort') || 'latest'
  const handleSortChange = (e) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("sort", e.target.value);

    router.push(`/?${newParams.toString()}`);
  };

  return (
    <div className="mb-6 flex justify-between items-center">
      <h2 className="text-2xl font-bold">Articles</h2>
      <div>
        <label for="sort" className="text-sm font-medium text-gray-700 mr-2">
          Sort by:
        </label>
        <select
          id="sort"
          name="sort"
          className="border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500"
          value={currentSort}
          onChange={handleSortChange}
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default SortDropDown;
