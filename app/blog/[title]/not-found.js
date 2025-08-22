import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-bold mb-4">Post Not Found</h2>
      <p className="text-gray-600">
        Sorry, we couldn&apos;t find the blog post you were looking for.
      </p>
      <Link
        href="/"
        className="text-blue-600 hover:underline mt-6 inline-block"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
