import Stats from "./StatTable";

interface PokemonStatsProps {
	stats: { name: string; value: number }[];
}

export default function PokemonStats({ stats }: PokemonStatsProps) {
	return (
		<div className="flex-1 md:mr-8">
			<h2 className="text-2xl font-normal font-silkscreen text-black mb-4">
				Stats
			</h2>
			<Stats stats={stats} />
		</div>
	);
}
