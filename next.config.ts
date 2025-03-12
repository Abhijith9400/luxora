import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      config.resolve.fallback = { 
        fs: false, 
        net: false, 
        tls: false, 
        child_process: false 
      };
    }
    return config;
  },
};

export default nextConfig;
