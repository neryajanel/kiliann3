const { description } = require("../../package");

module.exports = {
  plugins: [
    ["@vuepress/back-to-top", true],
    ["@vuepress/medium-zoom", true],
    [
      "@vuepress/pwa", {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
  ],
  locales: {
    "https://homelang.co/home/lang/all_lang/": {
      lang: "Todos los Idiomas Disponibles",
      // title: "jw2",
      // description: "El mejor lugar para Aprender todos los Idiomas gt, Xinca y Garifuna",
    },
    "/": {  
      lang: "Amuzgo", // this will be set as the lang attribute on <html>
      title: "Amuzgo",
      description: "El mejor lugar para Aprender Amuzgo gratis",
    }, 
    "/mx/ayapaneco/": {  
      lang: "Ayapaneco", // this will be set as the lang attribute on <html>
      title: "Ayapaneco",
      description: "El mejor lugar para Aprender Ayapaneco gratis",
    },
    "/mx/chatino/": {  
      lang: "Chatino", // this will be set as the lang attribute on <html>
      title: "Chatino",
      description: "El mejor lugar para Aprender Chatino gratis",
    },
    "/mx/chichimeco/": {  
      lang: "Chichimeco", // this will be set as the lang attribute on <html>
      title: "Chichimeco",
      description: "El mejor lugar para Aprender Chichimeco gratis",
    },
    "/mx/chinanteco/": {  
      lang: "Chinanteco", // this will be set as the lang attribute on <html>
      title: "Chinanteco",
      description: "El mejor lugar para Aprender Chinanteco gratis",
    },
    "/mx/chocholteco/": {  
      lang: "Chocholteco", // this will be set as the lang attribute on <html>
      title: "Chocholteco",
      description: "El mejor lugar para Aprender Chocholteco gratis",
    },
    "/mx/cuicateco/": {  
      lang: "Cuicateco", // this will be set as the lang attribute on <html>
      title: "Cuicateco",
      description: "El mejor lugar para Aprender Cuicateco gratis",
    },
    "/mx/ixcateco/": {  
      lang: "Ixcateco", // this will be set as the lang attribute on <html>
      title: "Ixcateco",
      description: "El mejor lugar para Aprender Ixcateco gratis",
    },
    "/mx/matlatzinca/": {  
      lang: "Matlatzinca", // this will be set as the lang attribute on <html>
      title: "Matlatzinca",
      description: "El mejor lugar para Aprender Matlatzinca gratis",
    },
    "/mx/maya/": {  
      lang: "Maya", // this will be set as the lang attribute on <html>
      title: "Maya",
      description: "El mejor lugar para Aprender Maya gratis",
    },
    "/mx/mazahua/": {  
      lang: "Mazahua", // this will be set as the lang attribute on <html>
      title: "Mazahua",
      description: "El mejor lugar para Aprender Mazahua gratis",
    },
    "/mx/mixe/": {  
      lang: "Mixe", // this will be set as the lang attribute on <html>
      title: "Mixe",
      description: "El mejor lugar para Aprender Mixe gratis",
    },
    "/mx/oluteco/": {  
      lang: "Oluteco", // this will be set as the lang attribute on <html>
      title: "Oluteco",
      description: "El mejor lugar para Aprender Oluteco gratis",
    },
    "/mx/popoluca/": {  
      lang: "Popoluca", // this will be set as the lang attribute on <html>
      title: "Popoluca",
      description: "El mejor lugar para Aprender Popoluca gratis",
    },
    "/mx/sayulteco/": {  
      lang: "Sayulteco", // this will be set as the lang attribute on <html>
      title: "Sayulteco",
      description: "El mejor lugar para Aprender Sayulteco gratis",
    },
    "/mx/texistepequeno/": {  
      lang: "Texistepequeño", // this will be set as the lang attribute on <html>
      title: "Texistepequeño",
      description: "El mejor lugar para Aprender Texistepequeño gratis",
    },
    "/mx/tlahuica/": {  
      lang: "Tlahuica", // this will be set as the lang attribute on <html>
      title: "Tlahuica",
      description: "El mejor lugar para Aprender Tlahuica gratis",
    },
    "/mx/tlapaneco/": {  
      lang: "Tlapaneco", // this will be set as the lang attribute on <html>
      title: "Tlapaneco",
      description: "El mejor lugar para Aprender Tlapaneco gratis",
    },
    "/mx/tojolabal/": {  
      lang: "Tojolabal", // this will be set as the lang attribute on <html>
      title: "Tojolabal",
      description: "El mejor lugar para Aprender Tojolabal gratis",
    },
    "/mx/triqui/": {  
      lang: "Triqui", // this will be set as the lang attribute on <html>
      title: "Triqui",
      description: "El mejor lugar para Aprender Triqui gratis",
    },
    "/mx/tseltal/": {  
      lang: "Tseltal", // this will be set as the lang attribute on <html>
      title: "Tseltal",
      description: "El mejor lugar para Aprender Tseltal gratis",
    },
  },

  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],

  themeConfig: {
    locales: {     
      "/": {
        label: "Amuzgo",
        selectText: "Amuzgo",
        nav: require("./nav/amuzgo"),
        sidebar: {
          "/amuzgo": [
            /* ... */
          ],
          "/amuzgo/guide/": [
            /* ... */
          ],
        },
      },
    "/mx/ayapaneco/": {
        label: "Ayapaneco",
        selectText: "Ayapaneco",
        nav: require("./nav/ayapaneco"),
        sidebar: {
          "/mx/ayapaneco": [
            /* ... */
          ],
          "/mx/ayapaneco/guide/": [
            /* ... */
          ],
        },
      },
      "/mx/chatino/": {
        label: "Chatino",
        selectText: "Chatino",
        nav: require("./nav/chatino"),
        sidebar: {
          "/mx/chatino": [
            /* ... */
          ],
          "/mx/chatino/guide/": [
            /* ... */
          ],
        },
      },
      "/mx/chichimeco/": {
        label: "Chichimeco",
        selectText: "Chichimeco",
        nav: require("./nav/chichimeco"),
        sidebar: {
          "/mx/chichimeco": [
            /* ... */
          ],
          "/mx/chichimeco/guide/": [
            /* ... */
          ],
        },
      },
      "/mx/chinanteco/": {
        label: "Chinanteco",
        selectText: "Chinanteco",
        nav: require("./nav/chinanteco"),
        sidebar: {
          "/mx/chinanteco": [
            /* ... */
          ],
          "/mx/chinanteco/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/chocholteco/": {
        label: "Chocholteco",
        selectText: "Chocholteco",
        nav: require("./nav/chocholteco"),
        sidebar: {
          "/mx/chocholteco": [
            /* ... */
          ],
          "/mx/chocholteco/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/cuicateco/": {
        label: "Cuicateco",
        selectText: "Cuicateco",
        nav: require("./nav/cuicateco"),
        sidebar: {
          "/mx/cuicateco": [
            /* ... */
          ],
          "/mx/cuicateco/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/ixcateco/": {
        label: "Ixcateco",
        selectText: "Ixcateco",
        nav: require("./nav/ixcateco"),
        sidebar: {
          "/mx/ixcateco": [
            /* ... */
          ],
          "/mx/ixcateco/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/matlatzinca/": {
        label: "Matlatzinca",
        selectText: "Matlatzinca",
        nav: require("./nav/matlatzinca"),
        sidebar: {
          "/mx/matlatzinca": [
            /* ... */
          ],
          "/mx/matlatzinca/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/maya/": {
        label: "Maya",
        selectText: "Maya",
        nav: require("./nav/maya"),
        sidebar: {
          "/mx/maya": [
            /* ... */
          ],
          "/mx/maya/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/mazahua/": {
        label: "Mazahua",
        selectText: "Mazahua",
        nav: require("./nav/mazahua"),
        sidebar: {
          "/mx/mazahua": [
            /* ... */
          ],
          "/mx/mazahua/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/mixe/": {
        label: "Mixe",
        selectText: "Mixe",
        nav: require("./nav/mixe"),
        sidebar: {
          "/mx/chocholteco": [
            /* ... */
          ],
          "/mx/mixe/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/oluteco/": {
        label: "Oluteco",
        selectText: "Oluteco",
        nav: require("./nav/oluteco"),
        sidebar: {
          "/mx/oluteco": [
            /* ... */
          ],
          "/mx/oluteco/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/popoluca/": {
        label: "Popoluca",
        selectText: "Popoluca",
        nav: require("./nav/popoluca"),
        sidebar: {
          "/mx/popoluca": [
            /* ... */
          ],
          "/mx/popoluca/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/sayulteco/": {
        label: "Sayulteco",
        selectText: "Sayulteco",
        nav: require("./nav/sayulteco"),
        sidebar: {
          "/mx/sayulteco": [
            /* ... */
          ],
          "/mx/sayulteco/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/texistepequeno/": {
        label: "Texistepequeño",
        selectText: "Texistepequeño",
        nav: require("./nav/texistepequeno"),
        sidebar: {
          "/mx/texistepequeno": [
            /* ... */
          ],
          "/mx/texistepequeno/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/tlahuica/": {
        label: "Tlahuica",
        selectText: "Tlahuica",
        nav: require("./nav/tlahuica"),
        sidebar: {
          "/mx/tlahuica": [
            /* ... */
          ],
          "/mx/tlahuica/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/tlapaneco/": {
        label: "Tlapaneco",
        selectText: "Tlapaneco",
        nav: require("./nav/tlapaneco"),
        sidebar: {
          "/mx/tlapaneco": [
            /* ... */
          ],
          "/mx/tlapaneco/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/tojolabal/": {
        label: "Tojolabal",
        selectText: "Tojolabal",
        nav: require("./nav/tojolabal"),
        sidebar: {
          "/mx/tojolabal": [
            /* ... */
          ],
          "/mx/tojolabal/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/triqui/": {
        label: "Triqui",
        selectText: "Triqui",
        nav: require("./nav/triqui"),
        sidebar: {
          "/mx/triqui": [
            /* ... */
          ],
          "/mx/triqui/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/tseltal/": {
        label: "Tseltal",
        selectText: "Tseltal",
        nav: require("./nav/tseltal"),
        sidebar: {
          "/mx/tseltal": [
            /* ... */
          ],
          "/mx/tseltal/guide/": [
            /* ... */
          ],
        },
      },
    },
  },
}
