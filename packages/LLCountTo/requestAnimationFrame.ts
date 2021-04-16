let lastTime = 0
const prefixes = 'webkit moz ms o'.split(' ')

let requestAnimationFrame
let cancelAnimationFrame

const isServer = typeof window === 'undefined'
if (isServer) {
  requestAnimationFrame = (): void => { console.log('不支持该功能') }
  cancelAnimationFrame = (): void => { console.log('不支持该功能') }
} else {
  requestAnimationFrame = window.requestAnimationFrame
  cancelAnimationFrame = window.cancelAnimationFrame
  let prefix
  // 通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式
  for (const item of prefixes) {
    if ((window as any).requestAnimationFrame && (window as any).cancelAnimationFrame) { break }
    prefix = item
    requestAnimationFrame = requestAnimationFrame || (window as any)[prefix + 'RequestAnimationFrame']
    cancelAnimationFrame =
      cancelAnimationFrame || (window as any)[prefix + 'CancelAnimationFrame'] || (window as any)[prefix + 'CancelRequestAnimationFrame']
  }
  // 如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout
  if (!requestAnimationFrame || !cancelAnimationFrame) {
    requestAnimationFrame = (callback: (arg0: number) => void): number => {
      const currTime = new Date().getTime()
      // 为了使setTimteout的尽可能的接近每秒60帧的效果
      const timeToCall = Math.max(0, 16 - (currTime - lastTime))
      const id = window.setTimeout(() => {
        // eslint-disable-next-line node/no-callback-literal
        callback(currTime + timeToCall)
      }, timeToCall)
      lastTime = currTime + timeToCall
      return id
    }
    cancelAnimationFrame = (id: number | undefined): void => {
      window.clearTimeout(id)
    }
  }
}

export { requestAnimationFrame, cancelAnimationFrame }
