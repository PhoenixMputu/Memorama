'use client';
import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/Logo.svg';
import { Menu, Popover, Transition } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';
import { MdOutlineNotificationsNone } from "react-icons/md";

export default function NavbarHomeConnected() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6" aria-label="Global">
        <div className="flex justify-start items-center gap-x-10">
          <Link href="/">
            <Image className="h-8 w-auto" src={logo} alt="Logo Memorama" />
          </Link>
          <Popover.Group className="flex gap-x-6">
            <Popover className="relative">
              <Popover.Button className="flex outline-none items-center gap-x-1 text-sm font-semibold font-heebo leading-6 text-gray-900">
                Catégories
                <FiChevronDown className="h-5 w-5 flex-none text-gray-900" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute w-max right-0 top-full z-10 mt-3 px-6 overflow-hidden rounded bg-white shadow-lg ring-1 ring-gray-900/5">
                  <ul className="py-4 w-max flex flex-col gap-y-3 text-left">
                    <li className="text-left font-heebo text-gray-600">
                      <Link href="">Rapport de Stage</Link>
                    </li>
                    <li className="text-left font-heebo text-gray-600">
                      <Link href="">Mémoire</Link>
                    </li>
                  </ul>
                </Popover.Panel>
              </Transition>
            </Popover>

            <Popover className="relative">
              <Popover.Button className="flex outline-none items-center gap-x-1 text-sm font-semibold font-heebo leading-6 text-gray-900">
                Domaines
                <FiChevronDown className="h-5 w-5 flex-none text-gray-900" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute w-max right-0 top-full z-10 mt-3 px-6 overflow-hidden rounded bg-white shadow-lg ring-1 ring-gray-900/5">
                  <ul className="py-4 w-max flex flex-col gap-y-3 text-left">
                    <li className="text-left font-heebo text-gray-600">
                      <Link href="">Rapport de Stage</Link>
                    </li>
                    <li className="text-left font-heebo text-gray-600">
                      <Link href="">Mémoire</Link>
                    </li>
                  </ul>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
        </div>
        <div className="flex justify-end gap-5 items-center">
          <Link
            href="#"
            className="text-sm border border-blue-500 bg-blue-500 hover:bg-blue-600 focus:outline focus:outline-offset-1 focus:outline-blue-400 active:bg-blue-700 font-medium font-heebo px-4 py-2 rounded text-white"
          >
            Examiner le document
          </Link>
          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="relative py-1.5 px-1.5 rounded-full border border-gray-500 focus:ring-offset-2 focus:ring-offset-gray-400">
                <MdOutlineNotificationsNone size={20}/>
                <span className='absolute text-red-500 top-[-3px] text-sm right-0 font-bold bg-white'>6</span>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                    Your Profile
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                    Settings
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                    Sign out
                  </a>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="relative flex rounded-full text-sm border-2 border-gray-600">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <Image className="h-8 w-8 rounded-full object-fill" src={logo} alt="User Avatar" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                    Your Profile
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                    Settings
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                    Sign out
                  </a>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
    </header>
  );
}
