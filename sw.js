if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,c,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./sw.js",["./workbox-ea1badad"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./app.js",revision:"d8e2c4a70383c3671c06061637c97280"},{url:"0ab54153eeeca0ce03978cc463b257f7.woff2",revision:"0ab54153eeeca0ce03978cc463b257f7"},{url:"assets/android-icon-144x144.png",revision:"3050a301991c68ee09922e9a93ccabb3"},{url:"assets/android-icon-192x192.png",revision:"60f170e2c69c88ea4139b21f71427bf9"},{url:"assets/android-icon-36x36.png",revision:"f37c17d9e902b171c6bd392eb1849496"},{url:"assets/android-icon-48x48.png",revision:"39025ef95fa2c54ec20f75eedc8aa986"},{url:"assets/android-icon-72x72.png",revision:"e755c9e0e7f4c90bc4026ff4ac5de0f3"},{url:"assets/android-icon-96x96.png",revision:"4e8c6e464d51d4ecd1a68a0ffaa85e3c"},{url:"assets/apple-icon-114x114.png",revision:"d70b9cef5be383125c02f4091773daf6"},{url:"assets/apple-icon-120x120.png",revision:"16a86076ded567e682a04259b866d170"},{url:"assets/apple-icon-144x144.png",revision:"3050a301991c68ee09922e9a93ccabb3"},{url:"assets/apple-icon-152x152.png",revision:"1658f96c9b48561c25aa221e91f3dc3d"},{url:"assets/apple-icon-180x180.png",revision:"8da85039a356558fa1c0bd3cf8362b2e"},{url:"assets/apple-icon-57x57.png",revision:"c26f30cbaab3a376473f025f30367839"},{url:"assets/apple-icon-60x60.png",revision:"f7093c6fd2a6ae6fcdfc34f14ea95457"},{url:"assets/apple-icon-72x72.png",revision:"e755c9e0e7f4c90bc4026ff4ac5de0f3"},{url:"assets/apple-icon-76x76.png",revision:"5f4bad3820d368a97242c10a0de382aa"},{url:"assets/apple-icon-precomposed.png",revision:"59fe0d25af343b898af9048da32d4b00"},{url:"assets/apple-icon.png",revision:"59fe0d25af343b898af9048da32d4b00"},{url:"assets/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"assets/favicon-16x16.png",revision:"31f2f1b20becfe9e7567cd0a913ab43e"},{url:"assets/favicon-32x32.png",revision:"460804f440ac4e063ef57a38b6fe597f"},{url:"assets/favicon-96x96.png",revision:"4e8c6e464d51d4ecd1a68a0ffaa85e3c"},{url:"assets/favicon.ico",revision:"f1f3248ce85cd4c39dd4709db0abe486"},{url:"assets/manifest.json",revision:"702c1629037299400b80d7b9a0951c1c"},{url:"assets/ms-icon-144x144.png",revision:"3050a301991c68ee09922e9a93ccabb3"},{url:"assets/ms-icon-150x150.png",revision:"ec282f5a96922da211a5e8540b8559a7"},{url:"assets/ms-icon-310x310.png",revision:"90bf781d73b06fdfef4670aebb920732"},{url:"assets/ms-icon-70x70.png",revision:"6a8fdfaf12e55375b8980faa6825efea"},{url:"assets/wueww-logo-2020.svg",revision:"566395337cd0f72a346c62391339417d"},{url:"assets/wueww-logo-2021.svg",revision:"3034442c9f90ac40c5dfdd826421ab4f"},{url:"assets/wueww-logo-2022.svg",revision:"56a1cb68a3683d2261afbd4dd3bd4957"},{url:"cd6c777f1945164224dee082abaea03a.woff2",revision:"cd6c777f1945164224dee082abaea03a"},{url:"ef60a4f6c25ef7f39f2d25a748dbecfe.woff",revision:"ef60a4f6c25ef7f39f2d25a748dbecfe"},{url:"faff92145777a3cbaf8e7367b4807987.woff",revision:"faff92145777a3cbaf8e7367b4807987"},{url:"flags.png?9c74e172f87984c48ddf5c8108cabe67",revision:"9c74e172f87984c48ddf5c8108cabe67"},{url:"icons.eot?8e3c7f5520f5ae906c6cf6d7f3ddcd19",revision:"8e3c7f5520f5ae906c6cf6d7f3ddcd19"},{url:"icons.svg?962a1bf31c081691065fe333d9fa8105",revision:"962a1bf31c081691065fe333d9fa8105"},{url:"icons.ttf?b87b9ba532ace76ae9f6edfe9f72ded2",revision:"b87b9ba532ace76ae9f6edfe9f72ded2"},{url:"index.html",revision:"82414af27f4d168eb306d5a8c4b95178"},{url:"outline-icons.eot?701ae6abd4719e9c2ada3535a497b341",revision:"701ae6abd4719e9c2ada3535a497b341"},{url:"outline-icons.svg?82f60bd0b94a1ed68b1e6e309ce2e8c3",revision:"82f60bd0b94a1ed68b1e6e309ce2e8c3"},{url:"outline-icons.ttf?ad97afd3337e8cda302d10ff5a4026b8",revision:"ad97afd3337e8cda302d10ff5a4026b8"},{url:"styles.css",revision:"b95cbcfac36fb846b8adbebe8e33de0b"}],{}),e.registerRoute("https://backend.timetable.wueww.de/export/session.json",new e.StaleWhileRevalidate({plugins:[new e.BroadcastUpdatePlugin({channelName:"session-updates"})]}),"GET")}));
