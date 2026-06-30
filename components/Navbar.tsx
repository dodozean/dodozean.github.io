import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-8 border-b border-gray-200 dark:border-gray-800 mb-10">
      <Link href="/" className="text-2xl font-bold tracking-tight">
        Zean Chen
      </Link>
      
      <div className="flex items-center gap-6 text-base font-medium text-gray-600 dark:text-gray-400">
        <Link href="/experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</Link>
        <Link href="/projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</Link>
        <Link href="/thoughts" className="hover:text-black dark:hover:text-white transition-colors">Thoughts</Link>
        
        {/* Language Switcher Placeholder */}
        <div className="pl-4 border-l border-gray-300 dark:border-gray-700">
          <button className="hover:text-black dark:hover:text-white transition-colors" title="Switch to Chinese">
            EN / 中文
          </button>
        </div>
      </div>
    </nav>
  );
}