function larger_num(x, y){	
    if( (x >= 40) && (x <= 60) && (y >= 40 && y <= 60) ){
        if(x === y){
        return "Numbers are the same";
        }   
        else if (x > y){
            return x;
        }
        else if (x < y){
            return y;
        }
    
    }

    else{
         return "Numbers don't fit in range";
    }
    
}
    
console.log(larger_num(35, 53));
console.log(larger_num(45, 57));
console.log(larger_num(59, 61));