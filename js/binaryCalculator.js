
'use strict';

var res = document.getElementById('res')
var btns = document.querySelectorAll('button')

btns.forEach(function (elem) {
    elem.onclick = click
})

function click() {
    console.log(this.innerHTML)
    switch (this.innerHTML) {
        case 'C' : res.innerHTML = ''; break;
        case '=' : res.innerHTML = evalExpression(res.innerHTML); break;
        default: res.innerHTML += this.innerHTML
    }
}

function evalExpression (expression) {
    var re = /^[01]+(-|\+|\/|\*)[01]+$/
    let r  = ''
    if (re.test(expression)) {
        var arr = expression.split(/(\+|-|\*|\/)/)
        var op1 = parseInt(arr[0], 2)
        var op2 = parseInt(arr[2], 2)
        switch (arr[1]) {
            case '-':   r = op1 - op2; break
            case '+':   r = op1 + op2; break
            case '/':   r = op1 / op2; break;
            case '*':   r = op1 * op2; break;
        }
    }
    else {
        alert(`invalid expression: ${expression}`)
    }
    return (r.toString(2))
}