interface PokemonHeaderProps {
	name: string;
}

export default function PokemonHeader({ name }: PokemonHeaderProps) {
	return (
		<h1 className="text-4xl font-medium capitalize text-gray-800 mb-8 font-silkscreen">
			{name}
		</h1>
	);
}
