let e = eval(`{
    1 + 3;
    a = 2;
    x:break x; 
    3;
    4 + 6;
    ; 
}`)
console.log(e) //10  

/**
 * 
 * eval 将会返回对最后一个表达式的求值结果。
 * 
 * 在块中多个语句执行时，一般后者会覆盖前者，但是；和break的返回值都是empty，无法覆盖任何值。而3覆盖了4，10最终又覆盖了3，因此最终的结果是10。
 */