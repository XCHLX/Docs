// node fs模块
const fs = require('fs')
// node path模块
const path = require('path')
// 被读取的文件夹地址
const basefilePath = path.resolve('docs/Net')

// 收集所有的文件路径
let arr = []
const fileDisplay = (filePath) => {
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, function (err, files) {
    if (err) return console.error('Error:(spec)', err)
    files.forEach((filename) => {
      const filedir = path.join(filePath, filename)

      if (
        [
          path.join(basefilePath, '_sidebar.md'),
          path.join(basefilePath, 'README.md'),
          path.join(basefilePath, 'assets')
        ].indexOf(filedir) < 0
      ) {
        //获取当前文件的绝对路径

        // fs.stat(path)执行后，会将stats类的实例返回给其回调函数。
        fs.stat(filedir, (eror, stats) => {
          if (eror) return console.error('Error:(spec)', err)
          // 是否是文件
          const isFile = stats.isFile()
          // 是否是文件夹
          const isDir = stats.isDirectory()
          if (isFile) {
            let mdstr = `- [${filedir
              .replace(basefilePath, '')
              .replace(/\\/g, '/')}](${filedir
              .replace(basefilePath, '/Net')
              .replace(/\\/g, '/')} '${filedir
              .replace(basefilePath, '')
              .replace(/\\/g, '/')}')`
            console.log(mdstr)
          }
          // 如果是文件夹
          if (isDir) fileDisplay(filedir)
        })
      }
    })
  })
}
fileDisplay(basefilePath)
