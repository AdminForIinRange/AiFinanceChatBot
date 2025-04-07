import { Star, ThumbsUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
  helpful: number;
}

const reviews: Review[] = [
  {
    id: 1,
    author: "Sarah M.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "December 2024",
    content:
      "This place was absolutely perfect! The location couldn't be better - right in the heart of everything but still peaceful and quiet. The apartment was spotless and had all the amenities we needed. The host was super responsive and helpful throughout our stay.",
    helpful: 12,
  },
  {
    id: 2,
    author: "James R.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "November 2024",
    content:
      "Great apartment in a fantastic location. Very comfortable bed and well-equipped kitchen. The only minor issue was that the wifi was a bit slow at times, but otherwise everything was perfect.",
    helpful: 8,
  },
  {
    id: 3,
    author: "Emma L.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "October 2024",
    content:
      "Wonderful stay! The apartment looks exactly like the photos, and the host went above and beyond to make sure we had everything we needed. The neighborhood is fantastic with lots of great restaurants and shops within walking distance.",
    helpful: 15,
  },
];

export function Reviews() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="ml-1 text-xl font-semibold">4.89</span>
        </div>
        <span className="text-gray-500">·</span>
        <div className="text-gray-500">{reviews.length} reviews</div>
      </div>

      <div className="grid gap-6">
        {reviews.map((review) => (
          <Card key={review.id} className="border-0 shadow-none">
            <CardContent className="p-0">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={review.avatar} alt={review.author} />
                  <AvatarFallback>
                    {review.author.split(" ")[0][0]}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="font-medium">{review.author}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                    <span>·</span>
                    <time>{review.date}</time>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-gray-700">{review.content}</div>
              <div className="mt-4">
                <Button variant="outline" size="sm" className="text-gray-500">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Helpful · {review.helpful}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button variant="outline" className="w-full mt-6">
        Show all {reviews.length} reviews
      </Button>
    </div>
  );
}
