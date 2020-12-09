#Validar el RUC de una persona juridica en Ecuador
#Si es persona juridica privada o extranjero no residente (sin cedula) se tiene el caso 1
#Si es persona juridica publica se tiene el caso 2
#Si es persona natural se tiene el caso 3
def validar(numero):
    #Valida dimension
    if(len(numero)!=13):
        return 0
    else:
        dos_primeros_digitos = int(numero[0:2])
        #Valida 2 primeros digitos
        if(dos_primeros_digitos < 1 or dos_primeros_digitos > 22):
            return 0
        tercer_digito = int(numero[2])
        #Valida tercer digito (Condicion creada con logica matematica y leyes de De Morgan)
        if(tercer_digito != 9 and tercer_digito != 6 and (tercer_digito < 0 or tercer_digito >= 6)):
            return 0
        #Si tercer digito es 9 se analiza el caso 1
        if(tercer_digito==9):
            ultimos_tres_digitos = int(numero[10:13])
            if(int(ultimos_tres_digitos <= 000)):
                return 0
            total = 0
            nueve_primeros_digitos = numero[0:9]
            coeficientes = '432765432'
            for i in range(0,9):
                num = int(nueve_primeros_digitos[i])
                coef = int(coeficientes[i])
                valor = num * coef
                total+=valor
            #Calculamos el residuo y el verificador
            residuo = total%11
            if(residuo==0):
                verificador = 0
            else:
                verificador = 11 - residuo
            if(verificador == int(numero[9])):
                return 1
            else:
                return 0
        #Si tercer digito es 6 se analiza el caso 2
        elif(tercer_digito==6):
            ultimos_cuatro_digitos = int(numero[9:13])
            if(int(ultimos_cuatro_digitos <= 0000)):
                return 0
            total = 0
            ocho_primeros_digitos = numero[0:8]
            coeficientes = '32765432'
            for i in range(0,8):
                num = int(ocho_primeros_digitos[i])
                coef = int(coeficientes[i])
                valor = num * coef
                total+=valor
            #Calculamos el residuo y el verificador
            residuo = total%11
            if(residuo==0):
                verificador = 0
            else:
                verificador = 11 - residuo
            if(verificador == int(numero[8])):
                return 1
            else:
                return 0
        #Si tercer digito es menor a 6 y positivo se analiza el caso 3
        else:
            ultimos_tres_digitos = int(numero[10:13])
            if(int(ultimos_tres_digitos <= 000)):
                return 0
            total = 0
            nueve_primeros_digitos = numero[0:9]
            coeficientes = '212121212'
            for i in range(0,9):
                num = int(nueve_primeros_digitos[i])
                coef = int(coeficientes[i])
                valor = num * coef
                if(valor >= 10):
                    valor = (valor%10)+1
                total+=valor
            #Calculamos el residuo y el verificador
            residuo = total%10
            if(residuo==0):
                verificador = 0
            else:
                verificador = 10 - residuo
            if(verificador == int(numero[9])):
                return 1
            else:
                return 0

