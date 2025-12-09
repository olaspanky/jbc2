import Image from "next/image";
import Link from "next/link";
import { recentNews } from "@/app/constants/news";

export default function NewsPage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Latest News
          </h1>
          <p className="mt-3 text-gray-600">
            Stories and insights shaping the future.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {recentNews.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="relative h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                </div>

                <h2 className="text-xl font-semibold mb-3 text-indigo-600">
                  {post.title}
                </h2>

                <p className="text-gray-700 mb-4">
                  {post.excerpt}
                </p>

                <Link
                  href={`/jbc/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
