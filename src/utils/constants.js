import { Connection, clusterApiUrl } from "@solana/web3.js";

export const endpoint = clusterApiUrl(import.meta.env.VITE_CLUSTER_URL);
export const connection = new Connection(endpoint);
