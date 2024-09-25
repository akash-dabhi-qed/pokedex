import Image from "next/image";

interface PokemonImageProps {
	src: string;
	name: string;
	height: number;
	width: number;
}

export default function PokemonImage({
	src,
	name,
	height,
	width,
}: PokemonImageProps) {
	return (
		<Image
			src={src}
			alt={`${name} official artwork`}
			width={width}
			height={height}
			className="rounded-lg"
		/>
	);
}
