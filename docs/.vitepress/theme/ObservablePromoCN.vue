<template>
  <div :class="`vp-doc ${$style.promo}`">
    <h1 :class="$style.hed">在 Observable 使用 D3 构建你的佳作</h1>
    <div :class="$style.subhed">唯一能够支持 D3 全部功能的数据工作流平台</div>
    <div :class="$style.columns">
      <div :class="$style.column">
        <span :class="$style['column-header']">快速连接你的数据</span>
        <span :class="$style['column-body']">将实时数据从云、文件和数据库中提取到一个安全的地方——永远无需安装任何额外软件。</span>
      </div>
      <div :class="$style.column">
        <span :class="$style['column-header']">开发效率高于你所想</span>
        <span :class="$style['column-body']">摒弃冗余功能，一切正好如你所需，包括轻量级的自动版本控制、即时共享和实时多人编辑。</span>
      </div>
      <div :class="$style.column">
        <span :class="$style['column-header']">加速团队分析效率</span>
        <span :class="$style['column-body']">为你的团队的数据分析创建一个空间，在这里你可以快速创建图表、地图和数据应用程序，以便共同探索、分析和迭代。</span>
      </div>
    </div>
    <a :class="$style.button" href="https://observablehq.com?utm_source=d3js-org&utm_medium=promo&utm_campaign=try-observable" target="_blank">在 Observable 使用 D3 →</a>
  </div>
</template>

<style scoped>

h1 {
  border-top: none;
}

</style>

<style module>

.promo {
  margin: 96px auto 0 auto;
  max-width: 1152px;
  padding: 0 24px;
  text-align: center;
}

.column {
  margin: 2rem 0;
}

.column-header {
  font-weight: 600;
}

.hed,
.subhed,
.column {
  padding: 0 24px;
}

.hed,
.subhed,
.column-header {
  text-wrap: balance;
}

.subhed {
  margin-top: 1rem;
  opacity: 0.7;
}

a.button {
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  background-color: var(--vp-c-neutral);
  color: var(--vp-c-neutral-inverse);
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  margin: 0 24px;
}

a.button:hover {
  text-decoration: none;;
}

@media (min-width: 640px) {
  .promo {
    padding: 0 48px;
  }
}

@media (min-width: 768px) {
  .promo {
    margin-top: 128px;
  }
}

@media (max-width: 959px) {
  .promo {
    max-width: 768px;
  }
  .column-header::after {
    content: " · ";
  }
  .columns {
    text-align: initial;
  }
}

@media (min-width: 960px) {
  .promo {
    padding: 0 64px;
  }
  .subhed {
    margin-top: 0.5rem;
  }
  .columns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .column {
    margin: 4rem 0;
  }
  .column-header {
    margin-bottom: 0.5rem;
  }
  .column-header,
  .column-body {
    display: block;
    text-wrap: balance;
  }
}

</style>
