const res = document.querySelector('.calc__display span');
const btns = document.querySelectorAll('.calc__numbers button');
let mas = ['','','','', false]; // ['1', '/', '2', '0,5', true]
// console.log(mas[4]);
//13
btns.forEach(btn => {
    btn.addEventListener("click", (e)=>{
        switch(e.target.textContent){
            case("/"):
                if(mas[3] != ''){
                    mas[0] = mas[3];
                    mas[2]='',mas[3] = '';
                }
                if(res.textContent == "0"){
                    mas[0] = "0";
                };
                mas[1] = '/';
                mas[4] = true;
                res.innerHTML = `${mas[1]}`;
                break;
            case("*"):
            if(mas[3] != ''){
                mas[0] = mas[3];
                mas[2]='',mas[3] = '';
            }
                if(res.textContent == "0"){
                    mas[0] = "0";
                };
                mas[1] = '*';
                mas[4] = true;
                res.innerHTML = `${mas[1]}`;
                break;
            case("+"):
            if(mas[3] != ''){
                mas[0] = mas[3];
                mas[2]='',mas[3] = '';
            }
                if(res.textContent == "0"){
                    mas[0] = "0";
                };
                mas[1] = '+';
                mas[4] = true;
                res.innerHTML = `${mas[1]}`;
                break;
            case("-"):
            if(mas[3] != ''){
                mas[0] = mas[3];
                mas[2] ='', mas[3] = '';
            }
                if(res.textContent == "0"){
                    mas[0] = "0";
                };
                mas[1] = '-';
                mas[4] = true;
                res.innerHTML = `${mas[1]}`;
                break;
            case("="):
                if(mas[2] == ''){
                    break;
                }
                switch(mas[1]){
                    case "+":
                        mas[3] = parseFloat(mas[0]) + parseFloat(mas[2]);
                        mas[4] = false;
                        break;
                    case "-":
                        mas[3] = parseFloat(mas[0]) - parseFloat(mas[2]);
                        mas[4] = false;
                        break;
                    case "*":
                        mas[3] = parseFloat(mas[0]) * parseFloat(mas[2]);
                        mas[4] = false;
                        break;
                    case "/":
                        if(mas[2] == "0"){
                            mas[3]= "Eror";
                            break;
                        }
                        mas[3] = parseFloat(mas[0]) / parseFloat(mas[2]);
                        mas[4] = false;
                        break;
                };
                mas[3]=String(mas[3]);
                res.innerHTML = `${mas[3].substring(0,11)}`;
                break;
            case("."):
            if(mas[3] != ''){
                break;
            }
            if(mas[4]!= false){
                mas[2].indexOf('.',0) == -1 ? res.innerHTML = `${mas[2] += '.'}` : res.innerHTML = `${mas[2]}`;
            }else{
                mas[0].indexOf('.',0) == -1 ? res.innerHTML = `${mas[0] += '.'}` : res.innerHTML = `${mas[0]}`;
            }
                break;
            case("AC"):
                res.innerHTML = `0`;
                mas = ['','','','', false];
                break;
            case("DEL"):
            if(mas[3] != ''){
                break;
            }
            if(res.textContent == "0"){
                break;
            };
            if(mas[4]!= false){
                mas[2].length > 1 ? res.innerHTML = `${mas[2] = mas[2].substring(0,mas[2].length-1)}` : res.innerHTML = `${mas[2]}`;
            }else{
                mas[0].length > 1 ? res.innerHTML = `${mas[0] = mas[0].substring(0,mas[0].length-1)}` : res.innerHTML = `${mas[0]}`;
            }
                break;
            default:
                if(mas[4]!= false){
                    if(mas[2].length >=10 || mas[2] =='0'){
                        res.innerHTML = `${mas[2]}`;
                    }
                    else{
                        res.innerHTML = `${mas[2] += e.target.textContent}`;
                    };
                }
                else{
                    if(mas[3] != ''){
                        mas = ['','','','', false];
                    }
                    if(mas[0] == '0' || mas[0].length >=10 ){
                        res.innerHTML = `${mas[0]}`;
                     }
                     else{
                        res.innerHTML = `${mas[0] += e.target.textContent}`;
                     }
                }
                break;
        }

    });

});
