# D3: Data-Driven Documents

<a href="https://d3js.org"><img src="./docs/public/logo.svg" width="256" height="256"></a>

**D3** (or **D3.js**) is a free, open-source JavaScript library for visualizing data. Its low-level approach built on web standards offers unparalleled flexibility in authoring dynamic, data-driven graphics. For more than a decade D3 has powered groundbreaking and award-winning visualizations, become a foundational building block of higher-level chart libraries, and fostered a vibrant community of data practitioners around the world.

## Resources

* [Documentation](https://d3js.org)
* [Examples](https://observablehq.com/@d3/gallery)
* [Releases](https://github.com/d3/d3/releases)
* [Getting help](https://d3js.org/community)

## 分支规则

1. 此项目从官方[d3](https://github.com/d3/d3)仓库`fork`
2. `main`分支与官方主分支始终保持同步
3. `master`分支是中文版本主分支，如果官方分支有更新，可定期进行同步
4. 进行翻译时，请提`issue`进行认领，切出自己的开发分支
5. 命名规则可用例如：`zh-CN-d3-axis`，最后合并到`master`分支时，`close`掉自己提的`issue`

## 翻译计划

1. 在`docs/.vitepress`文件下增加了`config`配置，原先的英文配置直接引入，新增了`zh-CN`中文配置，后续官方仓库有更新，代码冲突会少一些
2. 认领想要翻译的任务后，请在 `zh-CN`文件夹下复制一份原来对应名字的`md`文件即可