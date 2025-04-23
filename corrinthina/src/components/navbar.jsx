import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function NavBar() {
  const [hideOnScroll, setHideOnScroll] = useState(false);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // scrolling down
        setHideOnScroll(true);
      } else {
        // scrolling up
        setHideOnScroll(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`transition-transform duration-300 text-white text-center py-8 sticky top-0 z-50 -mt-24 ${
        hideOnScroll ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <ul className="text-xl flex justify-center tracking-widest">
        <li className="md:px-6 px-4 border-black">
          <Link to="/" className="hover:text-[#c44587]">I am a graphic designer</Link>
        </li>
        <li className="md:px-6 px-4 border-black">
          <Link to="/Blogs" className="hover:text-[#c44587]">I am a multimedia digital marketing specialist</Link>
        </li>
        {/* <li className="md:px-6 px-4 border-black">
          <Link to="/AboutMe" className="hover:text-[#c44587]">I am a content creator</Link>
        </li> */}
        <li className="md:px-6 px-4 border-black">
          <Link to="/AboutMe" className="hover:text-[#c44587]">About me</Link>
        </li>
        {/* <li className="md:px-6 px-4 border-black">
          <Link to="/AboutMe" className="hover:text-[#c44587]">Contact</Link>
        </li> */}
      </ul>
    </nav>
  );
}
