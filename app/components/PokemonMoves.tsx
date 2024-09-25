interface PokemonMovesProps {
	moves: { move: { name: string } }[];
}

export default function PokemonMoves({ moves }: PokemonMovesProps) {
	return (
		<div className="flex-1">
			<h2 className="text-2xl font-normal font-silkscreen text-black my-5">
				Moves
			</h2>
			<ul className="list-disc list-inside max-h-[320px] overflow-y-scroll font-silkscreen text-black">
				{moves.map((moveObj, index) => (
					<li className="font-silkscreen text-gray-600" key={index}>
						{moveObj.move.name}
					</li>
				))}
			</ul>
		</div>
	);
}
