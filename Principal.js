/*7. ARTÍCULOS-A
En una tienda se procesan los datos de varios artículos: departamento, nombre, precio y
existencia. Se sabe que hay 3 departamentos: 1=niños, 2=damas, 3=caballeros.
Considerando que los datos se cargan en un array de objetos (Ej. estructura de cada objeto:
{departamento: 2, nombre: ‘Pijama’, precio: 15, existencia: 2}), se requiere una función que
retorne la cantidad de artículos sin existencia en un departamento dado.
Función: cantidadArticulosSinExistencia.
Parámetros: articulos (array de objetos articulo), departamento (un número).
Retorno: la cantidad de artículos que no tienen existencia en el departamento indicado.*/


let cantidadArticulosSinExistencia = (articulos, departamento) => {
    let salida = articulos.filter((articulo) => articulo.departamento === departamento && articulo.existencia === 0);
    return salida.length;
};

let articulos = [
    { departamento: 1, nombre: 'Juguete', precio: 10, existencia: 0 },
    { departamento: 1, nombre: 'ropa', precio: 10, existencia: 0 },
    { departamento: 2, nombre: 'Pijama', precio: 15, existencia: 2 },
    { departamento: 2, nombre: 'maquillaje', precio: 20, existencia: 0 },
    { departamento: 2, nombre: 'perfumes', precio: 10, existencia: 0 },
    { departamento: 3, nombre: 'Camisa', precio: 20, existencia: 0 },
    { departamento: 1, nombre: 'Zapatos', precio: 25, existencia: 5 },
    { departamento: 2, nombre: 'Vestido', precio: 30, existencia: 0 },
    { departamento: 3, nombre: 'Pantalón', precio: 40, existencia: 3 }
];

let salida = document.getElementById("salida");

salida.innerHTML = `Cantidad de artículos sin existencia en el departamento de niños: <br>`;
salida.innerHTML += `${cantidadArticulosSinExistencia(articulos, 1)}<br>`;

salida.innerHTML += `Cantidad de artículos sin existencia en el departamento de damas: <br>`;
salida.innerHTML += `${cantidadArticulosSinExistencia(articulos, 2)}<br>`;

salida.innerHTML += `Cantidad de artículos sin existencia en el departamento de caballeros:<br>`;
salida.innerHTML += `${cantidadArticulosSinExistencia(articulos, 3)}<br>`;
