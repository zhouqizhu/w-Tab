<template>
    <div ref="siteCloud" class="cloudBlock">
        <div v-for="item in exploreList" :key="item">
            <a :href="item.href" target="_blank" class="sitecloud__item">{{item.name}}</a>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
    name: 'SiteCloud',
    props: { exploreList: Array, default: []},
    setup() {
        const siteCloud = ref(null)
        onMounted(() => { siteCloudBlock() })
        const siteCloudBlock = () => {
            const cloudBall = siteCloud.value
            const cloudItem = document.getElementsByClassName("sitecloud__item")
            var RADIUS = 300, fallLength = 500, angleX = Math.PI/500, angleY = Math.PI/500
            let tags = []
            let CX = cloudBall.offsetWidth/2, CY = cloudBall.offsetHeight/2
            let EX = cloudBall.offsetLeft + document.body.scrollLeft + document.documentElement.scrollLeft,
            EY = cloudBall.offsetTop + document.body.scrollTop + document.documentElement.scrollTop
            function init(){
                for(var i=0; i<cloudItem.length; i++){
                    var a,b
                    var k = (2*(i+1)-1)/cloudItem.length - 1
                    var a = Math.acos(k)
                    var b = a*Math.sqrt(cloudItem.length*Math.PI)
                    var x = RADIUS * Math.sin(a) * Math.cos(b)
                    var y = RADIUS * Math.sin(a) * Math.sin(b) 
                    var z = RADIUS * Math.cos(a)
                    var t = new tag(cloudItem[i] , x , y , z)
                    cloudItem[i].style.color = "rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")"
                    tags.push(t)
                    t.move()
                }
            }
            Array.prototype.forEach = function(callback){
                for(var i=0;i<this.length;i++){
                    callback.call(this[i]);
                }
            }
            function animate(){
                setInterval(function(){
                    rotateX();
                    rotateY();
                    tags.forEach(function(){ this.move() })
                } , 27)
            }
            if("addEventListener" in window){
                cloudBall.addEventListener("mousemove" , function(event){
                    var x = event.clientX - EX - CX;
                    var y = event.clientY - EY - CY;
                    angleY = x*0.0001;
                    angleX = y*0.0001;
                })
            } else {
                cloudBall.attachEvent("onmousemove" , function(event){
                    var x = event.clientX - EX - CX;
                    var y = event.clientY - EY - CY;
                    angleY = x*0.0001;
                    angleX = y*0.0001;
                });
            }

            function rotateX(){
                var cos = Math.cos(angleX);
                var sin = Math.sin(angleX);
                tags.forEach(function(){
                    var y1 = this.y * cos - this.z * sin;
                    var z1 = this.z * cos + this.y * sin;
                    this.y = y1;
                    this.z = z1;
                })
            }
            function rotateY(){
                var cos = Math.cos(angleY);
                var sin = Math.sin(angleY);
                tags.forEach(function(){
                    var x1 = this.x * cos - this.z * sin;
                    var z1 = this.z * cos + this.x * sin;
                    this.x = x1;
                    this.z = z1;
                })
            }

            var tag = function(ele , x , y , z){
                this.ele = ele;
                this.x = x;
                this.y = y;
                this.z = z;
            }

            tag.prototype = {
                move:function(){
                    var scale = fallLength/(fallLength-this.z);
                    var alpha = (this.z+RADIUS)/(2*RADIUS);
                    this.ele.style.fontSize = 15 * scale + "px";
                    this.ele.style.opacity = alpha+0.5;
                    this.ele.style.filter = "alpha(opacity = "+(alpha+0.5)*100+")";
                    this.ele.style.zIndex = parseInt(scale*100);
                    this.ele.style.left = this.x + CX - this.ele.offsetWidth/2 +"px";
                    this.ele.style.top = this.y + CY - this.ele.offsetHeight/2 +"px";
                }
            }
            init()
            animate()
        }
        return { siteCloud, siteCloudBlock }
    }
}
</script>

<style lang="scss" scoped>
.cloudBlock {
    width: 8rem;
    height: 8rem;
    margin: 0 auto;
    position: absolute;
}
.sitecloud__item {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    color: #000;
    text-decoration: none;
    font-size: .15rem;
    font-family: "微软雅黑";
    font-weight: bold;
}
</style>