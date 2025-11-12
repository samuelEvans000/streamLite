import Image from 'next/image';
import { getMovieDetails } from '@/lib/tmdb';
import { notFound } from 'next/navigation';

type PageProps = {
	params: { id: string };
};

export default async function MovieDetailPage({ params }: PageProps) {
	const id = Number(params.id);
	if (!Number.isFinite(id)) return notFound();

	const movie = await getMovieDetails(id);
	if (!movie) return notFound();

	const posterPath = movie.poster_path
		? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
		: null;
	const backdropPath = movie.backdrop_path
		? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
		: movie.poster_path
		? `https://image.tmdb.org/t/p/w780${movie.poster_path}`
		: null;

	return (
		<div className="min-h-[calc(100vh-64px)]">
			{backdropPath ? (
				<div className="relative h-[50vh] w-full">
					<Image src={backdropPath} alt={movie.title} fill className="object-cover" priority />
					<div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
				</div>
			) : null}
			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8 md:grid-cols-[200px_1fr] md:px-8">
				{posterPath ? (
					<div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg">
						<Image src={posterPath} alt={movie.title} fill className="object-cover" />
					</div>
				) : null}
				<div>
					<h1 className="text-2xl font-semibold md:text-4xl">{movie.title}</h1>
					<p className="mt-2 text-sm text-gray-300">
						{movie.release_date} • {movie.runtime ? `${movie.runtime} min` : '—'}
					</p>
					{movie.overview ? (
						<p className="mt-4 max-w-3xl text-gray-200">{movie.overview}</p>
					) : null}
				</div>
			</div>
		</div>
	);
}


