import $ from 'jquery'
import './app3.css'
const $square = $('#app3 .square')

const html = `
<section id="app3">
    <div class="square"></div>
</section>`

const $element = $(html).appendTo($('body >.page'))

const localKey = 'app3.active'
// const active = localStorage.getItem(localKey) === 'yes' ? ture : false
// yes no undefined
const active = (localStorage.getItem(localKey) === 'yes')

$square.toggleClass('active', active)

$square.on('click', () => {
    if ($square.hasClass('active')) {
        $square.removeClass('active')
        localStorage.setItem('localKey', 'no')
    } else {
        $square.addClass('active')
        localStorage.setItem('app3.active', 'yes')
    }
})