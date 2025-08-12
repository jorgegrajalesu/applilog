
function calcularPrestamo() {
    let monto = parseFloat(document.getElementById("monto").value);
    let tasaAnual = parseFloat(document.getElementById("tasa").value);
    let plazo = parseInt(document.getElementById("plazo").value);

    if (isNaN(monto) || isNaN(tasaAnual) || isNaN(plazo) || monto <= 0 || tasaAnual < 0 || plazo <= 0) {
        alert("Por favor, ingrese valores válidos");
        return;
    }

    let tasaMensual = tasaAnual / 12 / 100;
    let cuota = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));
    let totalPagar = cuota * plazo;

    document.getElementById("resultado").innerHTML = `
        Cuota mensual: <b>$${cuota.toFixed(2)}</b><br>
        Total a pagar: <b>$${totalPagar.toFixed(2)}</b>
    `;

    // Generar tabla de amortización
    let saldo = monto;
    let cuerpoTabla = document.querySelector("#tabla tbody");
    cuerpoTabla.innerHTML = "";

    for (let i = 1; i <= plazo; i++) {
        let interes = saldo * tasaMensual;
        let capital = cuota - interes;
        saldo -= capital;

        cuerpoTabla.innerHTML += `
            <tr>
                <td>${i}</td>
                <td>$${cuota.toFixed(2)}</td>
                <td>$${interes.toFixed(2)}</td>
                <td>$${capital.toFixed(2)}</td>
                <td>$${saldo.toFixed(2)}</td>
            </tr>
        `;
    }
}
