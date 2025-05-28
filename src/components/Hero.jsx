import React from "react";
import hero from "../assets/hero.jpeg";

function Hero() {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center mt-20 px-4 gap-8">
      <div className="sm:w-1/2">
        <h1 className="text-4xl sm:text-6xl font-bold mb-10">Hi, I'm ESREF</h1>
        <p className="text-base text-txt-third">
          I graduated from Yıldız Technical
          University with a degree in Geomatics Engineering, currently pursuing a Master’s degree in Remote Sensing and
          GIS at the same institution. Alongside my academic journey, I am
          actively building a career as a Full-Stack Developer. I have hands-on
          experience with technologies such as <a href="#skills" className="underline text-amber-200">skills</a>. I pay
          strong attention to responsive design and strive to build
          user-centric, mobile-friendly applications. Currently, I’m rewriting
          my projects in TypeScript and expanding my tech stack with Next.js,
          Angular, NestJS, and PostgreSQL. Eager to grow as a developer, I’m
          committed to learning, building, and improving every day. I enjoy
          working independently on personal projects and focus on writing clean,
          scalable, and maintainable code. My long-term goal is to contribute to
          real-world applications with meaningful impact.
        </p>
      </div>

      <div>
        <img
          src={hero}
          alt="Hero"
          className="w-72 h-72 rounded-full object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
