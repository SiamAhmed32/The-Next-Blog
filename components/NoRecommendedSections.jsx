import Link from "next/link";

const NoRecommendations = () => {
  return (
    <section className="bg-gray-50 py-12 mt-12 text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <h3 className="mt-2 text-xl font-bold text-gray-900">
          You've Read It All!
        </h3>
        <p className="mt-2 text-md text-gray-600">
          There are no more recommended articles in this category.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Explore Other Categories
        </Link>
      </div>
    </section>
  );
};

export default NoRecommendations;
