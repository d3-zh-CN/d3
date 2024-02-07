<script setup>

import ExampleBlankChart from "../components/ExampleBlankChart.vue";

</script>

# 入门指南

D3 在 JavaScript 环境中运行。

## 在线尝试 D3
快速上手 D3（并获取帮助）的最快方法是访问 [Observable 平台](https://observablehq.com)！D3 作为 Observable 的标准库的一部分，默认情况下就可以在 notebooks 中可用。要使用 D3 在页面创建内容，请在 cell 中返回所生成的 DOM 元素。以下是创建一个空白图表的示例，以引导你入门：

<ExampleBlankChart />

```js
{
  // 声明图表的尺寸和边距。
  const width = 640;
  const height = 400;
  const marginTop = 20;
  const marginRight = 20;
  const marginBottom = 30;
  const marginLeft = 40;

  // 声明 x 轴（在水平方向）的比例尺。
  const x = d3
    .scaleUtc()
    .domain([new Date("2023-01-01"), new Date("2024-01-01")])
    .range([marginLeft, width - marginRight]);

  // 声明 y 轴（在垂直方向）的比例尺。
  const y = d3
    .scaleLinear()
    .domain([0, 100])
    .range([height - marginBottom, marginTop]);

  // 创建一个 SVG 元素作为容器。
  const svg = d3.create("svg").attr("width", width).attr("height", height);

  // 添加 x 轴。
  svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x));

  // 添加 y 轴。
  svg
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));

  // 返回前面所创建的 SVG 元素。
  return svg.node();
}
```

::: details 译者注
以上示例代码需要在 [Observable 平台](https://observablehq.com)才能够正常运行，它的核心代码也是用 Javascript 编写的，但需要符合一些额外的（该平台特有的）规则，例如最外层需要使用 `{}` 包裹，最后要通过 `return svg.node()` 返回所创建的 SVG 元素。更具体的使用方法请参考 [Observable 官方文档](https://observablehq.com/documentation/)。
:::

尝试以下任何一个图表的初始化模板，它们是更完整的示例：

- [Area chart 面积图](https://observablehq.com/@d3/area-chart/2?intent=fork)
- [Bar chart 柱状图](https://observablehq.com/@d3/bar-chart/2?intent=fork)
- [Donut chart 圆环图](https://observablehq.com/@d3/donut-chart/2?intent=fork)
- [Histogram 直方图](https://observablehq.com/@d3/histogram/2?intent=fork)
- [Line chart 折线图](https://observablehq.com/@d3/line-chart/2?intent=fork)

请参阅 [D3 图库](https://observablehq.com/@d3/gallery)可获取更多 forkable 能复用的示例。

在 Observable 上点击 **+** 添加新的 cell 时，会提供了一些 D3 代码片段（可在 cell 弹出式菜单的筛选栏中输入 “d3” 进行搜索），以及一些[数据集示例](https://observablehq.com/@observablehq/sample-datasets)便于快速尝试 D3 的功能。也可上传 CSV 或 JSON 文件以使用你的数据。你还可以 fork 复用我们所发布的[数百个 notebooks](https://observablehq.com/@d3) 作为项目的起点。

Observable 可以免费创建公开的 notebooks。注册为 [Pro 账户](https://observablehq.com/pricing)可以获取更高级的功能，例如连接到私人数据库、多人协作编辑私有 notebooks 等。

## 在纯 HTML 中使用 D3

在原生 HTML 中，你可以从 CDN 例如 jsDelivr 中加载 D3，也可以直接将它下载到本地。我们建议使用 CDN 所托管的 ES 模块包。但我们也提供了一个 UMD 包以便所需，当作为普通脚本加载时，它会导出一个全局对象 `d3`。

:::code-group

```html [ESM + CDN]
<!DOCTYPE html>
<div id="container"></div>
<script type="module">
  import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

  // 声明图表的尺寸和边距。
  const width = 640;
  const height = 400;
  const marginTop = 20;
  const marginRight = 20;
  const marginBottom = 30;
  const marginLeft = 40;

  // 声明 x 轴（在水平方向）的比例尺。
  const x = d3
    .scaleUtc()
    .domain([new Date("2023-01-01"), new Date("2024-01-01")])
    .range([marginLeft, width - marginRight]);

  // 声明 y 轴（在垂直方向）的比例尺。
  const y = d3
    .scaleLinear()
    .domain([0, 100])
    .range([height - marginBottom, marginTop]);

  // 创建一个 SVG 元素作为容器。
  const svg = d3.create("svg").attr("width", width).attr("height", height);

  // 添加 x 轴。
  svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x));

  // 添加 y 轴。
  svg
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));

  // 返回前面所创建的 SVG 元素。
  container.append(svg.node());
</script>
```

```html [UMD + CDN]
<!DOCTYPE html>
<div id="container"></div>
<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
<script type="module">
  // 声明图表的尺寸和边距。
  const width = 640;
  const height = 400;
  const marginTop = 20;
  const marginRight = 20;
  const marginBottom = 30;
  const marginLeft = 40;

  // 声明 x 轴（在水平方向）的比例尺。
  const x = d3
    .scaleUtc()
    .domain([new Date("2023-01-01"), new Date("2024-01-01")])
    .range([marginLeft, width - marginRight]);

   // 声明 y 轴（在垂直方向）的比例尺。
  const y = d3
    .scaleLinear()
    .domain([0, 100])
    .range([height - marginBottom, marginTop]);

  // 创建一个 SVG 元素作为容器。
  const svg = d3.create("svg").attr("width", width).attr("height", height);

  // 添加 x 轴。
  svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x));

  // 添加 y 轴。
  svg
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));

  // 返回前面所创建的 SVG 元素。
  container.append(svg.node());
</script>
```

```html [UMD + local]
<!DOCTYPE html>
<div id="container"></div>
<script src="d3.js"></script>
<script type="module">
  // 声明图表的尺寸和边距。
  const width = 640;
  const height = 400;
  const marginTop = 20;
  const marginRight = 20;
  const marginBottom = 30;
  const marginLeft = 40;

  // 声明 x 轴（在水平方向）的比例尺。
  const x = d3
    .scaleUtc()
    .domain([new Date("2023-01-01"), new Date("2024-01-01")])
    .range([marginLeft, width - marginRight]);

  // 声明 y 轴（在垂直方向）的比例尺。
  const y = d3
    .scaleLinear()
    .domain([0, 100])
    .range([height - marginBottom, marginTop]);

  // 创建一个 SVG 元素作为容器。
  const svg = d3.create("svg").attr("width", width).attr("height", height);

  // 添加 x 轴。
  svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x));

  // 添加 y 轴。
  svg
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));

  // 返回前面所创建的 SVG 元素。
  container.append(svg.node());
</script>
```

:::

你也可以像以下那样通过解构导入所需的每一个 D3 模块：

```html
<script type="module">
  import {
    forceSimulation,
    forceCollide,
    forceX,
  } from "https://cdn.jsdelivr.net/npm/d3-force@3/+esm";

  const nodes = [{}, {}];
  const simulation = forceSimulation(nodes)
    .force("x", forceX())
    .force("collide", forceCollide(5))
    .on("tick", () => console.log(nodes[0].x));
</script>
```

如果你更喜欢在本地（或离线）运行 D3，可以在下方下载 D3 的 UMD 包：

- <a href="./d3.v7.js" download>d3.v7.js</a>
- <a href="./d3.v7.min.js" download>d3.v7.min.js</a>

然后，如前面的 **UMD + local** 标签页所示，创建一个 `index.html` 文件。使用未压缩的包进行调试，而在生产环境中使用经过压缩的包以获得更佳的性能。

## 从 npm 安装

当你正在使用 Node 开发 web 应用程序时，可以通过 yarn、npm、pnpm 或你所喜欢的包管理器安装 D3。

:::code-group

```bash [yarn]
yarn add d3
```

```bash [npm]
npm install d3
```

```bash [pnpm]
pnpm add d3
```

:::

然后你可以像以下那样将 D3 导入到应用程序中：

```js
import * as d3 from "d3";
```

你也可以导入你所需的的方法：

```js
import { select, selectAll } from "d3";
```

或者，你可以从 D3 的子模块中导入方法：

```js
import { mean, median } from "d3-array";
```

你可以从 DefinitelyTyped 获取 TypeScript 类型声明。

## 在 React 中使用 D3

大多数 D3 模块（包括 [d3-scale](./d3-scale.md)、[d3-array](./d3-array.md)、[d3-interpolate](./d3-interpolate.md) 和 [d3-format](./d3-format.md)）不与 DOM 进行交互，因此在 React 中使用它们时并不需要特别处理。你可以在 JSX 中使用它们来进行纯粹的声明式的可视化，例如下面的折线图示例。

:::code-group

```jsx [LinePlot.jsx]
import * as d3 from "d3";

export default function LinePlot({
  data,
  width = 640,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 20,
  marginLeft = 20,
}) {
  const x = d3.scaleLinear(
    [0, data.length - 1],
    [marginLeft, width - marginRight]
  );
  const y = d3.scaleLinear(d3.extent(data), [height - marginBottom, marginTop]);
  const line = d3.line((d, i) => x(i), y);
  return (
    <svg width={width} height={height}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d={line(data)}
      />
      <g fill="white" stroke="currentColor" strokeWidth="1.5">
        {data.map((d, i) => (
          <circle key={i} cx={x(i)} cy={y(d)} r="2.5" />
        ))}
      </g>
    </svg>
  );
}
```

:::

<p style="margin-top: -1em;"><a href="https://codesandbox.io/s/d3-react-ssr-5g1bm0?file=/src/LinePlot.jsx" style="font-size: smaller;" target="_blank">Sandbox ↗︎</a></p>

对 [selections 选择集](./d3-selection/selecting.md)进行控制的 D3 模块（包括 [d3-selection](./d3-selection.md), [d3-transition](./d3-transition.md)、[d3-transition](./d3-transition.md) 和 [d3-axis](./d3-axis.md)）的确会操作 DOM，这会与 React 的虚拟 DOM 产生冲突。在这种情况下，你可以将一个 ref 指向 DOM 元素，并在 useEffect 钩子中将其传递给 D3。

:::code-group

```jsx [LinePlot.jsx]
import * as d3 from "d3";
import { useRef, useEffect } from "react";

export default function LinePlot({
  data,
  width = 640,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 30,
  marginLeft = 40,
}) {
  const gx = useRef();
  const gy = useRef();
  const x = d3.scaleLinear(
    [0, data.length - 1],
    [marginLeft, width - marginRight]
  );
  const y = d3.scaleLinear(d3.extent(data), [height - marginBottom, marginTop]);
  const line = d3.line((d, i) => x(i), y);
  useEffect(() => void d3.select(gx.current).call(d3.axisBottom(x)), [gx, x]);
  useEffect(() => void d3.select(gy.current).call(d3.axisLeft(y)), [gy, y]);
  return (
    <svg width={width} height={height}>
      <g ref={gx} transform={`translate(0,${height - marginBottom})`} />
      <g ref={gy} transform={`translate(${marginLeft},0)`} />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d={line(data)}
      />
      <g fill="white" stroke="currentColor" strokeWidth="1.5">
        {data.map((d, i) => (
          <circle key={i} cx={x(i)} cy={y(d)} r="2.5" />
        ))}
      </g>
    </svg>
  );
}
```

:::

<p style="margin-top: -1em;"><a href="https://codesandbox.io/s/d3-react-useeffect-5lp0x6?file=/src/LinePlot.jsx" style="font-size: smaller;" target="_blank">Sandbox ↗︎</a></p>

有关在 React 中使用 D3 的更多指导建议，请参阅 [Amelia Wattenberger 的文章](https://2019.wattenberger.com/blog/react-and-d3)。

## 在 Svelte 中使用 D3

与 [React](#在-react-中使用-d3) 类似，如果你愿意，可以仅将 Svelte 用于渲染，在其中仅使用不操作 DOM 的 D3 模块。以下是使用 [d3-shape](./d3-shape.md) 和 [d3-scale](./d3-scale-chromatic.md) 模块将一系列数字点绘制为一个折线图的示例。

:::code-group

```svelte [LinePlot.svelte]
<script>
  import * as d3 from 'd3';

  export let data;
  export let width = 640;
  export let height = 400;
  export let marginTop = 20;
  export let marginRight = 20;
  export let marginBottom = 20;
  export let marginLeft = 20;

  $: x = d3.scaleLinear([0, data.length - 1], [marginLeft, width - marginRight]);
  $: y = d3.scaleLinear(d3.extent(data), [height - marginBottom, marginTop]);
  $: line = d3.line((d, i) => x(i), y);
</script>
<svg width={width} height={height}>
  <path fill="none" stroke="currentColor" stroke-width="1.5" d={line(data)} />
  <g fill="white" stroke="currentColor" stroke-width="1.5">
    {#each data as d, i}
      <circle key={i} cx={x(i)} cy={y(d)} r="2.5" />
    {/each}
  </g>
</svg>
```

:::

<p style="margin-top: -1em;"><a href="https://svelte.dev/repl/ece91c0d8b204d5ea970dbbc0d6783aa?version=3.59.1" style="font-size: smaller;" target="_blank">REPL ↗︎</a></p>

Svelte 的响应式语句 (`$:`) 与 D3 的 [data joins 数据连接](./d3-selection/joining.md)功能配合得很好，可以实现高效的更新。在下面，我们使用它们在数据更改时动态更新坐标轴。

:::code-group

```svelte [LinePlot.svelte]
<script>
  import * as d3 from 'd3';

  export let data;
  export let width = 640;
  export let height = 400;
  export let marginTop = 20;
  export let marginRight = 20;
  export let marginBottom = 30;
  export let marginLeft = 40;

  let gx;
  let gy;

  $: x = d3.scaleLinear([0, data.length - 1], [marginLeft, width - marginRight]);
  $: y = d3.scaleLinear(d3.extent(data), [height - marginBottom, marginTop]);
  $: line = d3.line((d, i) => x(i), y);
  $: d3.select(gy).call(d3.axisLeft(y));
  $: d3.select(gx).call(d3.axisBottom(x));
</script>
<svg width={width} height={height}>
  <g bind:this={gx} transform="translate(0,{height - marginBottom})" />
  <g bind:this={gy} transform="translate({marginLeft},0)" />
  <path fill="none" stroke="currentColor" stroke-width="1.5" d={line(data)} />
  <g fill="white" stroke="currentColor" stroke-width="1.5">
    {#each data as d, i}
      <circle key={i} cx={x(i)} cy={y(d)} r="2.5" />
    {/each}
  </g>
</svg>
```

:::

<p style="margin-top: -1em;"><a href="https://svelte.dev/repl/ff3bf3c7ca454d53913c0c33af0c1250?version=3.59.1" style="font-size: smaller;" target="_blank">REPL ↗︎</a></p>
