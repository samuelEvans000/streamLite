import Image from 'next/image';
import Link from 'next/link';
import { Movie } from '@/types/tmdb';

export default function HeroBanner({ movie }: { movie: Movie }) {
	const backdrop = movie.backdrop_path
		? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
		: movie.poster_path
		? `https://image.tmdb.org/t/p/w780${movie.poster_path}`
		: null;

	return (
		<section className="relative h-[100vh] w-full md:h-[100vh]">
			{backdrop ? (
				<Image
					src={backdrop}
					alt={movie.title}
					fill
					priority
					quality={85}
					// className="object-cover"
					sizes="100vw"
				/>
			) : (
				<div className="h-full w-full bg-gradient-to-br from-zinc-900 to-zinc-700" />
			)}
			<div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
			<div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-background via-background/10 to-transparent" />
			<div className="absolute bottom-0 left-0 right-0 mx-auto max-w-6xl px-4 pb-8 md:px-8">
				<h2 className="max-w-3xl text-2xl font-bold drop-shadow md:text-5xl">
					{movie.title}
				</h2>
				{movie.overview ? (
					<p className="mt-2 line-clamp-3 max-w-2xl text-gray-200">{movie.overview}</p>
				) : null}
				<Link
					href={`/movie/${movie.id}`}
					className="mt-4 inline-flex items-center rounded-lg bg-transparent px-4 py-2 text-white transition hover:opacity-90 border border-white  hover:bg-white hover:text-black"
				>
					View Details
				</Link>
			</div>
		</section>
	);
}


