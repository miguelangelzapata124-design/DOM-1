// EJERCICIO 1: CALCULADORA

function sumar() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;

    if (n1 == "") {
        alert("Escriba los dos números");
    } else if (n2 == "") {
        alert("Escriba los dos números");
    } else {
        document.getElementById("resultado").value = parseFloat(n1) + parseFloat(n2);
    }
}

function restar() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;

    if (n1 == "") {
        alert("Escriba los dos números");
    } else if (n2 == "") {
        alert("Escriba los dos números");
    } else {
        document.getElementById("resultado").value = parseFloat(n1) - parseFloat(n2);
    }
}

function multiplicar() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;

    if (n1 == "") {
        alert("Escriba los dos números");
    } else if (n2 == "") {
        alert("Escriba los dos números");
    } else {
        document.getElementById("resultado").value = parseFloat(n1) * parseFloat(n2);
    }
}

function dividir() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;

    if (n1 == "") {
        alert("Escriba los dos números");
    } else if (n2 == "") {
        alert("Escriba los dos números");
    } else if (parseFloat(n2) == 0) {
        alert("No se puede dividir por cero");
    } else {
        document.getElementById("resultado").value = parseFloat(n1) / parseFloat(n2);
    }
}


// EJERCICIO 2: VENTA

function calcularVenta() {
    var campos = document.querySelectorAll("form input");

    var nombre = campos[0].value;
    var cantidad = campos[1].value;
    var precio = campos[2].value;

    if (nombre == "") {
        alert("Complete los datos de la venta");
    } else if (cantidad == "") {
        alert("Complete los datos de la venta");
    } else if (precio == "") {
        alert("Complete los datos de la venta");
    } else {
        var subtotal = parseFloat(cantidad) * parseFloat(precio);
        var iva = subtotal * 0.19;
        var descuento = 0;

        if (parseFloat(cantidad) > 10) {
            descuento = subtotal * 0.05;
        }

        var total = subtotal + iva - descuento;

        campos[3].value = subtotal.toLocaleString();
        campos[4].value = iva.toLocaleString();
        campos[5].value = descuento.toLocaleString();
        campos[6].value = total.toLocaleString();
    }
}


// EJERCICIO 3: PROMEDIO

function calcularPromedio() {
    var campos = document.querySelectorAll("form input");

    var nota1 = campos[0].value;
    var nota2 = campos[1].value;
    var nota3 = campos[2].value;

    if (nota1 == "") {
        alert("Escriba las tres notas");
    } else if (nota2 == "") {
        alert("Escriba las tres notas");
    } else if (nota3 == "") {
        alert("Escriba las tres notas");
    } else {
        var promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
        campos[3].value = promedio.toFixed(2);
    }
}


// EJERCICIO 4: SALARIO

function calcularSalario() {
    var campos = document.querySelectorAll("form input");

    var horas = campos[0].value;
    var valorHora = campos[1].value;

    if (horas == "") {
        alert("Escriba las horas y el valor por hora");
    } else if (valorHora == "") {
        alert("Escriba las horas y el valor por hora");
    } else {
        var salario = parseFloat(horas) * parseFloat(valorHora);
        campos[2].value = "$ " + salario.toLocaleString();
    }
}


// EJERCICIO 5: PRESUPUESTO

function calcularPresupuesto() {
    var campos = document.querySelectorAll("form input");

    var invitados = campos[0].value;
    var comida = campos[1].value;
    var bebida = campos[2].value;
    var decoracion = campos[3].value;
    var musica = campos[4].value;
    var porcentaje = campos[5].value;

    if (invitados == "") {
        alert("Complete todos los datos");
    } else if (comida == "") {
        alert("Complete todos los datos");
    } else if (bebida == "") {
        alert("Complete todos los datos");
    } else if (decoracion == "") {
        alert("Complete todos los datos");
    } else if (musica == "") {
        alert("Complete todos los datos");
    } else if (porcentaje == "") {
        alert("Complete todos los datos");
    } else {
        var comidaTotal = parseFloat(invitados) * parseFloat(comida);
        var bebidaTotal = parseFloat(invitados) * parseFloat(bebida);
        var subtotal = comidaTotal + bebidaTotal + parseFloat(decoracion) + parseFloat(musica);
        var propina = subtotal * parseFloat(porcentaje) / 100;
        var total = subtotal + propina;
        var porInvitado = total / parseFloat(invitados);

        var filas = document.querySelectorAll("tbody tr");

        filas[0].children[1].textContent = "$ " + comidaTotal.toLocaleString();
        filas[1].children[1].textContent = "$ " + bebidaTotal.toLocaleString();
        filas[2].children[1].textContent = "$ " + parseFloat(decoracion).toLocaleString();
        filas[3].children[1].textContent = "$ " + parseFloat(musica).toLocaleString();
        filas[4].children[1].textContent = "$ " + subtotal.toLocaleString();
        filas[5].children[1].textContent = "$ " + propina.toLocaleString();
        filas[6].children[1].textContent = "$ " + total.toLocaleString();
        filas[7].children[1].textContent = "$ " + porInvitado.toLocaleString();
    }
}