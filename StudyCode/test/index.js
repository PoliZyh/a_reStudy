let listContainer = document.querySelector('.list')
let btn = document.querySelector('.btn')

//核心代码
import Flip from "./Flip.js"
let f = new Flip(listContainer.children)

btn.onclick = function(){
    f.record()
    const len = listContainer.children.length
    let index = 0
    while(index < len - 1){
        let node = listContainer.children[index]
        let insert = listContainer.children[len - 1]

        /**
         * @description 将insert插入到node之前
         */
        listContainer.insertBefore(insert, node)
        index++;
    }
    //当改变元素之后调用play方法
    f.play();
}