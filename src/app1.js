import './app1.css'
import $ from 'jquery'   //npm install jquery安装jq后会多出node_modules package.json yarn.lock三个文件

//数据相关 都放到m
const m = {
    data: {
        //初始化数据
        n: localStorage.getItem("n")
    }
}
//视图相关都房到v
const v = {
    html: ` <section id="app1">
    <div class="output"><span id="number">100</span></div>
    <div class="actions">
        <button id='add1'>+1</button>
        <button id='minus1'>-1</button>
        <button id='mul2'>*2</button>
        <button id='divide2'>/2</button>
    </div>
    </section>`,
    update() {
        //数据渲染倒页面
        // c.ui.number.text(m.date.n || 100)
    },
    render() {
        //初始化HTML
        const $element = $(v.html).appendTo($('body>.page'))
    }

}

const c = {
    ui: {
        //需要重要的元素
        button1: $('#add1'),
        button2: $('#minus1'),
        button3: $('#mul2'),
        button4: $('#divide2'),
        number: $('#number')
    },
    bindEvents() {
        //绑定鼠标事件
        c.ui.button1.on('click', () => {
            let n = parseInt(c.ui.number.text())
            n += 1
            localStorage.setItem("n", n)
            c.ui.number.text(n)
        })
        c.ui.button2.on('click', () => {
            let n = parseInt(c.ui.number.text())
            n -= 1
            localStorage.setItem("n", n)
            c.ui.number.text(n)
        })
        c.ui.button3.on('click', () => {
            let n = parseInt(c.ui.number.text())
            n *= 2
            localStorage.setItem("n", n)
            c.ui.number.text(n)
        })
        c.ui.button4.on('click', () => {
            let n = parseInt(c.ui.number.text())
            n /= 2
            localStorage.setItem("n", n)
            c.ui.number.text(n)
        })
    }
}

//第一次渲染
v.render()


