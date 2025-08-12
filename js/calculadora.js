function calculadora() {
    let numero1= document.calculadora.numero1.value;
    let numero2= document.calculadora.numero2.value;

     if (numero1 == 0 || numero1 == null || numero2 == null || numero2 == 0) {
        
        alert("Digitar los numeros");
    }else{
        //suma
        sum = numero1 + numero2;
        //producto
        prod = numero1 * numero2;
        //division
        if (div==numero1/0) {
            alert('no se puede hacer');
        }else{
            div = numero1 / numero2;
        }
        //resta
        rest = numero1 - numero2;
        //potencia
        pot = numero1 ^ numero2;


        //mostrar datos
        document.getElementById('suma').innerHTML=sum;
        document.getElementById('resta').innerHTML=rest;
        document.getElementById('producto').innerHTML=prod;
        document.getElementById('division').innerHTML=div;
        document.getElementById('potencia').innerHTML=pot;
        


    }
}