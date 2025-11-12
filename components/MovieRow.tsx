'use client';

import { Movie } from '@/types/tmdb';
import MovieCard from './MovieCard';
import { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function MovieRow({
	movies,
	categoryTitle
}: {
	movies: Movie[];
	categoryTitle: string;
}) {
	const scrollerRef = useRef<HTMLDivElement>(null);

	function scrollBy(delta: number) {
		const el = scrollerRef.current;
		if (!el) return;
		el.scrollBy({ left: delta, behavior: 'smooth' });
	}

	return (
		<section className="relative">
			<div className="mb-3 flex items-center justify-between px-4">
				<h3 className="text-lg font-semibold">{categoryTitle}</h3>
			</div>
			<div className="group/movie-row relative">
				<button
					type="button"
					onClick={() => scrollBy(-500)}
					className="pointer-events-none absolute inset-y-0 left-0 z-30 hidden w-16 items-center justify-start bg-gradient-to-r from-black/80 via-black/60 to-transparent text-white opacity-0 transition duration-300 hover:from-black/90 hover:via-black/70 group-hover/movie-row:pointer-events-auto group-hover/movie-row:opacity-100 md:flex"
					aria-label="Scroll left"
				>
					<ChevronLeftIcon className="ml-3 h-8 w-8" aria-hidden="true" />
				</button>
				<button
					type="button"
					onClick={() => scrollBy(500)}
					className="pointer-events-none absolute inset-y-0 right-0 z-30 hidden w-16 items-center justify-end bg-gradient-to-l from-black/80 via-black/60 to-transparent text-white opacity-0 transition duration-300 hover:from-black/90 hover:via-black/70 group-hover/movie-row:pointer-events-auto group-hover/movie-row:opacity-100 md:flex"
					aria-label="Scroll right"
				>
					<ChevronRightIcon className="mr-3 h-8 w-8" aria-hidden="true" />
				</button>
				<div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background via-background/60 to-transparent opacity-0 transition duration-300 group-hover/movie-row:opacity-100" />
				<div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background via-background/60 to-transparent opacity-0 transition duration-300 group-hover/movie-row:opacity-100" />
				<div
					ref={scrollerRef}
					className="scrollbar-hide ml-4 flex snap-x gap-3 overflow-x-auto "
				>
					{movies.map((m) => (
						<div key={m.id} className="snap-start">
							<MovieCard movie={m} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}


