// 2022-11-17 Thu 16:58
/*
请补全JavaScript代码，要求返回参数数字的千分位分隔符字符串。

输入： _comma(12300)

输出: '12,300'
*/

// not very good! i didn't take minus into consideration
function _comma(number) {
    var lth = number.toString().length
    var arr1 = number.toString().split("").reverse()
    for (var i = 0; i < parseInt(lth / 3); i++) {
        arr1.splice((i + 1) * 3 + i, 0, ",")
    }
    console.log(arr1.reverse().join(''))
}
_comma(12251243)


// other's answer, using Regex
function _comma2(number) {
    var reg1 = /\d{1,3}(?=(\d{3})+$)/g
    var int = '' + number
    var deci = ''
    if (/\./g.exec('' + number)) {
        deci = '.' + int.split('.')[1]
        int = int.split('.')[0]
    } 
    return int.replace(reg1, (val) => val + ',') + deci


}
console.log(_comma2(1233423422.3432))