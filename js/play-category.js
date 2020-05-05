$(function() {
    $.ajax({
    	url:"json/play-category.json",
        dataType:"json",
        success(data){
        	// console.log(data.lists)
        	let bagwhile = ""
        	data.lists.forEach((e,i) => {
				// console.log(e.title)
        		// console.log(e.bagwhileImg)
				// console.log(e.bagwhileText)
				// 遍历图文  以及图片下面的标题和括号里面的数字
				let myliImg = ""
				e.bagwhileImg.forEach(item => {
					// console.log(item.img)
					myliImg += `
					      <li>
					          <a href=""><img src="${item.img}" alt=""></a>
					          ${item.text}（<span>${item.imgnumber}</span>）
					      </li>
					        `
				})
				// console.log(myliImg)
				// 遍历纯文字  以及括号里面的数字
				let myliText = ""
				e.bagwhileText.forEach(item => {
					// console.log(item.myaText)
					myliText += `
					           <li><a href="">${item.myaText}（<span>${item.textnumber}</span>）</a></li>
					            `
				})
				// console.log(myliText)
				bagwhile += `
				       <div class="bagwhile">
					        <p><span></span>${e.title}</p>
							<ul class="bagwhile-img">
							    ${myliImg}
							</ul>
							<ul class="bagwhile-text">
							    ${myliText}
							</ul>
					   </div>
					   `
        	})
			console.log(bagwhile)
			$(".mybox-bottom").html(bagwhile)
        }
    })
})


