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
import { computed, onBeforeMount, reactive, toRefs } from '@vue/runtime-core'
import { get } from '@/utility/request'
export default {
	name: 'Weather',
    setup() {
		const state = reactive({
			lat: 28.721094615451303,
			lng: 115.82069682161492,
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
				},
				err => {
					console.error('无法获取地理信息')
				}
			)
		}
		// 获取天气信息
		const getWeater = async () => {
			let weatherStatus = await get(`/weather?lat=${state.lat}&lon=${state.lng}&appid=4b60a241d2ca0c2b89b81ef054d162b5`)
			console.log(weatherStatus)
			let icon = weatherStatus.weather[0].icon
			state.temp = Math.floor(weatherStatus.main.temp - 272.15)
			let weatherIcon = await get('/icons/weatherIcons.json')
			state.weatherIcon = weatherIcon[0].dayIcon[`${icon}`] ? weatherIcon[0].dayIcon[`${icon}`] : weatherIcon[1].nightIcon[`${icon}`]
		}
		getWeater()
		onBeforeMount(() => {getPosition()})
		return { ...toRefs(state), getWeater}
    },
}
</script>
<style lang="scss" scoped>
.weatherBlock {
	position: relative;
	line-height: .8rem;
}
.weatherIcon {
	display: inline-block;
	position: absolute;
	font-size: .6rem;
}
.weatherValue {
	display: inline-block;
	position: absolute;
	margin-left: .6rem;
	font-size: .2rem;
	font-weight: bold;
}
</style>