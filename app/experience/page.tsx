import Image from "next/image";
import Link from "next/link";

export default function Experience() {
  return (
    <div className="flex flex-col gap-16 mt-4">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Experience & Education
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A deeper dive into my professional roles, academic journey, and what I
          took away from each experience.
        </p>
      </div>

      {/* WORK EXPERIENCE SECTION */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight border-b border-gray-200 dark:border-gray-800 pb-3 mb-8">
          Work Experience
        </h2>

        <div className="flex flex-col gap-12">
          {/* Google Block */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/google.svg"
                  alt="Google Logo"
                  width={64}
                  height={64}
                  className="rounded-md object-contain shrink-0"
                />
                <div>
                  <h3 className="text-2xl font-semibold">Google</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mt-1">
                    Software Engineering Intern, Google Photos
                  </p>
                </div>
              </div>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">
                May 2026 – Present
              </span>
            </div>

            {/* Role Details */}
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
              <li>
                Engineering the memory updating function for the Photos Agent
                backend in Kotlin.
              </li>
              <li>
                Integrating the backend RPC to the current framework of Photos
                Agent as a tool using Python.
              </li>
              <li>
                Building the evaluation dataset and performing end-to-end
                evaluation of the tool calling function of the Agent.
              </li>
            </ul>
          </div>

          {/* FelixSphere Block */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/Felixsphere.png"
                  alt="Felixsphere Logo"
                  width={64}
                  height={64}
                  className="rounded-md object-contain shrink-0"
                />
                <div>
                  <h3 className="text-2xl font-semibold">FelixSphere</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mt-1">
                    Software Engineering Intern
                  </p>
                </div>
              </div>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">
                May 2024 – Aug 2024
              </span>
            </div>

            {/* Role Details */}
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
              <li>
                Architected an internal control system using Next.js, Tailwind
                CSS, and Java Spring Boot to manage data for SaaS products,
                integrating Amazon S3 buckets for secure storage.
              </li>
              <li>
                Developed Python scripts to automate the collection and
                processing of SaaS categorization data for the web platform.
              </li>
              <li>
                Built the frontend discovery platform utilizing Next.js and
                Tailwind CSS, focusing on responsive design and user experience.
              </li>
              <li>
                Collaborated with AI Engineers to deploy an AI Concierge system,
                enabling customers to interact with customized chatbots.
              </li>
              <li>
                Led quality assurance efforts by systematically testing and
                debugging web platform features to ensure reliable deployment.
              </li>
            </ul>

            {/* Personal Thoughts Box */}
            <details className="group mt-3 bg-gray-50 dark:bg-gray-900/50 border-l-4 border-blue-500 dark:border-blue-500 rounded-r-lg">
              <summary className="flex cursor-pointer items-center justify-between p-4 list-none [&::-webkit-details-marker]:hidden">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500">
                  Comments
                </h4>
                <svg
                  className="w-5 h-5 text-gray-500 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-gray-700 dark:text-gray-300 text-m">
                  As my very first professional role, FelixSphere offered me an
                  incredibly unique experience. Working in a fast-paced startup
                  environment, I learned firsthand how to collaborate with
                  cross-functional teams—including other engineers and product
                  managers—to design, implement, and rigorously test new
                  features. I was fortunate to witness entire systems being
                  built from early-stage planning to actual launch, and to get a
                  front-row seat to how AI is actively reshaping the tech
                  industry. I owe a special thanks to CEO{" "}
                  <a
                    href="https://www.linkedin.com/in/yuchengwangcmu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 font-semibold hover:underline underline-offset-4"
                  >
                    Yucheng Wang
                  </a>{" "}
                  for taking a chance on a rookie engineer, and to{" "}
                  <a
                    href="https://www.linkedin.com/in/dinggan-jin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 font-semibold hover:underline underline-offset-4"
                  >
                    Dinggan Jin
                  </a>{" "}
                  for his invaluable mentorship throughout my internship. Wish
                  you all the best!
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight border-b border-gray-200 dark:border-gray-800 pb-3 mb-8">
          Education
        </h2>

        <div className="flex flex-col gap-12">
          {/* Georgia Tech Block */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/Georgia Tech Logo.png"
                  alt="Georgia Tech Logo"
                  width={64}
                  height={64}
                  className="rounded-md object-contain shrink-0"
                />
                <div>
                  <h3 className="text-2xl font-semibold">
                    Georgia Institute of Technology, College of Computing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mt-1">
                    Master of Science in Computer Science
                  </p>
                </div>
              </div>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">
                Aug 2025 – May 2027
              </span>
            </div>

            {/* GPA & Courses - Rendered as "Chips" */}
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-sm font-semibold rounded-md border border-yellow-200 dark:border-yellow-800/50">
                GPA: 4.0 / 4.0
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                High-Performance Computing
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                Deep Learning
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                Deep Reinforcement Learning
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                Game AI
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                Artificial Intelligence
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-md">
                High-Performance Parallel Computing (2026 Fall)
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-md">
                Deep Learning for Text Data (2026 Fall)
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-md">
                Computational Science & Engineering Algorithms (2026 Fall)
              </span>
            </div>

            {/* Academic/Research Details */}
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed mt-2">
              <li>
                Specializing in Artificial Intelligence and High-Performance
                Computing.
              </li>
              <li>
                Conducting research with{" "}
                <a
                  href="https://kartikgo.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-semibold hover:underline underline-offset-4"
                >
                  Prof. Kartik Goyal
                </a>{" "}
                on cross-linguistic translation alignment for Ancient Greek and
                Latin texts.
              </li>
              <li>
                Actively exploring advanced coursework and projects while
                enjoying on-campus life in Atlanta.
              </li>
            </ul>

            {/* Personal Thoughts Box */}
            <div className="mt-4 p-5 bg-gray-50 dark:bg-gray-900/50 border-l-4 border-yellow-500 rounded-r-lg flex flex-col gap-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500">
                Reflections
              </h4>
              <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                "This past year at GT has been a crucial turning point for me.
                It is the third university I have attended, and likely the last.
                This realization forced me to pause and genuinely reflect..."
              </p>
              <Link
                href="/thoughts/georgia-tech"
                className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline w-fit"
              >
                Read full reflection ↗
              </Link>
            </div>
          </div>

          {/* UMich Block */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/umich.png"
                  alt="University of Michigan Logo"
                  width={64}
                  height={64}
                  className="rounded-md object-contain shrink-0 bg-white"
                />
                <div>
                  <h3 className="text-2xl font-semibold">
                    University of Michigan, College of Engineering
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mt-1">
                    Bachelor of Science in Computer Science
                  </p>
                </div>
              </div>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">
                Aug 2023 – May 2025
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-semibold rounded-md border border-blue-200 dark:border-blue-800/50">
                GPA: 3.9 / 4.0
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                Intro to Distributed Systems
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                Conversational AI
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                Intro to Operating Systems
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                Intro to Machine Learning
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                Intro to Computer Organization
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                ML Research Experience
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                Software Engineering
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                Web Systems
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                Computer Vision
              </span>
            </div>

            {/* Academic/Research Details */}
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed mt-2">
              <li>
                Transitioned from foundational computer science principles to
                advanced, specialized topics across the CS spectrum.
              </li>
              <li>
                Collaborated with{" "}
                <a
                  href="https://kumarshivani.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-semibold hover:underline underline-offset-4"
                >
                  Shivani Kumar
                </a>{" "}
                at{" "}
                <a
                  href="https://blablablab.si.umich.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-semibold hover:underline underline-offset-4"
                >
                  The Blablablab
                </a>{" "}
                on researching{" "}
                <a
                  href="https://arxiv.org/abs/2509.21443"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-semibold hover:underline underline-offset-4"
                >
                  cross-linguistic misalignments in computational moral
                  reasoning
                </a>
                .
              </li>
              <li>
                Partnered with{" "}
                <a
                  href="https://guzdial.engin.umich.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-semibold hover:underline underline-offset-4"
                >
                  Prof. Mark Guzdial
                </a>{" "}
                and{" "}
                <a
                  href="https://www.edodoo.me/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-semibold hover:underline underline-offset-4"
                >
                  Emma Dodoo
                </a>{" "}
                to develop and launch two web-based teaching platforms for
                COMPFOR 111 and COMPFOR 121.
              </li>
              <li>
                Embraced my first long-term experience living in the US—Go Blue!
              </li>
            </ul>

            <div className="mt-4 p-5 bg-gray-50 dark:bg-gray-900/50 border-l-4 border-blue-800 rounded-r-lg flex flex-col gap-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500">
                Reflections
              </h4>
              <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                "Looking back, my two years at Michigan were absolutely crazy.
                It was my first time living long-term in the US: sharing an old
                2B1B apartment, buying and assembling my own furniture..."
              </p>
              <Link
                href="/thoughts/umich"
                className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline w-fit"
              >
                Read full reflection ↗
              </Link>
            </div>
          </div>

          {/* SJTU Block */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/sjtu.png"
                  alt="SJTU Logo"
                  width={64}
                  height={64}
                  className="rounded-md object-contain shrink-0 bg-white"
                />
                <div>
                  <h3 className="text-2xl font-semibold">
                    Shanghai Jiao Tong University, UM-SJTU Joint Institute
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mt-1">
                    Bachelor of Engineering in Electrical and Computer
                    Engineering
                  </p>
                </div>
              </div>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">
                Sept 2021 – Aug 2025
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 text-sm font-semibold rounded-md border border-red-200 dark:border-red-800/50">
                GPA: 3.63 / 4.0
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                Programming and Elementary Data Structures
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                Intro to Engineering
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                Intro to Logic Design
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                Intro to Signals and Systems
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                Discrete Mathematics
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                Honors Mathematics II, III & IV
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md">
                Probabilistic Methods in Engineering
              </span>
            </div>

            {/* Academic/Research Details */}
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed mt-2">
              <li>
                Established a rigorous foundation in Electrical and Computer
                Engineering principles.
              </li>
              <li>
                Completed the capstone project: "Differential Upgrade Package
                Solution for Linux File System" in collaboration with{" "}
                <a
                  href="https://www.uaes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-semibold hover:underline underline-offset-4"
                >
                  UAES
                </a>
                .
              </li>
              <li>
                Marked the crucial starting point of my academic and
                professional journey in technology.
              </li>
            </ul>

            <div className="mt-4 p-5 bg-gray-50 dark:bg-gray-900/50 border-l-4 border-red-600 rounded-r-lg flex flex-col gap-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500">
                Reflections
              </h4>
              <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                "SJTU was the starting point of everything, and the UM-SJTU
                Joint Institute was the true first stop of my academic journey.
                I spent two incredibly fulfilling years there..."
              </p>
              <Link
                href="/thoughts/sjtu"
                className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline w-fit"
              >
                Read full reflection ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
