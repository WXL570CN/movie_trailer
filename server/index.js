const koa = require('koa')
const { htmlTpl, ejsTpl, pugTpl } = require('./tpl')
const ejs = require('ejs')
const pug = require('pug')

const app = new koa()

app.use(async (ctx, next) => {
    ctx.type = 'text/html; charset=utf-8'
    // ctx.body = htmlTpl
    // 使用 ejs 模板
    // ctx.body = ejs.render(ejsTpl, {
    //     you: 'man',
    //     me: 'snail'
    // })
    // 使用 pug 模板
    ctx.body = pug.render(pugTpl, {
        you: 'man',
        me: 'snail'
    })
}).listen(3000)
