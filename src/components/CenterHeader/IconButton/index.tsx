import { FC } from "react";
import "./index.css";

interface Props {}

const IconButton: FC<Props> = ({ children }) => {
  return (
    <li className="m-0 h-full">
      <button className="block py-2 px-8 rounded-lg fill-slate-500 hover:bg-slate-100 h-full">
        {children}
      </button>
    </li>
  );
};

export default IconButton;
