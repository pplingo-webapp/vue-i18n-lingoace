# 项目名
@lingoace/vue-i18n
## 简介（Introduction）
Vue I18n 是 Vue.js 的国际化插件

## 方案选择（Scheme）


## 使用指南
### 安装
推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
> npm install @lingoace/vue-i18n

### 快速使用

```javascript
|-- src
  |-- locales
     |-- messages
          |-- en-US.json
          |-- zh-CN.json
      |-- index.js
```
locales 多语言资源（messages），必须单独存在一个目录。用于 eslint 检查。
> 注意，messages 目录不要包含业务代码，必须 *.json 结尾。

```javascript
import VueI18n from '@lingoace/vue-i18n'
import messages from "./locales";
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'zh-CN',
  messages, 
})
```
组件应用如下：
```javascript
<template>
  <div id="app">
    {{ $t('test',{_defaultMessage:'测试'}) }}
  </div>
</template>
<script>
export default {  
  
}
</script>
```
_defaultMessage 为缺失 key 的回退文字。也可以当作注释使用。
## 问题
1. SDK 资源未上传 CDN, 在业务项目，无法快速回滚版本；
## 发布指南

### 发布命令

```bash
npm run release

# 以下示例均基于 1.0.0 版本操作

# 发布预发布版本：1.0.1-0
npm run release -- --prerelease

# 发布alpha版本：1.0.1-alpha.0
npm run release -- --prerelease alpha

# 指定版本：
npm run release --  --release-as 1.1.0

# 自动升级版本：major, minor 或 patch
# 主版本：2.0.0
npm run release --  --release-as major
# 次版本：1.1.0
npm run release -- --release-as minor
# 补丁版本：1.0.1
npm run release -- --release-as patch
```
