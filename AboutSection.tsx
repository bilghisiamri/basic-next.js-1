import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section className="flex items-center p-10 h-screen">
      <div className="w-3/4">
        <h2 className="text-soft-brown text-sm font-semibold uppercase mb-2">
          A Bit of My Story
        </h2>
        <h3 className="text-3xl font-bold mb-4">How it all began</h3>
        <p className="font-semibold mb-4">
          I grew up with a curious, analytical, and problem-solving spirit in a home where 
          the digital world was always within reach.
        </p>
        <p className="mb-4">
          My fascination with technology started at an early age, experimenting with computers 
          and simple code. After pursuing a degree in software engineering, I began my journey 
          as a frontend developer, where I found my passion for creating beautiful and functional 
          user interfaces.
        </p>
        <p className="mb-4">
          Over the years, I’ve worked with teams across the globe, honing my skills in modern 
          development practices. Now, I take every opportunity to create engaging digital 
          experiences, continuously learning and adapting to the ever-evolving world of frontend 
          development.
        </p>
      </div>
      <div className="w-1/4 m-12">
        <Image
          alt="Bakery shopping application"
          src="https://id.pinterest.com/search/pins/?q=profile&rs=typed"
          width={256}
          height={256}
          className="h-full w-full object-cover"
          unoptimized
        />
      </div>
    </section>
  );
};

export default AboutSection;
