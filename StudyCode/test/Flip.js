

function Flip(listNodes){
    this.listNodes = listNodes
}

Flip.prototype = {

    /**
     * @description 记录初始位置
     */
    record() {
        const len = this.listNodes.length
        for(let i = 0;i < len; i++) {
            const { top, left } = this.listNodes[i].getBoundingClientRect()
            this.listNodes[i].__top__ = top
            this.listNodes[i].__left__ = left
        }
    },

    /**
     * @description 记录结束位置、恢复开始位置、移除开始位置添加过度
     */
    play() {
        const len = this.listNodes.length
        for(let i = 0;i < len; i++){
            //记录结束位置
            const dom = this.listNodes[i]
            const { top, left } = dom.getBoundingClientRect()
            if(dom.__left__) {
                //恢复初始位置
                dom.style.transform = `translate3d(${dom.__left__ - left}px, ${dom.__top__ - top}px, 0)`
                //移除开始位置并添加过渡
                requestAnimationFrame(() => {
                    //启用transition
                    dom.classList.add('active')
                    dom.style.transform = 'none'
                })
                //若不移除则只会触发一次
                dom.addEventListener('transitionend', () => {
                    dom.classList.remove('active')
                })
            }
        }
    }
}

export default Flip;