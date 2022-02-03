import { FC } from "react";
import "./index.css";

interface Props {}

const ActiveIconButton: FC<Props> = ({ children, ...props }) => {
  return (
    <li className="border-b-2 border-blue-400 h-full">
      <button className="block fill-blue-500 px-8 h-full">{children}</button>
    </li>
  );
};

export default ActiveIconButton;
