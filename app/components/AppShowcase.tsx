"use client";

interface App {
  id: number;
  name: string;
  description: string;
  link: string;
  technologies: string[];
  platforms: string[];
  rating: number;
}

const apps: App[] = [
  {
    id: 1,
    name: "Pluhg",
    description:
      "A comprehensive fitness tracking app with real-time workout monitoring",
    link: "https://apps.apple.com/ng/app/pluhg/id1592416211",
    technologies: ["Flutter", "Dart", "Riverpod"],
    platforms: ["iOS", "Android"],
    rating: 4.8,
  },
  {
    id: 2,
    name: "MoneyPal",
    description: "Real-time cryptocurrency tracking and portfolio management",
    link: "https://apps.apple.com/ng/app/moneypal/id1582626238",
    technologies: ["Flutter", "Dart", "Firebase"],
    platforms: ["iOS", "Android"],
    rating: 4.7,
  },
  {
    id: 3,
    name: "Twisted",
    description:
      "A food recipe blog showcasing easy, delicious, and diverse recipes, perfect for any occasion. Built for food lovers to explore and share culinary creations.",
    link: "https://twistedfood.co.uk/",
    technologies: ["React Native", "Next.js", "Typescript"],
    platforms: ["Web"],
    rating: 4.7,
  },
  {
    id: 4,
    name: "MenaCred",
    description: "Real-time cryptocurrency tracking and portfolio management",
    link: "https://menacompany.ng/",
    technologies: ["React Native", "Next.js", "Typescript", "Google Analytics"],
    platforms: ["Web"],
    rating: 4.7,
  },
];

const AppShowcase = () => {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
          Featured Apps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {apps.map((app) => (
            <div
              key={app.id}
              className="group bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl sm:rounded-2xl p-1"
            >
              <a href={app.link} target="_blank">
                <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 relative">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                    {/* App Icon */}
                    <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-1 flex-shrink-0">
                      <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center overflow-hidden relative">
                        {app.id === 1 || app.id === 4 ? (
                          <svg
                            className="w-10 h-10 text-blue-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-10 h-10 text-purple-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        )}
                        {/* Animated Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 animate-shimmer"></div>
                      </div>
                      {/* Corner Decorations */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full blur-[2px]"></div>
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-400 rounded-full blur-[2px]"></div>
                    </div>

                    {/* App Info */}
                    <div className="flex-grow w-full sm:w-auto">
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-2">
                        <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors text-center sm:text-left break-words">
                          {app.name}
                        </h3>
                      </div>
                      <p className="text-gray-400 mb-4 text-center sm:text-left">
                        {app.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
                        {app.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-400 border border-gray-700/50 group-hover:border-gray-600/50 group-hover:text-gray-300 transition-colors whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1.5">
                          <svg
                            className="w-4 h-4 text-yellow-400"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                          </svg>
                          <span>{app.rating}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <svg
                            className="w-4 h-4 text-purple-400"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H8V11H16V13M16,9H8V7H16V9M7,24H9V22H7V24M11,24H13V22H11V24M15,24H17V22H15V24" />
                          </svg>
                          <span>{app.platforms.join(" & ")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 md:py-5">
        <a
          href="https://docs.google.com/document/d/1KTeu_6BiAIe5jwNPkEkzSq5SSt6WLdC02Y9sO0yAJkg/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-6 py-2 text-lg font-semibold rounded-2xl border border-gray-600 text-gray-300 hover:bg-gray-800 transition"
        >
          See More
        </a>
      </div>
    </section>
  );
};

export default AppShowcase;
