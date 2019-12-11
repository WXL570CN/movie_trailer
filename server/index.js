const koa = require('koa')
const { htmlTpl, ejsTpl } = require('./tpl')
const ejs = require('ejs')

const app = new koa()

app.use(async (ctx, next) => {
    ctx.type = 'text/html; charset=utf-8'
    // ctx.body = htmlTpl
    // 使用ejs模板
    ctx.body = ejs.render(ejsTpl, {
        you: 'man',
        me: 'snail'
    })
}).listen(3000)
