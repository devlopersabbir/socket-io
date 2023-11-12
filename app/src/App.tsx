import React from "react";

const App: React.FC = () => {
  return (
    <div className="m-10">
      <div className="flex justify-center items-center bg-white w-full h-[87vh]">
        <div className="flex border-2 bg-gray-900 rounded-4xl w-full">
          {/* side menu */}
          <div className="flex w-32 h-[87vh] bg-zinc-200">side menu</div>
          {/* sidebar */}
          <div className="flex">side bar</div>
          {/* chat box */}
          <div className="flex">chat box</div>
        </div>
      </div>
    </div>
  );
};

export default App;
