const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const LANGUAGE = "pt-BR";

console.log("API KEY:", import.meta.env.VITE_TMDB_API_KEY);

// URL base para imagens
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

// Função genérica para fazer requests
async function request(endpoint) {
  const url = `${BASE_URL}${endpoint}&api_key=${API_KEY}&language=${LANGUAGE}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erro ao buscar dados da API do TMDB");
  }

  return response.json();
}

// ===== FILMES =====
export function getPopularMovies() {
  return request("/movie/popular?");
}

export function getTopRated() {
  return request("/movie/top_rated?");
}

export function getMovieDetails(movieId) {
  return request(`/movie/${movieId}?`);
}

export function searchMovies(query) {
  return request(`/search/movie?query=${encodeURIComponent(query)}&`);
}

// ===== SÉRIES =====
export function getPopularSeries() {
  return request("/tv/popular?");
}

export function getTopRatedSeries() {
  return request("/tv/top_rated?");
}


export function getSeriesDetails(seriesId) {
  return request(`/tv/${seriesId}?`);
}

export function searchSeries(query) {
  return request(`/search/tv?query=${encodeURIComponent(query)}&`);
}
