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
		<div className="mt-4 flex gap-4">
			<div>
				<p className="font-normal font-silkscreen text-black text-xl">
					Weight:
				</p>
				<p className="text-gray-600 font-silkscreen">{weight} hectograms</p>
			</div>
			<div>
				<p className="font-normal font-silkscreen text-black text-xl">
					Height:
				</p>
				<p className="text-gray-600 font-silkscreen">{height} decimeters</p>
			</div>
			<div>
				<p className="font-normal font-silkscreen text-black text-xl">
					Base Experience:
				</p>
				<p className="text-gray-600 font-silkscreen">{baseExperience} XP</p>
			</div>
		</div>
	);
}
