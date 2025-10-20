import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-8">
      {/* Header Section */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="flex flex-col gap-4 md:w-1/2">
          <h1 className="text-4xl font-extrabold text-red-600 mb-2">
            Sanchana Thhejaan Portfolio.
          </h1>
          <p className="text-lg text-gray-300">
            web Developer | Web Enthusiast | Lifelong Learner
          </p>
          <p className="mt-2 text-gray-400">
            Explore my featured projects below!
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <Image
            src="/profile.jpg"
            alt="Profile picture"
            width={140}
            height={140}
            className="rounded-full border-4 border-white"
            priority
          />
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="w-full max-w-5xl bg-gray-900 rounded-xl p-6 shadow-lg">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Example Project Cards */}
            <div className="flex flex-col items-center">
              <Image
                src="/project1.jpg"
                alt="Project 1"
                width={120}
                height={70}
                className="rounded-lg mb-2"
              />
              <span className="font-semibold text-white">Project One</span>
              <span className="text-gray-400 text-sm">React App</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/project2.jpg"
                alt="Project 2"
                width={120}
                height={70}
                className="rounded-lg mb-2"
              />
              <span className="font-semibold text-white">Project Two</span>
              <span className="text-gray-400 text-sm">Next.js Website</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/project3.jpg"
                alt="Project 3"
                width={120}
                height={70}
                className="rounded-lg mb-2"
              />
              <span className="font-semibold text-white">Project Three</span>
              <span className="text-gray-400 text-sm">API Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-12 max-w-3xl w-full">
        <h2 className="text-xl font-semibold mb-3 text-white">About Me.</h2>
        <p className="text-gray-300 text-lg">
          I am a passionate developer specializing in building modern web
          applications with React, Next.js, and TypeScript. I love solving
          problems and creating beautiful user experiences.
        </p>
      </div>
    </div>
  );
}
