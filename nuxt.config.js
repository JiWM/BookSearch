const path = require("path");

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "booksearch",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["~assets/css/tailwind.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ["~plugins/vue-instantsearch"],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        "@nuxtjs/tailwindcss", [
            "nuxt-fontawesome",
            {
                imports: [{
                        set: "@fortawesome/free-solid-svg-icons",
                        icons: ["fas"]
                    },
                    {
                        set: "@fortawesome/free-brands-svg-icons",
                        icons: ["fab"]
                    }
                ]
            }
        ]
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ["@nuxtjs/router", "@nuxtjs/axios", "@nuxtjs/vuetify", ],

    axios: {
        proxy: true, //default - "false",
        baseurl: "http://13.209.42.183:5000/"
    },
    proxy: {
        "/search/": {
            target: "http://13.209.42.183:5000/",
            pathRewrite: { "^/search/": "" },
            changeOrigin: true
        }
    },

    vuetify: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
            },
        },
        extend(config, ctx) {},
    },


};