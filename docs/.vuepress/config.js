module.exports = {
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
        try_free: "https://cloudlinux.com/trial",
        cloudlinuxSite: "https://cloudlinux.com",

        social: [
            {url: "https://www.facebook.com/cloudlinux/", logo: "/fb.svg"},
            {url: "https://twitter.com/cloudlinuxos/", logo: "/tw.svg"},
            {url: "https://linkedin.com/company/cloudlinux", logo: "/in.svg"},
            {url: "https://www.youtube.com/channel/UCZ3YMHWnMP7TaxlXVay5-aw", logo: "/ytube.svg"}
        ],
        locales: {
            "/": {
                header: {
                    language: {
                        title: "Language",
                        selectText: "En",
                        label: "English",
                    },
                    search:{
                        title: 'CloudLinux Help Center',
                        description: 'All documentations right at your fingertips',
                        searchEverywhere: 'Search everywhere',
                        question: 'How can I help you?',
                        defaultSearchType: 'Search everywhere',
                    },
                    tryFree: "Try Free",
                    submitRequest: "Submit Request",
                },

                mainTitle: 'Explore all helpful materials specific by the product',

                products: [
                    {
                        id: 2,
                        title: 'CloudLinux OS',
                        icon: '/clos-icon.svg',
                        links: [
                            {label: 'Getting started', href: 'https://somelink'},
                            {label: 'Documentation', href: 'https://somelink'},
                            {label: 'Knowledge base', href: 'https://somelink'},
                            {label: 'Blog', href: 'https://somelink'},
                            {label: 'Forum', href: 'https://somelink'},
                        ]
                    },
                    {
                        id: 3,
                        title: 'KernelCare',
                        icon: '/kc-icon.svg',
                        links: [
                            {label: 'Getting started', href: 'https://somelink'},
                            {label: 'Documentation', href: 'https://somelink'},
                            {label: 'Knowledge base', href: 'https://somelink'},
                            {label: 'Blog', href: 'https://somelink'},
                            {label: 'Forum', href: 'https://somelink'},
                        ]
                    },
                    {
                        id: 4,
                        title: 'Cloudlinux Network (CLN)',
                        icon: '/cln-icon.svg',
                        links: [
                            {label: 'Getting started', href: 'https://somelink'},
                            {label: 'Documentation', href: 'https://somelink'},
                            {label: 'Knowledge base', href: 'https://somelink'},
                            {label: 'Blog', href: 'https://somelink'},
                        ]
                    },
                    {
                        id: 5,
                        title: 'Imunify 360',
                        icon: '/im-icon.svg',
                        links: [
                            {label: 'Getting started', href: 'https://somelink'},
                            {label: 'Documentation', href: 'https://somelink'},
                            {label: 'Knowledge base', href: 'https://somelink'},
                            {label: 'Blog', href: 'https://somelink'},
                        ]
                    },
                    {
                        id: 6,
                        title: 'ImunifyAV/AV+',
                        icon: '/im-icon.svg',
                        links: [
                            {label: 'Getting started', href: 'https://somelink'},
                            {label: 'Documentation', href: 'https://somelink'},
                            {label: 'Knowledge base', href: 'https://somelink'},
                            {label: 'Blog', href: 'https://somelink'},
                        ]
                    }
                ],

                algolia: {
                    apiKey: "efaa28397ce47241021d716c439b80d1",
                    indexName: "cloudlinuxos",
                    appId: "0TCNL6CGX8"
                },

                footer: {
                    stayInTouch: "Stay in touch",
                    bottomLinks: [
                        {
                            text: "How to",
                            url: "https://cloudlinux.zendesk.com/hc/sections/115001344329-How-do-I"
                        },
                        {
                            text: "Getting started",
                            url: "https://www.cloudlinux.com/getting-started-with-cloudlinux-os"
                        },
                        {
                            text: "Contact support",
                            url: "https://cloudlinux.zendesk.com/hc/en-us/requests/new"
                        },
                        {
                            text: "Blog",
                            url: "https://www.cloudlinux.com/blog"
                        }
                    ],
                },
            },
            "/ru/": {
                header: {
                    language: {
                        title: "Язык",
                        selectText: "Рус",
                        label: "Русский",
                    },
                    search:{
                        title: 'CloudLinux Help Center (RUS)',
                        description: 'All documentations right at your fingertips (RUS)',
                        searchEverywhere: 'Search everywhere (RUS)',
                        question: 'How can I help you? (RUS)',
                        defaultSearchType: 'Search everywhere (RUS)',
                    },
                    tryFree: "Попробовать бесплатно",
                    submitRequest: "Отправить запрос",
                },

                mainTitle: 'Explore all helpful materials specific by the product (RUS)',

                products: [
                    {
                        id: 2,
                        title: 'CloudLinux OS',
                        icon: '/clos-icon.svg',
                        links: [
                            {label: 'Getting started', href: 'https://somelink/rus/'},
                            {label: 'Documentation', href: 'https://somelink/rus/'},
                            {label: 'Knowledge base', href: 'https://somelink/rus/'},
                            {label: 'Blog', href: 'https://somelink/rus/'},
                            {label: 'Forum', href: 'https://somelink/rus/'},
                        ]
                    },
                    {
                        id: 3,
                        title: 'KernelCare',
                        icon: '/kc-icon.svg',
                        links: [
                            {label: 'Getting started', href: 'https://somelink/rus/'},
                            {label: 'Documentation', href: 'https://somelink/rus/'},
                            {label: 'Knowledge base', href: 'https://somelink/rus/'},
                            {label: 'Blog', href: 'https://somelink/rus/'},
                            {label: 'Forum', href: 'https://somelink/rus/'},
                        ]
                    },
                    {
                        id: 4,
                        title: 'Cloudlinux Network (CLN)',
                        icon: '/cln-icon.svg',
                        links: [
                            {label: 'Getting started', href: 'https://somelink/rus/'},
                            {label: 'Documentation', href: 'https://somelink/rus/'},
                            {label: 'Knowledge base', href: 'https://somelink/rus/'},
                            {label: 'Blog', href: 'https://somelink/rus/'},
                        ]
                    },
                    {
                        id: 5,
                        title: 'Imunify 360',
                        icon: '/im-icon.svg',
                        links: [
                            {label: 'Getting started', href: 'https://somelink/rus/'},
                            {label: 'Documentation', href: 'https://somelink/rus/'},
                            {label: 'Knowledge base', href: 'https://somelink/rus/'},
                            {label: 'Blog', href: 'https://somelink/rus/'},
                        ]
                    },
                    {
                        id: 6,
                        title: 'ImunifyAV/AV+',
                        icon: '/im-icon.svg',
                        links: [
                            {label: 'Getting started', href: 'https://somelink/rus/'},
                            {label: 'Documentation', href: 'https://somelink/rus/'},
                            {label: 'Knowledge base', href: 'https://somelink/rus/'},
                            {label: 'Blog', href: 'https://somelink/rus/'},
                        ]
                    }
                ],

                algolia: {},

                footer: {
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
                        {
                            text: "Блог",
                            url: "https://www.cloudlinux.com/blog"
                        }
                    ]
                },
            }
        }
    }
};
