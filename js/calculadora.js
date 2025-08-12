function calculadora() {
    let numero1= document.calculadoraBasica.numero1.value;
    let numero2= document.calculadoraBasica.numero2.value;

     if (numero1 == 0 || numero1 == null || numero2 == null || numero2 == 0) {
        
        alert("Digitar los numeros");
    }else{
        //suma
        let sum = numero1 + numero2;
        //producto
        let prod = numero1 * numero2;
        //division
        let div = numero1/numero2
        
        //resta
        let rest = numero1 - numero2;
        //potencia
        let pot = numero1 ^ numero2;


        //mostrar datos
        document.getElementById('suma').innerHTML=sum;
        document.getElementById('resta').innerHTML=rest;
        document.getElementById('producto').innerHTML=prod;
        document.getElementById('division').innerHTML=div;
        document.getElementById('potencia').innerHTML=pot;
        


    }
}