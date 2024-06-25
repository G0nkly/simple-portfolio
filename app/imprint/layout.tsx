import { ReactNode } from "react";
import clsx from "clsx";
import { SOURCE_CODE_PRO } from "@/app/lib/constants";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <main className={clsx(`${SOURCE_CODE_PRO.className}`)}>
        <article>
          <header className="bg-white fixed w-full shadow-md z-10">
            <nav className="bg-white border-gray-200 sticky top-0 dark:bg-gray-900 p-8">
              <div className="max-w-screen-xl flex flex-wrap items-center md:justify-end mx-auto">
                <div className="w-full  md:w-auto" id="navbar-default">
                  <ul className="font-medium items-center md:items-end flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <Link
                        href="/home"
                        className="block py-2 px-3 rounded hover:text-blue-700 md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:dark:text-blue-500"
                        aria-current="page"
                      >
                        03. Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="sm:hidden md:block py-2 px-3 rounded hover:text-blue-700 md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:dark:text-blue-500 bg-sky-100 text-blue-700"
                        aria-current="page"
                      >
                        04. Imprint
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        </article>
      </main>
      )<div className="flex justify-center p-32">{children}</div>
    </main>
  );
}
