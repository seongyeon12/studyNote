let result; 

function recursive(number) { 
  if(number == 1 || number == 0) { 
    return number;    
  } 
  //f(n) = f(n - 1) + f(n - 2) 
  return recursive(number - 1) + recursive(number - 2); 
  
} 

result = recursive(1); 

console.log(result); 