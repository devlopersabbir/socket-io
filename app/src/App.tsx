import React from "react";
import { ThemeMode } from "./themes";
import { ProfileImage } from "./components";

const App: React.FC = () => {
  return (
    <div className="m-10">
      <div className="flex justify-center items-center bg-white w-full h-[87vh] rounded-3xl">
        <div className="flex rounded-3xl w-full shadow-2xl backdrop-blur-3xl">
          {/* side menu */}
          <div className="flex flex-col gap-5 justify-center items-center text-center w-24 rounded-bl-3xl rounded-tl-3xl bg-zinc-200 p-5">
            <div className="logo w-10 h-10 rounded-md bg-blue-600"></div>
            <div className="footer flex flex-col">
              {/* mode */}
              <ThemeMode />
              {/* profile photo */}
              <ProfileImage />
            </div>
          </div>
          {/* sidebar */}
          <div className="flex w-72 bg-zinc-50">side bar</div>
          {/* chat box */}
          <div className="flex rounded-br-3xl rounded-tr-3xl w-full h-[87vh] bg-slate-100">
            chat box
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
