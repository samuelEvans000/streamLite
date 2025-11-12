export type Movie = {
	id: number;
	title: string;
	overview: string;
	poster_path: string | null;
	backdrop_path: string | null;
	release_date: string;
	genre_ids?: number[];
	popularity?: number;
	vote_average?: number;
	runtime?: number | null;
	genres?: { id: number; name: string }[];
};

export type PaginatedMoviesResponse = {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
};

export type MovieDetails = Movie & {
	runtime: number | null;
	budget?: number;
	revenue?: number;
	genres?: { id: number; name: string }[];
	homepage?: string | null;
	imdb_id?: string | null;
};


