import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";

import MovieCard from "../ui/components/card";
import CreateCard from "../ui/components/createcard";

export default function Home() {
  const reviews = [
    {
      id: 1,
      movieId: "アイアンマン",
      rating: 5,
      comment: "素晴らしい映画でした！",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
      imageUrl: "https://picsum.photos/id/237/200/300",
    },
    {
      id: 2,
      movieId: "アイアンマン2",
      rating: 4,
      comment: "楽しめましたが、少し長い感じがしました。",
      createdAt: "2023-03-02T13:00:00Z",
      updatedAt: "2023-03-02T13:00:00Z",
      imageUrl: "https://picsum.photos/id/237/200/300",
    },
    {
      id: 3,
      movieId: "アイアンマン3",
      rating: 3,
      comment: "まあまあです。",
      createdAt: "2023-03-03T14:30:00Z",
      updatedAt: "2023-03-03T14:30:00Z",
      imageUrl: "https://picsum.photos/id/237/200/300",
    },
    {
      id: 4,
      movieId: "キャプテン・アメリカ/ザ・ファースト・アベンジャー",
      rating: 2,
      comment: "期待はずれでした。",
      createdAt: "2023-03-04T15:45:00Z",
      updatedAt: "2023-03-04T15:45:00Z",
      imageUrl: "https://picsum.photos/id/237/200/300",
    },
    {
      id: 5,
      movieId: "アベンジャーズ",
      rating: 5,
      comment: "最高の体験でした！",
      createdAt: "2023-03-05T16:20:00Z",
      updatedAt: "2023-03-05T16:20:00Z",
      imageUrl: "https://picsum.photos/id/237/200/300",
    },
    {
      id: 6,
      movieId: "キャプテン・アメリカ/ウィンター・ソルジャー",
      rating: 4,
      comment: "非常に良い映画です。",
      createdAt: "2023-03-06T17:50:00Z",
      updatedAt: "2023-03-06T17:50:00Z",
      imageUrl: "https://picsum.photos/id/237/200/300",
    },
    {
      id: 7,
      movieId: "アベンジャーズ/エイジ・オブ・ウルトロン",
      rating: 3,
      comment: "普通の映画。",
      createdAt: "2023-03-07T18:30:00Z",
      updatedAt: "2023-03-07T18:30:00Z",
      imageUrl: "https://picsum.photos/id/237/200/300",
    },
    {
      id: 8,
      movieId: "キャプテン・アメリカ/シビル・ウォー",
      rating: 1,
      comment: "全く楽しめませんでした。",
      createdAt: "2023-03-08T19:15:00Z",
      updatedAt: "2023-03-08T19:15:00Z",
      imageUrl: "https://picsum.photos/id/237/200/300",
    },
    {
      id: 9,
      movieId: "アベンジャーズ/インフィニティ・ウォー",
      rating: 5,
      comment: "また見たい！",
      createdAt: "2023-03-09T20:00:00Z",
      updatedAt: "2023-03-09T20:00:00Z",
      imageUrl: "https://picsum.photos/id/237/200/300",
    },
    {
      id: 10,
      movieId: "アベンジャーズ/エンドゲーム",
      rating: 4,
      comment: "良いストーリーでした。",
      createdAt: "2023-03-10T21:45:00Z",
      updatedAt: "2023-03-10T21:45:00Z",
      imageUrl: "https://picsum.photos/id/237/200/300",
    },
  ];
  return (
    <main>
      <div className="bg-slate-300">
        <h1 className="p-4 text-6xl font-bold text-gray-700">Review</h1>

        <div className="flex flex-wrap -mx-2">
          {reviews.map((review) => (
            <div className="w-1/2 p-2" key={review.id}>
              <CardContent className="object-contain mb-4">
                <img src={review.imageUrl} />
              </CardContent>
              <div className="ml-6">
                <CardHeader>
                  <div className="header-content">
                    <CardTitle>{review.movieId}</CardTitle>{" "}
                    {/* タイトルを動的に表示 */}
                  </div>
                </CardHeader>
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
    </main>
  );
}
