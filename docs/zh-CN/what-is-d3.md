<script setup>

import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import {useData} from "vitepress";
import {computed} from "vue";
import LogoDiagram from "../components/LogoDiagram.vue";
import PlotRender from "../components/PlotRender.js";

const {site: {value: {themeConfig: {sidebar}}}} = useData();

const paths = computed(() => {
  const paths = [];
  (function visit(node, path) {
    paths.push({path, link: node.link && `.${node.link}`});
    if (node.items) {
      for (const item of node.items) {
        visit(item, (path === "/" ? path : path + "/") + item.text);
      }
    }
  })({items: sidebar}, "/D3");
  return paths;
});

// https://github.com/observablehq/plot/issues/1703
function computeTreeWidth(paths) {
  const root = d3.tree().nodeSize([1, 1])(d3.stratify().path((d) => d.path)(paths));
  const [x1, x2] = d3.extent(root, (d) => d.x);
  return x2 - x1;
}

</script>

# D3 是什么？

<LogoDiagram />

**D3** (或称作 **D3.js**) 是一个免费、开源的 JavaScript 库，用于可视化数据。它基于 Web 标准实现了一些较为底层的方法，可以为创建动态的、数据驱动的图形提供极高的灵活性。十多年来，用户使用 D3 创建了许多开创性的、屡获殊荣的可视化作品，D3 成为了高级图表库的基石，并孕育出一个充满活力的数据从业者遍及全球的社区。

根据 Information is Beautiful [2022 Test of Time Award](https://nightingaledvs.com/information-is-beautiful-awards-test-of-time/) 的评价，D3 “将该领域推向了前所未有的新高度，在发展速度、多样化和创造力实现了飞跃”，并“改变了数以百万计的新闻编辑室、网站和个人作品集页面中数据可视化的创建方式”。IEEE VIS [2021 Test of Time Award](https://ieeevis.org/year/2021/info/awards/test-of-time-awards) 指出：“通过创建一个框架可以让 Web 开发者有信心且易于创作交互式的可视化作品，作者毫无疑问将数据可视化带入了主流。（D3）是本次会议的一项重要贡献，更广泛地说，它是我们整个领域取得成功的基石。”

D3 是由 Mike Bostock 于 2011 年创建的。Mike 与 Jeff Heer 和 Vadim Ogievetsky 在斯坦福大学共同撰写了 [D3 的论文](http://vis.stanford.edu/papers/d3)。Jason Davies 在 2011 年至 2013 年期间对 D3 做出了重要的贡献，尤其是在 D3 的地理投影系统方面。自 2016 年以来，Philippe Rivière 一直是 D3 及其文档的主要贡献者。多年来，无数热心人通过分享代码和创意、传授知识和解答问题以及组织活动，为 D3 和可视化实践的发展做出了贡献。目前，Mike 和 Philippe 在 [Observable](https://observablehq.com) 共同负责 D3 和 [Observable Plot](https://observablehq.com/plot) 的开发维护工作。

## D3 是一个底层工具包

D3 并不是传统意义上的图表库。它没有“图表”的概念。当使用 D3 进行数据可视化时，你要组合各种基本元素。

例如要创建一个[堆叠面积图](https://observablehq.com/@d3/stacked-area-chart/2)，你可能要用

- 一个 [CSV parser 解析器](./d3-dsv.md)去加载数据，
- 一个 [time scale 时间比例尺](./d3-scale/time.md)来确定水平位置（_x_），
- 一个 [linear scale 线性比例尺](./d3-scale/linear.md)来确定垂直位置（_y_），
- 一个 [ordinal scale 排序比例尺](./d3-scale/ordinal.md) 和 [categorical scheme 分类配色方案](./d3-scale-chromatic/categorical.md)来确定颜色，
- 一个 [stack layout 堆叠布局生成器](./d3-shape/stack.md)来排列数据，
- 一个 [area shape 面积生成器](./d3-shape/area.md) 和 [linear curve 曲线插值生成器](./d3-shape/curve.md)来生成 SVG 路径数据，
- [axes 坐标轴](./d3-axis.md)来说明位置编码，以及
- [selections 选择模块](./d3-selection.md)来创建 SVG 元素。

需要理解很多内容，对吗？但是请放松——你不必一次性全部掌握。每一部分都可以独立使用，因此你可以按需分别学习它们，然后再将它们组合在一起。D3 不是一个单一的整体，而是由 30 个独立的库（或称作“模块”）组成的套件。我们将这些模块捆绑在一起是为了方便，而不是必需的，因此在你迭代完善项目时，可以随时使用所需的工具。

D3 工具包中有哪些工具？我们建议你阅读文档和参考示例，了解哪些工具是你所需的。

<PlotRender :options='{
  axis: null,
  height: computeTreeWidth(paths) * 12,
  marginTop: 4,
  marginBottom: 4,
  marginRight: 120,
  marks: [
    Plot.tree(paths, {path: "path", textStroke: "var(--vp-c-bg)", channels: {href: {value: "link", filter: null}}, treeSort: null})
  ]
}' />

:::tip 提示
除非你需要借助 D3 实现较为底层的掌控，否则我们建议你使用我们所创建的封装程度更高的配套库：[Observable Plot](https://observablehq.com/plot)。在 D3 中，要绘制一个 histogram 直方图可能需要 50 行代码，而使用 Plot 只需要一行！Plot 简洁但依然可灵活配置的 API 使你能够将更多的精力放在数据分析和可视化上，而不是纠结于 web 开发的细枝末节。你甚至可以将 Plot 和 D3 结合使用，以同时利用各自的优势。
:::

## D3 是灵活的

由于 D3 没有提供针对整个“图表”的抽象层，即使是一个基本的图表也可能需要编写几十行代码。这么做是有好处的，图表的所有的部分都和盘托出，你可以完全掌控它们。你可以调整可视化效果来实现你所想。对于数据 D3 没有提供默认的可视化呈现方式——只能靠你自己编写代码。（或者从示例中复制代码）。

可以将 D3 看作“凡事都亲历亲为”的选择，而不是封装程度高的图表库。如果你对其他工具不满意，并且正在思考使用 SVG、Canvas 甚至 WebGL 自己绘制图表，那么你或许就想研究一下 D3 的工具集！这里肯定有一些东西可以帮助你构建梦寐以求的图表，同时不会限制你的创造力。

## D3 与 web 紧密配合

D3 并没有引入新的图形表示方法；相反，你可以直接与 SVG 和 Canvas 等 web 标准相结合来使用 D3。

“D3” 这个名称是 _data-driven documents_ 的简称，其中 _documents_ 指的是[文档对象模型（DOM）](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)标准，它代表网页的内容。虽然 D3 的一些模块（如 [selections 选择](./d3-selection.md)和 [transitions 转换](./d3-selection.md)）涉及 DOM，但其他模块（包括 [scales 比例尺](./d3-scale.md)和 [shapes 形状](./d3-shape.md)）只对数据进行操作。D3 还可以与 React、Vue 和 Svelte 等前端框架结合使用；相关建议请参阅[入门指南](./getting-started.md)。

D3 采用 web 标准带来了许多优势。比如，你可以使用外部样式表来改变图表的样式（甚至可以响应媒体查询，例如实现响应式图表或深色模式）；你可以使用调试器和元素检查器来检查代码的执行情况；D3 的同步、命令式的编程模式——比如调用 [_selection_.attr](./d3-selection/modifying.md#selection_attr) 会立即更新 DOM——与具有复杂异步运行时的框架相比更容易调试。

## D3 用于打造独具个性的数据可视化

D3 让事情有可能达成，但并不一定容易；即使那些本来应该简单的事情也经常不容易实现。用 Amanda Cox 的话来说：“如果你认为要为一个 bar chart 柱状图编写上百行代码是再正常不过的，那么就使用 D3 吧。”

如果你需要为你的独具个性的可视化作品争取最大的表现自由度，那么你应该考虑使用 D3。D3 对于像《纽约时报》或《The Pudding》这样的媒体机构来说很有意义，在这些机构里所创建的一张图形可能会被百万读者看到，会有一个编辑团队得以共同推进视觉传达的艺术水平。

但是另一方面，对于构建个人仪表盘或一次性分析任务，D3 就过于复杂了。不要被华而不实的示例所诱惑：它们中的许多实现起来需要付出巨大的精力！如果你受到时间的限制（谁还不是呢？），那么你使用 [Observable Plot](https://observablehq.com/plot) 更有可能产生更好的可视化或分析效果。

## D3 可用于动态可视化

D3 最具创新性的概念是其 [data join 数据连接](./d3-selection/joining.md)：给定一组数据和一组 DOM 元素，data join 数据连接功能允许你对 *entering 待加入的*、*updating 需要更新的*和 *exiting 需要删除*的元素执行单独的操作。如果你只创建静态图表（没有动画效果或不需要响应用户输入的图表），你可能会发现这个概念难以理解甚至有点奇怪，因为在静态图表中用不到。

data join 数据连接功能的存在是为了让你能够在数据更改时*精确地*控制发生的事情，并依此更新页面。这种直接了当的控制权使得更新非常高效——你只需处理要更改的元素和属性即可，而无需进行 DOM 的差异性比较——以及在切换状态时实现平滑的过渡动画。D3 非常适合创建动态、交互式的可视化。（查看 2012 年的可视化作品“[512 条通往白宫的道路](https://archive.nytimes.com/www.nytimes.com/interactive/2012/11/02/us/politics/paths-to-the-white-house.html)”并尝试点击各州下方的切换按钮。真的很有趣。）
