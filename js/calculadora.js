function calculadora() {
    let numero1= document.calculadora.numero1.value;
    let numero2= document.calculadora.numero2.value;

     if (numero1 == 0 || numero1 == null || numero2 == null || numero2 == 0) {
        
        alert("Digitar los numeros");
    }else{
        //suma
        suma = numero1 + numero2;
        //producto
        producto = numero1 * numero2;
        //division
        if (division==numero1/0) {
            alert('no se puede hacer');
        }else{
            division = numero1 / numero2;
        }
        //resta
        resta = numero1 - numero2;
        //potencia
        potencia = numero1 ^ numero2


        //mostrar datos
        document.getElementById('suma').innerHTML=suma;
        document.getElementById('resta').innerHTML=resta;
        document.getElementById('producto').innerHTML=producto;
        document.getElementById('division').innerHTML=division;
        document.getElementById('potencia').innerHTML=potencia;
        


    }
}