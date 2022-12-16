alert("Поиск корней уравнения y =  Аx^2 + Bx + C" )
        let a = Number(prompt("Введите значение А"))
        let b = Number(prompt("Введите значение В"))
        let c = Number(prompt("Введите значение С"))
        if (b*b-4*a*c > 0)
        {
            alert("x1 = " + ((-b + Math.pow(b*b-4*a*c, 0.5)) /2 / a ) + "      " + "x2 = " + ((-b - Math.pow(b*b-4*a*c, 0.5)) /2 / a ))
        }    
        else if (b*b-4*a*c === 0){
            alert("x = " + ((-b + Math.pow(b*b-4*a*c, 0.5)) /2 / a ))
        }
        else{alert("Уравнение не имеет действительных корней или не является квадратным")
			}