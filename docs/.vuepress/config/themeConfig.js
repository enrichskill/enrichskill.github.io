const nav = require("./nav.js");
const htmlModules = require("./htmlModules.js");

// Theme Config
module.exports = {
    nav,
    sidebarDepth: 4,
    logo: "/img/logo.svg",
    repo: "enrichskill/enrichskill.github.io",
    searchMaxSuggestions: 10,
    lastUpdated: "上次更新",
    docsRepo: "enrichskill/vuepress-doc",
    docsDir: "vuepress-doc",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "帮助我们改善此页面！",

    // Vdoing Theme Config
    sidebar: {mode: "structuring", collapsable: true},

    updateBar: {
        showToArticle: false
    },

    category: false,
    tag: false,
    archive: true,
    //pageButton: true,
    pageStyle: 'card',

    author: {
        name: "codewhy",
        href: "https://www.baidu.com"
    },

    social: {
        icons: [
            {
                iconClass: "icon-github",
                title: "GitHub",
                link: "https://www.baidu.com"
            },
            {
                iconClass: "icon-gitee",
                title: "Gitee",
                link: "https://www.baidu.com"
            },
            {
                iconClass: "icon-youjian",
                title: "发邮件",
                link: "2240142544@qq.com"
            }
        ]
    },

    footer: {
        createYear: 2023,
        copyrightInfo: [
            '<a href="http://baomidou.com" target="_blank" style="font-weight:bold">codewhy</a>',
            ' | ',
            'Sponsored by <a href="https://www.jetbrains.com" target="_blank" style="font-weight:bold">JetBrains</a>',
            ' | ',
            // '<a href="http://beian.miit.gov.cn/" target=_blank>渝ICP备2021000141号-1</a>',
            '<p>友情链接：',
            '<a href="http://aizuda.com?from=MybatisPlus" target="_blank" style="font-weight:bold">AiZuDa</a>',
            ' | ',
            '<a href="https://dyang.top/" target="_blank" style="font-weight:bold">D.Yang</a>',
            ' | ',
            '<a href="https://blog.nancheung.com/" target="_blank" style="font-weight:bold">NanCheung</a>',
            ' | ',
            '<a href="http://apidocs.cn/blog/" target="_blank" style="font-weight:bold">apidocsBlog</a>',
            '</p>'
        ].join('')
    },

    htmlModules
};
