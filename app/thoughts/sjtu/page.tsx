import Link from "next/link";

export default function SJTUPost() {
  return (
    <article className="flex flex-col gap-8 mt-4">
      <Link href="/thoughts" className="text-sm font-medium text-gray-500 hover:text-black dark:hover:text-white transition-colors w-fit">
        ← Back to Thoughts
      </Link>

      <div className="border-b border-gray-200 dark:border-gray-800 pb-6 mb-2">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Shanghai Jiao Tong University: The Starting Line</h1>
        <span className="text-sm text-gray-500 font-medium">June 2026</span>
      </div>

      <div className="flex flex-col gap-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>SJTU was the starting point of everything, and the UM-SJTU Joint Institute was the true first stop of my academic journey. I spent two incredibly fulfilling years there. If you look at my SJTU transcript now, it might seem like just a collection of foundational CS courses, some electrical circuits and signal systems knowledge I may never use again, an inexplicable number of humanities and history courses, and a capstone project. But I know those labels fall far short of summarizing my time there.</p>
        
        <p>From my first day at SJTU, I realized I was in a highly rigorous and complex environment. I was surrounded by peers who were obsessed with computer science; for them, coding, building projects, and doing research were both their work and their greatest passions. While I liked computer science, I didn't have that burning desire to dedicate my entire existence to it. This difference forced me to think deeply: How do I find my place in an institute filled with such intense competition? I wasn't an elite competitive programmer, nor did I have razor-sharp STEM intuition (I actually struggled quite a bit in basic courses like General Chemistry). So what did I have left? After my first semester, all I had to show for it was physical and mental exhaustion, a terrible GPA, and a profound confusion about my future.</p>
        
        <p>Fortunately, I let myself breathe during the next two semesters. Interestingly, I didn't try to tackle my problems head-on; I didn't scramble to do research, find internships, or desperately patch my technical weaknesses. Instead, I enrolled in a massive number of humanities courses that I genuinely cared about: Prof. Tong Xu's Chinese History in Global Perspective and East Asia: Food and Culture, Prof. Chan Yang's 20th Century History of China: History and Memory, and Prof. Andrew Yang's Asian American Literature. If I had chosen to major in history after high school, I might have been someone who loved taking CS classes. But since I chose CS, I became the "weirdo" in the engineering school who obsessively took humanities classes.</p>
        
        <p>However, during this detour, I stumbled upon a phenomenal course: Intro to Engineering. For the first time, I experienced what it was like to build software from scratch as a team, and I happened to be the team lead. (I'll dive deeper into this experience in another blog post) . It was arguably one of the most important courses of my college life. It proved one thing to me: I might never become the world's most elite low-level code expert or the most brilliant computer scientist, but I actually have the potential to become an excellent software engineer.</p>
        
        <p>There are countless other memories from SJTU: pulling all-nighters for the mathematical modeling competition, the nerve-wracking dual-degree application process, the strange major courses during my sophomore year, working as Prof. Tong Xu's TA, my IPP research project, and my final capstone project. They might seem insignificant now, but the most important part of these experiences was the people I met. Eating street skewers in our military training uniforms, cramming seven or eight people into a dorm room for board games, walking around campus late at night talking for hours, watching the League of Legends World Championship and the FIFA World Cup with the entire dorm building screaming, and even the covertly organized staggered shower schedules and grocery-sniping during the COVID-19 lockdowns... I can confidently say that the overall caliber and character of the people I met at SJTU exceeded anyone I’ve met in any other universities. It was an absolute honor to learn and live alongside them.</p>
        
        <p>I used to have my share of complaints about the Joint Institute from enrollment to graduation, but if you ask me to evaluate my time at SJTU now, I will sincerely say: Thank you, SJTU. It remains the most cherished chapter of my college life.</p>
      </div>
    </article>
  );
}