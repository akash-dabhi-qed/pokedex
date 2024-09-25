/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["raw.githubusercontent.com"],
	},
	async redirects() {
		return [
			{
				source: "/",
				destination: "/pokemon/1",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
