import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function MovieCard({ id, title, imageUrl, content, date }) {
  return (
    <>
      <Card className="flex max-w-screen-md p-4 m-4">
        <CardContent className="w-1/2 object-contain">
          <img src={imageUrl} />
        </CardContent>
        <div>
          <CardHeader>
            <div className="header-content ml-6">
              <Link href={`/review/${id}/create`}>
                <CardTitle>{title}</CardTitle> {/* タイトルを動的に表示 */}
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="ml-6">
              <CardDescription>あらすじ</CardDescription>
              <p>{content}</p> {/* コンテンツを動的に表示 */}
            </div>
          </CardContent>
          <CardFooter>
            <div className="ml-6">
              <CardDescription>公開日</CardDescription>
              <p>{date}</p> {/* 日付を動的に表示 */}
            </div>
          </CardFooter>
        </div>
      </Card>
    </>
  );
}
