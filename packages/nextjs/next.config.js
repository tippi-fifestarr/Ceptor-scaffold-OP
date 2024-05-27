// @ts-check
const { MONGO_CONN_STR, MONGO_DB_NAME, RABIITMQ_URL, RABBITMQ_QUEUE } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  eslint: {
    ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  serverRuntimeConfig: {
    providerConfig: {
      networks: [
        { name: "mainnet", rpcUrl: "https://eth.drpc.org" },
        { name: "sepolia", rpcUrl: "https://sepolia.drpc.org", registry: "0x03d5003bf0e79c5f5223588f347eba39afbc3818" },
      ],
    },
    mongoConfig: {
      connectionStr: MONGO_CONN_STR,
      db: MONGO_DB_NAME,
    },
    queueConfig: {
      rabbitMqUrl: RABIITMQ_URL,
      rabbitMqQueue: RABBITMQ_QUEUE
    }
  },
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

module.exports = nextConfig;
