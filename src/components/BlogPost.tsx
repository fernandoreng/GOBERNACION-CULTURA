import React from 'react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

export default function BlogPost({ title, excerpt, image, date, author }: BlogPostProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="text-gray-500 text-sm mb-2">{date} • {author}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{excerpt}</p>
        <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800">
          Mas informacion →
        </button>
      </div>
    </article>
  );
}