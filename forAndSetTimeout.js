
for(var i=0;i<5;++i){
    // setTimeout(function(){console.log(i)},1000)
    (function(i){setTimeout(()=>console.log(i),1000)})(i)
}

for(var i=0;i<5;++i){
    (function(i){
        setTimeout(function(){alert(i+ ' ');},100);
    })(i)
}
// 0,1,2,3,4
 
for(var i=0;i<5;++i){
 
        setTimeout(function(){alert(i+ ' ');},100);
}
// 5，5，5，5，5