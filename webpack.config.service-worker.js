const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = isProdBuild => {
    const options = {
        swDest: 'sw.js',

        clientsClaim: true,
        skipWaiting: true,

        runtimeCaching: [
            {
                urlPattern: 'https://wueww.github.io/stadtfest-app/programm-2022.json',
                handler: 'StaleWhileRevalidate',
                options: {
                    broadcastUpdate: { channelName: 'session-updates' },
                },
            },
        ],
    };

    if (!isProdBuild) {
        // don't apply pre-caching (during dev) at all
        options.include = [/this-file-better-not-exists/];
    }

    return new WorkboxWebpackPlugin.GenerateSW(options);
};
