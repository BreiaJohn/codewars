function lovefunc(flower1, flower2){
    // moment of truth
    if(flower1 % 2 == 0 && flower2 % 2 == 1){
        return true;
    }
     if(flower1 % 2 == 1 && flower2 % 2 == 0){
       return true;
    }
    else{
        return false;
        }
    }