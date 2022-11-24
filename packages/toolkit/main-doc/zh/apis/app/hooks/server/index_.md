---
title: index.[tj]s
sidebar_position: 1
---

扩展 Modern.js Web Server 的文件，在此文件中可以给应用工程启动的 Web Server 添加 Hook 或 Middleware。

可以对请求和响应进行拦截处理，鉴权与角色、请求预处理、异常兜底等。也可在内置处理逻辑（包括路由匹配、资源寻址、头部注入、页面渲染，静态 Web 托管）插入特定的业务逻辑。

:::info
具体使用示例可查看 [Hook](/docs/apis/app/runtime/web-server/hook) & [Middleware](/docs/apis/app/runtime/web-server/middleware)。
:::