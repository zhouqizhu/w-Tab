<template>
    <div class="weatherBlock">
		<div class="weatherIcon">
			<i :class="weatherIcon"></i>
		</div>
		<div class="weatherValue">
			<span>{{temp}}℃</span>
		</div>
    </div>
</template>

<script>
import { computed, onBeforeMount, onMounted, reactive, toRefs } from '@vue/runtime-core'
import { get } from '@/utility/request'
import { setCookie, getCookie } from '@/utility/cookie'
export default {
	name: 'Weather',
    setup() {
		const state = reactive({
			lat: null,
			lng: null,
			weatherIcon: 'ri-celsius-line',
			temp: '-',
		})
		// 获取地理位置经纬度
        const getPosition = () => {
			navigator.geolocation.getCurrentPosition(
				pos => {
					let crd = pos.coords
					state.lat = crd.latitude
					state.lng = crd.longitude
					// 设置缓存
					setCookie('lat', state.lat, 1);
					setCookie('lng', state.lng, 1);
				},
				err => {
					console.error('无法获取地理信息')
				}
			)
		}
		// 获取天气信息
		const getWeater = async () => {
			let weatherStatus = await get(`/weather?lat=${state.lat}&lon=${state.lng}&appid=4b60a241d2ca0c2b89b81ef054d162b5`)
			let icon = weatherStatus.weather[0].icon
			state.temp = Math.floor(weatherStatus.main.temp - 272.15)
			let weatherIcon = await get('/icons/weatherIcons.json')
			state.weatherIcon = weatherIcon[0].dayIcon[`${icon}`] ? weatherIcon[0].dayIcon[`${icon}`] : weatherIcon[1].nightIcon[`${icon}`]
			// 设置天气信息缓存，时间为一天
			setCookie('temp', state.temp, 1);
			setCookie('weatherIcon', state.weatherIcon, 1);
		}
		onBeforeMount(() => {
			if(getCookie('temp') && getCookie('weatherIcon')) {
				state.temp = getCookie('temp');
				state.weatherIcon = getCookie('weatherIcon');
			} else {
				getPosition()
				setTimeout(() => {
					getWeater()
				}, 3000)
			}
		})
		return { ...toRefs(state), getWeater}
    },
}
</script>
<style lang="scss" scoped>
.weatherBlock {
	position: relative;
	line-height: 4rem;
}
.weatherIcon {
	display: inline-block;
	position: absolute;
	font-size: 2rem;
}
.weatherValue {
	display: inline-block;
	position: absolute;
	margin-left: 2rem;
	font-size: 2rem;
	font-weight: bold;
}
</style>