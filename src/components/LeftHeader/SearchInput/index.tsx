import { FC } from "react";
import "./index.css";

interface Props {}

const SearchInput: FC<Props> = ({ children }) => {
  return (
    <div className="relative mt-1">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-slate-500 dark:text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        className="bg-slate-100 text-gray-900 text-sm rounded-full block pl-10 p-2.5 placeholder:text-slate-500"
        placeholder="Search Facebook"
      />
    </div>
  );
};

export default SearchInput;
