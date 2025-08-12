    function obtenerValores() {
      const n1 = parseFloat(document.getElementById('num1').value) || 0;
      const n2 = parseFloat(document.getElementById('num2').value) || 0;
      return { n1, n2 };
    }
    
    function sumar() {
      const { n1, n2 } = obtenerValores();
      document.getElementById('resultado').textContent = n1 + n2;
    }
    
    function restar() {
      const { n1, n2 } = obtenerValores();
      document.getElementById('resultado').textContent = n1 - n2;
    }
    
    function multiplicar() {
      const { n1, n2 } = obtenerValores();
      document.getElementById('resultado').textContent = n1 * n2;
    }
    
    function dividir() {
      const { n1, n2 } = obtenerValores();
      if (n2 === 0) {
        document.getElementById('resultado').textContent = 'Error (división por 0)';
      } else {
        document.getElementById('resultado').textContent = n1 / n2;
      }

      function potencia() {
        const {n1, n2} = obtenerValores();
        document.getElementById('resultado').textContent= n1 ^ n2;
      }
    }
 