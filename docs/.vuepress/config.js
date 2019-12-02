module.exports = {
  title: "liulxin",
  description: "code learning",
  themeConfig: {
    sidebar: "auto",
    repo: "https://github.com/liulxin",
    smoothScroll: true,
    nav: require("./nav/zh"),
    collapsable: false,
    sidebarDepth: 2,
    displayAllHeaders: true,
    lastUpdated: "Last Updated",
    sidebar: {
      "/js/": [
        {
          title: "JavaScript",
          collapsable: false,
          children: ["", "test"]
        }
      ]
    }
  }
};
