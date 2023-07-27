// const nam = document.querySelector("#ad")
// let open = document.querySelector("#open")
// let close = document.querySelector("#close")



// open.addEventListener("click",()=>{
//  nam.classList.add("open")
// })
// close.addEventListener("click",()=>{
//     nam.classList.remove("open")
// })




// const item = 100
// const jas = 50
// for (let i=1; i<=10; i++){
//     for(let j=1;j<=10;j++){
//         let resultado = i*j
//         console.log(i + " x " + j +" = " +resultado);
//     }


// }if (item <=10) {
//     console.log("si lo es");
// }
// else if (jas<=10){
//     console.log("no  lo es");
// }
// else{
//     console.log("no se");
// }


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

