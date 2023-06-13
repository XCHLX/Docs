// node fs模块
const { log } = require('console')
const fs = require('fs')
// node path模块
const path = require('path')
// 被读取的文件夹地址
const basefilePath = path.resolve('docs/Net')

let arr = []
const fileDisplay = (filePath) => {
  const flist = fs.readdirSync(filePath)
  flist.forEach((filename, index) => {
    const filedir = path.join(filePath, filename)
    // console.log('filedir: ', filedir)
    const stats = fs.statSync(filedir)
    if (stats.isFile()) {
      arr.push(filedir.replace(basefilePath, '/Net').replace(/\\/g, '/'))
    } else if (stats.isDirectory()) {
      fileDisplay(filedir)
    }
  })
}

fileDisplay(basefilePath)

// console.log(JSON.stringify(arr))

const init = (arr) => {
  readme = arr.filter((e) => {
    return e.indexOf('README.md') > -1
  })
  console.log(`- [🚀.Net](/Net/README '.Net')`)
  readme.forEach((e, index) => {
    if (e.indexOf('.md') > -1) {
      if (e != '/Net/README.md') {
        mearr = arr.filter((e2) => {
          return e2.indexOf(e.replace(/README.md/, '')) > -1
        })
        let emsg = e.replace('/Net/', '').replace('/README.md', '')
        console.log(`  - [${emsg}](${e} '${emsg}')`)

        mearr.forEach((mee) => {
          if (mee.indexOf('.md') > -1) {
            let emsg = mee.replace('/Net/', '').replace('.md', '')
            console.log(`    - [${emsg}](${mee} '${emsg}')`)
          }
        })
      }
    }
  })
  console.log()
}
init(arr)
