<template>
    <div style="text-align:center" @click="skipSite">
        <canvas ref="siteCloud" id="canvas" width="800" height="500"></canvas>
    </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core';
export default {
    name: 'SiteCloud',
    props: { exploreList: Array, default: []},
    setup(props) {
        const siteCloud = ref(null);
        onMounted(() => { canvasApp() })
        const siteContainer = props.exploreList;
        const canvasApp = () => {
            let ctx = siteCloud.value.getContext("2d");
            let canvas = document.getElementById('canvas')
            let maxWidth = canvas.width, maxHeight = canvas.height;
            ctx.fillStyle = '#fff';
            ctx.fillRect(0, 0, maxWidth, maxHeight);

            // 定义随机数
            function getRandomNum(minNum, maxNum) {
                switch (arguments.length) {
                    case 1:
                        return Math.round(Math.random() * minNum + minNum);
                    case 2:
                        return Math.round(
                        Math.random() * (maxNum - minNum) + minNum);
                    case 0:
                        return 0;
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
                // 绘制
                draw: function (x) {
                    ctx.font = ".1rem serif";
                    ctx.strokeText(`${x}`, this.x, this.y)
                },
                // 设置边界
                limit: function () {
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
                ctx.fillStyle = '#f6f6f6';
                ctx.fillRect(0, 0, maxWidth, maxHeight);
                for (let j = 0; j < len; j++) {
                    container[j].draw(siteContainer[j].name);
                    container[j].limit();
                }
            }, 100);
        }
        const skipSite = () => {
            const len = siteContainer.length-1
            let randomSite = siteContainer[Math.floor(Math.random()*len)]
            window.open(randomSite.href)
        }
        return {siteCloud, canvasApp, skipSite}
    }
}
</script>

<style lang="scss" scoped>
</style>