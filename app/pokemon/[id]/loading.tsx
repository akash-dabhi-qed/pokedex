"use client";
export default function Loading() {
	return (
		<div className="w-full bg-gray-100 min-h-screen text-2xl text-black">
			Loading Pokémon details...
			<div className="pokemon-loading">
				<div className="wrapper">
					<div className="pokeball"></div>
				</div>
			</div>
		</div>
	);
}
