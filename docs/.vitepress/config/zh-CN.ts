import { fileURLToPath, URL } from "node:url";
import path from "node:path";
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "D3 by Observable",
  description: "JavaScript 库用于打造独具个性的数据可视化",
  cleanUrls: true,
  sitemap: {
    hostname: "https://d3js.org",
  },
  head: [
    ["link", { rel: "apple-touch-icon", href: "/logo.png" }],
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
  ],
  markdown: {
    externalLinks: {
      rel: "external",
    },
  },
  vite: {
    resolve: {
      alias: [
        { find: "d3", replacement: path.resolve("./dist/d3.mjs") },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL("./theme/CustomFooter.vue", import.meta.url)
          ),
        },
      ],
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    siteTitle: "",
    nav: [
      { text: "首页", link: "/zh-CN/" },
      {
        text: "示例",
        link: "https://observablehq.com/@d3/gallery?utm_source=d3js-org&utm_medium=nav&utm_campaign=try-observable",
        rel: "external",
      },
      { text: "社区", link: "/zh-CN/community" },
      {
        text: "Plot",
        link: "https://observablehq.com/plot?utm_source=d3js-org&utm_medium=nav&utm_campaign=try-observable",
        rel: "external",
      },
    ],
    sidebar: [
      {
        text: "介绍",
        items: [
          { text: "D3 是什么?", link: "/zh-CN/what-is-d3" },
          { text: "入门指南", link: "/zh-CN/getting-started" },
        ],
      },
      {
        text: "可视化",
        items: [
          { text: "d3-axis 坐标轴模块", link: "/zh-CN/d3-axis" },
          {
            text: "d3-chord 弦模块",
            link: "/zh-CN/d3-chord",
            collapsed: true,
            items: [
              { text: "Chords", link: "/zh-CN/d3-chord/chord" },
              { text: "Ribbons", link: "/zh-CN/d3-chord/ribbon" },
            ],
          },
          { text: "d3-color 颜色模块", link: "/zh-CN/d3-color" },
          {
            text: "d3-interpolate",
            link: "/zh-CN/d3-interpolate",
            collapsed: true,
            items: [
              { text: "Value interpolation", link: "/zh-CN/d3-interpolate/value" },
              { text: "Color interpolation", link: "/zh-CN/d3-interpolate/color" },
              {
                text: "Transform interpolation",
                link: "/zh-CN/d3-interpolate/transform",
              },
              { text: "Zoom interpolation", link: "/zh-CN/d3-interpolate/zoom" },
            ],
          },
          {
            text: "d3-contour",
            link: "/zh-CN/d3-contour",
            collapsed: true,
            items: [
              { text: "Contour polygons", link: "/zh-CN/d3-contour/contour" },
              { text: "Density estimation", link: "/zh-CN/d3-contour/density" },
            ],
          },
          {
            text: "d3-delaunay",
            link: "/zh-CN/d3-delaunay",
            collapsed: true,
            items: [
              {
                text: "Delaunay triangulations",
                link: "/zh-CN/d3-delaunay/delaunay",
              },
              { text: "Voronoi diagrams", link: "/zh-CN/d3-delaunay/voronoi" },
            ],
          },
          {
            text: "d3-force",
            link: "/zh-CN/d3-force",
            collapsed: true,
            items: [
              { text: "Force simulations", link: "/zh-CN/d3-force/simulation" },
              { text: "Center force", link: "/zh-CN/d3-force/center" },
              { text: "Collide force", link: "/zh-CN/d3-force/collide" },
              { text: "Link force", link: "/zh-CN/d3-force/link" },
              { text: "Many-body force", link: "/zh-CN/d3-force/many-body" },
              { text: "Position forces", link: "/zh-CN/d3-force/position" },
            ],
          },
          {
            text: "d3-geo",
            link: "/zh-CN/d3-geo",
            collapsed: true,
            items: [
              { text: "Paths", link: "/zh-CN/d3-geo/path" },
              {
                text: "Projections",
                link: "/zh-CN/d3-geo/projection",
                collapsed: true,
                items: [
                  { text: "Azimuthal projections", link: "/zh-CN/d3-geo/azimuthal" },
                  { text: "Conic projections", link: "/zh-CN/d3-geo/conic" },
                  {
                    text: "Cylindrical projections",
                    link: "/zh-CN/d3-geo/cylindrical",
                  },
                ],
              },
              { text: "Streams", link: "/zh-CN/d3-geo/stream" },
              { text: "Spherical shapes", link: "/zh-CN/d3-geo/shape" },
              { text: "Spherical math", link: "/zh-CN/d3-geo/math" },
            ],
          },
          {
            text: "d3-hierarchy",
            link: "/zh-CN/d3-hierarchy",
            collapsed: true,
            items: [
              { text: "Hierarchies", link: "/zh-CN/d3-hierarchy/hierarchy" },
              { text: "Stratify", link: "/zh-CN/d3-hierarchy/stratify" },
              { text: "Tree", link: "/zh-CN/d3-hierarchy/tree" },
              { text: "Cluster", link: "/zh-CN/d3-hierarchy/cluster" },
              { text: "Partition", link: "/zh-CN/d3-hierarchy/partition" },
              { text: "Pack", link: "/zh-CN/d3-hierarchy/pack" },
              { text: "Treemap", link: "/zh-CN/d3-hierarchy/treemap" },
            ],
          },
          { text: "d3-path", link: "/zh-CN/d3-path" },
          { text: "d3-polygon", link: "/zh-CN/d3-polygon" },
          { text: "d3-quadtree", link: "/zh-CN/d3-quadtree" },
          {
            text: "d3-scale",
            link: "/zh-CN/d3-scale",
            collapsed: true,
            items: [
              { text: "Linear scales", link: "/zh-CN/d3-scale/linear" },
              { text: "Time scales", link: "/zh-CN/d3-scale/time" },
              { text: "Pow scales", link: "/zh-CN/d3-scale/pow" },
              { text: "Log scales", link: "/zh-CN/d3-scale/log" },
              { text: "Symlog scales", link: "/zh-CN/d3-scale/symlog" },
              { text: "Ordinal scales", link: "/zh-CN/d3-scale/ordinal" },
              { text: "Band scales", link: "/zh-CN/d3-scale/band" },
              { text: "Point scales", link: "/zh-CN/d3-scale/point" },
              { text: "Sequential scales", link: "/zh-CN/d3-scale/sequential" },
              { text: "Diverging scales", link: "/zh-CN/d3-scale/diverging" },
              { text: "Quantile scales", link: "/zh-CN/d3-scale/quantile" },
              { text: "Quantize scales", link: "/zh-CN/d3-scale/quantize" },
              { text: "Threshold scales", link: "/zh-CN/d3-scale/threshold" },
            ],
          },
          {
            text: "d3-scale-chromatic",
            link: "/zh-CN/d3-scale-chromatic",
            collapsed: true,
            items: [
              {
                text: "Categorical schemes",
                link: "/zh-CN/d3-scale-chromatic/categorical",
              },
              {
                text: "Cyclical schemes",
                link: "/zh-CN/d3-scale-chromatic/cyclical",
              },
              {
                text: "Diverging schemes",
                link: "/zh-CN/d3-scale-chromatic/diverging",
              },
              {
                text: "Sequential schemes",
                link: "/zh-CN/d3-scale-chromatic/sequential",
              },
            ],
          },
          {
            text: "d3-selection",
            link: "/zh-CN/d3-selection",
            collapsed: true,
            items: [
              { text: "Selecting elements", link: "/zh-CN/d3-selection/selecting" },
              { text: "Modifying elements", link: "/zh-CN/d3-selection/modifying" },
              { text: "Joining data", link: "/zh-CN/d3-selection/joining" },
              { text: "Handling events", link: "/zh-CN/d3-selection/events" },
              { text: "Control flow", link: "/zh-CN/d3-selection/control-flow" },
              { text: "Local variables", link: "/zh-CN/d3-selection/locals" },
              { text: "Namespaces", link: "/zh-CN/d3-selection/namespaces" },
            ],
          },
          {
            text: "d3-shape",
            link: "/zh-CN/d3-shape",
            collapsed: true,
            items: [
              { text: "Arcs", link: "/zh-CN/d3-shape/arc" },
              { text: "Areas", link: "/zh-CN/d3-shape/area" },
              { text: "Curves", link: "/zh-CN/d3-shape/curve" },
              { text: "Lines", link: "/zh-CN/d3-shape/line" },
              { text: "Links", link: "/zh-CN/d3-shape/link" },
              { text: "Pies", link: "/zh-CN/d3-shape/pie" },
              { text: "Stacks", link: "/zh-CN/d3-shape/stack" },
              { text: "Symbols", link: "/zh-CN/d3-shape/symbol" },
              { text: "Radial areas", link: "/zh-CN/d3-shape/radial-area" },
              { text: "Radial lines", link: "/zh-CN/d3-shape/radial-line" },
              { text: "Radial links", link: "/zh-CN/d3-shape/radial-link" },
            ],
          },
        ],
      },
      {
        text: "Animation",
        items: [
          { text: "d3-ease", link: "/zh-CN/d3-ease" },
          { text: "d3-timer", link: "/zh-CN/d3-timer" },
          {
            text: "d3-transition",
            link: "/zh-CN/d3-transition",
            collapsed: true,
            items: [
              { text: "Selecting elements", link: "/zh-CN/d3-transition/selecting" },
              { text: "Modifying elements", link: "/zh-CN/d3-transition/modifying" },
              { text: "Timing", link: "/zh-CN/d3-transition/timing" },
              { text: "Control flow", link: "/zh-CN/d3-transition/control-flow" },
            ],
          },
        ],
      },
      {
        text: "Interaction",
        items: [
          { text: "d3-brush", link: "/zh-CN/d3-brush" },
          { text: "d3-dispatch", link: "/zh-CN/d3-dispatch" },
          { text: "d3-drag", link: "/zh-CN/d3-drag" },
          { text: "d3-zoom", link: "/zh-CN/d3-zoom" },
        ],
      },
      {
        text: "Data",
        items: [
          {
            text: "d3-array 数组模块",
            link: "/zh-CN/d3-array",
            collapsed: true,
            items: [
              { text: "Adding numbers 数值加法", link: "/zh-CN/d3-array/add" },
              { text: "Binning data 数据分箱", link: "/zh-CN/d3-array/bin" },
              { text: "Bisecting data 数据二分", link: "/zh-CN/d3-array/bisect" },
              { text: "Blurring data 数据模糊化", link: "/zh-CN/d3-array/blur" },
              { text: "Grouping data 数据分组", link: "/zh-CN/d3-array/group" },
              { text: "Interning values 数据驻留", link: "/zh-CN/d3-array/intern" },
              { text: "Set operations 集合操作", link: "/zh-CN/d3-array/sets" },
              { text: "Sorting data 数据排序", link: "/zh-CN/d3-array/sort" },
              { text: "Summarizing data 数据汇总", link: "/zh-CN/d3-array/summarize" },
              { text: "Ticks 刻度生成", link: "/zh-CN/d3-array/ticks" },
              { text: "Transforming data 数据转换", link: "/zh-CN/d3-array/transform" },
            ],
          },
          { text: "d3-dsv", link: "/zh-CN/d3-dsv" },
          { text: "d3-fetch", link: "/zh-CN/d3-fetch" },
          { text: "d3-format", link: "/zh-CN/d3-format" },
          { text: "d3-random", link: "/zh-CN/d3-random" },
          { text: "d3-time", link: "/zh-CN/d3-time" },
          { text: "d3-time-format", link: "/zh-CN/d3-time-format" },
        ],
      },
      { text: "API index", link: "/zh-CN/api" },
    ],
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/d3" },
      { icon: "twitter", link: "https://twitter.com/observablehq" },
      { icon: "mastodon", link: "https://vis.social/@observablehq" },
      { icon: "slack", link: "https://observablehq.com/slack/join" },
      { icon: "linkedin", link: "https://www.linkedin.com/company/observable" },
      { icon: "youtube", link: "https://www.youtube.com/c/Observablehq" },
    ],
    footer: {
      message:
        "该库根据 <a style='text-decoration:underline;' href='https://github.com/d3/d3/blob/main/LICENSE'>ISC 许可证</a>发布。",
      copyright: `版权所有 2010–${new Date().getUTCFullYear()} Mike Bostock`,
    },
  },
});
