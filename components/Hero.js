import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Kolom Kiri - Foto Profil */}
        <div className="flex justify-center md:justify-end mr-20">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-600">
            <Image
              src="/profile.jpeg"
              alt="Profile"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Aria  !</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Web Developer & Designer
          </p>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}