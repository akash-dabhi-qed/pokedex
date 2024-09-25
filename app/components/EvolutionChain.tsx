import React from "react";
import Link from "next/link";

interface EvolutionChainProps {
	evolutionChainUrl: string;
}

interface EvolutionDetails {
	species: {
		name: string;
		url: string;
	};
	evolves_to: EvolutionDetails[];
}

const EvolutionChain: React.FC<EvolutionChainProps> = async ({
	evolutionChainUrl,
}) => {
	const response = await fetch(evolutionChainUrl);
	const data = await response.json();

	const chain = data.chain;

	const renderEvolutionChain = (evolution: EvolutionDetails) => {
		return (
			<div key={evolution.species.name}>
				<Link href={`/pokemon/${getPokemonId(evolution.species.url)}`}>
					<span className="text-blue-500 hover:underline">
						{evolution.species.name}
					</span>
				</Link>
				{evolution.evolves_to.length > 0 && (
					<div className="ml-4">
						{evolution.evolves_to.map(renderEvolutionChain)}
					</div>
				)}
			</div>
		);
	};

	const getPokemonId = (url: string) => {
		const parts = url.split("/");
		return parts[parts.length - 2];
	};

	return (
		<div>
			<h2 className="text-2xl font-normal font-silkscreen text-black mb-4">
				Evolution Chain
			</h2>
			{renderEvolutionChain(chain)}
		</div>
	);
};

export default EvolutionChain;
