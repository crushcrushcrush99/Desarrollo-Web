//Arrays
var listaNombres = ['Rodolfo', 'Sofía', 'Arthur']
console.log(listaNombres[0])//imprime valores

listaNombres.push('Fulano')
console.log(listaNombres[0])//imprime valores

listaNombres.pop()//remueve el último item de la lista
console.log(listaNombres)

listaNombres.sort() //ordena lista
console.log(listaNombres)

listaNombres.reverse() //invierte la orden de los items de la lista
console.log(listaNombres)

console.log('Tamaño de lista ', listaNombres.length)