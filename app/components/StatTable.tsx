import React from "react";

interface Stat {
	name: string;
	value: number;
}

interface StatsProps {
	stats: Stat[];
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
	return (
		<div className="bg-gray-300 p-4 rounded-md shadow-md w-[400px] inline-block">
			<h2 className="text-xl font-bold mb-4 text-gray-800 text-center">
				Base Stats
			</h2>

			{/* Grid with 6 columns */}
			<div className="grid grid-cols-6 gap-1 text-center">
				{stats.map((stat) => (
					<div key={stat.name} className="flex flex-col items-center space-y-2">
						{/* Stat Value */}

						{/* Progress bar for stat value */}
						<div className="bg-green-500 h-[200px] w-12">
							<div
								className="bg-gray-100 w-12"
								style={{ height: `${100 - (stat.value / 255) * 100}%` }} // Assuming 255 is max stat value
							></div>
							<span className="text-sm font-normal text-gray-800 text-[16px]">
								{stat.value}
							</span>
						</div>

						{/* Stat Name */}
						<span className="text-[12px] font-normal text-gray-900 tracking-[-1px]">
							{stat.name.toUpperCase()}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Stats;
