interface PokemonTypesProps {
	types: { type: { name: string } }[];
}

export default function PokemonTypes({ types }: PokemonTypesProps) {
	return (
		<div className="flex flex-col">
			<p className="font-normal font-silkscreen text-black text-xl">Types:</p>
			<ul className="list-disc list-inside">
				{types.map((typeObj, index) => (
					<li className="font-silkscreen text-gray-600" key={index}>
						{typeObj.type.name}
					</li>
				))}
			</ul>
		</div>
	);
}
