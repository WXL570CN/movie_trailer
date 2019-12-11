const koa = require('koa')

const app = new koa()

app.use(async (ctx, next) => {
    ctx.body = '首页'
}).listen(3000)
