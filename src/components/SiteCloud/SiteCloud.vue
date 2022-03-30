<template>
    <div style="text-align:center">
        <canvas ref="mycanvas" id="canvas" width="1000" height="500"></canvas>
    </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core';
export default {
    name: 'SiteCloud',
    props: { exploreList: Array, default: ['1','2','3']},
    setup(props) {
        const mycanvas = ref(null);
        onMounted(() => { canvasApp() })
        const canvasApp = () => {
            let ctx = mycanvas.value.getContext("2d");
            let maxWidth = canvas.width, maxHeight = canvas.height;
            ctx.fillStyle = '#fff';
            ctx.fillRect(0, 0, maxWidth, maxHeight);

            function getRandomNum(minNum, maxNum) {
                switch (arguments.length) {
                    case 1:
                        return Math.round(Math.random() * minNum + minNum);
                        break;
                    case 2:
                        return Math.round(
                        Math.random() * (maxNum - minNum) + minNum);
                        break;
                    case 0:
                        return 0;
                        break;
                }
            }

            function moveContainer(maxWidth, maxHeight, ctx) {
                this.ctx = ctx;
                this.maxWidth = maxWidth;
                this.maxHeight = maxHeight;
                this.r = getRandomNum(5, 15);
                this.x = getRandomNum(this.r, this.maxWidth - this.r);
                this.y = getRandomNum(this.r, this.maxHeight - this.r);
                this.speedX = getRandomNum(-2, 2);
                this.speedY = getRandomNum(-2, 2);
            }
            moveContainer.prototype = {
                draw: function (x) {
                    ctx.font = ".1rem serif";
                    ctx.strokeText(`${x}`, this.x, this.y)
                },
                move: function () {
                    if (this.x > this.maxWidth - this.r || this.x < this.r) {
                        this.speedX = -this.speedX;
                    }
                    if (this.y > this.maxHeight - this.r || this.y < this.r) {
                        this.speedY = -this.speedY;
                    }
                    this.x += this.speedX;
                    this.y += this.speedY;
                }
            };
            let siteContainer = props.exploreList;
            let len = siteContainer.length
            let container = []
            for (let i = 0; i < len; i++) {
                let newContainer = new moveContainer(maxWidth, maxHeight, ctx);
                let siteName = siteContainer[Math.floor(Math.random()*len)].name
                newContainer.draw(siteName);
                container.push(newContainer);
            }
            setInterval(() => {
                ctx.clearRect(0, 0, maxWidth, maxHeight);
                ctx.fillStyle = '#fff';
                ctx.fillRect(0, 0, maxWidth, maxHeight);
                for (let j = 0; j < len; j++) {
                    container[j].draw(siteContainer[j].name);
                    container[j].move();
                }
            }, 100);
        }
        return {mycanvas, canvasApp}
    }
}
</script>

<style lang="scss" scoped>
</style>