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
		<>
			<div className="bg-gray-300 p-4 rounded-md shadow-md w-[400px] md:inline-block hidden">
				<h2 className="text-xl font-bold mb-4 text-gray-800 text-center">
					Base Stats
				</h2>

				<div className="grid grid-cols-6 gap-1 text-center">
					{stats.map((stat) => (
						<div
							key={stat.name}
							className="flex flex-col items-center space-y-2"
						>
							<div className="bg-green-500 h-[200px] w-12">
								<div
									className="bg-gray-100 w-12"
									style={{ height: `${100 - (stat.value / 255) * 100}%` }}
								></div>
								<span className="text-sm font-normal text-gray-800 text-[16px]">
									{stat.value}
								</span>
							</div>

							<span className="text-[12px] font-normal text-gray-900 tracking-[-1px]">
								{stat.name.toUpperCase()}
							</span>
						</div>
					))}
				</div>
			</div>
			<div className="bg-gray-300 p-4 rounded-md shadow-md w-full max-w-[400px] md:hidden inline-block">
				<h2 className="text-xl font-bold mb-4 text-gray-800 text-center">
					Base Stats
				</h2>

				<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 text-center">
					{stats.map((stat) => (
						<div
							key={stat.name}
							className="flex flex-col items-center space-y-2"
						>
							<div className="bg-green-500 h-[150px] sm:h-[180px] md:h-[200px] w-10 sm:w-12">
								<div
									className="bg-gray-100 w-full"
									style={{ height: `${100 - (stat.value / 255) * 100}%` }}
								></div>
								<span className="text-sm font-normal text-gray-800">
									{stat.value}
								</span>
							</div>

							<span className="text-[12px] sm:text-[12px] font-normal text-gray-900 tracking-[-1px]">
								{stat.name.toUpperCase()}
							</span>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Stats;
