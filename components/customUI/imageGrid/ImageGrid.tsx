import React from "react";

const ImageGrid = () => {
  return (
    <>
      {" "}
      <div className="mb-[225px]">
        <div className="grid grid-cols-4 gap-2 h-[400px]">
          <div className="col-span-2 row-span-2 relative">
            <img
              src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
              alt="Main Image"
              className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"
            />
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
              alt="Image 3"
              className="w-full h-full object-cover rounded-tr-lg"
            />
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
              alt="Image 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1549323/pexels-photo-1549323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Image 5"
              className="w-full h-full object-cover rounded-br-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
