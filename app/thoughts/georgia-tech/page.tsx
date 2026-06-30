import Link from "next/link";

export default function GeorgiaTechPost() {
  return (
    <article className="flex flex-col gap-8 mt-4">
      <Link href="/thoughts" className="text-sm font-medium text-gray-500 hover:text-black dark:hover:text-white transition-colors w-fit">
        ← Back to Thoughts
      </Link>

      <div className="border-b border-gray-200 dark:border-gray-800 pb-6 mb-2">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Georgia Tech: The Turning Point</h1>
        <span className="text-sm text-gray-500 font-medium">June 2026</span>
      </div>

      <div className="flex flex-col gap-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>This past year at GT has been a crucial turning point for me. It is the third university I have attended, and likely the last. This realization forced me to pause and genuinely reflect: Who am I outside of this academic environment? What kind of career do I actually want? How do I define my first twenty-three years, and what does the future hold?</p>
        
        <p>Throughout my four years as an undergraduate, I lived a highly driven life, yet one that lacked a true sense of purpose. Applying for dual-degree programs, graduate schools, research positions, competitions, and internships—these milestones fractured my college experience into a series of rigid destinations. I was constantly being pushed forward, leaving me with little time to stop and ask myself what my ultimate goal actually was. This past year at GT was just as busy with coursework, research, and internship hunting, yet I felt things beginning to slow down. I finally had the time and space to reflect, and GT provided the perfect environment for it. Is finding a job the ultimate goal? No, it is just another destination. Just as I didn’t believe the college entrance exam was the most important thing during high school, finding a job isn't the most important thing during my time at GT. It is a main quest, sure, but it is not the entire game.</p>
        
        <p>While I anchored my academic focus heavily on AI and HPC, I also took the time to explore fascinating subjects like Cognitive Science (CS 6795), Game AI (CS 7632), and Computer Animation (CS 7496). These might never make it onto my resume, but engaging with such interesting concepts at the end of my academic career ensures I will leave without regrets.</p>
        
        <p>Another fulfilling chapter has been my research. Early in college, I was frustrated that my interest in the intersection of humanities, history, and computer science wasn't widely recognized. During my UMich application, I even wrote an essay questioning why everyone cared about "CS + Finance" or "CS + Healthcare," but neglected "CS + History". After years of being too busy to pursue this, I finally picked it back up at GT. I am deeply grateful to Prof. Kartik Goyal for giving me the opportunity to make a small contribution to an academic field. Doing something I genuinely love and reclaiming a lost passion has been incredibly rewarding.</p>
        
        <p>If I had to set a goal for my final year at GT, it would simply be to leave no regrets: to cherish the rest of my student life, learn pure knowledge, do meaningful work, live simply, and prepare for whatever comes next.</p>
      </div>
    </article>
  );
}