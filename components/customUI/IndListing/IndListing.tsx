import React from "react";
import ImageGrid from "../imageGrid/ImageGrid";
import {
  MapPin,
  User,
  Home,
  Wifi,
  Car,
  Utensils,
  Tv,
  Coffee,
  Wind,
  Check,
  Heart,
  Share2,
  Award,
  Zap,
  Droplets,
  Footprints,
  DoorOpen,
  Bed,
  Bath,
  Users,
  Baby,
  Dog,
  Star,
  CalendarIcon,
  DoorClosedIcon,
  Clock,
  PawPrint,
  CigaretteOff,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reviews } from "../Review";
import { SpeakerQuietIcon } from "@radix-ui/react-icons";
import { IconMoodHappy } from "@tabler/icons-react";
const IndListing = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Cozy Apartment</h1>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span className="font-semibold">4.89</span>
              <span className="text-gray-500 ml-1">(123 reviews)</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Award className="w-4 h-4 mr-1" />
              <span>Superhost</span>
            </div>
            <div className="flex items-center text-gray-500">
              <MapPin className="w-4 h-4 mr-1" />
              <span>New York, USA</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Heart className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
        <div className="mb-8">
          <ImageGrid />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-2">
              Entire place hosted by Alex
            </h2>
            <p className="text-gray-500 mb-4">
              <Users className="inline mr-2" />
              2 guests · <Bed className="inline mx-2" />
              1 bedroom · <DoorOpen className="inline mx-2" />
              1 bed · <Bath className="inline mx-2" />1 bath
            </p>
            <p className="text-gray-700 mb-6">
              A cozy, well-decorated apartment in the heart of New York. Great
              for solo travelers or couples.
            </p>
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Rules</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <Card>
                  <CardContent className="pt-6 flex flex-col space-y-4">
                    <h2 className="text-2xl font-semibold mb-2">
                      Entire place hosted by Alex
                    </h2>
                    <ul className="grid grid-cols-1 gap-2">
                      <li className="flex items-center">
                        <CigaretteOff className="mr-2" /> No smoking
                      </li>
                      <li className="flex items-center">
                        <PawPrint className="mr-2" /> No pets
                      </li>
                      <li className="flex items-center">
                        <IconMoodHappy className="mr-2" /> No parties or events
                      </li>
                      <li className="flex items-center">
                        <Clock className="mr-2" /> Check-in time is 3PM - 8PM
                      </li>
                      <li className="flex items-center">
                        <DoorClosedIcon className="mr-2" /> Check out by 11AM
                      </li>
                      <li className="flex items-center">
                        <SpeakerQuietIcon className="mr-2" /> Quiet hours 10PM -
                        8AM
                      </li>
                    </ul>
                    <p className="text-gray-700 mb-6">
                      A cozy, well-decorated apartment in the heart of New York.
                      Great for solo travelers or couples.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="amenities">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Amenities</h3>
                    <ul className="grid grid-cols-2 gap-4">
                      <li className="flex items-center">
                        <Wifi className="mr-2" /> WiFi
                      </li>
                      <li className="flex items-center">
                        <Wind className="mr-2" /> Air conditioning
                      </li>
                      <li className="flex items-center">
                        <Zap className="mr-2" /> Heating
                      </li>
                      <li className="flex items-center">
                        <Utensils className="mr-2" /> Kitchen
                      </li>
                      <li className="flex items-center">
                        <Car className="mr-2" /> Free parking
                      </li>
                      <li className="flex items-center">
                        <Tv className="mr-2" /> TV
                      </li>
                      <li className="flex items-center">
                        <Coffee className="mr-2" /> Coffee maker
                      </li>
                      <li className="flex items-center">
                        <Droplets className="mr-2" /> Hot tub
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reviews">
                <Card>
                  <CardContent className="pt-6">
                    <Reviews />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">
                    $500<span className="text-lg font-normal">/night</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>95.00</span>
                    <span className="text-gray-500 ml-1">(1 reviews)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Dates</Label>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Jan 10, 2025 - Jan 17, 2025
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label>Guests</Label>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <User className="mr-2 h-4 w-4" />1 guest
                  </Button>
                </div>

                <Button className="w-full" variant="default">
                  Reserve
                </Button>

                <p className="text-center text-sm text-gray-500">
                  You won't be charged yet
                </p>

                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between">
                    <span>$500 × 7 nights</span>
                    <span>$3500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cleaning fee</span>
                    <span>$50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee (12%)</span>
                    <span>$420</span>
                  </div>
                  <div className="flex justify-between pt-4 border-t font-bold">
                    <span>Total</span>
                    <span>$3970</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndListing;
