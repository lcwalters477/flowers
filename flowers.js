function lovefunc(flower1, flower2){
    // moment of truth
    let answer1 = flower1 % 2; 
    let answer2 = flower2 % 2;
    if((answer1 === 1 && answer2 ===1) || (answer1 === 0 && answer2 ===0)){
        return 'false';  
    } else {
        return 'true';
    }            
  }

  lovefunc(1,2);