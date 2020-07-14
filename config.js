module.exports = {
    title: "Maicol07 Status",
    name: "maicol07_status",
    baseUrl: "https://status.maicol07.it",
    description: "Maicol07 Status page",
    defaultLocale: "en",
    locales: [
        {code: "en", iso: "en-US", name: "English", file: "en.json"},
        {code: "it", iso: "it-IT", name: "Italiano", file: "it.json"},
    ],
    content: {
        frontMatterFormat: "yaml",
        systems: [
            'website',
            'mbooks',
            'blog',
            'community',
            'account',
            'scheduled-exams',
            'translate',
            'bugs'
        ]
    },
    analytics: {
        ga: "UA-96109243-5"
    },
    notifications: {
        webpush: {
            onesignal: {
                appId: "8bd76074-4e9e-4696-9443-ef0b9eea0ead"
            }
        },
        support: {
            en: "https://community.maicol07.it",
            it: "https://community.maicol07.it"
        }
    }
}