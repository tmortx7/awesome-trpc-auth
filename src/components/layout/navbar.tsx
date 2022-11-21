import { useState } from 'react';
import COC from '../../public/assets/coc-logo.svg';
import Link from 'next/link';

const Navbar = () => {
  const [togglemenu, settogglemenu] = useState(false);
  const [togglelng, settogglelng] = useState(false);

  const toggle = () => {
    settogglemenu(prev => !prev);
  };
  return (
    <>
      <nav className="mb-[250px] bg-neutral px-0 py-4 flex justify-between   w-full  fixed top-0 z-30 backdrop">
        {!togglemenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer sm:hidden"
            onClick={toggle}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        )}

        <Link href="/home">
          <div className="flex justify-center cursor-pointer  m-auto grow  mr-auto">
            <COC className="h-10 ml-4" />
          </div>
        </Link>

        <ul className="sm:flex flex-wrap justify-evenly w-4/5 hidden  ">
          <li>links</li>
        </ul>

        <div className="flex gap-5">
          <div
            onClick={() => {
              settogglelng(!togglelng);
            }}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-8  "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
              />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
