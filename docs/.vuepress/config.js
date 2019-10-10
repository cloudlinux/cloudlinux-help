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
                                    { name: "Getting started", icon: "/svg/gs-blue-icon.svg", url: "/getting-started" },
                                    { name: "Documentation", icon: "/svg/doc-blue-icon.svg", url: "/introduction" },
                                    { name: "Knowledge base", icon: "/svg/kb-blue-icon.svg", url: "/kb" },
                                    { name: "Video tutorials", icon: "/svg/video-blue-icon.svg", url: "/vt" },
                                    { name: "Forum", icon: "/svg/forum-blue-icon.svg", url: "/forum" },
                                    { name: "Blog", icon: "/svg/blog-blue-icon.svg", url: "/blog" },
                                ]
                            },
                            {
                                name: "KernelCare",
                                resources: [
                                    { name: "Getting started", icon: "/svg/gs-blue-icon.svg", url: "https://docs.kernelcare.com/getting-started" },
                                    { name: "Documentation", icon: "/svg/doc-blue-icon.svg", url: "https://docs.kernelcare.com/" },
                                    { name: "Knowledge base", icon: "/svg/kb-blue-icon.svg", url: "https://docs.kernelcare.com/kb" },
                                    { name: "Video tutorials", icon: "/svg/video-blue-icon.svg", url: "https://docs.kernelcare.com/vt" },
                                    { name: "Forum", icon: "/svg/forum-blue-icon.svg", url: "https://docs.kernelcare.com/forum" },
                                    { name: "Blog", icon: "/svg/blog-blue-icon.svg", url: "https://docs.kernelcare.com/blog" },
                                ]
                            },
                            {
                                name: "Imunify360",
                                resources: [
                                    { name: "Getting started", icon: "/svg/gs-blue-icon.svg", url: "https://docs.imunify360.com/getting-started" },
                                    { name: "Documentation", icon: "/svg/doc-blue-icon.svg", url: "https://docs.imunify360.com/" },
                                    { name: "Knowledge base", icon: "/svg/kb-blue-icon.svg", url: "https://docs.imunify360.com/kb" },
                                    { name: "Video tutorials", icon: "/svg/video-blue-icon.svg", url: "https://docs.imunify360.com/vt" },
                                    { name: "Forum", icon: "/svg/forum-blue-icon.svg", url: "https://docs.imunify360.com/forum" },
                                    { name: "Blog", icon: "/svg/blog-blue-icon.svg", url: "https://docs.imunify360.com/blog" },
                                ]
                            },
                            {
                                name: "ImunifyAV/AV+",
                                resources: [
                                    { name: "Getting started", icon: "/svg/gs-blue-icon.svg", url: "https://docs.imunifyav.com/getting-started" },
                                    { name: "Documentation", icon: "/svg/doc-blue-icon.svg", url: "https://docs.imunifyav.com/" },
                                    { name: "Knowledge base", icon: "/svg/kb-blue-icon.svg", url: "https://docs.imunifyav.com/kb" },
                                    { name: "Video tutorials", icon: "/svg/video-blue-icon.svg", url: "https://docs.imunifyav.com/vt" },
                                    { name: "Forum", icon: "/svg/forum-blue-icon.svg", url: "https://docs.imunifyav.com/forum" },
                                    { name: "Blog", icon: "/svg/blog-blue-icon.svg", url: "https://docs.imunifyav.com/blog" },
                                ]
                            },
                        ]
                    }
                },
                productPage: {
                    title: "CloudLinux Help Center",
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
                    { text: "Blog", url: "https://www.cloudlinux.com/blog" }
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
                algolia: {
                    apiKey: "efaa28397ce47241021d716c439b80d1",
                    indexName: "cloudlinuxos",
                    appId: "0TCNL6CGX8"
                },
            },
            "/ru/": {
                layouts: {
                    product: {
                        siteTitle: "Cloudlinux OS"
                    },
                },
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
                algolia: {
                    apiKey: "efaa28397ce47241021d716c439b80d1",
                    indexName: "cloudlinuxos-ru",
                    appId: "0TCNL6CGX8"
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
                                    { name: "Getting started", icon: "/svg/gs-blue-icon.svg", url: "/ru/getting-started" },
                                    { name: "Documentation", icon: "/svg/doc-blue-icon.svg", url: "/ru/introduction" },
                                    { name: "Knowledge base", icon: "/svg/kb-blue-icon.svg", url: "/kb" },
                                    { name: "Video tutorials", icon: "/svg/video-blue-icon.svg", url: "/vt" },
                                    { name: "Forum", icon: "/svg/forum-blue-icon.svg", url: "/forum" },
                                    { name: "Blog", icon: "/svg/blog-blue-icon.svg", url: "/blog" },
                                ]
                            },
                            {
                                name: "KernelCare",
                                resources: [
                                    { name: "Getting started", icon: "/svg/gs-blue-icon.svg", url: "https://docs.kernelcare.com/getting-started" },
                                    { name: "Documentation", icon: "/svg/doc-blue-icon.svg", url: "https://docs.kernelcare.com/" },
                                    { name: "Knowledge base", icon: "/svg/kb-blue-icon.svg", url: "https://docs.kernelcare.com/kb" },
                                    { name: "Video tutorials", icon: "/svg/video-blue-icon.svg", url: "https://docs.kernelcare.com/vt" },
                                    { name: "Forum", icon: "/svg/forum-blue-icon.svg", url: "https://docs.kernelcare.com/forum" },
                                    { name: "Blog", icon: "/svg/blog-blue-icon.svg", url: "https://docs.kernelcare.com/blog" },
                                ]
                            },
                            {
                                name: "Imunify360",
                                resources: [
                                    { name: "Getting started", icon: "/svg/gs-blue-icon.svg", url: "https://docs.imunify360.com/getting-started" },
                                    { name: "Documentation", icon: "/svg/doc-blue-icon.svg", url: "https://docs.imunify360.com/" },
                                    { name: "Knowledge base", icon: "/svg/kb-blue-icon.svg", url: "https://docs.imunify360.com/kb" },
                                    { name: "Video tutorials", icon: "/svg/video-blue-icon.svg", url: "https://docs.imunify360.com/vt" },
                                    { name: "Forum", icon: "/svg/forum-blue-icon.svg", url: "https://docs.imunify360.com/forum" },
                                    { name: "Blog", icon: "/svg/blog-blue-icon.svg", url: "https://docs.imunify360.com/blog" },
                                ]
                            },
                            {
                                name: "ImunifyAV/AV+",
                                resources: [
                                    { name: "Getting started", icon: "/svg/gs-blue-icon.svg", url: "https://docs.imunifyav.com/getting-started" },
                                    { name: "Documentation", icon: "/svg/doc-blue-icon.svg", url: "https://docs.imunifyav.com/" },
                                    { name: "Knowledge base", icon: "/svg/kb-blue-icon.svg", url: "https://docs.imunifyav.com/kb" },
                                    { name: "Video tutorials", icon: "/svg/video-blue-icon.svg", url: "https://docs.imunifyav.com/vt" },
                                    { name: "Forum", icon: "/svg/forum-blue-icon.svg", url: "https://docs.imunifyav.com/forum" },
                                    { name: "Blog", icon: "/svg/blog-blue-icon.svg", url: "https://docs.imunifyav.com/blog" },
                                ]
                            },
                        ]
                    }
                },
                productPage: {
                    title: "CloudLinux OS support resources",
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
                    { text: "Блог", url: "https://www.cloudlinux.com/blog" }
                ],
            }
        }
    }
};
