 
        let palabra;
        palabra = prompt('Ingrese alguna de estas palabras (casa, mesa, perro, gato) para traducirlas al ingles');
        switch (palabra) {
            case 'casa':
                document.getElementById('traducir').innerHTML='house';
                break;
            case 'mesa':
                document.getElementById('traducir').innerHTML='table';                
                break;
            case 'perro':
                document.getElementById('traducir').innerHTML='dog';                
                break;
            case 'gato':
                document.getElementById('traducir').innerHTML='cat';
                break;
            default:
                document.getElementById('traducir').innerHTML='no existe';
                break;
        }
    