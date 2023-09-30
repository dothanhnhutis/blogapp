import React from "react";
import { IoWarningOutline } from "react-icons/io5";

const NotFound = () => {
  return (
    <main>
      <main
        aria-labelledby="pageTitle"
        className="flex items-center justify-center h-screen bg-gray-50"
      >
        <div className="p-4 space-y-4">
          <div className="flex flex-col items-start space-y-3 sm:flex-row sm:space-y-0 sm:items-center sm:space-x-3">
            <p className="font-semibold text-red-500 text-9xl">404</p>
            <div className="space-y-2">
              <h1 id="pageTitle" className="flex items-center space-x-2">
                <IoWarningOutline size={16} className="w-6 h-6 text-red-500" />

                <span className="text-xl font-medium text-gray-500 sm:text-2xl">
                  Oops! Page not found.
                </span>
              </h1>
              <p className="text-base font-normal text-gray-500">
                The page you are looking for was not found.
              </p>
              <p className="text-base font-normal text-gray-500">
                You may return to{" "}
                <a
                  href="../index.html"
                  className="text-blue-600 hover:underline "
                >
                  home page
                </a>{" "}
                or try using the search form.
              </p>
            </div>
          </div>

          <form action="#" method="POST">
            <div className="flex items-center justify-center">
              <input
                type="text"
                name="search"
                placeholder="What are you looking for?"
                className="w-full px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:ring-primary-light"
              />
              <button className="p-2 text-white rounded-r-md bg-blue-500 focus:outline-none focus:ring focus:ring-primary-light">
                <span className="sr-only">Search</span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </main>
    </main>
  );
};

export default NotFound;
