'use strict'

let jsbook = {
    // key: 'value'
    // ↓key  ↓'value'
    title: 'JavaScript入門',
        // JavaScriptでは基本的にkeyに""はつけなくてもよい
        // 例外）"titele - 1" ← - が付くとき
    price: '2500',
    stock: '3',
    obj: {
        text: 'test',
        func: () => {
            console.log("this is callback function");
        }
    }
}

console.log(jsbook);
 let booktitle = jsbook.title
 console.log(booktitle);
 console.log(jsbook.price);

 console.log(jsbook.obj.text);
 console.log(jsbook.obj.func);

 jsbook.price = 3000
 console.log( 'オブジェクトの値を変える場合は？' , jsbook.price);