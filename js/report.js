$(function(){
	let myLists =()=> Promise.resolve($.ajax({url:"json/report-new.json"}))
    async function fn(){
		let res = await myLists()
		console.log(res)
		let str = ""
		res.mylis.forEach(item => {
			console.log(item.myImg)
			str += `
			    <li>
			    	<a>
			    		<img class="myImg" src="${item.myImg}" >
			    		<div class="bg-opacity">
			    			<p>${item.myP1text}</p>
			    		    <p>
			    				<span id="left"><i>${item.susu}</i>${item.mtTime}</span>
			    				<span id="right">
			    					<i class="like"><img src="images/zan.png" alt="">${item.myLike}</i>
			    					<i class="comment"><img src="images/reply.png" alt="">${item.myComment}</i>
			    				</span>
			    			</p>	
			    		</div>
			    	</a>
			    	<p class="pText">${item.myP2text}</p>
			    </li>
			       `
		    $(".mydiv-left").html(str)
		})
	}
    fn()
})
