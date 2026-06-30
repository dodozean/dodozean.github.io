import Link from "next/link";

export default function Thoughts() {
  const posts = [
    {
      slug: "georgia-tech",
      title: "Georgia Tech: The Turning Point",
      date: "June 2026",
      excerpt: "This past year at GT has been a crucial turning point for me. It is the third university I have attended, and likely the last. This realization forced me to pause and genuinely reflect...",
    },
    {
      slug: "umich",
      title: "University of Michigan: The Crazy Journey",
      date: "June 2026",
      excerpt: "Looking back, my two years at Michigan were absolutely crazy. It was my first time living long-term in the US: sharing an old 2B1B apartment, buying and assembling my own furniture...",
    },
    {
      slug: "sjtu",
      title: "Shanghai Jiao Tong University: The Starting Line",
      date: "June 2026",
      excerpt: "SJTU was the starting point of everything, and the UM-SJTU Joint Institute was the true first stop of my academic journey. I spent two incredibly fulfilling years there...",
    },
  ];

  return (
    <div className="flex flex-col gap-10 mt-4">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Thoughts</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Reflections on my academic journey, software engineering, and life.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <Link href={`/thoughts/${post.slug}`} key={post.slug} className="group flex flex-col gap-2 block p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
            <h2 className="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {post.title}
            </h2>
            <span className="text-sm text-gray-500 font-medium">
              {post.date}
            </span>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
              {post.excerpt}
            </p>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-2">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}