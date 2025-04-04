import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
};

export default nextConfig;

module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "assets.example.com",
				port: "",
				pathname: "/account123/**",
			},
		],
	},
};
