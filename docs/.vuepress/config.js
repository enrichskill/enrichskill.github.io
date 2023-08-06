const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
    theme: "vdoing",
    title: "vuepress-blog",
    description: '基于vuepress 搭建的博客',
    base: "http://http://43.139.184.41/",
    markdown: {
        lineNumbers: true
    },
    head,
    themeConfig,
    plugins
}
