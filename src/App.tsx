import React, { useEffect, useState, FC } from "react";
import { IMovie } from "./interfaces/interfaces";

export const App = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isError, setIsError] = useState<Boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:4000/movies");
        const json = await response.json();
        console.log(json.data);
        setMovies((prev) => [json.data, ...prev]);
      } catch (err) {
        setIsError(true);
      }
    })();
  }, []);

  return <div className="App" />;
};
