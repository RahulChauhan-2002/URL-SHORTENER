import { Link } from "@tanstack/react-router";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Left side: Logo */}
      <Link to="/" className="text-xl font-bold text-blue-600">
        URLShortener
      </Link>

      {/* Right side: Navigation Links */}
      <div className="space-x-6 text-gray-700 font-medium hidden sm:flex">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
        <Link to="/auth" className="hover:text-blue-600">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
