  //Autor: Miguel Angel Murillo Arteaga

  //Validar el RUC de una persona juridica privada o extranjero no residente (sin cedula)
  function validar_RUC_1(ruc){
        //Valida dimension
        if(ruc.length!=13){
          return 0;
        }
        else{
          let dos_primeros_digitos = parseInt(ruc.slice(0,2));
          //Valida dos primeros digitos
          if(dos_primeros_digitos < 1 && dos_primeros_digitos > 22){
            return 0;
          }
          let tercer_digito = parseInt(ruc[2]);
          //Valida tercer digito (Condicion creada con logica matematica y leyes de De Morgan)
          if(tercer_digito != 9 && tercer_digito != 6 && (tercer_digito < 0 || tercer_digito >=6)){
            return 0;
          }
          //Realizamos la validacion del caso 1
          else{
            let ultimos_tres_digitos =parseInt(ruc.slice(10,13));
            if(ultimos_tres_digitos <= 0){
              return 0;
            }
            let total = 0;
            let nueve_primeros_digitos = ruc.slice(0,9);
            let coeficientes = '432765432';
            let num;
            let coef;
            let valor;
            for(let i=0;i<=coeficientes.length-1;i++){
              num = parseInt(nueve_primeros_digitos[i]);
              coef = parseInt(coeficientes[i]);
              valor = num*coef;
              total = total + valor;
            }
            //Calculamos el residuo y el verificador
            let residuo = total%11;
            let verificador;
            if(residuo == 0){
              verificador = 0;
            }
            else{
              verificador = 11 - residuo;
            }
            if(verificador == parseInt(ruc[9])){
              return 1;
            }
            else{
              return 0;
            }
          }
        }
      }

  //Validar el RUC de una persona juridica publica
  function validar_RUC_2(ruc){
    //Valida dimension
    if(ruc.length!=13){
      return 0;
    }
    else{
      let dos_primeros_digitos = parseInt(ruc.slice(0,2));
          //Valida dos primeros digitos
          if(dos_primeros_digitos < 1 && dos_primeros_digitos > 22){
            return 0;
          }
          let tercer_digito = parseInt(ruc[2]);
          //Valida tercer digito (Condicion creada con logica matematica y leyes de De Morgan)
          if(tercer_digito != 9 && tercer_digito != 6 && (tercer_digito < 0 || tercer_digito >=6)){
            return 0;
          }
          //Realizamos la validacion del caso 2
          else{
            let ultimos_cuatro_digitos =parseInt(ruc.slice(9,13));
            if(ultimos_cuatro_digitos <= 0){
              return 0;
            }
            let total = 0; 
            let ocho_primeros_digitos = ruc.slice(0,8);
            let coeficientes = '32765432';
            let num;
            let coef;
            let valor;
            for(let i=0;i<=coeficientes.length-1;i++){
              num = parseInt(ocho_primeros_digitos[i]);
              coef = parseInt(coeficientes[i]);
              valor = num*coef;
              total = total + valor;
            }
              //Calculamos el residuo y el verificador
              let residuo = total%11;
              let verificador;
              if(residuo == 0){
                verificador = 0;
              }
              else{
                verificador = 11 - residuo;
              }
              if(verificador == parseInt(ruc[8])){
                return 1;
              }
              else{
                return 0;
              }
            }
          }
        }

  //Validar el RUC de una persona natural
  function validar_RUC_3(ruc){
        //Valida dimension
        if(ruc.length!=13){
          return 0;
        }
        else{
          let dos_primeros_digitos = parseInt(ruc.slice(0,2));
          //Valida dos primeros digitos
          if(dos_primeros_digitos < 1 && dos_primeros_digitos > 22){
            return 0;
          }
          let tercer_digito = parseInt(ruc[2]);
          //Valida tercer digito (Condicion creada con logica matematica y leyes de De Morgan)
          if(tercer_digito != 9 && tercer_digito != 6 && (tercer_digito < 0 || tercer_digito >=6)){
            return 0;
          }
          //Realizamos la validacion del caso 3
          else{
            let ultimos_tres_digitos =parseInt(ruc.slice(10,13));
            if(ultimos_tres_digitos <= 0){
              return 0;
            }
            let total = 0;
            let nueve_primeros_digitos = ruc.slice(0,9);
            let coeficientes = '212121212';
            let num;
            let coef;
            let valor;
            for(let i=0;i<=coeficientes.length-1;i++){
              num = parseInt(nueve_primeros_digitos[i]);
              coef = parseInt(coeficientes[i]);
              valor = num*coef;
              if(valor>=10){
                valor=(valor%10)+1;
              }
              total = total + valor;
            }
            //Calculamos el residuo y el verificador
            let residuo = total%10;
            let verificador;
            if(residuo == 0){
              verificador = 0;
            }
            else{
              verificador = 10 - residuo;
            }
            if(verificador == parseInt(ruc[9])){
              return 1;
            }
            else{
              return 0;
            }
          }
        }
      }