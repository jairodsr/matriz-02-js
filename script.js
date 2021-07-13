const matriz_generator = (rows,columns) => {
    
    let element = document.getElementById("matriz");
    let table = "<table>";

    for(let i = 0; i < rows; i++){
        table +="<tr>"
        for (let j= 0; j < columns; j++){
            table += `<td>box [ ${i+1},${j+1} ]</td>`
        }
        table +="</tr>"
    }
    table +="</table>"
    element.innerHTML = table;
}


let rows = parseInt(prompt("Selecciona el numero de Filas : ") )
let columns = parseInt(prompt("Selecciona el numero de Columnas : "))

matriz_generator(rows,columns);