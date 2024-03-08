# 数据分箱

将 quantitative values 数值分到连续的、不重叠的区间中，就像在直方图中一样。（另见 Observable Plot 的 [bin transform](https://observablehq.com/plot/transforms/bin)。）

## bin() {#bin}

```js
const bin = d3.bin().value((d) => d.culmen_length_mm);
```

[示例](https://observablehq.com/@d3/d3-bin) · [源码](https://github.com/d3/d3-array/blob/main/src/bin.js) · 使用默认的配置构造一个新的分箱器 bin generator（译注：在后文称为 `bin`）。返回的分箱器支持链式调用，因此通常将此构造函数与 [*bin*.value](#bin_value) 方法一并使用以设置值访问器 accessor。返回的分箱器（译注：除了是一个对象）也是一个函数；可以将[数据传递给它](#_bin)以进行分箱操作。

## *bin*(*data*) {#_bin}

```js
const bins = d3.bin().value((d) => d.culmen_length_mm)(penguins);
```

对可迭代的数据样本 *data* 进行分箱操作。返回一个包含不同区间的数组，其中每个区间都是一个数组（译注：即返回的数组中每个元素也是一个数组），每个区间包含了在数据样本 *data* 中属于该区间的元素。因此，该区间的长度 `length` 就是该分区所分得的元素数量。每个区间还有两个额外的属性：

* `x0` - 区间的下界（较小值，该区间包括这个边界值）。
* `x1` - 区间的上界（较大值，除最后一个区间外，该区间一般不包括该边界值）。

在给定的数据 *data* 中任何 null 或不可比较的值，或者在[定义域](#bin_domain)之外的值，都将被忽略。

## *bin*.value(*value*) {#bin_value}

```js
const bin = d3.bin().value((d) => d.culmen_length_mm);
```

如果调用该方法时设置了 *value* 参数，就将值访问器 value accessor 设置为 *value*（一个函数或一个常量），并返回该分箱器。

```js
bin.value() // (d) => d.culmen_length_mm
```

如果调用该方法时未设置 *value* 参数，则返回该分箱器当前所采用的值访问器，默认为恒等函数。

::: details 译注
[恒等函数 Identity function](https://en.wikipedia.org/wiki/Identity_function) 是指一个函数的返回值和它的输入值相同。从数学的角度而言，恒等函数为函数 `f(x)=x`

在 d3-array 模块中恒等函数的的[源码](https://github.com/d3/d3-array/blob/main/src/identity.js#L1)如下

```js
export default function identity(x) {
  return x;
}
```
:::

在[执行分箱操作](#_bin)的过程中，值访问器 accessor 将为所输入的数组的每个元素调用，并传递三个参数：当前所遍历的元素 `d`、该元素的索引 `i` 和数组 `data`。默认的值访问器假定输入的数据是可排序的（它的元素是可比较大小的），例如数字或日期。如果你的数据并不符合，那么你应该自定义一个值访问器，它要基于原始数据返回相应的可排序值。

以上方法类似于在调用分箱器之前先将原数据转换为其他值（译注：例如使用 JS 数组的[方法 `array.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)），但该方法更好，因为它确保了在返回的区间中所包含的是输入的原始数据（译注：而不是转换后的值），从而更容易访问原始数据的其他字段。

## *bin*.domain(*domain*) {#bin_domain}

```js
const bin = d3.bin().domain([0, 1]);
```

如果调用该方法时设置了 *domain* 参数，就将定义域访问器 domain accessor 设置为 *domain*（一个函数或数组），并返回该分箱器。

```js
bin.domain() // [0, 1]
```

如果调用该方法时未设置 *domain* 参数，则返回该分箱器当前所采用的定义域访问器，默认为 [extent](./summarize.md#extent) 函数。分箱器的定义域用一个数组 [*min*, *max*] 来定义，其中 *min* 是最小的可观察值，*max* 是最大的可观察值，且这两个边界值都包含在内。在[执行分箱操作](#_bin)时将忽略定义域之外的任何值。

::: details 译注
默认的定义域访问器 [d3.extent](./summarize.md#extent) 是本模块所提供的另一个方法

它用于获取一个数组的最小值和最大值

```js
d3.extent([3, 2, 1, 1, 6, 2, 4]) // [1, 6]
```
:::

例如，基于一个[线性比例尺](../d3-scale/linear.md) `x` 来调用分箱器，你可以编写如下代码：

```js
// 译注：x 是一个线性比例尺
// 通过调用比例尺的方法 x.domain() 获取它的定义域（一个数组），用作分箱器的定义域
// 通过调用比例尺的方法 x.ticks(20) 获取自动生成的刻度值（一个数组）
// 最后通过调用分箱器的方法 bin.threshold() 设置各区间的界限，具体介绍请看后文
const bin = d3.bin().domain(x.domain()).thresholds(x.ticks(20));
```

然后，可以编写如下代码对数组 numbers 中的元素进行分箱操作：

```js
const bins = bin(numbers);
```

如果使用默认的定义域访问器 [extent](./summarize.md#extent)，并通过提供分区数量参考值的形式（而不是显式地设定各分区的边界值）来设置[区间划分器](#bin_thresholds)，则实际用于分箱操作的定义域会经过[微调](./ticks.md#nice)（译注：可能对定义域的边界值进行修约），以便生成宽度均匀的区间。

请留意定义域访问器所作用的数组是经过前述的[值访问器](#bin_value)转换后的，而不是在所输入的原始数组上调用的。

## *bin*.thresholds(*count*) {#bin_thresholds}

```js
const bin = d3.bin().thresholds([0, 0.5, 1]);
```

如果调用该方法时设置了 *count* 参数，则将区间划分器 [threshold generator](#bin_thresholds) 设置为 *count*（一个函数或数组），并返回该分箱器。

```js
bin.thresholds() // () => [0, 0.5, 1]
```

如果调用该方法时未设置 *count* 参数，则返回该分箱器当前所采用的区间划分器，它默认采用 [Sturges’ formula](#thresholdSturges) 来计算分区的数量。（因此默认情况下，所需进行分箱的数据必须是数字！）区间划分器可以用一个数值数组 [*x0*, *x1*, …] 来定义。任何小于 *x0* 的值将被放置在第一个分区中（译注：但是该值依然在[定义域](#bin_domain)范围内）；任何大于等于 *x0* 但小于 *x1* 的值将被放置在第二个分区中；依此类推。因此，[所生成的区间](#_bin)的数量是 *count*.length + 1（译注：这里假定了参数 *count* 是一个数组，它的每个元素表示区间的分界线）。

::: details 译注
在后文所介绍的 [`d3.thresholdSturges` 方法](#thresholdSturges)就是默认采用的区间划分器，它是对 Sturges’ formula 的实现。

D3 还提供了另外两种不同的区间划分器 [d3.thresholdFreedmanDiaconis](#thresholdFreedmanDiaconis) 和 [d3.thresholdScott](#thresholdScott) 可以结合数据的分布特点来选择。
:::

任何超出[定义域](#bin_domain)的分间都会被忽略。第一个区间的下界 *bin*.x0 始终等于定义域的最小值，最后一个区间的上界 *bin*.x1 始终等于定义域的最大值。

```js
const bin = d3.bin().thresholds(20);
```

如果参数 *count* 是一个数字而不是一个表示*各区间分界线*的数组，则将[定义域](#bin_domain)均匀地划分为约 *count* 个区间；详见 [ticks](./ticks.md)。（译注：即参数 *count* 为一个数值时，D3 会将其视作分区数量的参考值，最终划分所得的区间数量可能与 *count* 不同；而如果参数 *count* 为一个表示各区间分界线的数组时，D3 会完全依据它来划分定义域。刻度生成也有类似的用法。）

```js
const bin = d3.bin().thresholds((values) => [d3.median(values)]);
```

你也可以创建自定义的区间划分器，它依次接受三个参数：*values* 一个数值数组，它是原始数据经过[值访问器](#bin_value)转换后而得的，以及 *min* 和 *max* 分别表示[定义域](#bin_domain)的最小值和最大值。区间划分器可以返回一个表示各区间分界线的数组，或返回一个表示分区数量的数字 *count*；在后一种情况下，定义域将被均匀地划分为约 *count* 个区间；详见 [ticks](./ticks.md)。例如，在对时间序列数据进行分箱操作时，你可能希望使用时间刻度（译注：由于 D3 所提供的区间划分器将数据默认都视为数值，有些操作对于时间并不合适，所有需要自定义区间划分器）；请参见[示例](https://observablehq.com/@d3/d3-bin-time-thresholds)。

## thresholdFreedmanDiaconis(*values*, *min*, *max*) {#thresholdFreedmanDiaconis}

```js
const bin = d3.bin().thresholds(d3.thresholdFreedmanDiaconis);
```

[源码](https://github.com/d3/d3-array/blob/main/src/threshold/freedmanDiaconis.js) · 返回一个数字作为分区数量的参考值，它是根据 [Freedman–Diaconis rule](https://en.wikipedia.org/wiki/Histogram#Mathematical_definition) 来计算分区的数量；所需进行分箱的数据 *value* 必须是数字。

## thresholdScott(*values*, *min*, *max*) {#thresholdScott}

```js
const bin = d3.bin().thresholds(d3.thresholdScott);
```

[源码](https://github.com/d3/d3-array/blob/main/src/threshold/scott.js) · 返回一个数字作为分区数量的参考值，它是根据 [Scott’s normal reference rule](https://en.wikipedia.org/wiki/Histogram#Mathematical_definition) 来计算分区的数量；所需进行分箱的数据 *value* 必须是数字。

## thresholdSturges(*values*, *min*, *max*) {#thresholdSturges}

```js
const bin = d3.bin().thresholds(d3.thresholdSturges);
```

[源码](https://github.com/d3/d3-array/blob/main/src/threshold/sturges.js) · 返回一个数字作为分区数量的参考值，它是根据 [Sturges’ formula](https://en.wikipedia.org/wiki/Histogram#Mathematical_definition)来计算分区的数量；所需进行分箱的数据 *value* 必须是数字。

::: details 译注
在前面列出的是 D3 所提供的 3 个区间划分器，它们都假定所需分箱的数据遵循正态分布。

关于它们的具体介绍和适用场景请查看 [d3.bin 这个 Observable Notebook](https://observablehq.com/@d3/d3-bin#cell-1533)，可以进行交互查看具体效果。
:::
