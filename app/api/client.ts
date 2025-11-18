export const apiClient = {
  get: async <T>(url: string): Promise<T> => {
    const apiKey = process.env.NEXT_PUBLIC_MOVIE_API;
    const res = await fetch(url, {
      headers: {
        "x-rapidapi-host": "imdb236.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
      },
    });

    if (!res.ok) {
      throw new Error(`API error : ${res.status} `);
    }

    return res.json() as Promise<T>;
  },
};
