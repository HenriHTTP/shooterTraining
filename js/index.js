let y ;  
let x ; 
let PositionY;
let PositionX;
let Repawn; 
var life = 1;  
let time = 60;   
let score = 0;  
let mode = 1000;

function DisplayWidth() {
    y = window.innerHeight
    x = window.innerWidth
}

DisplayWidth()

var SetTime = setInterval ( function (){ 
    time -= 1
    if(time < 0){ 
        window.location.href ='winner.html'
    }else{ 
        document.getElementById('ThisTime').innerHTML= time
    }
    
},1000)



function ForRespawn() {
    
    if(document.getElementById('BOT')){ 
        document.getElementById('BOT').remove()
        if(life > 3){ 
            window.location.href ='defeat.html'
        }else{ 
            document.getElementById('v'+ life).src = '/img/coracao_vazio.png'
            life++
        }
      
    }

    document.getElementById('ThisPoints').innerHTML= score
    PositionY = Math.floor(Math.random() * (y)) -200;
    PositionX = Math.floor(Math.random() * (x)) -200;
    PositionX = PositionX < 0 ? 0 : PositionX
    PositionY = PositionY < 0 ? 0 : PositionY
    Repawn = document.createElement('div')
    Repawn.className = RandowWith()
    Repawn.style.left = PositionX + 'px'
    Repawn.style.top = PositionY + 'px' 
    Repawn.id = 'BOT'
    
    Repawn.onclick = function () {
           this.remove()
            
            score = score +  100

            if (score == 1000){ 
                    mode = 1500
            }
            if(score ==  4000){ 
                mode = 2000
            }
            if(score == 10000){ 
                mode = 3000
            }

    }

  
    
    document.body.appendChild(Repawn)

   
}

function RandowWith (){ 
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:

            return ('botStyle');

            case 1:
            
            return ('botStyle1');
           
            case 2:
            
            return ('botStyle2');

    }
}

setInterval(() => {
    ForRespawn()
  }, mode);

