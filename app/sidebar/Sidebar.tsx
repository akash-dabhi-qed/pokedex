import Link from "next/link";
import PokemonImage from "../components/PokemonImage";

interface PokemonSprites {
	front_default: string;
}

interface Pokemon {
	name: string;
	url: string;
	sprites: PokemonSprites;
}

async function fetchPokemon(): Promise<Pokemon[]> {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
	const data = await res.json();

	// Fetch individual Pokemon details concurrently
	const pokemonDetailsPromises = data.results.map(
		async (pokemon: { url: string }) => {
			const res = await fetch(pokemon.url);
			return res.json();
		}
	);

	// Wait for all details to be fetched
	const pokemonDetails = await Promise.all(pokemonDetailsPromises);

	return pokemonDetails;
}

export default async function Sidebar() {
	const pokemonList = await fetchPokemon();

	return (
		<aside className="sidebar w-[20%] float-left">
			<ul className="bg-slate-800 max-h-[928px] overflow-y-scroll ">
				{pokemonList.map((pokemon, index) => (
					<li
						key={index}
						className="text-center text-xl font-normal font-silkscreen"
					>
						<Link href={`/pokemon/${index + 1}`}>
							{pokemon.name}
							<span className="inline-block align-middle">
								<PokemonImage
									src={pokemon.sprites.front_default}
									name={pokemon.name}
									height={30}
									width={30}
								/>
							</span>
						</Link>
					</li>
				))}
			</ul>
		</aside>
	);
}
