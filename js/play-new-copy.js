$(function(){
	let myLists  =()=> Promise.resolve($.ajax({url:"http://localhost:8181/play/new",dataType:"json"}))  
	async function fn(){
		let res = await myLists()
		console.log(res)
		let str = ""
		res.myList.forEach(item => {
			// console.log(item.myImg)
			str += `
			    <li>
			       	<a>
			       		<img src="${item.myImg}" class="myImg" >
			       		<p>${item.myP1text} </p>
			       		<p>${item.myP2text}</p>
			       		<p>
			       			<span>${item.myprice}</span>
			       			<span>
			                    <i class="like"><img src="images/xin.png" alt="">${item.myLike}</i>
			                    <i class="comment"><img src="images/reply.png" alt="">${item.myComment}</i>
			                </span>
			       		</p>
			       	</a>
			    </li>
			       `
			$(".mybox-bottom ul").html(str)
		})
	}
	fn()
})
