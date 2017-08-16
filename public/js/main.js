$(function(){
	// 为a标签添加点击事件
	$('#realtimeWatch').on('click', realtimeWatchImplement);

	// 编写回调函数
	function realtimeWatchImplement(event){
		// 阻止默认的点击事件处理
		event.preventDefault()

		// 编写自己的功能实现代码
		// ... 
		// ...
		console.log('realtimeWatch')
	}
})