"use client";
export default function Loading() {
	return (
		<div className="w-full bg-gray-100 min-h-screen flex flex-col items-center justify-center text-black p-4">
			{/* Loading text with responsive text size */}
			<p className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
				Loading Pokémon details...
			</p>

			{/* Centered loading animation */}
			<div className="pokemon-loading">
				<div className="wrapper md:wrap">
					<div className="pokeball"></div>
				</div>
			</div>
		</div>
	);
}
