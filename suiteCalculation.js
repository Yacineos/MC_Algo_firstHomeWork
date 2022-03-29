function calcNthValue(U0,U1,U2,n){
    if(n==0){
        return U0;
    }else if(n==1){
        return U1;
    }else if(n==2){
        return U2;
    }else{
        return 2*calcNthValue(U0,U1,U2,n-1) + 3*calcNthValue(U0,U1,U2,n-3);
    }
    
}

console.log(calcNthValue(0,1,2,5));