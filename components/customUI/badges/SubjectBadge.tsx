import React from "react";
import { Triangle } from "lucide-react";
import { Stack } from "@mui/material";

interface SubjectBadgeProps {
  text: string;
}
const SubjectBadge: React.FC<SubjectBadgeProps> = ({ text }) => {
  return (
    <Stack
      flexDirection={"row"}
      // justifyContent={left ? { xs: "center", sm: "center", md: "start", lg: "start", xl: "start" } :  { xs: "center", sm: "center", md: "start", lg: "start", xl: "start" }}
      justifyContent={{
        xs: "center",
        sm: "center",
        md: "center",
        lg: "center",
        xl: "center",
      }}
    >
      <button className="group relative inline-block cursor-pointer rounded-full border border-gray-300 p-px text-xs font-semibold leading-6 text-white no-underline shadow-md ">
        <div className="relative z-10 flex items-center space-x-2 rounded-full px-4 py-0.5">
          <Triangle
            size={10}
            color="#000000"
            fill="#000000"
            className="rotate-90"
          />
          <span className="text-xs font-medium leading-6 text-black">
            {text}
          </span>
        </div>
      </button>
    </Stack>
  );
};

export default SubjectBadge;
