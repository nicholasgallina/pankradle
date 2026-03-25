"use client";
import { useState, useEffect } from "react";

type NewsItem = {
  title: string;
  link: string;
};

export default function NewsTicker() {
  const [items, setItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="w-full bg-transparent border-b border-[#a98148] overflow-hidden py-2">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.concat(items).map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm font-bold mx-8 hover:text-[#7bda60] hover:scale-110 transition-colors transition-transform"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
