import { LoadingStateInterface } from "./types";

export const LoadingState = ({cancelRequestHandler,loading}:LoadingStateInterface) => {
  return (
    <div
      className={`flex items-center justify-between w-full bg-[linear-gradient(to_right_bottom,white,#F4ECF7,#FAD9D7)] rounded-${loading ? "full" : "lg"}	border border-grey-50 py-2 px-4`}
    >
      <div className="flex items-center  w-full">
        <div className="flex items-center justify-center bg-gradient-to-tr from-purple-600 to-pink-600 h-5 w-5 rounded-full">
          <div className=" h-2 w-2 bg-white rounded-full left-2/4	top-2/4"></div>
        </div>
        <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 ml-3">Ved is Writting</p>
      </div>
      <div onClick={cancelRequestHandler} className="bg-black rounded-full cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 22 22" className="icon-lg">
          <rect width="8" height="8" x="7" y="7" fill="#fff" rx="1.25"></rect>
        </svg>
      </div>
    </div>
  );
};
