

// 4 задание.

function getFunc(a,b){
     let current = a;
     let timerld = setInterval(function(){
           console.log(current)
            if(current==b){
              clearInterval(timerld)
            }
            ++current  
     },1000)
    }
    getFunc(5,15)
       
  

