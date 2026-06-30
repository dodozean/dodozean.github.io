import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 mt-4">
      {/* 1. Hero Section (H1) */}
      <section className="flex flex-col-reverse sm:flex-row gap-10 items-start justify-between">
        <div className="flex flex-col gap-6 max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight">Hi, I'm Zean.</h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            I am a Master's student studying Computer Science at Georgia Tech
            and currently working as a Software Engineering Intern with the
            Google Photos team at Google.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            I am an engineer, and sometimes a researcher. During my college
            study, one thing I've learned about myself is that, I highly enjoy
            the process of building something that can help others.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            I've explored many different fields of Computer Science in the past
            few years through internships, course projects, and research
            projects. That includes AI/ML, High Performance Computing, Deep
            Learning, Reinforcement Learning, Distributed Systems, Web Systems,
            Operating Systems, Software Engineering and so on.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            If you want to know more about me, about my{" "}
            <Link
              href="/experience"
              rel="noopener noreferrer"
              className="text-blue-400 font-semibold hover:underline underline-offset-4"
            >
              past experiences
            </Link>
            , my{" "}
            <Link
              href="/projects"
              rel="noopener noreferrer"
              className="text-blue-400 font-semibold hover:underline underline-offset-4"
            >
              projects
            </Link>
            , or{" "}
            <Link
              href="/thoughts"
              rel="noopener noreferrer"
              className="text-blue-400 font-semibold hover:underline underline-offset-4"
            >
              some of my thoughts
            </Link>
            , feel free to check them in this website.
          </p>
          <div className="flex gap-6 mt-2">
            <a
              href="https://github.com/dodozean"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold hover:underline underline-offset-4"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/zean-chen-7119a32a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold hover:underline underline-offset-4"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="shrink-0">
          <Image
            src="/linkedin_photo.jpg"
            alt="Zean Chen"
            width={225}
            height={225}
            className="rounded object-cover shadow-sm ring-1 ring-gray-200 dark:ring-gray-800"
            priority
          />
        </div>
      </section>

      {/* 2. Experience Section (H2 -> H3) */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight border-b border-gray-200 dark:border-gray-800 pb-3 mb-8">
          Experience
        </h2>

        <div className="flex flex-col gap-8">
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
                <h3 className="text-xl font-semibold">Google</h3>
                <p className="text-gray-600 dark:text-gray-400 text-base mt-1">
                  Software Engineering Intern, Google Photos
                </p>
              </div>
            </div>
            <span className="text-sm text-gray-500 font-medium whitespace-nowrap sm:mt-0 mt-2">
              May 2026 – Present
            </span>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/Felixsphere.png"
                  alt="FelixSphere Logo"
                  width={64}
                  height={64}
                  className="rounded-md object-contain shrink-0"
                />
                <div>
                  <h3 className="text-xl font-semibold">FelixSphere</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-base mt-1">
                    Software Engineering Intern
                  </p>
                </div>
              </div>
              <span className="text-sm text-gray-500 font-medium whitespace-nowrap sm:mt-0 mt-2">
                May 2024 – August 2024
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Education Section (H2 -> H3) */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight border-b border-gray-200 dark:border-gray-800 pb-3 mb-8">
          Education
        </h2>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/Georgia Tech Logo.png"
                alt="Georgia Tech Logo"
                width={64}
                height={64}
                className="rounded-md object-contain shrink-0 bg"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  Georgia Institute of Technology
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base mt-1">
                  Master of Science in Computer Science
                </p>
              </div>
            </div>
            <span className="text-sm text-gray-500 font-medium whitespace-nowrap sm:mt-0 mt-2">
              Aug 2025 – May 2027
            </span>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/umich.png"
                alt="University of Michigan Logo"
                width={64}
                height={64}
                className="rounded-md object-contain shrink-0"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  University of Michigan
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base mt-1">
                  Bachelor of Science in Computer Science
                </p>
              </div>
            </div>
            <span className="text-sm text-gray-500 font-medium whitespace-nowrap sm:mt-0 mt-2">
              Aug 2023 – May 2025
            </span>
          </div>

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
                <h3 className="text-xl font-semibold">
                  Shanghai Jiao Tong University
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base mt-1">
                  Bachelor of Engineering in Electrical and Computer Engineering
                </p>
              </div>
            </div>
            <span className="text-sm text-gray-500 font-medium whitespace-nowrap sm:mt-0 mt-2">
              Sept 2021 – Aug 2025
            </span>
          </div>
        </div>
      </section>

      {/* 4. Beyond the Code Section (H2) */}
      {/* <section>
        <h2 className="text-2xl font-bold tracking-tight border-b border-gray-200 dark:border-gray-800 pb-3 mb-6">
          Beyond the Code
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
          When I am not writing code or running benchmarks, I closely follow
          Formula 1 and Liverpool FC, or manage complex logistics and automation
          in strategy simulation games.
        </p>
      </section> */}

      <div></div>
    </div>
  );
}
