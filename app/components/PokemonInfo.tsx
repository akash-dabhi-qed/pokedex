interface PokemonInfoProps {
	weight: number;
	height: number;
	baseExperience: number;
}

export default function PokemonInfo({
	weight,
	height,
	baseExperience,
}: PokemonInfoProps) {
	return (
		<div className="mt-4 flex flex-col sm:flex-row gap-4 sm:gap-8">
			<div>
				<p className="font-normal font-silkscreen text-black text-lg sm:text-xl">
					Weight:
				</p>
				<p className="text-gray-600 font-silkscreen text-sm sm:text-base">
					{weight} hectograms
				</p>
			</div>
			<div>
				<p className="font-normal font-silkscreen text-black text-lg sm:text-xl">
					Height:
				</p>
				<p className="text-gray-600 font-silkscreen text-sm sm:text-base">
					{height} decimeters
				</p>
			</div>
			<div>
				<p className="font-normal font-silkscreen text-black text-lg sm:text-xl">
					Base Experience:
				</p>
				<p className="text-gray-600 font-silkscreen text-sm sm:text-base">
					{baseExperience} XP
				</p>
			</div>
		</div>
	);
}
