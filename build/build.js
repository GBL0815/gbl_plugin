const fs = require('fs-extra')
const path = require('path')

const isDir = (dir) => {
  return fs.lstatSync(dir).isDirectory()
}

const transformStr3 = (str) => {
  const re = /-(\w)/g
  return str.replace(re, ($0, $1) => {
    return $1.toUpperCase()
  })
}

const json = {}
const dir = path.join(__dirname, '../packages')
const files = fs.readdirSync(dir)
files.forEach(file => {
  const absolutePath = path.join(dir, file)
  if (isDir(absolutePath)) {
    const fileKey = transformStr3(file.replace('orange_', ''))
    // console.log(fileKey)
    json[fileKey] = `/packages/${file}/index.ts`
  }
})

console.log(JSON.stringify(json))
