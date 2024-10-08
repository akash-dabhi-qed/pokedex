"use client";
import { useState, useEffect } from "react";
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

	const pokemonDetailsPromises = data.results.map(
		async (pokemon: { url: string }) => {
			const res = await fetch(pokemon.url);
			return res.json();
		}
	);

	const pokemonDetails = await Promise.all(pokemonDetailsPromises);

	return pokemonDetails;
}

export default function Sidebar() {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

	useEffect(() => {
		const loadPokemon = async () => {
			const data = await fetchPokemon();
			setPokemonList(data);
		};
		loadPokemon();
	}, []);

	const handleLinkClick = () => {
		setSidebarOpen(false);
	};

	return (
		<>
			<button
				className="md:hidden bg-slate-800 text-white p-2 rounded-md"
				onClick={() => setSidebarOpen(!isSidebarOpen)}
			>
				{isSidebarOpen ? "Close Pokemon List" : "Open Pokemon List"}
			</button>

			<aside
				className={`sidebar bg-slate-800 p-4 fixed top-0 left-0 h-full z-50 transform ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} transition-transform md:relative md:translate-x-0 md:w-1/4`}
			>
				<ul className="max-h-[808px] overflow-y-scroll text-white">
					{pokemonList.map((pokemon, index) => (
						<li
							key={index}
							className="text-center text-xl font-normal font-silkscreen mb-2"
						>
							<Link
								href={`/pokemon/${index + 1}`}
								className="flex items-center justify-between p-2 hover:bg-slate-700 rounded-md"
								onClick={handleLinkClick}
							>
								<span>{pokemon.name}</span>
								<PokemonImage
									src={pokemon.sprites.front_default}
									name={pokemon.name}
									height={30}
									width={30}
								/>
							</Link>
						</li>
					))}
				</ul>
			</aside>

			{isSidebarOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
					onClick={() => setSidebarOpen(false)}
				></div>
			)}
		</>
	);
}
