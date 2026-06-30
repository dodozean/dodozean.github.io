import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex flex-col gap-16 mt-4">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Projects & Research
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          A collection of my projects divided into four main areas. Jump to:{" "}
          <a href="#ml-ai" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Machine Learning & AI</a>,{" "}
          <a href="#systems-engineering" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Systems Engineering</a>,{" "}
          <a href="#software-engineering" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Software Engineering</a>, and{" "}
          <a href="#computational-modeling" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Computational Modeling</a>.
        </p>
      </div>

      {/* CATEGORY 1: MACHINE LEARNING & AI */}
      <section>
        <h2 id="ml-ai" className="scroll-mt-8 text-2xl font-bold tracking-tight border-b border-gray-200 dark:border-gray-800 pb-3 mb-8">
          Machine Learning & AI
        </h2>
        <div className="flex flex-col gap-10">
          {/* Project: Moral Reasoning */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h3 className="text-xl font-semibold">
                Moral Reasoning in LLMs for Multilingual Contexts
              </h3>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap mt-2 sm:mt-0">
                Sept 2024 – May 2025
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-l">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Sualeha Farid, Jayden Lin, <strong>Zean Chen</strong>, Shivani
                Kumar, David Jurgens
              </span>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <a
                href="https://arxiv.org/abs/2509.21443"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Paper: Under review at a top-tier NLP conference. ↗
              </a>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
              This research investigates how language mediates the moral
              decision-making capabilities of Large Language Models (LLMs). By
              translating two established moral reasoning benchmarks
              (MoralExceptQA and ETHICS) into five diverse languages, the study
              conducts multilingual zero-shot evaluations across several popular
              LLMs. The findings reveal significant cross-linguistic
              inconsistencies in the models' ethical judgments, exposing
              underlying cultural misalignments and the strong influence of
              pretraining data. Ultimately, the work distills these insights
              into a structured typology of moral reasoning errors, highlighting
              the critical need for more culturally aware AI systems.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2 font-medium">
              What I've done in this project:
            </p>

            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2 mt-1">
              <li>
                Evaluated existing datasets to assess moral reasoning
                capabilities in LLMs.
              </li>
              <li>
                Benchmarked and selected optimal tools to conduct large-scale
                dataset translations.
              </li>
              <li>
                Analyzed the multilingual moral reasoning performance of various
                LLMs using the translated datasets.
              </li>
            </ul>

            <details className="group mt-3 bg-gray-50 dark:bg-gray-900/50 border-l-4 border-gray-300 dark:border-gray-700 rounded-r-lg">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-gray-700 dark:text-gray-300 text-m">
                  I am incredibly grateful that during my final year at UMich, I
                  had the opportunity to work alongside Post-doc Shivani Kumar on
                  this cutting-edge research project. My role in this project was
                  heavily focused on the engineering side. For instance, I was
                  responsible for selecting representative datasets, identifying
                  and deploying appropriate models and APIs to translate massive
                  amounts of data, and constructing a robust pipeline for both
                  translation and evaluation. I also spent a lot of time
                  "battling" the lab servers to successfully deploy and run
                  various open-source models for these tasks. Once the heavy
                  lifting of translation and evaluation was complete, I
                  participated in the initial analysis of the experimental
                  results. Unfortunately, due to my impending graduation and
                  various scheduling conflicts, I couldn't be heavily involved in
                  the final analysis and paper drafting. Despite my absence in the
                  final stretch, Sualeha, Jayden, and Shivani did truly
                  outstanding work to seamlessly complete the research project. I
                  am deeply thankful to them! I hope that in the near future
                  (which seems highly likely now), this paper will successfully
                  make its debut at a top-tier global academic conference!
                </p>
              </div>
            </details>
          </div>

          {/* Project: Impossible Distillation */}
          <div className="flex flex-col gap-3 pt-6 border-t border-gray-100 dark:border-gray-800/50">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h3 className="text-xl font-semibold">
                High-Quality Efficient Distillation for Small LMs
              </h3>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap mt-2 sm:mt-0">
                Aug 2024 – Dec 2024
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-l">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                <strong>Zean Chen</strong>, Tianhong Gao, Zejia Shen, Shihui
                Sun, Yihao Sun, Wentao Wei
              </span>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <a
                href="https://drive.google.com/file/d/1DRJbSOggHUiYHAysyqDtESEOvBJhW_T8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Paper ↗
              </a>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
              This is a course project (EECS 498 Machine Learning Research
              Experience) that replicates and extends the "Impossible
              Distillation" framework to produce high-quality,
              resource-efficient language models for paraphrasing tasks. The
              study first validated the framework's original metrics by
              successfully replicating its data generation process, using GPT-2
              to create a robust synthetic paraphrase dataset. To address the
              substantial computational costs typically required for model
              training, the research introduced a novel extension by integrating
              Low-Rank Adaptation (LoRA) into the fine-tuning process of a
              T5-small student model. This approach significantly reduced the
              number of trainable parameters from 60.5 million down to just
              147,000. Ultimately, the LoRA-integrated model achieved
              performance levels comparable to fully fine-tuned models while
              drastically lowering memory and time requirements, offering a
              highly scalable solution for democratizing advanced NLP
              capabilities.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2 font-medium">
              What I've done in this project:
            </p>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2 mt-1">
              <li>
                Assisted in the synthetic dataset generation process utilizing
                the Impossible Distillation pipeline.
              </li>
              <li>
                Implemented the parameter-efficient fine-tuning mechanism for
                the T5 model by integrating Low-Rank Adaptation (LoRA).
              </li>
              <li>
                Collaborated with the research team to conduct experiments and
                thoroughly analyze the model evaluation results.
              </li>
            </ul>

            <details className="group mt-3 bg-gray-50 dark:bg-gray-900/50 border-l-4 border-gray-300 dark:border-gray-700 rounded-r-lg">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-gray-700 dark:text-gray-300 text-m">
                  This was a course project for UMich's EECS 498 (Machine
                  Learning Research Experience), aimed at replicating a recent ML
                  paper and extending it appropriately. I should clarify that our
                  paper's author order is strictly alphabetical and does not
                  reflect the level of contribution. The de facto leader of our
                  group was Zejia Shen; he was the one who proposed replicating
                  "Impossible Distillation" and keenly suggested extending it
                  using LoRA. During the project, I was primarily responsible for
                  the entire LoRA extension segment, collaborating closely with
                  Yihao Sun and Tianhong Gao. Specifically, I architected and
                  verified the LoRA fine-tuning framework, while Tianhong and
                  Yihao diligently ran the extensive experimental iterations on
                  Colab. Afterwards, we analyzed the experimental results together
                  and brainstormed how to design supplementary experiments to
                  solidify our paper's narrative. It was a pleasure working with
                  everyone! This was truly an enjoyable experience and probably
                  the smoothest research project I have ever been a part of.
                  Although the results make perfect logical sense in hindsight, at
                  the time—when we actually observed that integrating LoRA
                  drastically reduced the trainable parameter count while
                  simultaneously yielding significantly better fine-tuning
                  results—I was genuinely thrilled and amazed. Perhaps this
                  exhilarating sense of discovery is the true charm of ML
                  research.
                </p>
              </div>
            </details>
          </div>

          {/* Project: SoccerTwo */}
          <div className="flex flex-col gap-3 pt-6 border-t border-gray-100 dark:border-gray-800/50">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h3 className="text-xl font-semibold">
                Multi-Agent Reinforcement Learning in Competitive Soccer
                Environments
              </h3>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap mt-2 sm:mt-0">
                April 2026 – May 2026
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-l">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                <strong>Zean Chen</strong>, Huijie Tang
              </span>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <a
                href="https://drive.google.com/file/d/1yIp2g4B8nlzEi3ZHGiTRQh9jRXRcebXk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Paper ↗
              </a>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
              This is a course project (CS 8803 Deep Reinforcement Learning)
              that focuses on training a competitive autonomous agent for the
              Unity SoccerTwos 2v2 environment using Multi-Agent Proximal Policy
              Optimization (MAPPO). To overcome the environment's sparse rewards
              and prevent sub-optimal keep-away behaviors, the default
              observation space was expanded and complex reward shaping was
              introduced. By implementing dense velocity-based rewards, strict
              anti-swarm penalties, and zonal defense constraints, the agent
              naturally discovered a hyper-aggressive, 1.5-second kickoff rush
              strategy. This highly coordinated "speedrunner" approach
              systematically dismantled standard positional play, achieving an
              8-1-1 win-loss-draw record against the baseline evaluation model.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2 font-medium">
              What I've done in this project:
            </p>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2 mt-1">
              <li>
                Engineered a custom MAPPO architecture using the Ray RLlib
                framework to train continuous-control agents in an adversarial
                multi-agent environment.
              </li>
              <li>
                Augmented the baseline 336-dimensional observation space with 20
                additional dimensions to explicitly track the velocity and
                position of all agents and the ball.
              </li>
              <li>
                Designed a dense, multi-faceted reward function incorporating
                potential-based velocity shaping, contact spikes, and strict
                spatial constraints to enforce offensive progression and team
                coordination.
              </li>
              <li>
                Executed self-play training loops across local and PACE-ICE
                high-performance computing environments, utilizing a rotating
                opponent bank to develop a robust, generalized meta.
              </li>
            </ul>

            <details className="group mt-3 bg-gray-50 dark:bg-gray-900/50 border-l-4 border-gray-300 dark:border-gray-700 rounded-r-lg">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-gray-700 dark:text-gray-300 text-m">
                  First of all, this was a course project with equal
                  contributions; Huijie Tang and I did the exact same amount of
                  work. We trained our models on the same foundation and regularly
                  shared experiences and checkpoints. This project truly made me
                  appreciate the charm of Reinforcement Learning (RL). I would
                  stay up until 3 AM with bloodshot eyes, staring motionlessly at
                  various curves on TensorBoard, refusing to sleep until I saw the
                  reward curve smoothing out, only to wake up excitedly the next
                  morning to check the results. Huijie summed it up perfectly:
                  training an RL agent is like teaching a child prodigy; watching
                  them get smarter step by step is incredibly rewarding.
                  Admittedly, I was a bit too obsessed at the time, to the point
                  where I had to force myself to stop improving the model and just
                  submit it for the sake of my health, otherwise I would have
                  pulled endless all-nighters. Jokes aside, the most important
                  lesson I learned from this project was: trust the model, not
                  just your own intuition. Playing football is an inherently
                  sparse-reward task, so we had to add various artificial
                  incentives to teach the model how to operate. However, as a
                  football fan, I might have over-engineered it. After witnessing
                  the model's reward curves skyrocket time and again, I decided to
                  let go of my control freak tendencies and trust the model
                  more—and the actual performance improved! Although I did design
                  some pretty ingenious rewards to enhance the agent, I am
                  convinced that excessive human intervention often makes things
                  worse. After all, you can imagine how a reward might improve the
                  model, but you can never predict the bizarre and creative ways
                  this smart model will invent to "hack" your reward. It is indeed
                  a child prodigy, but also a cunning one that is always looking
                  for shortcuts.
                </p>
              </div>
            </details>
          </div>

          {/* Project: FER */}
          <div className="flex flex-col gap-3 pt-6 border-t border-gray-100 dark:border-gray-800/50">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h3 className="text-xl font-semibold">
                Facial Expression Recognition via Hybrid ViT and CNN
                Architectures
              </h3>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap mt-2 sm:mt-0">
                Mar 2026 – May 2026
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-l">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                <strong>Zean Chen</strong>, Yubing Jing, Ziming Zhang
              </span>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <a
                href="https://drive.google.com/file/d/18bzOnlGFpnuJyZFQDunPLeaQwv_SHVWa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Paper ↗
              </a>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
              This is a course project (CS 7643 Deep Learning) that evaluates
              Convolutional Neural Networks (CNNs) and Vision Transformers
              (ViTs) for Automated Facial Expression Recognition (FER) on the
              heavily imbalanced FER-2013 dataset. To combat data starvation in
              minority emotion classes, the dataset was synthetically expanded
              using the Synthetic Minority Over-sampling Technique (SMOTE). By
              pairing this synthetic data augmentation with specialized
              architectural scaling, a custom Visual Texture-Feature Fusion
              (VTFF) model achieved a peak accuracy of 71%, significantly
              outperforming standard baseline architectures.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2 font-medium">
              What I've done in this project:
            </p>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2 mt-1">
              <li>
                Built the core project infrastructure to support the training
                and evaluation pipelines.
              </li>
              <li>
                Implemented the baseline Mini-Xception convolutional neural
                network and the PAtt-Lite hybrid attention architecture.
              </li>
              <li>
                Engineered the SMOTE pipeline to perform feature-level data
                synthesis, successfully mitigating severe class imbalances
                across the dataset.
              </li>
            </ul>

            <details className="group mt-3 bg-gray-50 dark:bg-gray-900/50 border-l-4 border-gray-300 dark:border-gray-700 rounded-r-lg">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-gray-700 dark:text-gray-300 italic text-sm">
                  This was a relatively small course project. I was glad to
                  collaborate with Yubin Jiang and Ziming Zhang (for the second
                  time) on this comprehensive comparative study on facial
                  expression recognition. Although I basically managed the
                  project's overall progression, the part I enjoyed the most was
                  building the unified training and evaluation infra for the
                  pipeline. To be honest, the initial version had quite a few bugs
                  and blind spots that required multiple hotfixes later on, but
                  building the whole thing from scratch was still a highly
                  satisfying experience. There isn't much to say about the
                  project's core task—it wasn't my first time doing image
                  recognition, and I had already fought my fair share of battles
                  training CNNs. The biggest takeaway was finally having an excuse
                  to try training various Vision Transformer (ViT) architectures.
                  ViT truly is a "data devourer"—with enough layers and enough
                  data, it uses sheer brute force to achieve results that
                  carefully crafted CNNs can only just manage. Naturally,
                  constrained by the task type, data sources, and the limited
                  scale of a course project, we didn't have time to verify every
                  hypothesis we had. But when I used an old algorithm from 2002
                  (SMOTE) to synthesize a bunch of low-quality data and found that
                  it significantly improved the performance of various models, I
                  could only sigh and admit: deep learning really is a magical
                  black box.
                </p>
              </div>
            </details>
          </div>

          {/* Project: Landmark Classification */}
          <div className="flex flex-col gap-3 pt-6 border-t border-gray-100 dark:border-gray-800/50">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h3 className="text-xl font-semibold">
                Landmark Image Classification using CNNs and Transfer Learning
              </h3>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap mt-2 sm:mt-0">
                Mar 2024 - Apr 2024
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-l">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Individual Course Project for EECS 445 Intro to Machine Learning
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2 font-medium">
              What I've done in this project:
            </p>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2 mt-1">
              <li>
                Implemented CNN architectures using PyTorch to solve a binary
                classification task between specific landmarks (Pantheon vs.
                Hofburg Imperial Palace).
              </li>
              <li>
                Utilized supervised pretraining and transfer learning
                techniques, leveraging a larger source dataset (8 additional
                landmarks) to initialize and freeze specific convolutional
                layers, significantly improving target task performance.
              </li>
              <li>
                Employed Gradient-weighted Class Activation Mapping (Grad-CAM)
                to visualize the CNN's feature extraction process, confirming
                the model's reliance on background context (e.g., the sky)
                rather than distinct architectural elements.
              </li>
              <li>
                Applied data augmentation techniques, including grayscale
                conversion and random rotations, to enforce feature invariance
                and reduce the model's susceptibility to overfitting on trivial
                background noise.
              </li>
              <li>
                Engineered a final custom challenge model that integrated
                transfer learning (freezing two convolutional layers), an
                aggressive grayscale data augmentation strategy, and an
                optimized L2 weight decay to maximize the AUROC score on a
                held-out test set.
              </li>
            </ul>

            <details className="group mt-3 bg-gray-50 dark:bg-gray-900/50 border-l-4 border-gray-300 dark:border-gray-700 rounded-r-lg">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-gray-700 dark:text-gray-300 text-m">
                  This was the second project for EECS 445, and my very first
                  hands-on experience with deep learning (even if it was just a
                  shallow CNN). The project experience itself wasn't particularly
                  dramatic, but what astonished me the most was the sheer power of
                  Transfer Learning. After all, while CNNs don't actively try to
                  hack reward functions like RL policies do, they still suffer
                  heavily from overfitting. The incredible generalization
                  capabilities achieved through Transfer Learning truly opened my
                  eyes. Looking back now, I can't help but wonder if the prior
                  knowledge gained through Transfer Learning shares a fundamental
                  conceptual similarity with the Pretraining mechanisms used in
                  today's Large Language Models.
                </p>
              </div>
            </details>
          </div>

          {/* Project: Amazon Review */}
          <div className="flex flex-col gap-3 pt-6 border-t border-gray-100 dark:border-gray-800/50">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h3 className="text-xl font-semibold">
                Machine Learning for NLP: Amazon Review Classification
              </h3>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap mt-2 sm:mt-0">
                Jan 2024 - Feb 2024
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-l">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Individual Course Project for EECS 445 Intro to Machine Learning
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2 font-medium">
              What I've done in this project:
            </p>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2 mt-1">
              <li>
                Developed SVM classifiers to determine movie review sentiment,
                experimenting with L1/L2 penalties, hinge/squared-hinge losses,
                and linear/quadratic kernels.
              </li>
              <li>
                Engineered custom NLP features by extracting 2-grams and 3-grams
                from raw text, and applied PCA to optimize and reduce the
                high-dimensional feature matrix.
              </li>
              <li>
                Addressed a 4:1 class imbalance by systematically tuning
                asymmetric cost weights in the SVM objective function,
                maintaining high accuracy while preventing majority-class bias
              </li>
              <li>
                Trained custom Word2Vec models to represent words as
                multi-dimensional vectors and evaluated semantic gender biases
                in the dataset using WEAT metrics.
              </li>
              <li>
                Designed a One-Vs-Rest (OVR) multiclass classification
                architecture to predict exact movie ratings from a held-out
                dataset.
              </li>
            </ul>

            <details className="group mt-3 bg-gray-50 dark:bg-gray-900/50 border-l-4 border-gray-300 dark:border-gray-700 rounded-r-lg">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-gray-700 dark:text-gray-300 text-m">
                  This project was essentially the starting point of my machine
                  learning journey. Although it focused on linear classifiers
                  rather than deep learning, and many of the tools used (like
                  SVMs, kernel engineering, and various obscure feature
                  engineering methods) have largely been phased out along with
                  traditional ML in academia, I still consider it highly important
                  to my growth. The value lay not necessarily in the specific
                  techniques, but in the experience itself. Machine learning is
                  fundamentally an engineering discipline; unless you actually get
                  your hands dirty, you will never truly grasp its essence.
                  Throughout the project, I explored algorithm selection,
                  hyperparameter tuning, and various engineering tricks. I used my
                  understanding of the confusion matrix to identify areas for
                  improvement, running experiments and repeating the cycle over
                  and over. The insights I gained from this iterative process are
                  simply things you cannot learn just by solving ML math
                  problems.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CATEGORY 2: SYSTEMS ENGINEERING */}
      <section>
        <h2 id="systems-engineering" className="scroll-mt-8 text-2xl font-bold tracking-tight border-b border-gray-200 dark:border-gray-800 pb-3 mb-8">
          Systems Engineering
        </h2>
        <div className="flex flex-col gap-10">
          {/* Project: EECS 482 */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h3 className="text-xl font-semibold">
                Core Systems Programming: Threads, Virtual Memory, and Remote FS
              </h3>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap mt-2 sm:mt-0">
                Jan 2024 - May 2024
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-l">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Maizhe Zhang, <strong>Zean Chen</strong>, Yijun Wang{" "}
                <span className="text-gray-300 dark:text-gray-700 px-2">|</span>
                Collection of Course Projects for EECS 482 Intro to Operating
                Systems
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2 font-medium">
              What I've done in this project:
            </p>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2 mt-1">
              <li>
                Engineered a custom user-level C++ thread library, managing
                thread lifecycles and low-level context switching
              </li>
              <li>
                Implemented core synchronization primitives from scratch,
                including mutexes and condition variables, to safely manage
                concurrent execution and thread pool resources.
              </li>
              <li>
                Designed a virtual memory manager with a comprehensive demand
                paging system, successfully handling page faults, eviction
                policies, and the distinction between swap-backed and
                file-backed memory.
              </li>
              <li>
                Architected a hierarchical, Unix-style remote file system,
                implementing complex path resolution logic to map directories
                and file names to their underlying physical storage locations.
              </li>
              <li>
                Developed the networking layer for the remote file system,
                utilizing TCP and RPC mechanisms to reliably handle
                client-server communication and execute remote file operations.
              </li>
            </ul>

            <details className="group mt-3 bg-gray-50 dark:bg-gray-900/50 border-l-4 border-gray-300 dark:border-gray-700 rounded-r-lg">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-gray-700 dark:text-gray-300 text-m">
                  Though listed as separate projects, these were actually three
                  assignments for EECS 482. I owe a huge thanks to Maizhe Zhang,
                  who is one of the most talented system-level programmers I have
                  ever met. Without his help, I highly doubt I could have
                  navigated the swamp of threads, pages, and file systems on my
                  own. I have to say, this was absolutely the hardest project of
                  my four-year undergraduate career, and it truly showed me why
                  operating systems are so notoriously complex. Both the design
                  and testing phases were exponentially more difficult than
                  standard software engineering. Fortunately, surviving this gave
                  me a new perspective. The experience taught me to heavily
                  prioritize high-level design choices before rolling up my
                  sleeves to write code. Even minor missteps, such as choosing the
                  wrong data structure, can burden a developer with massive
                  technical debt later on—if this is true for a class project, I
                  can only imagine how catastrophic it would be in a production
                  environment. After finishing this course, I can finally declare
                  that I conquered the hardest "gold-tier" class in the UMich EECS
                  curriculum. Thanks to my professor and my teammates!
                </p>
              </div>
            </details>
          </div>
          {/* Project: EECS 491 */}
          <div className="flex flex-col gap-3 pt-6 border-t border-gray-100 dark:border-gray-800/50">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h3 className="text-xl font-semibold">
                Scalable Distributed Key-Value Store: From Primary-Backup to
                Sharded Paxos
              </h3>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap mt-2 sm:mt-0">
                Jan 2025 - Apr 2025
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-l">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Collection of Individual Course Projects for EECS 491 Intro to
                Distributed Systems
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2 font-medium">
              What I've done in this project:
            </p>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2 mt-1">
              <li>
                Architected and iteratively evolved a high-performance
                distributed key-value storage system in Go, advancing from a
                centralized Primary-Backup replication model to a scalable,
                Sharded Multi-Paxos architecture.
              </li>
              <li>
                Developed the initial fault-tolerant storage layer utilizing a
                centralized View Service to process client queries (Get, Insert,
                Update, Delete), successfully supporting node failure detection
                and automatic failover.
              </li>
              <li>
                Engineered a robust distributed storage layer based on Paxos
                consensus, managing replicated state machines to achieve
                linearizable consistency while eliminating the need for a
                central server to manage multi-replica consistency.
              </li>
              <li>
                Designed a highly scalable sharded storage system by introducing
                a ShardMaster configuration service to dynamically partition
                data across multiple independent replica groups.
              </li>
              <li>
                Implemented a deterministic load-balancing algorithm to
                seamlessly handle cluster scaling and node joins/failures,
                executing shard reconfiguration via coordination between Paxos
                groups to minimize data movement.
              </li>
            </ul>

            <details className="group mt-3 bg-gray-50 dark:bg-gray-900/50 border-l-4 border-gray-300 dark:border-gray-700 rounded-r-lg">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-gray-700 dark:text-gray-300 text-m">
                  Similar to the EECS 482 projects, these were actually three
                  assignments for EECS 491. However, I genuinely loved working on
                  them, so I decided to include them in this project list anyway.
                  They were essentially three progressively difficult assignments.
                  The first was a relatively simple Primary-Backup system, where I
                  had to figure out how to handle new nodes joining, how to
                  replicate state to them, how to elegantly handle node failures,
                  and how to synchronize every incoming user query—this laid the
                  foundation for everything else. The second project introduced
                  Paxos. Implementing a Paxos system from scratch is incredibly
                  rewarding; it was fascinating to watch these nodes cooperate in
                  such a seemingly bizarre way to handle queries. The third
                  project upgraded the Paxos architecture from a group of
                  identical nodes holding all data into a Sharded System, where
                  groups of nodes stored different partitions. This was highly
                  challenging, especially from a design perspective. After
                  finishing these three projects, my biggest takeaway is that
                  understanding how computer systems operate is complex,
                  difficult, but utterly fascinating. Communication patterns that
                  seem perfectly logical will often produce mind-boggling bugs due
                  to completely unexpected edge cases. When that happens, you have
                  no choice but to comb through thousands of lines of logs to
                  figure out exactly what sequence of events caused the failure.
                  In these systems, nothing can be fully trusted: servers crash,
                  networks delay, and sometimes messages just drop entirely. Every
                  node, including the user, has its own role and can only rely on
                  constant communication to share information—which, in a way, is
                  a bit like human society, isn't it?
                </p>
              </div>
            </details>
          </div>
          {/* Project: Capstone*/}
          <div className="flex flex-col gap-3 pt-6 border-t border-gray-100 dark:border-gray-800/50">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h3 className="text-xl font-semibold">
                Differential Upgrade Package Solution for Linux File Systems
              </h3>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap mt-2 sm:mt-0">
                May 2025 – Aug 2025
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-l">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Yi Zhou, Yijun Wang, Yijing Jia, Zean Chen, Maizhe Zhang,
                Supervisor: Jigang Wu, Sponsor:{" "}
                <a
                  href="https://www.uaes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-semibold hover:underline underline-offset-4"
                >
                  UAES
                </a>
              </span>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <a
                href="https://drive.google.com/file/d/1CsE_q0GQCjeOAqZIBWRI4bMrfdONLEwu/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Paper ↗
              </a>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
              Developed as a senior capstone thesis at the UM-SJTU Joint
              Institute, this project delivers a highly efficient, differential
              over-the-air (OTA) upgrade framework tailored for
              resource-constrained automotive software systems. By replacing
              traditional full-package OTA methods with a modular, patch-based
              architecture, the system drastically reduces bandwidth and storage
              requirements. Validated on embedded Linux environments, the
              differential installer successfully executes updates with a
              minimal runtime memory footprint (peaking at ~3.87MB), proving its
              viability for production-grade deployment in modern vehicles.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2 font-medium">
              What I've done in this project:
            </p>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2 mt-1">
              <li>
                Architected a lightweight, differential over-the-air (OTA)
                upgrade framework tailored specifically for
                resource-constrained, Linux-based embedded automotive platforms.
              </li>
              <li>
                Engineered a Python-based patch generation pipeline utilizing
                hybrid diffing algorithms, including bsdiff and xdelta3, to
                aggressively minimize update payload sizes and optimize network
                transmission.
              </li>
              <li>
                Developed a robust C-based installer to execute patch deployment
                directly on the edge device, optimizing the runtime process to
                maintain a peak memory footprint of just 3.87MB—well within
                strict embedded system constraints.
              </li>
            </ul>

            <details className="group mt-3 bg-gray-50 dark:bg-gray-900/50 border-l-4 border-gray-300 dark:border-gray-700 rounded-r-lg">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-gray-700 dark:text-gray-300 text-m">
                  This was my capstone project at SJTU, and a rare, invaluable
                  experience in system engineering. My primary responsibility was
                  the concrete implementation of these two programs, and my teammate
                  Maizhe Zhang provided a tremendous amount of help throughout the
                  process. As the final project I've worked as an undergraduate
                  student, I'm pretty satisfied with it.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CATEGORY 3: SOFTWARE ENGINEERING */}
      <section>
        <h2 id="software-engineering" className="scroll-mt-8 text-2xl font-bold tracking-tight border-b border-gray-200 dark:border-gray-800 pb-3 mb-8">
          Software Engineering
        </h2>
        <div className="flex flex-col gap-10">
          {/* Project: Climate Mirror */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h3 className="text-xl font-semibold">
                ClimateMirror: The City-Level Climate Report Generator
              </h3>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap mt-2 sm:mt-0">
                Sept 2025 - Dec 2025
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-l">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                <strong>Zean Chen</strong>, Minxuan Jin, Ziming Zhang, Qijia
                Liu, Huijie Tang, Siying Liu
              </span>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <a
                href="https://drive.google.com/file/d/1dz7kSnsukfUpa745tuLR48krsohCDSr2/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Paper ↗
              </a>
              <a
                href="https://drive.google.com/file/d/1eYh4gkinuYyEOtB8kvdk0PpkgUbyYLXf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Demo ↗
              </a>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
              This is a course project (CSE 6242) that introduces ClimateMirror,
              a web-based climate report generator designed to overcome the
              "psychological distance" of climate change by translating abstract
              global data into personalized, city-level narratives. Utilizing
              the Berkeley Earth 0.25° dataset, the system reconstructs
              historical temperature changes and forecasts for approximately
              8,000 cities. To ensure a seamless real-time user experience, an
              offline pipeline pre-computes historical warming trends and future
              projections using Meta's Prophet and SARIMA models. The online
              system features a React and D3.js frontend connected to a
              lightweight Flask backend, allowing users to intuitively explore
              localized climate impacts through interactive maps. Qualitative
              user studies validated the platform's "place attachment"
              hypothesis, confirming that localized framing successfully grounds
              global climate data in a user's familiar environment.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2 font-medium">
              What I've done in this project:
            </p>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2 mt-1">
              <li>
                Architected the foundational backend infrastructure using Flask,
                establishing a lightweight and highly responsive data broker to
                serve pre-computed climate analytics in real-time.
              </li>
              <li>
                Partnered with Ziming Zhang to lead data cleaning and
                preprocessing efforts, aggregating and filtering the
                high-resolution Berkeley Earth dataset across ~8,000 global
                cities.
              </li>
              <li>
                Co-developed the RESTful backend API alongside Huijie Tang and
                Qijia Liu, seamlessly connecting complex offline time-series
                forecasts (Prophet, SARIMA) to the interactive React and D3.js
                frontend.
              </li>
            </ul>

            <details className="group mt-3 bg-gray-50 dark:bg-gray-900/50 border-l-4 border-gray-300 dark:border-gray-700 rounded-r-lg">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-gray-700 dark:text-gray-300 text-m">
                  This was my first group project at Georgia Tech. I was
                  incredibly lucky to work with such outstanding teammates;
                  everyone's contribution was equal, and the order of names
                  doesn't reflect rank. For this project, I was primarily
                  responsible for the backend development. I also assisted Ziming
                  Zhang with data cleaning and helped Huijie Tang with model
                  selection and documentation. I don't have a lengthy reflection
                  for this project, but my biggest takeaway is simply this:
                  working with a reliable group of people who genuinely care about
                  the quality of their work is a true privilege.
                </p>
              </div>
            </details>
          </div>

          {/* Project: Fake News Chatbot */}
          <div className="flex flex-col gap-3 pt-6 border-t border-gray-100 dark:border-gray-800/50">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h3 className="text-xl font-semibold">
                Multimodal AI Chatbot for Fake News Detection
              </h3>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap mt-2 sm:mt-0">
                Aug 2024 – Dec 2024
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-l">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Jovan Yap, <strong>Zean Chen</strong>, Rishi Rallapalli, Yihao
                Sun, Kedi Jiang, Ruida Chen, Tianhong Gao
              </span>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <a
                href="https://drive.google.com/file/d/1S5vNZ-Dtw5wIRfHAvrWNzPdhAb9a1Yw7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Demo ↗
              </a>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
              This is a course project (EEC 449) that introduces Faker, which is
              a multimodal conversational AI agent designed to combat
              information disorder and fake news. The system processes both text
              and image inputs—utilizing Tesseract OCR—to verify user claims
              against credible news sources stored in a LanceDB vector database.
              By leveraging this retrieved evidence alongside the ChatGPT API
              (GPT-4o), the chatbot provides users with real-time news
              classification, explicit confidence percentages, and educational
              dialogue to help them identify and navigate online misinformation.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2 font-medium">
              What I've done in this project:
            </p>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2 mt-1">
              <li>
                Developed the Flask backend's vector search logic by integrating
                LanceDB, implementing a strict 0.6 similarity threshold to
                accurately filter and retrieve relevant factual evidence for
                user queries.
              </li>
              <li>
                Engineered the connection to the ChatGPT API (GPT-4o),
                dynamically injecting retrieved database context into system
                prompts to generate reliable fake news classifications and
                explicit confidence percentages.
              </li>
              <li>
                Led Quality Assurance (QA) and system evaluation efforts,
                analyzing model performance and edge cases—such as false
                negatives and uncertainty-driven classifications—to refine
                prompt engineering and improve overall accuracy.
              </li>
            </ul>

            <details className="group mt-3 bg-gray-50 dark:bg-gray-900/50 border-l-4 border-gray-300 dark:border-gray-700 rounded-r-lg">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-gray-700 dark:text-gray-300 text-m">
                  Faker was a pretty interesting project. I could have placed it
                  in the AI category, but aside from integrating the ChatGPT API
                  and doing some prompt engineering, there wasn't a heavy focus on
                  core AI development. My biggest takeaway was getting hands-on
                  experience building an AI Agent for the first time—even if it
                  was a somewhat "budget" version with minimal Agentic Behavior. I
                  really want to thank Jovan for proposing this project and
                  leading our progress as the team lead, as well as setting up the
                  LanceDB vector database. It was a highly enjoyable
                  collaboration.
                </p>
              </div>
            </details>
          </div>

          {/* Project: CharlaBots */}
          <div className="flex flex-col gap-3 pt-6 border-t border-gray-100 dark:border-gray-800/50">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h3 className="text-xl font-semibold">
                Educational Web Platforms: CharlaBots & PixelEquations
              </h3>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap mt-2 sm:mt-0">
                Jun 2024 – May 2025
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-l">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                <strong>Zean Chen</strong>, Emma Dodoo, Mark Guzdial
              </span>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <a
                href="https://newcharlabots.eecs.umich.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                CharlaBots Demo ↗
              </a>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <a
                href="https://web.eecs.umich.edu/~mjguz/pixelequation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                PixelEquations Demo ↗
              </a>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
              The iterative development of web-based teaching platforms to
              support the U-M course COMPFOR 111 and COMPFOR 102.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2 font-medium">
              What I've done in this project:
            </p>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2 mt-1">
              <li>
                Developed "CharlaBots," a Flask and React.js web application
                allowing students to create customized chatbots using teaspoon
                languages.
              </li>
              <li>
                Configured and deployed the gateway application on the
                university Apache server utilizing WSGI.
              </li>
              <li>
                Built "PixelEquations," a Next.js platform designed to help
                students dynamically visualize image transformation algorithms.
              </li>
            </ul>

            <details className="group mt-3 bg-gray-50 dark:bg-gray-900/50 border-l-4 border-gray-300 dark:border-gray-700 rounded-r-lg">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-gray-700 dark:text-gray-300 text-m">
                  These are two small projects I've done in Umich, but they mean a
                  lot to me. Please refer to{" "}
                  <Link
                    href="/thoughts/umich"
                    className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline w-fit"
                  >
                    this post
                  </Link>{" "}
                  for more information. If there are any other comments I want to
                  add for these two projects, that will be my deepest gratitude
                  towards Emma and Mark!
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CATEGORY 4: COMPUTATIONAL MODELING */}
      <section>
        <h2 id="computational-modeling" className="scroll-mt-8 text-2xl font-bold tracking-tight border-b border-gray-200 dark:border-gray-800 pb-3 mb-8">
          Computational Modeling
        </h2>
        <div className="flex flex-col gap-10">
          {/* Project: COVID-19 */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h3 className="text-xl font-semibold">
                Mechanics-Analysis of the Evolution of COVID-19
              </h3>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap mt-2 sm:mt-0">
                Nov 2022 – Apr 2024
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-l">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Sini Yang, Yuheng Wang, <strong>Zean Chen</strong>, Yanzhuo Cao,
                Advisor: Lipo Wang
              </span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
              An undergraduate research initiative analyzing epidemic statistics
              and transition states.
            </p>

            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2 mt-1">
              <li>
                Developed a Python program based on cellular automata to
                computationally simulate the propagation of COVID-19.
              </li>
              <li>
                Replicated and mechanically improved upon the discontinuous
                epidemic transition model found in existing literature.
              </li>
              <li>
                Verified the mathematical correctness of the refined model
                through extensive software simulation.
              </li>
            </ul>
          </div>

          <details className="group mt-3 bg-gray-50 dark:bg-gray-900/50 border-l-4 border-gray-300 dark:border-gray-700 rounded-r-lg">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-4 pb-4">
              <p className="text-gray-700 dark:text-gray-300 text-m">
                This might be the only somewhat regrettable experience I share on
                this website, but since it was my first-ever research-oriented
                project, I still consider it highly significant. To be completely
                honest, my performance on this project was terrible. I would
                occasionally spend an entire night passionately researching, only
                to completely avoid touching the project for stretches of time,
                which led to a total loss of control over the schedule. When my
                teammates were busy, I failed to step up, take responsibility, and
                find a new direction, letting down Prof. Lipo Wang and failing to
                do justice to an excellent project. Although it dragged on for a
                long time—right up until I left for the US and had absolutely no
                time to continue—we still managed to produce some results and
                complete the project, entirely thanks to the hard work of my
                peers. However, I remain deeply dissatisfied with my own
                contribution. I failed to take full responsibility for my
                deliverables, which was a harsh but necessary wake-up call. Ever
                since then, whenever a project hits a roadblock, I immediately
                take the initiative to try something—anything—to break the
                deadlock, rather than passively waiting to be assigned a task.
                That is perhaps the most valuable lesson I extracted from this
                regret.
              </p>
            </div>
          </details>

          {/* Project: Asteroid Mining */}
          <div className="flex flex-col gap-3 pt-6 border-t border-gray-100 dark:border-gray-800/50">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h3 className="text-xl font-semibold">
                Equity in Outer Space: Asteroid Mining
              </h3>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap mt-2 sm:mt-0">
                Feb 2022
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-l">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Yu Zhou, <strong>Zean Chen</strong>, Xinyu Wu
              </span>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <span className="text-yellow-600 dark:text-yellow-500 font-medium">
                Award: Finalist (Top 2% globally)
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-l">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                The Interdisciplinary Contest in Modeling (MCM/ICM)
              </span>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <span className="text-yellow-600 dark:text-yellow-500 font-medium">
                Award: Finalist (Top 2% globally)
              </span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
              Awarded the Finalist designation (Top 2% globally) in the 2022
              Interdisciplinary Contest in Modeling (MCM/ICM), this project
              evaluates the socioeconomic impacts of emerging asteroid mining
              technologies. The research introduces a custom "Double-Fairness
              Measuring Model" to mathematically quantify how resource
              extraction in outer space affects economic and scientific balances
              across nations. By simulating future commercial mining scenarios,
              the study concluded that unregulated asteroid mining would
              severely exacerbate global inequity, ultimately providing
              data-driven policy recommendations for updating the 1967 Outer
              Space Treaty.
            </p>

            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2 mt-1">
              <li>
                Conducted targeted research and manual data aggregation to
                construct a comprehensive dataset tracking global economic
                indicators, space exploration capabilities, and resource
                distributions.
              </li>
              <li>
                Architected the core mathematical framework, designing a
                "Double-Fairness Measuring Model" that integrated the Analytic
                Hierarchy Process (AHP) and an Actual Return on Investment
                (AROI) sub-model to quantify a Relative Deprivation Index for
                individual nations.
              </li>
              <li>
                Engineered predictive simulations using the Fuzzy Comprehension
                Evaluation (FCE) method to forecast the socioeconomic impacts of
                future commercial asteroid mining, mathematically identifying
                disparities in scientific capabilities as the primary driver of
                global inequity.
              </li>
            </ul>

            <details className="group mt-3 bg-gray-50 dark:bg-gray-900/50 border-l-4 border-gray-300 dark:border-gray-700 rounded-r-lg">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-gray-700 dark:text-gray-300 text-m">
                  Under Construction :)
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}