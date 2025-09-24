// @ts-nocheck

const nextConfig = {
    /* config options here */
    reactStrictMode: true,
    images: {
        domains: ["example.com", "upload.wikimedia.org", "logo.clearbit.com"],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack: (config: any) => {
        config.module.rules.push({
            test: /\.(mp3|wav|ogg)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'static/media/[name].[hash][ext]'
            }
        });
        return config;
    },
};

export default nextConfig;