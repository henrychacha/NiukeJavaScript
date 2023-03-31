//Javascript 对象数组根据 其中某一个相同的对象属性进行重新分类

var huaji = [{
        name: 'a',
        hobby: '1',
        mj: '12'
    },
    {
        name: 'a',
        hobby: '2',
        mj: '13'
    },
    {
        name: 'a',
        hobby: '3',
        mj: '14'
    },
    {
        name: 'a',
        hobby: '4',
        mj: '15'
    },
    {
        name: 'a',
        hobby: '5',
        mj: '162'
    },
    {
        name: 'a',
        hobby: '6',
        mj: '15'
    },
    {
        name: 'q',
        hobby: '1',
        mj: '13'
    },
    {
        name: 'q',
        hobby: '2',
        mj: '16'
    },
    {
        name: 'q',
        hobby: '3',
        mj: '17'
    },
    {
        name: 'q',
        hobby: '4',
        mj: '19'
    },
    {
        name: 'q',
        hobby: '5',
        mj: '16'
    },
    {
        name: 'x',
        hobby: '1',
        mj: '13'
    },
    {
        name: 'x',
        hobby: '2',
        mj: '13'
    },
    {
        name: 'x',
        hobby: '3',
        mj: '16'
    },
    {
        name: 'x',
        hobby: '4',
        mj: '17'
    }
]


// let tempArr = [];
var newArr = [];
for (let i = 0; i < huaji.length; i++) {
    if (tempArr.indexOf(huaji[i].hobby) === -1) {
        newArr.push({
            hobby: huaji[i].hobby,
            mj: [huaji[i].mj]
        });
        tempArr.push(huaji[i].hobby);
    } else {
        for (let j = 0; j < newArr.length; j++) {
            if (newArr[j].hobby == huaji[i].hobby) {
                newArr[j].mj.push(huaji[i].mj);
                break;
            }
        }
    }
}
console.log(newArr)

// 优化版本-------------------------------
let tempArr = [];
var newArr = [];
huaji.forEach((i, index) => {
    if (tempArr.indexOf(i.hobby) === -1) {
        newArr.push({
            hobby: i.hobby,
            mj: [i.mj]
        });
        tempArr.push(i.hobby);
    } else {
        newArr[tempArr.indexOf(i.hobby)].mj.push(i.mj)
    }
});
console.log(newArr)