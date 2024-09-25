import PokemonHeader from "../../components/PokemonHeader";
import PokemonImage from "../../components/PokemonImage";
import PokemonInfo from "../../components/PokemonInfo";
import PokemonTypes from "../../components/PokemonTypes";
import PokemonAbilities from "../../components/PokemonAbilities";
import PokemonStats from "../../components/PokemonStats";
import PokemonMoves from "../../components/PokemonMoves";
import EvolutionChain from "@/app/components/EvolutionChain";
import { Metadata } from "next";

interface PokemonAbility {
	ability: {
		name: string;
	};
}

interface PokemonType {
	type: {
		name: string;
	};
}

interface PokemonStat {
	base_stat: number;
	stat: {
		name: string;
	};
}

interface PokemonSpecies {
	evolution_chain: {
		url: string;
	};
}

interface PokemonSprites {
	front_default: string;
	back_default: string;
	front_shiny: string;
	back_shiny: string;
	other: {
		dream_world: {
			front_default: string;
			front_female: string | null;
		};
		"official-artwork": {
			front_default: string;
		};
	};
	versions: {
		"generation-i": {
			"red-blue": {
				back_default: string;
				back_gray: string;
				front_default: string;
				front_gray: string;
			};
			yellow: {
				back_default: string;
				back_gray: string;
				front_default: string;
				front_gray: string;
			};
		};
	};
}

interface Pokemon {
	name: string;
	sprites: PokemonSprites;
	abilities: PokemonAbility[];
	types: PokemonType[];
	stats: PokemonStat[];
	weight: number;
	height: number;
	base_experience: number;
	moves: { move: { name: string } }[];
}

export async function generateMetadata({
	params,
}: {
	params: { id: string };
}): Promise<Metadata> {
	const { id } = params;
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const pokemon: Pokemon = await res.json();

	return {
		title: pokemon.name,
	};
}

async function getPokemonSpecies(id: string): Promise<PokemonSpecies> {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
	return await res.json();
}

async function getPokemon(id: string): Promise<Pokemon> {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	return await res.json();
}

export default async function PokemonDetails({
	params,
}: {
	params: { id: string };
}) {
	const { id } = params;
	const pokemon = await getPokemon(id);
	const species = await getPokemonSpecies(id);

	const formattedStats = pokemon.stats.map((statObj) => ({
		name: statObj.stat.name,
		value: statObj.base_stat,
	}));

	return (
		<div className="bg-gray-100 min-h-screen flex flex-col items-center justify-start p-4 font-silkscreen">
			<PokemonHeader name={pokemon.name} />

			<div className="bg-white mt-8 p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between">
				<PokemonImage
					src={pokemon.sprites.other["official-artwork"].front_default}
					name={pokemon.name}
					height={200}
					width={200}
				/>

				<PokemonInfo
					weight={pokemon.weight}
					height={pokemon.height}
					baseExperience={pokemon.base_experience}
				/>

				<div className="mt-4 flex gap-4 flex-wrap">
					<PokemonTypes types={pokemon.types} />
					<PokemonAbilities abilities={pokemon.abilities} />
				</div>
			</div>

			<div className="bg-white mt-8 p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between">
				<PokemonStats stats={formattedStats} />
				<PokemonMoves moves={pokemon.moves} />
				<div className="flex-1 ml-5">
					<EvolutionChain evolutionChainUrl={species.evolution_chain.url} />
				</div>
			</div>
		</div>
	);
}
