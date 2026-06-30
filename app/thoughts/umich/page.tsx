import Link from "next/link";

export default function UMichPost() {
  return (
    <article className="flex flex-col gap-8 mt-4">
      <Link href="/thoughts" className="text-sm font-medium text-gray-500 hover:text-black dark:hover:text-white transition-colors w-fit">
        ← Back to Thoughts
      </Link>

      <div className="border-b border-gray-200 dark:border-gray-800 pb-6 mb-2">
        <h1 className="text-4xl font-bold tracking-tight mb-4">University of Michigan: The Crazy Journey</h1>
        <span className="text-sm text-gray-500 font-medium">June 2026</span>
      </div>

      <div className="flex flex-col gap-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>Looking back, my two years at Michigan were absolutely crazy. It was my first time living long-term in the US: sharing an old 2B1B apartment, buying and assembling my own furniture, grocery shopping, and cooking my own meals. So many of my life's "firsts" happened in Ann Arbor. If I had been alone, it might have been miserable, but thankfully, I had 80 to 90 classmates from SJTU who made the journey with me. We supported each other in this unfamiliar place, and our weekly hot pot dinners, board game nights, and amateur pool sessions were the emotional anchors that helped me survive the harsh Ann Arbor winters.</p>
        
        <p>Academically, it was just as intense. Looking at my transcript—Operating Systems, Distributed Systems, Web Systems, Computer Organization, Machine Learning, Software Engineering, Computer Vision, Conversational AI—I took almost everything I could get my hands on. UMich has an incredibly diverse curriculum, and despite taking so many rigorous courses, I still regret not squeezing in databases, security, or networking. In that environment, I constantly felt like there was so much more to learn. UMich is truly a magical place; it took someone who once doubted whether they belonged in CS and turned them into a fanatic.</p>
        
        <p>If I had to choose my three favorite professors at UMich, they would be Prof. Mark Guzdial, Prof. Brian Noble, and Prof. Westley Weimer.</p>
        
        <p>Prof. Weimer and Prof. Noble are incredibly genuine and engaging. I highly recommend their courses to any Michigan student. Prof. Weimer's Software Engineering class cemented my desire to dive deep into engineering and taught me invaluable lessons about large-scale software practices. Meanwhile, Prof. Noble's Intro to Distributed Systems elevated my understanding of "systems" to a whole new dimension—a dimension where absolute time doesn't exist, where nodes act like they are in parallel universes, and where communication is the source of all truth.</p>
        
        <p>But more importantly, both of them are professors who are deeply eager to share. They weren't just lecturing; they were sharing their philosophies and life experiences. To summarize their philosophy: perfect engineering does not exist, human imagination is always chasing the possibilities created by computers, and the essence of all engineering is building "understanding"—whether between humans, humans and systems, or systems and systems. Between the energetic Prof. Weimer (who loved writing long essays on Piazza) and the seasoned, witty Prof. Noble, their classes never disappoint.</p>
        
        <p>Prof. Guzdial is an exceptional CS educator. When I approached him with an almost empty resume, I had no idea what an incredible journey was ahead. Without his recommendation letter, I likely wouldn't be at GT today. Over a year, I built two teaching platforms to support his courses. My contribution was small, but working with him allowed me to witness his genuine passion and profound knowledge firsthand. He actively puts his educational ideals into practice, pushing technology out of the engineering building and delivering it to younger students and people from entirely different backgrounds. I wish Mark the absolute best in his work.</p>
        
        <p>If you ask me how I view my two years at UMich, I'll be honest: I missed SJTU constantly while I was there. I missed the city, the weather, the food, and the people. But somehow, since leaving Ann Arbor, I've realized that the school left an indelible mark on my life. Perhaps Prof. Noble said it best: CS graduates from UMich don't introduce themselves as "CS people" or "engineers"—we introduce ourselves as Michigan people.</p>
        
        <p>So, just like I did in the Crisler Center watching NCAA games, I want to end this by shouting: Let's Go Blue!!!</p>
      </div>
    </article>
  );
}