"use client";

import { useMovies } from "@/app/hooks/useMovies";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { Movie } from "@/app/types/movies";

function gradeFromRating(rating: number | undefined) {
  if (rating == null) return "N/A";
  if (rating >= 8.5) return "A";
  if (rating >= 7) return "B";
  if (rating >= 5.5) return "C";
  return "D";
}

export default function Dashboard() {
  // keep max 20 items per page as requested
  const { isLoading, data, isError, error } = useMovies(20);

  if (isLoading) return <div className="p-6">Loading…</div>;
  if (isError)
    return (
      <div className="p-6 text-destructive">
        Error: {String(error?.message)}
      </div>
    );

  const movies: Movie[] = data ?? [];

  return (
    <main className="w-full px-4 py-6 lg:px-8">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies.map((m) => {
            const img =
              m.primaryImage || m.thumbnails?.[0]?.url || "/placeholder.png";
            const grade = gradeFromRating(m.averageRating);

            return (
              <Card key={m.id} className="overflow-hidden neo">
                <CardHeader className="p-0">
                  <div className="relative h-56 w-full">
                    {/* use regular img to avoid layout friction in this component */}
                    <img
                      src={img}
                      alt={m.primaryTitle}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CardHeader>

                <CardContent>
                  <CardTitle className="text-lg">{m.primaryTitle}</CardTitle>
                  <CardDescription>
                    {m.description
                      ? m.description.length > 140
                        ? m.description.slice(0, 137) + "..."
                        : m.description
                      : "No description available."}
                  </CardDescription>
                </CardContent>

                <CardFooter>
                  <div className="flex items-center justify-between w-full gap-2">
                    <div className="text-sm text-muted-foreground">
                      {m.startYear || "Unknown year"}
                    </div>

                    <CardAction>
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${
                          grade === "A"
                            ? "bg-green-600 text-white"
                            : grade === "B"
                            ? "bg-yellow-500 text-white"
                            : grade === "C"
                            ? "bg-orange-500 text-white"
                            : grade === "D"
                            ? "bg-red-600 text-white"
                            : "bg-gray-400 text-white"
                        }`}
                      >
                        {grade}
                      </span>
                    </CardAction>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
}
