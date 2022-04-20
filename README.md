# 项目名
@lingoace/vue-i18n
## 简介（Introduction）
Vue I18n 是 Vue.js 的国际化插件

## 方案选择（Scheme）
[方案设计文档](https://pplingo.atlassian.net/wiki/spaces/DEV/pages/352619365/lingoace+vue-i18n)

## 使用指南
### 安装
推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
> npm install @lingoace/vue-i18n

### 快速使用
```
<p>{{ $t("hello",{
      defaultMessage:"你好"
  })}}</p>
const messages = {
  en: {
      hello: 'hello'
  }
}
<p>{{ $t("hello.name",{
      defaultMessage: "你好 {name}"
  },{name:"武晓"}) }}</p>
const messages = {
  en: {
    hello: {
      name: 'hello {name}'
    }
  }
}
```
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