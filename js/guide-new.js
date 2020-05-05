$(function() {
    $.ajax({
    	url:"json/guide-new.json",
        dataType:"json",
        success(data){
        	console.log(data.lists)
        	let str = ""
        	data.lists.forEach(item => {
        		console.log(item.img)
        		str += `
        		        <li>
        		        <a href="#"><img src="${item.img}" alt=""></a>
                        <p class="text">${item.text}</p>
                        <p class="lc">
                            <span>
                                <i class="like"><img src="images/xin.png" alt="">${item.like}</i>
                                <i class="comment"><img src="images/reply.png" alt="">${item.comment}</i>
                            </span>
                        </p>
                        <p id="myp1"></p>
                        <p id="myp2"></p>
                        </li>
        		    `
        	})
        	$(".mybox-bottom ul").html(str)
        }
    })
})


