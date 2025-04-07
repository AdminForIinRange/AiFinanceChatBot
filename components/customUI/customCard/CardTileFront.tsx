import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
const CardTileFront = () => {
  return (
    <>
      <Card className="w-[300px] overflow-hidden mt-[20px] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
        <div className="relative">
          {/* Rating Badge */}
          <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-white px-2 py-1 text-sm font-medium">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            95.0
          </div>

          {/* Property Image */}
          <div className="aspect-square w-full bg-gray-100">
            <div
              style={{
                backgroundImage: `url("https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
              }}
            ></div>
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">Luxury Penthouse</h3>
          <p className="text-sm text-muted-foreground">
            Luxury Penthouse in Manhattan
          </p>

          <div className="mt-3 flex gap-4">
            <div className="flex items-center gap-1">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100">
                😊
              </span>
              <span className="text-sm">
                Host <span className="font-medium">98%</span>
              </span>
            </div>

            <div className="flex items-center gap-1">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                😊
              </span>
              <span className="text-sm">
                Crib <span className="font-medium">92%</span>
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-baseline">
            <span className="text-2xl font-bold">$250</span>
            <span className="text-sm text-muted-foreground">/night</span>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CardTileFront;
