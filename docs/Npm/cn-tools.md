# cn-tools

## npm
```shell
// 安装
yarn add cn-tools
```
```javascript
import { inItProgressBar, inItGoUp } from 'cn-tools'
// 页面浏览进度条
inItProgressBar()
// 返回顶部
inItGoUp({
    id: 'gPid', // 组件id
    right: '0px', // 距离右边距离
    content: 'TOP' // 回到顶部展示内容
})
```

 





## 浏览器

### inItProgressBar (页面浏览进度条)

```javascript
<script src="./assets/docs-js/cnTools.js"></script>
  <script>
    cnTools.inItProgressBar() // 页面浏览进度条
    cnTools.inItGoUp({
      id: 'gPid', // 组件id
      right: '0px', // 距离右边距离
      content: 'top' // 组件内容
    })
  </script>
```

 
