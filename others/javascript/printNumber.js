// 写一个函数，第一秒打印1，第二秒打印2

// 两个方法，第一个是用let块级作用域

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, 1000 * i)
}

// 第二个方法闭包
for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i)
        }, 1000 * i)
    })(i)
}
s