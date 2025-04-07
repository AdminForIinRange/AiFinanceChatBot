import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const DropDownMenu = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0);

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => setter(value > 0 ? value - 1 : 0);
  return (
    <>
      <DropdownMenu>
        {" "}
        <DropdownMenuTrigger className="px-4 py-2 rounded-lg focus:outline-none hover:outline-none text-nowrap">
          Guests : {adults + children + pets}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-64 p-4 bg-white border rounded-lg shadow-lg"
          align="start"
          side="bottom"
          sideOffset={5}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Adults</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    decrement(setAdults, adults);
                  }}
                  className="px-2 py-1 border rounded"
                >
                  -
                </button>
                <span>{adults}</span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    increment(setAdults, adults);
                  }}
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Children</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    decrement(setChildren, children);
                  }}
                  className="px-2 py-1 border rounded"
                >
                  -
                </button>
                <span>{children}</span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    increment(setChildren, children);
                  }}
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Pets</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    decrement(setPets, pets);
                  }}
                  className="px-2 py-1 border rounded"
                >
                  -
                </button>
                <span>{pets}</span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    increment(setPets, pets);
                  }}
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default DropDownMenu;
