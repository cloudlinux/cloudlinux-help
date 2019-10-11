const SearchProduct = {
    CLOUDLINUXOS: 2,
    KERNELCARE: 3,
    CLN: 4,
    IMUNIFY360: 5,
    IMUNIFYAV: 6
};

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    },
    base: "/",
    head: [
        ["link", {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"}],
        ["link", {rel: "icon", href: "/favicon.ico"}],
    ],
    theme: "cloudlinux",

    locales: {
        "/": {
            lang: "en-US",
            title: "Help Center Main",
            description: "Help Center Main"
        },
        "/ru/": {
            lang: "ru",
            title: "Help Center Главная",
            description: "Help Center Главная"
        }
    },
    themeConfig: {
        repo: "cloudlinux/cloudlinux-help",
        editLinks: true,
        docsBranch: "dev",
        docsDir: "docs",
        translationSource: 'docs.cloudlinux.com',
        defaultURL: "/",
        sidebarDepth: 2,
        logo: "/logo.svg",
        logoShort: "/logo-short.svg",
        try_free: "https://cloudlinux.com/trial",
        cloudlinuxSite: "https://cloudlinux.com",
        isHelpCenterMain: true,

        social: [
            {url: "https://www.facebook.com/cloudlinux/", logo: "/fb.svg"},
            {url: "https://twitter.com/cloudlinuxos/", logo: "/tw.svg"},
            {url: "https://linkedin.com/company/cloudlinux", logo: "/in.svg"},
            {url: "https://www.youtube.com/channel/UCZ3YMHWnMP7TaxlXVay5-aw", logo: "/ytube.svg"}
        ],

        locales: {
            "/": {
                layouts: {
                    helpCenter: {
                        siteTitle: "Cloudlinux OS"
                    },
                },
                navBar: {
                    submitRequest: "Submit request",
                    products: "Products",

                    productsMenu: {
                        product: 'Product',
                        resources: 'Resources',
                        list: [
                            {
                                default: true,
                                name: "CloudLinux OS",
                                resources: [
                                    { name: 'Getting started', icon: '/svg/gs-blue-icon.svg', url: '/getting-started' },
                                    { name: 'Documentation', icon: '/svg/doc-blue-icon.svg', url: '/introduction' },
                                    { name: 'Knowledge base', icon: '/svg/kb-blue-icon.svg', url: '/kb' },
                                    { name: 'Video tutorials', icon: '/svg/video-blue-icon.svg', url: '/vt' },
                                    { name: 'Forum', icon: '/svg/forum-blue-icon.svg', url: '/forum' },
                                    { name: 'Blog', icon: '/svg/blog-blue-icon.svg', url: '/blog' },
                                ]
                            },
                            {
                                name: "KernelCare",
                                resources: [
                                    {
                                        name: "Getting started",
                                        icon: "/svg/gs-blue-icon.svg",
                                        url: "https://docs.kernelcare.com/getting-started"
                                    },
                                    {
                                        name: "Documentation",
                                        icon: "/svg/doc-blue-icon.svg",
                                        url: "https://docs.kernelcare.com/"
                                    },
                                    {
                                        name: "Knowledge base",
                                        icon: "/svg/kb-blue-icon.svg",
                                        url: "https://docs.kernelcare.com/kb"
                                    },
                                    {
                                        name: "Video tutorials",
                                        icon: "/svg/video-blue-icon.svg",
                                        url: "https://docs.kernelcare.com/vt"
                                    },
                                    {
                                        name: "Forum",
                                        icon: "/svg/forum-blue-icon.svg",
                                        url: "https://docs.kernelcare.com/forum"
                                    },
                                    {
                                        name: "Blog",
                                        icon: "/svg/blog-blue-icon.svg",
                                        url: "https://docs.kernelcare.com/blog"
                                    },
                                ]
                            },
                            {
                                name: "Imunify360",
                                resources: [
                                    {
                                        name: "Getting started",
                                        icon: "/svg/gs-blue-icon.svg",
                                        url: "https://docs.imunify360.com/getting-started"
                                    },
                                    {
                                        name: "Documentation",
                                        icon: "/svg/doc-blue-icon.svg",
                                        url: "https://docs.imunify360.com/"
                                    },
                                    {
                                        name: "Knowledge base",
                                        icon: "/svg/kb-blue-icon.svg",
                                        url: "https://docs.imunify360.com/kb"
                                    },
                                    {
                                        name: "Video tutorials",
                                        icon: "/svg/video-blue-icon.svg",
                                        url: "https://docs.imunify360.com/vt"
                                    },
                                    {
                                        name: "Forum",
                                        icon: "/svg/forum-blue-icon.svg",
                                        url: "https://docs.imunify360.com/forum"
                                    },
                                    {
                                        name: "Blog",
                                        icon: "/svg/blog-blue-icon.svg",
                                        url: "https://docs.imunify360.com/blog"
                                    },
                                ]
                            },
                            {
                                name: "ImunifyAV/AV+",
                                resources: [
                                    {
                                        name: "Getting started",
                                        icon: "/svg/gs-blue-icon.svg",
                                        url: "https://docs.imunifyav.com/getting-started"
                                    },
                                    {
                                        name: "Documentation",
                                        icon: "/svg/doc-blue-icon.svg",
                                        url: "https://docs.imunifyav.com/"
                                    },
                                    {
                                        name: "Knowledge base",
                                        icon: "/svg/kb-blue-icon.svg",
                                        url: "https://docs.imunifyav.com/kb"
                                    },
                                    {
                                        name: "Video tutorials",
                                        icon: "/svg/video-blue-icon.svg",
                                        url: "https://docs.imunifyav.com/vt"
                                    },
                                    {
                                        name: "Forum",
                                        icon: "/svg/forum-blue-icon.svg",
                                        url: "https://docs.imunifyav.com/forum"
                                    },
                                    {
                                        name: "Blog",
                                        icon: "/svg/blog-blue-icon.svg",
                                        url: "https://docs.imunifyav.com/blog"
                                    },
                                ]
                            },
                        ]
                    }
                },
                productPage: {
                    title: "CloudLinux Help Center",
                    subtitle: "All documentations right at your fingertips"
                },
                stayInTouch: "Stay in touch",
                bottomLinks: [
                    {
                        text: "How to",
                        url:
                            "https://cloudlinux.zendesk.com/hc/sections/115001344329-How-do-I"
                    },
                    {
                        text: "Getting started",
                        url: "https://www.cloudlinux.com/getting-started-with-cloudlinux-os"
                    },
                    {
                        text: "Contact support",
                        url: "https://cloudlinux.zendesk.com/hc/en-us/requests/new"
                    },
                    {text: "Blog", url: "https://www.cloudlinux.com/blog"}
                ],

                // text for the language dropdown title
                title: "Language",
                // text for the language dropdown
                selectText: "En",
                // label for this locale in the language dropdown
                label: "English",
                // text for the edit-on-github link
                editLinkText: "Edit this page",
                tryFree: "Try Free",
                search: "Search",
                // config for Service Worker
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                defaultSearchTitle: 'Search everywhere',
                searchPlaceholder: 'How can I help you?',
                algolia: [
                    {
                        id: SearchProduct.CLOUDLINUXOS,
                        text: "CloudLinux OS",
                        apiKey: "3990019335416f9a96a6a47d07e25187",
                        indexName: "cloudlinuxos",
                        appId: "0TCNL6CGX8"
                    },
                    {
                        id: SearchProduct.KERNELCARE,
                        text: "KernelCare",
                        apiKey: "c4c1bbf8d3bb32958b26dd7cc5e74472",
                        indexName: "kernelcare",
                        appId: "R7FCMJM4P7"
                    },
                    {
                        id: SearchProduct.CLN,
                        text: "CloudLinux Network (CLN)",
                        apiKey: "",
                        indexName: "",
                        appId: ""
                    },
                    {
                        id: SearchProduct.IMUNIFY360,
                        text: "Imunify360",
                        apiKey: '29339fdc91169afd5a7dd2a0a9bba6d2',
                        indexName: 'imunify360',
                        appId: 'C6CXTFLPAJ'
                    },
                    {
                        id: SearchProduct.IMUNIFYAV,
                        text: 'ImunifyAV/AV+',
                        apiKey: '1ee8ee1bcded0cdcc07ffb4bc8c51d95',
                        indexName: 'imunifyav',
                        appId: 'BH4D9OD16A'
                    },
                ]
            },
            "/ru/": {
                layouts: {
                    helpCenter: {
                        siteTitle: "Cloudlinux OS"
                    },
                },
                navBar: {
                    submitRequest: "Отправить запрос",
                    products: "Продукты",
                    productsMenu: {
                        product: 'Product',
                        resources: 'Resources',
                        list: [
                            {
                                default: true,
                                name: "CloudLinux OS",
                                resources: [
                                    {
                                        name: "Getting started",
                                        icon: "/svg/gs-blue-icon.svg",
                                        url: "/ru/getting-started"
                                    },
                                    {name: "Documentation", icon: "/svg/doc-blue-icon.svg", url: "/ru/introduction"},
                                    {name: "Knowledge base", icon: "/svg/kb-blue-icon.svg", url: "/ru/kb"},
                                    {name: "Video tutorials", icon: "/svg/video-blue-icon.svg", url: "/ru/vt"},
                                    {name: "Forum", icon: "/svg/forum-blue-icon.svg", url: "/ru/forum"},
                                    {name: "Blog", icon: "/svg/blog-blue-icon.svg", url: "/ru/blog"},
                                ]
                            },
                            {
                                name: "KernelCare",
                                resources: [
                                    {
                                        name: "Getting started",
                                        icon: "/svg/gs-blue-icon.svg",
                                        url: "https://docs.kernelcare.com/ru/getting-started"
                                    },
                                    {
                                        name: "Documentation",
                                        icon: "/svg/doc-blue-icon.svg",
                                        url: "https://docs.kernelcare.com/ru/"
                                    },
                                    {
                                        name: "Knowledge base",
                                        icon: "/svg/kb-blue-icon.svg",
                                        url: "https://docs.kernelcare.com/ru/kb"
                                    },
                                    {
                                        name: "Video tutorials",
                                        icon: "/svg/video-blue-icon.svg",
                                        url: "https://docs.kernelcare.com/ru/vt"
                                    },
                                    {
                                        name: "Forum",
                                        icon: "/svg/forum-blue-icon.svg",
                                        url: "https://docs.kernelcare.com/ru/forum"
                                    },
                                    {
                                        name: "Blog",
                                        icon: "/svg/blog-blue-icon.svg",
                                        url: "https://docs.kernelcare.com/ru/blog"
                                    },
                                ]
                            },
                            {
                                name: "Imunify360",
                                resources: [
                                    {
                                        name: "Getting started",
                                        icon: "/svg/gs-blue-icon.svg",
                                        url: "https://docs.imunify360.com/ru/getting-started"
                                    },
                                    {
                                        name: "Documentation",
                                        icon: "/svg/doc-blue-icon.svg",
                                        url: "https://docs.imunify360.com/ru/"
                                    },
                                    {
                                        name: "Knowledge base",
                                        icon: "/svg/kb-blue-icon.svg",
                                        url: "https://docs.imunify360.com/ru/kb"
                                    },
                                    {
                                        name: "Video tutorials",
                                        icon: "/svg/video-blue-icon.svg",
                                        url: "https://docs.imunify360.com/ru/vt"
                                    },
                                    {
                                        name: "Forum",
                                        icon: "/svg/forum-blue-icon.svg",
                                        url: "https://docs.imunify360.com/ru/forum"
                                    },
                                    {
                                        name: "Blog",
                                        icon: "/svg/blog-blue-icon.svg",
                                        url: "https://docs.imunify360.com/ru/blog"
                                    },
                                ]
                            },
                            {
                                name: "ImunifyAV/AV+",
                                resources: [
                                    {
                                        name: "Getting started",
                                        icon: "/svg/gs-blue-icon.svg",
                                        url: "https://docs.imunifyav.com/ru/getting-started"
                                    },
                                    {
                                        name: "Documentation",
                                        icon: "/svg/doc-blue-icon.svg",
                                        url: "https://docs.imunifyav.com/ru/"
                                    },
                                    {
                                        name: "Knowledge base",
                                        icon: "/svg/kb-blue-icon.svg",
                                        url: "https://docs.imunifyav.com/ru/kb"
                                    },
                                    {
                                        name: "Video tutorials",
                                        icon: "/svg/video-blue-icon.svg",
                                        url: "https://docs.imunifyav.com/ru/vt"
                                    },
                                    {
                                        name: "Forum",
                                        icon: "/svg/forum-blue-icon.svg",
                                        url: "https://docs.imunifyav.com/ru/forum"
                                    },
                                    {
                                        name: "Blog",
                                        icon: "/svg/blog-blue-icon.svg",
                                        url: "https://docs.imunifyav.com/ru/blog"
                                    },
                                ]
                            },
                        ]
                    }
                },
                productPage: {
                    title: "CloudLinux Help Center",
                    subtitle: "All documentations right at your fingertips"
                },
                stayInTouch: "Будем на связи",
                bottomLinks: [
                    {
                        text: "Инструкции",
                        url: "https://cloudlinux.zendesk.com/hc/sections/115001344329-How-do-I"
                    },
                    {
                        text: "С чего начать",
                        url: "https://www.cloudlinux.com/getting-started-with-cloudlinux-os"
                    },
                    {
                        text: "Техподдержка",
                        url: "https://cloudlinux.zendesk.com/hc/en-us/requests/new"
                    },
                    { text: 'Блог', url: 'https://www.cloudlinux.com/blog' }
                ],
                title: "Язык",
                selectText: "Рус",
                label: "Русский",
                editLinkText: "Редактировать",
                tryFree: "Попробовать бесплатно",
                search: "Поиск",
                serviceWorker: {
                    updatePopup: {
                        message: "Доступен новый контент",
                        buttonText: "Обновить"
                    }
                },

                defaultSearchTitle: 'Search (RUS)',
                searchPlaceholder: 'How can I help you? (RUS)',
                algolia: [
                    {
                        id: SearchProduct.CLOUDLINUXOS,
                        text: "CloudLinux OS",
                        apiKey: "3990019335416f9a96a6a47d07e25187",
                        indexName: "cloudlinuxos",
                        appId: "0TCNL6CGX8"
                    },
                    {
                        id: SearchProduct.KERNELCARE,
                        text: "KernelCare",
                        apiKey: "c4c1bbf8d3bb32958b26dd7cc5e74472",
                        indexName: "kernelcare",
                        appId: "R7FCMJM4P7"
                    },
                    {
                        id: SearchProduct.CLN,
                        text: "CloudLinux Network (CLN)",
                        apiKey: "",
                        indexName: "",
                        appId: ""
                    },
                    {
                        id: SearchProduct.IMUNIFY360,
                        text: "Imunify360",
                        apiKey: '29339fdc91169afd5a7dd2a0a9bba6d2',
                        indexName: 'imunify360',
                        appId: 'C6CXTFLPAJ'
                    },
                    {
                        id: SearchProduct.IMUNIFYAV,
                        text: 'ImunifyAV/AV+',
                        apiKey: '1ee8ee1bcded0cdcc07ffb4bc8c51d95',
                        indexName: 'imunifyav',
                        appId: 'BH4D9OD16A'
                    },
                ]
            }
        }
    }
};
