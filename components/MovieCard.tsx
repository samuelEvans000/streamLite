import Image from 'next/image';
import Link from 'next/link';
import { Movie } from '@/types/tmdb';

const ratingLabels: Record<string, string> = {
	0: 'U/A',
	1: 'U/A 7+',
	2: 'U/A 13+',
	3: 'U/A 16+'
};

export default function MovieCard({ movie }: { movie: Movie }) {
	const poster = movie.poster_path
		? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
		: null;
	const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : null;
	const uaLabel =
		ratingLabels[String(movie.vote_average ? Math.floor(movie.vote_average / 2.5) : 0)] ?? 'U/A';
	const runtime = movie.runtime ? `${movie.runtime}m` : '2h';
	const genreLabel = movie.genres?.[0]?.name ?? 'Drama';

	return (
		<Link
			href={`/movie/${movie.id}`}
			className="group/card relative block w-40 shrink-0 transition-transform duration-300 hover:z-20 hover:scale-110 md:w-48"
			prefetch={false}
		>
			<div className="relative aspect-[2/3] overflow-hidden rounded-md bg-zinc-800">
				{poster ? (
					<Image
						src={poster}
						alt={movie.title}
						fill
						className="object-cover transition-transform duration-300 group-hover/card:scale-105"
						sizes="(max-width: 768px) 160px, 192px"
					/>
				) : (
					<div className="h-full w-full" />
				)}
				<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
				<div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full space-y-2 p-3 text-xs text-gray-300 opacity-0 transition duration-300 group-hover/card:translate-y-0 group-hover/card:opacity-100">
					<p className="text-sm font-semibold text-white">{movie.title}</p>
					<div className="flex items-center gap-2">
						<span className="rounded border border-white/30 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white">
							{uaLabel}
						</span>
						{releaseYear ? <span>{releaseYear}</span> : null}
						<span>• {runtime}</span>
					</div>
					<p className="line-clamp-2 text-[11px] leading-relaxed text-gray-300">
						{movie.overview || 'Catch the latest blockbuster on StreamLite.'}
					</p>
					<p className="text-[11px] uppercase tracking-wide text-gray-400">{genreLabel}</p>
				</div>
			</div>
		</Link>
	);
}


