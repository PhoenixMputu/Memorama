'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../assets/Logo.svg';
import { LuChevronDown } from "react-icons/lu";

const NavbarHome = () => {
  return (
    <header className="w-full">
      <nav className="mx-auto flex items-center justify-between p-6 lg:px-8">
        <div className='flex items-center justify-start gap-6'>
          <Link href={'/'}>
            <Image src={Logo} alt="Memorama Logo" height={40} />
          </Link>
          <ul className='flex items-center justify-start gap-3'>
            <li className='flex items-center justify-start gap-2'>
                <span>Catégories</span>
                <LuChevronDown />
            </li>
            <li className='flex items-center justify-start gap-2'>
                <span>Domaines</span>
                <LuChevronDown />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavbarHome;
