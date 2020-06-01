var resultado = '0';
var operador = '';
var acumulado = 0;

$(document).ready(function () {
    paint();

    $('#C').click(function () {
        resultado = "0";
        paint();
    });

    $('#igual').click(function () {
        switch (operador) {
            case '+':
                resultado = acumulado + parseInt(resultado);
                break;
            case '-':
                resultado = acumulado - parseInt(resultado);
                break;
            case '*':
                resultado = acumulado * parseInt(resultado);
                break;
            case '/':
                resultado = acumulado / parseInt(resultado);
                break;
        }
        paint();
    });

    /* TAREA: Completar las funciones como la "coma" y el "exponencial" y terminar los eventos del teclado. */

    $(document).keyup(function (event) {
        console.log(event.keyCode);
        if (event.keyCode == 13) {
            $('#igual').click();
        }
        if (event.keyCode >= 48 && event.keyCode <= 57) {
            pulsarNumero(String(event.keyCode - 48));
        }
        if (event.keyCode >= 96 && event.keyCode <= 105) {
            pulsarNumero(String(event.keyCode - 96));
        }
        if (event.keyCode == 8) {
            $('#C').click();
        }
        /* Terminar los eventos con el teclado para los operadores */

    })
});



function paint() {
    $("#valor_numero").val(resultado);
}

function pulsarNumero(numero) {
    if (resultado == '0') {
        resultado = numero;
    } else {
        resultado += numero;
    }
    paint();
}

function pulsarOperador(op) {
    acumulado = parseInt(resultado);
    resultado = '0';
    operador = op;
    paint();

}