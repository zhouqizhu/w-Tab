// 设置cookie
export const setCookie = (name, value, day) => {
	let date = new Date();
	date.setDate(date.getDate() + day);
	document.cookie = name + '=' + value + ';expires=' + date
}

// 获取cookie
export const getCookie = (name) => {
	let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	let arr = document.cookie.match(reg);
	if(arr) return arr[2];
	else return ''
}