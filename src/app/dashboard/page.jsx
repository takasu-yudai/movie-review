import MovieCard from "../ui/components/card";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
export default async function Home() {
  const movies = await prisma.movie.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return (
    <main>
      <div className="bg-slate-300">
        <h1 className="p-4 text-6xl font-bold text-gray-700">
          Recommend Movies
        </h1>
        <div className="flex flex-wrap -mx-2">
          {movies.map((movie) => (
            <div className="w-1/2 p-2" key={movie.id}>
              <MovieCard
                id={movie.id}
                title={movie.title}
                imageUrl={movie.imageUrl}
                content={movie.detail}
                date={movie.releaseDate.toDateString()}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
