import { useEffect, useState, useRef } from "react";
import { getTopRated, IMAGE_BASE_URL } from "../services/tmdb";

function HeroFilmesTopRated() {
  const carouselRef = useRef(null);
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarFilmes() {
      try {
        const data = await getTopRated();
        setFilmes(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    carregarFilmes();
  }, []);

  if (loading) {
    return (
      <div className="text-white text-center mt-40">
        Carregando filmes...
      </div>
    );
  }

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -280,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 280,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black min-h-screen px-10">
      <h1 className="text-4xl texto-laranja texto-laranja-shadow font-bold mb-10">
        FILMES BEM AVALIADOS
      </h1>

      {/* Container RELATIVE */}
      <div className="relative">
        <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-orange-500 text-white p-3 rounded-full hover:bg-black duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
          </svg>
        </button>

        <div ref={carouselRef} className="flex gap-6 overflow-x-auto scrollbar-hide px-12">
          {filmes.map((filme) => (
            <div key={filme.id} className="group relative min-w-3xs bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 duration-300 cursor-pointer">
              <img
                src={
                  filme.poster_path
                    ? IMAGE_BASE_URL + filme.poster_path
                    : "/img/no-image.png"
                }
                alt={filme.title}
                className="w-full"
              />
              <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 duration-500 flex items-center justify-center text-sm">
                <p className="line-clamp-6 text-center">
                  {filme.overview || "Descrição não disponível"}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-orange-500 text-white p-3 rounded-full hover:bg-black duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default HeroFilmesTopRated;
