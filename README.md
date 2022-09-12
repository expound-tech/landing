# ArchOS Guide

使用 Arch Linux 作为日常开发主力设备的中文指南网站

- 指南地址：https://archos.phab.xyz/

## 本地开发

> 建议使用 nvm 和 pnpm, 以及设置好国内镜像源。

生成静态网站到目录 **static/**，使用 [11ty](https://www.11ty.dev/) 来制作：

```
npm run gen

// or
npm run gen:watch
```

启动本地服务器：

```
npm run serve
```

## Web Components

静态网站部分动态内容使用基于 [lit element](https://www.11ty.dev/) 构建的 Web Components 来实现：

- Guide Steps Element：https://phab-xyz.github.io/guide-steps-element/

## 静态部署

在本地安装 [serverless](https://cn.serverless.com/) 框架，请了解相关配置:

```
npm install -g serverless
```

一键部署：

```
sls deploy
```