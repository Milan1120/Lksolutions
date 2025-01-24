"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 h-auto max-h-[500px] w-full bg-white pt-8 dark:bg-gray-dark md:pt-16 lg:pt-20">
      <div className="container flex w-full flex-wrap justify-around">
        {/* Main Section */}
        <div className="mb-12 w-full max-w-[360px] px-4 md:w-1/2 lg:mb-16 lg:w-4/12 xl:w-5/12">
          <Link href="/" className="mb-8 inline-block">
            <Image
              src="/images/logo/logo-2.svg"
              alt="logo"
              className="w-full dark:hidden"
              width={140}
              height={30}
            />
            <Image
              src="/images/logo/logo.svg"
              alt="logo"
              className="hidden w-full dark:block"
              width={140}
              height={30}
            />
          </Link>
          <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
            At LK Solution, we empower Students by offering expert training and
            placement services, helping them achieve their career dreams from an
            early age. Join us and unlock your potential with the best guidance.
          </p>
          <div className="flex items-center">
            <a
              href="https://www.linkedin.com/search/results/all/?keywords=lk%20solution&origin=GLOBAL_SEARCH_HEADER&sid=igd"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path
                  fill="currentColor"
                  d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46c0 .98.79 1.77 1.77 1.77h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zm-12.96 19.08h-3.58v-11h3.58v11zm-1.79-12.65c-1.14 0-2.07-.93-2.07-2.08 0-1.14.93-2.07 2.07-2.07 1.15 0 2.08.93 2.08 2.07 0 1.15-.93 2.08-2.08 2.08zm13.76 12.65h-3.58v-5.49c0-1.3-.92-2.38-2.16-2.38-1.26 0-2.27.94-2.27 2.27v5.6h-3.58v-11h3.58v1.5h.05c.5-.74 1.38-1.2 2.39-1.2 1.86 0 3.33 1.53 3.33 3.36v7.14z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/lksolution.in?igsh=NTVhdnEwYnA2aDk3"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.163c3.044 0 3.419.011 4.617.067 1.14.052 1.916.23 2.373.398a4.83 4.83 0 0 1 1.684 1.684c.167.457.346 1.233.398 2.373.057 1.198.067 1.573.067 4.617s-.011 3.419-.067 4.617c-.052 1.14-.23 1.916-.398 2.373a4.83 4.83 0 0 1-1.684 1.684c-.457.167-1.233.346-2.373.398-1.198.057-1.573.067-4.617.067s-3.419-.011-4.617-.067c-1.14-.052-1.916-.23-2.373-.398a4.83 4.83 0 0 1-1.684-1.684c-.167-.457-.346-1.233-.398-2.373-.057-1.198-.067-1.573-.067-4.617s.011-3.419.067-4.617c.052-1.14.23-1.916.398-2.373a4.83 4.83 0 0 1 1.684-1.684c.457-.167 1.233-.346 2.373-.398 1.198-.057 1.573-.067 4.617-.067zM12 5.838a6.162 6.162 0 1 0 6.162 6.162A6.168 6.168 0 0 0 12 5.838zm0 10.242a4.08 4.08 0 1 1 4.081-4.08 4.085 4.085 0 0 1-4.081 4.08zM18.406 3.594a1.119 1.119 0 1 0 1.118 1.118 1.12 1.12 0 0 0-1.118-1.118z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="mb-12 w-full px-4 sm:w-1/2 md:w-1/2 lg:mb-16 lg:w-2/12 xl:w-2/12">
          <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
            Useful Links
          </h2>
          <ul>
            <li>
              <Link
                href="/about"
                className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
              >
                Contact US
              </Link>
            </li>
            <li>
              <Link
                href="/placement"
                className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
              >
                Placement
              </Link>
            </li>
          </ul>
        </div>

        {/* Partnerships */}
        <div className="mb-12 w-full px-4 md:w-1/2 lg:mb-16 lg:w-4/12 xl:w-3/12">
          <h2 className="mb-10 text-nowrap text-xl font-semibold text-black dark:text-white">
            Partnerships with us
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <img src="/images/BRCM.png" className="h-[100px] w-[100%]" />
            <img src="/images/cgc.png" className="h-[100px] w-[100%]" />
            <img src="/images/ctlogo.png" className="h-[100px] w-[100%]" />
            <img src="/images/kietclogo.png" className="h-[100px] w-[100%]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
