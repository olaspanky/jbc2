"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { recentNews } from "@/app/constants/news";
import { use } from "react";

type SingleNewsProps = {
  params: Promise<{ slug: string }>;
};

export default function SingleNewsPage({ params }: SingleNewsProps) {
  const router = useRouter();
  const { slug } = use(params);

  const post = recentNews.find((item) => item.slug === slug);

  if (!post) return <p>Post not found</p>;

  return (
    <article className="py-20 bg-white">
      <div className="max-w-[800px] mx-auto px-6">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-black hover:underline"
        >
          ← Back
        </button>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
          {post.title}
        </h1>

        {/* Meta */}  
        <div className="flex gap-4 text-sm text-black mb-8">
          <span>{post.date}</span>
        </div>

        {/* Image */}
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-black">
          <p>{post.content}</p>
        </div>
      </div>
    </article>
  );
}