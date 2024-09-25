interface PokemonAbilitiesProps {
	abilities: { ability: { name: string } }[];
}

export default function PokemonAbilities({ abilities }: PokemonAbilitiesProps) {
	return (
		<div className="flex flex-col">
			<p className="font-normal font-silkscreen text-black text-xl">
				Abilities:
			</p>
			<ul className="list-disc list-inside">
				{abilities.map((abilityObj, index) => (
					<li className="font-silkscreen text-gray-600" key={index}>
						{abilityObj.ability.name}
					</li>
				))}
			</ul>
		</div>
	);
}
