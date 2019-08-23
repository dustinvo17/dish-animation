window.onload = init
function init(){
    
    const TM = TweenMax
    const iconNext = document.querySelector('i')
    const img = document.querySelector('img')
    const description = document.querySelector('.description')
    let imageCurrent = 0
    iconNext.addEventListener('click',function(){
       
        
        TM.to(img,0.5,{y:'-100vh',rotation:-360})
        TM.to(img,0.5,{x:'-120vh',delay:0.5})
         TM.to(description,0.5,{opacity:0})
        setTimeout(()=>{
             if(imageCurrent === 3){
            imageCurrent = 1
            }

             imageCurrent++
             img.src = `./img/plate${imageCurrent}.png`
        },700)
        
      
      
        TM.to(img,0.7,{y:'0',delay:1})
        TM.to(img,0.5,{x:'0',delay:1.7,rotation:360})
          TM.to(description,0.5,{opacity:1,delay:1.7})
       
    })
}