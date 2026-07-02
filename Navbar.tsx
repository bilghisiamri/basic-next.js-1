import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-brown text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/about">About Me</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
