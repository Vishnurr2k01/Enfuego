import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex  fixed items-center justify-between border-b border-gray-400 py-4 px-4 mb-4 w-screen bg-[#37003c]">
      <a href="/" className='text-2xl font-heading font-bold text-white'>
        En Fuego
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8 "
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <a href="/" className='text-4xl font-heading font-bold text-white'>
        En FuEgo
      </a>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
           
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to='/' onClick={() => setIsNavOpen(false)}> Point Table </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to='/fixtures' onClick={() => setIsNavOpen(false)}> Fixtures </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to='/goldenboot' onClick={() => setIsNavOpen(false)}> Golden Boot </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to='/rules' onClick={() => setIsNavOpen(false)}>Guidelines </Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 px-8 text-xl font-semibold lg:flex text-white">
          <li>
            <Link to='/'> Point Table </Link>
          </li>
          <li>
            <Link to='/fixtures' > Fixtures </Link>
          </li>
          <li>
            <Link to='/goldenboot' > Golden Boot </Link>
          </li>
          <li>
            <Link to='/rules' > Guidelines </Link>
          </li>
        </ul>
      </nav>
      <style>{`
    .hideMenuNav {
      display: none;
      
    }
    .showMenuNav {
      display: block;
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: white;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      background-color : #37003C;
      color : white;
      font-size : 1.5rem
    }
  `}</style>
    </div>
  )
}

export default Navbar