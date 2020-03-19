function filter(num){
    let remove3 = 3
    let remove5 = 5
    let keep15 = 15
    let total = 0
    for(let i = 1; i < num+1; i++){
        if(i%remove3!=0 && i%remove5!=0 || i%keep15==0){
            total += 1
        } 
    }
    return total    
}

filter(30)