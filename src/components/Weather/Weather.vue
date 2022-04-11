<template>
    <div class="weatherBlock">
		<div class="weatherIcon">
			<i :class="weatherIcon"></i>
		</div>
		<div class="weatherValue">
			<p>- °<span class="g">c</span></p>
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
			city: '',
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
			let icon = weatherStatus.weather[0].icon
			let weatherIcon = await get('/icons/weatherIcons.json')
			state.weatherIcon = weatherIcon[0].dayIcon[`${icon}`] ? weatherIcon[0].dayIcon[`${icon}`] : weatherIcon[1].nightIcon[`${icon}`]
		}
		computed(() => {getWeater()})
		getWeater()
		onBeforeMount(() => {getPosition()})
		return { ...toRefs(state)}
    },
}
</script>
<style lang="scss" scoped>
.weatherIcon {
	display: inline-block;
	position: absolute;
	width: .5rem;
	height: .5rem;
	font-size: .5rem;
}
.weatherValue {
	display: inline-block;
	position: absolute;
	margin-left: .5rem;
	top: 0;
	width: .7rem;
	height: .5rem;
	font-size: .3rem;
}
</style>