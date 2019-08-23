window.onload = init
function init(){
    
    const TM = TweenMax
    const iconNext = document.querySelector('i')
    const img = document.querySelector('img')
    const description = document.querySelector('.description')
    let imageCurrent = 1
    let background = [
        `#F5FCE9`,
        `#F1ECFF`,
        `#FCDEDD`


    ]
    iconNext.addEventListener('click',function(){
       
        
        TM.to(img,0.5,{y:'-100vh',rotation:-360})
        TM.to(img,0.1,{x:'-120vh',delay:0.5})
         TM.to(description,0.5,{opacity:0})
        setTimeout(()=>{
          
            

                  
                if(imageCurrent === 3){
                    imageCurrent = 1
                }
                else {
                     imageCurrent++
                }
             document.querySelector('body').style.background = background[imageCurrent-1]
             img.src = `./img/plate${imageCurrent}.png`
        },700)
        
      
      
        TM.to(img,0.1,{y:'0',delay:0.6})
        TM.to(img,0.5,{x:'0',delay:0.7,rotation:360})
       
        TM.to(description,0.7,{opacity:1,delay:0.7})
         
       
    })
}