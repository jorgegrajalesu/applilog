    let filaActual = 1;

    function agregarItem() {
      const table = document.getElementById("invoiceTable").getElementsByTagName('tbody')[0];
      const newRow = table.insertRow(table.rows.length);
      newRow.innerHTML = `
        <td><input type="text" id="descripcion-${filaActual}"></td>
        <td><input type="number" id="cantidad-${filaActual}" oninput="calcularTotal(${filaActual})"></td>
        <td><input type="number" id="precio-${filaActual}" oninput="calcularTotal(${filaActual})"></td>
        <td><input type="number" id="total-${filaActual}" readonly></td>
      `;
      filaActual++;
    }