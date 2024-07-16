// src/components/Header.tsx

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';

export const Header = ({ navigation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-lime-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <a href="#">
          <img alt="Logo" src="/src/assets/logo2.png" className="w-24 h-24" />
        </a>
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) =>
            item.scrollTo ? (
              <Link
                key={item.name}
                to={item.scrollTo}
                smooth={true}
                duration={500}
                className="text-lg font-bold leading-6 text-lime-700  cursor-pointer"
              >
                {item.name}
              </Link>
            ) : (
              <RouterLink
                key={item.name}
                to={item.href}
                className="text-lg font-bold leading-6 text-lime-700  cursor-pointer"
              >
                {item.name}
              </RouterLink>
            )
          )}
        </div>
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-lime-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-lime-200 bg-white">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                alt="Logo"
                src="/src/assets/logo2.png"
                className="w-10 h-auto"
              />
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-lime-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-lime-600">
              <div className="space-y-2 py-6">
                {navigation.map((item) =>
                  item.scrollTo ? (
                    <Link
                      key={item.name}
                      to={item.scrollTo}
                      smooth={true}
                      duration={500}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-lime-700 hover:bg-gray-50 cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <RouterLink
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-lime-700 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </RouterLink>
                  )
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
