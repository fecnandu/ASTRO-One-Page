let nav = document.getElementById('nav');
let open = document.getElementById("open");
let close = document.getElementById("close");
open.addEventListener("click",()=>{
	nav.classList.add("activity")
	open.classList.add("act")
	close.classList.add("closeactive")
    body.classList.add("body")
})
close.addEventListener("click",()=>{
	nav.classList.remove("activity")
	open.classList.remove("act")
	close.classList.remove("closeactive")
})

let li = document.getElementById("h1")
	const height = li.clientHeight
	const width = li.clientWidth
	li.addEventListener("mousemove",(evt)=>{
		const { layerX, layerY } = evt
		const yRotation = (
			(layerX - width/2) / width
		) * 20
		const xRotation = (
			(layerY - height/2) / height
		) * 20
		const string = `
		perspective(500px)
		scale(1.1)
		rotateX(${xRotation}deg)
		rotateY(${yRotation}deg)`
		li.style.transform = string
	})
	li.addEventListener("mouseout",()=>{
		li.style.transform = `
		perspective(500px)
		scale(1)
		rotateX(0)
		rotateY(0)`
	});




	let login = document.getElementById("h2")
	const Height = login.clientHeight
	const Width = login.clientWidth
   
	login.addEventListener("mousemove",(evt)=>{
	   const { layerX, layerY} = evt
	   const yRotation = (
		   (layerX - width/2) / width
	   ) * 15
	   const xRotation = (
		   (layerY - height/2) / height
	   ) *15
	   const string = `
	   perspective(500px)
	   scale(1.05)
	   rotateX(${xRotation}deg)
	   rotateY(${yRotation}deg)`
	   login.style.transform = string
	})
   login.addEventListener("mouseout",()=>{
		login.style.transform =`
		perspective(500px)
		scale(1)
		rotateX(0)
		rotateY(0)`
   })


