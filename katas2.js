// comece a criar a sua função add na linha abaixo
function add(a,b){
    return a+b
}

// descomente a linha seguinte para testar sua função
 console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(a,b){
let n = 0
 for(let c = 1;c <= a;c++){
n = add(n,b)
}
 return n
}


// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x,n){
let r = multiply(x,x)
  for(let i = 2;i < n;i++){
 r = multiply(r,x)
}  
return r
}

// descomente a linha seguinte para testar sua função
 console.assert(power(2, 3) === 8, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial (a){
  let r = a
  for (let i=a-1;i!==0;i--) {
  r = multiply(r,i)
}
return r
}

// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(n){
  let r = [0]
  let c = 1
  let a = ""
  for (let i = 0; i < n; i++) {
    r.push(add(r[i], c))
    a = add(r[i], c)
    c = r[i]
  }
  return a 
}

// descomente a linha seguinte para testar sua função
 console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
