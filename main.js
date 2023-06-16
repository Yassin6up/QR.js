// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=

let form = document.getElementById('form')
let link  = document.getElementById('url')

let img = document.getElementById('img')
form.addEventListener('submit' , (e)=>{
  e.preventDefault()
  img.setAttribute('src' ,"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="  + link.value )
  document.getElementById("download").setAttribute("href" ,"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="  + link.value )
  document.getElementById("download").click() ;
  
  // document.getElementById("imgdonloader").
})
