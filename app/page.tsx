import { getDiscoverMovies, getPopularMovies, getTopRatedMovies } from '@/lib/tmdb';
import HeroBanner from '@/components/HeroBanner';
import MovieRow from '@/components/MovieRow';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
	const [popular, topRated, discover] = await Promise.all([
		getPopularMovies(),
		getTopRatedMovies(),
		getDiscoverMovies()
	]);

	const all = [
		...(popular.results ?? []),
		...(topRated.results ?? []),
		...(discover.results ?? [])
	];
	const hero =
		all.length > 0 ? all[Math.floor(Math.random() * all.length)] : undefined;
	const popularRest = popular.results.slice(1);
	const topRatedRest = topRated.results.slice(0, 20);
	const discoverRest = discover.results.slice(0, 20);

	return (
		<div className="space-y-8">
			{hero ? <HeroBanner movie={hero} /> : null}
			<div className="space-y-10 md-8">
				<MovieRow movies={popularRest} categoryTitle="Popular" />
				<MovieRow movies={topRatedRest} categoryTitle="Top Rated" />
				<MovieRow movies={discoverRest} categoryTitle="Discover" />
			</div>
		</div>
	);
}


