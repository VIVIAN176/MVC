import './app2.css'
import $ from 'jquery'
const html = `
<section id="app2">
    <ol class="tab-bar">
        <li class="1selected"><span>1111</span></li>
        <li><span>2222</span></li>
    </ol>
    <ol class="tab-content">
        <li class="1active">内容1</li>
        <li>内容2</li>
    </ol>
</section>`

const $element = $(html).appendTo($('body>.page'))

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
const localKey = 'app2.index'
const index = localStorage.getItem(localKey) || 0

$tabBar.on("click", "li", (e) => {
    //不用原生的dom 用$
    const $li = $(e.currentTarget) //target和currentTarget 谁能用就用谁
    $li
        .addClass("selected")
        .siblings()
        .removeClass("selected")
    const index = $li.index()

    localStorage.setItem(localKey, index)
    $tabContent
        .children()
        // .eq(index).css({ display: 'block' })
        // .siblings(index).css({ display: 'none' })
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active')
    // // .show() .hide() .css() 永远不K要使用这个三个api
    //这样js就不用管css怎么写  css自己写


    //样式与行为分离  js只管功能 css只管样式
})

$tabBar.children().eq(index).trigger('click')
//加载的时候默认选中第1个项目
//也可以在第一个的html上面加上选中的样式