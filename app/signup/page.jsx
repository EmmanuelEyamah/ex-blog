"use client";
import Link from "next/link";

const page = () => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-[1200px] py-10">
      <div className="wrapper bg-gray-50 dark:bg-medium px-4 py-8 shadow-lg rounded-md sm:px-10">
        <div className="mb-10 text-gray-900 w-full dark:text-gray-50 flex items-center justify-center flex-col">
          <h1 className="text-3xl font-bold uppercase">
            Sign up
          </h1>
          <span>Already a member? <Link href={"/login"} className="underline">LOGIN</Link></span>
        </div>

        <form className="space-y-6 flex items-center justify-center flex-col w-full">
          <input
            type="text"
            placeholder="Full name"
            className="block w-1/2 rounded-md border-0 dark:bg-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 focus:outline-sky-400"
          />
          <input
            type="email"
            placeholder="Your email"
            className="block w-1/2 rounded-md border-0 dark:bg-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 focus:outline-sky-400"
          />
          <input
            type="password"
            placeholder="Enter password"
            className="block w-1/2 rounded-md border-0 dark:bg-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 focus:outline-sky-400"
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="block w-1/2 rounded-md border-0 dark:bg-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 focus:outline-sky-400"
          />
          <button className="w-1/4 bg-sky-400 p-2 rounded-md text-gray-50 shadow-lg hover:bg-sky-300 duration-500">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
