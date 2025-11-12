import 'server-only';
import { Movie, MovieDetails, PaginatedMoviesResponse } from '@/types/tmdb';

const TMDB_BASE = 'https://api.themoviedb.org/3';

async function tmdbFetch<T>(path: string, init?: RequestInit): Promise<T> {
	const apiKey =
		process.env.TMDB_API_KEY as string;

	if (!apiKey) {
		throw new Error(
			[
				'Missing TMDB API credentials.',
				'Add TMDB_API_KEY (v4 bearer token) to your .env.local file, e.g.',
				'TMDB_API_KEY=eyJhbGciOiJIUzI1NiJ9...',
				'If you only have a v3 API Key (32 characters), store it as TMDB_API_KEY and the app will fall back to the ?api_key= query parameter.'
			].join(' ')
		);
	}
	const url = new URL(`${TMDB_BASE}${path}`);
	url.searchParams.set('language', 'en-US');
	const isV4Bearer = apiKey.startsWith('eyJ');
	if (!isV4Bearer) {
		url.searchParams.set('api_key', apiKey);
	}

	const res = await fetch(url.toString(), {
		...init,
		headers: {
			accept: 'application/json',
			...(isV4Bearer ? { Authorization: `Bearer ${apiKey}` } : {}),
			...init?.headers
		},
		// Cache on the server for short period; adjust if desired
		next: { revalidate: 60 }
	});
	if (!res.ok) {
		throw new Error(`TMDB error ${res.status}`);
	}
	return (await res.json()) as T;
}

export async function getPopularMovies(): Promise<PaginatedMoviesResponse> {
	return tmdbFetch('/movie/popular');
}

export async function getTopRatedMovies(): Promise<PaginatedMoviesResponse> {
	return tmdbFetch('/movie/top_rated');
}

export async function getDiscoverMovies(): Promise<PaginatedMoviesResponse> {
	return tmdbFetch('/discover/movie');
}

export async function getMovieDetails(id: number): Promise<MovieDetails> {
	return tmdbFetch(`/movie/${id}`);
}


