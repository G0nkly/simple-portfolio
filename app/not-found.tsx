import { SOURCE_CODE_PRO } from "@/app/lib/constants";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className={SOURCE_CODE_PRO.className}>
      <div className="flex flex-col items-center justify-center h-screen gap-5">
        <svg
          fill="#000000"
          height="100px"
          width="100px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <g>
              <path
                d="M256,0C114.843,0,0,114.843,0,256c0,141.157,114.843,256,256,256s256-114.843,256-256C512,114.843,397.157,0,256,0z
			 M256,493.037C125.296,493.037,18.963,386.704,18.963,256C18.963,125.296,125.296,18.963,256,18.963S493.037,125.296,493.037,256
			C493.037,386.704,386.704,493.037,256,493.037z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M189.63,161.185c-31.37,0-56.889,25.519-56.889,56.889c0,31.37,25.518,56.889,56.889,56.889s56.889-25.518,56.889-56.889
			C246.518,186.704,221,161.185,189.63,161.185z M189.63,256c-20.912,0-37.926-17.014-37.926-37.926
			c0-20.912,17.014-37.926,37.926-37.926s37.926,17.014,37.926,37.926C227.556,238.986,210.542,256,189.63,256z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M322.37,161.185c-31.37,0-56.889,25.519-56.889,56.889c0,31.37,25.518,56.889,56.889,56.889
			c31.37,0,56.889-25.518,56.889-56.889C379.259,186.704,353.741,161.185,322.37,161.185z M322.37,256
			c-20.912,0-37.926-17.014-37.926-37.926c0-20.912,17.014-37.926,37.926-37.926s37.926,17.014,37.926,37.926
			C360.296,238.986,343.282,256,322.37,256z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M434.555,345.556c-2.912-4.357-8.796-5.546-13.148-2.63c-97.454,64.968-135.676,32.935-169.403,4.671
			c-13.486-11.301-26.227-21.977-41.551-25.042c-54.699-10.861-85.306,68.93-86.593,72.338c-1.838,4.898,0.644,10.357,5.546,12.199
			c1.097,0.412,2.222,0.611,3.329,0.611c3.838,0,7.449-2.347,8.88-6.144c0.255-0.685,26.301-68.171,65.116-60.412
			c10.579,2.116,21.014,10.861,33.093,20.982c34.954,29.292,82.838,69.431,192.102-3.426
			C436.282,355.801,437.458,349.912,434.555,345.556z"
              />
            </g>
          </g>
        </svg>
        <div>
          <span className="font-extrabold text-4xl">404</span>
        </div>
        <div>
          <span className="font-extrabold">Something is missing.</span>
        </div>
        <div>
          <span>
            Sorry, we can&apos;t find that page. You&apos;ll find lots to
            explore on the home page.
          </span>
        </div>
        <div>
          <Link
            href="/home"
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            <span className="text-xl">Back to Homepage</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
