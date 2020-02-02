import './app1.css'
import $ from 'jquery'   //npm install jquery安装jq后会多出node_modules package.json yarn.lock三个文件

//数据相关 都放到m
const m = {
    data: {
        //初始化数据
        // n: parseInt(localStorage.getItem("n") || 100)
        n: 100 || localStorage.getItem("n")
    }
}
//视图相关都房到v
const v = {
    el: null,
    html: ` <section id="app1">
    <div class="output">
    <span id="number">{{n}}</span>
    </div>
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
        v.render()
    },
    render(container) {
        //初始化HTML
        if (v.el === null) {
            v.el = $(v.html.replace('{{n}}', m.data.n))
                .appendTo($(container))
        } else {
            const newEl = $(v.html.replace('{{n}}', m.data.n))
            v.el.replaceWith(newEl)
            v.el = newEl
        }

    }

}
//其他放在c
const c = {
    init(container) {
        //第一次渲染
        v.render()
        c.ui = {
            //需要重要的元素
            button1: $('#add1'),
            button2: $('#minus1'),
            button3: $('#mul2'),
            button4: $('#divide2'),
            number: $('#number')
        }
        c.bindEvents()
    },

    bindEvents() {
        //绑定鼠标事件
        c.ui.button1.on('click', () => {
            m.data.n += 1
            v.render()
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


c.init()


