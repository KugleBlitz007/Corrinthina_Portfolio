import '../index.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-[rgb(255,202,203)] text-black text-center py-8">
      {/* Title */}
      <h1 className="text-5xl font-bold">CORRINTHINA</h1>

      {/* Horizontal Line */}
      <div className="md:w-[30%] w-[90%] mx-auto h-[20px] bg-white my-4" />

      {/* Navigation Links */}
      <ul className="flex justify-center text-sm tracking-widest">
        <li className="border-r md:px-6 px-4 border-black">
          <Link to="/" className="hover:text-[#c44587]">Home</Link>
        </li>
        <li className="border-r md:px-6 px-4 border-black">
          <Link to="/Blogs" className="hover:text-[#c44587]">Blogs</Link>
        </li>
        <li className="border-r md:px-6 px-4 border-black">
          <Link to="/AboutMe" className="hover:text-[#c44587]">About Me</Link>
        </li>
        <li className="md:px-6 px-4">
          <Link to="/AboutMe" className="hover:text-[#c44587]">ENG/FR</Link>
        </li>
      </ul>
    </nav>
  );
}
