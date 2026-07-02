import Image from "next/image";
import profilePic from "../public/image/profile.png";

const ProfileSection: React.FC = () => {
  return (
    <section className="flex items-center p-10 h-screen">
      <div className="w-1/4">
        <Image
          src={profilePic}
          alt="Profile Picture"
          width={256}
          height={256}
          className="rounded-full w-64 h-64 object-cover"
        />
      </div>
      <div className="w-3/4">
        <h1 className="text-4xl font-bold text-soft-brown mb-4">Hi, I’m Nicole</h1>
        <p className="mb-4">A Frontend Developer</p>
        <p className="mb-4">
          I craft the digital experiences users see and interact with. From beautiful layouts 
          to responsive designs, they turn ideas into engaging, user-friendly interfaces that 
          work seamlessly across all devices.
        </p>
      </div>
    </section>
  );
};

export default ProfileSection;
