import React from "react";

interface LineBadgeSubtitleProps {
  text: string;
}

const LineBadgeSubtitle: React.FC<LineBadgeSubtitleProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-center">
      <span className="flex w-[90%] items-center justify-center">
        <span className="h-px flex-1 bg-gray-300"></span>
        <button className="group relative inline-block cursor-pointer rounded-full border border-gray-300 p-px text-xs font-semibold leading-6 text-white no-underline shadow-2xl shadow-zinc-900">
          <div className="relative z-10 flex items-center space-x-2 rounded-full px-4 py-0.5">
            <span className="text-xs font-medium leading-6 text-black">
              {text}
            </span>
          </div>
        </button>
        <span className="h-px flex-1 bg-gray-300"></span>
      </span>
    </div>
  );
};

export default LineBadgeSubtitle;
