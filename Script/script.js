document.getElementById('ejecutar').addEventListener('click', function() {
    // Obtener los valores de los inputs
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacion = document.getElementById('opciones').value;
    let resultado;

    // Realizar la operación seleccionada
    switch (operacion) {
        case 'opcion1':
            resultado = num1 + num2;
            break;
        case 'opcion2':
            resultado = num1 - num2;
            break;
        case 'opcion3':
            resultado = num1 / num2;
            break;
        case 'opcion4':
            resultado = num1 * num2;
            break;
        default:
            resultado = 'Operación no válida';
    }

    // Mostrar el resultado
    document.getElementById('resultado').value = resultado;
});
