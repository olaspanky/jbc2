"use client";

import { useState } from "react";
import Image from "next/image";
import { recentNews } from "../constants/news";

export default function NewsBlogSection() {
  const [openPost, setOpenPost] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Latest News
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Stories, insights, and updates shaping the future.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {recentNews.map((post) => {
            const isOpen = openPost === post.id;

            return (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    {/* <span className="uppercase tracking-wide font-medium">
                      {post.category}
                    </span> */}
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {isOpen ? post.content : post.excerpt}
                  </p>

                  {/* Read more */}
                  <button
                    onClick={() =>
                      setOpenPost(isOpen ? null : post.id)
                    }
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-black hover:underline"
                  >
                    {isOpen ? "Show less" : "Read more"}
                    <span className="text-lg">
                      {isOpen ? "←" : "→"}
                    </span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
