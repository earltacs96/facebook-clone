import { FC } from "react";
import "./index.css";

const IconButtons: FC<{}> = ({ children, ...props }) => {
    return (
        <div className="bg-slate-200 hover:bg-slate-300 p-2 rounded-full ml-2">
            {children}
      </div>
    );
}

export default IconButtons;