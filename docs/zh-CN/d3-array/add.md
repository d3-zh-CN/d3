# 数值加法

对浮点数进行高精度的加法运算。

## new Adder() {#Adder}

```js
const adder = new d3.Adder();
```

[示例](https://observablehq.com/@d3/d3-fsum) · [源码](https://github.com/d3/d3-array/blob/main/src/fsum.js) · 创建一个初始值为 0 的加法器 adder。

## *adder*.add(*number*) {#adder_add}

```js
adder.add(42)
```

将指定的*数字*加到加法器 adder 的当前值上，并返回该加法器对象。

## *adder*.valueOf() {#adder_valueOf}

```js
adder.valueOf() // 42
```

返回加法器 adder 的当前值的 [IEEE 754](https://zh.wikipedia.org/wiki/IEEE_754) 双精度表示形式。`+adder` 可以作为该方法的简写形式，或者通过 `Number(adder)` 将加法器 adder 强制转换为数字时调用该方法。

## fsum(*values*, *accessor*) {#fsum}

```js
d3.fsum([0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]) // 1
```

[示例](https://observablehq.com/@d3/d3-fsum) · [源码](https://github.com/d3/d3-array/blob/main/src/fsum.js) · 对给定数组 *values* 的元素进行求和，返回高精度的值。在需要更高精度的时候，可以用 d3.fsum 替换 [d3.sum](./summarize.md#sum)，虽然它的执行速度较慢。

```js
d3.fsum(penguins, (d) => d.body_mass_g) // 1437000
```

如果提供了访问函数 *accessor*，则先对输入的数组 *values* 的每个元素应用该给定的函数，它接受三个参数：当前所遍历的元素 `d`、该元素的索引 `i` 和数组 `data`（即 *values*）；然后对返回的值求和。

## fcumsum(*values*, *accessor*) {#fcumsum}

```js
d3.fcumsum([1, 1e-14, -1]) // [1, 1.00000000000001, 1e-14]
```

[示例](https://observablehq.com/@d3/d3-fcumsum) · [源码](https://github.com/d3/d3-array/blob/main/src/fsum.js) · 对给定的数组 *values* 的元素进行累加，返回一个高精度的 Float64Array。在需要更高精度的时候，可以用 d3.fcumsum 替换 [d3.cumsum](./summarize.md#cumsum) ，虽然它的执行速度较慢。

```js
d3.fcumsum(penguins, (d) => d.body_mass_g) // [3750, 7550, 10800, 10800, 14250, …]
```

如果提供了访问函数 *accessor*，则先对输入的数组 *values* 的每个元素应用该给定的函数，它接受三个参数：当前所遍历的元素 `d`、该元素的索引 `i` 和数组 `data`（即 *values*）；然后将返回的值累加起来。
