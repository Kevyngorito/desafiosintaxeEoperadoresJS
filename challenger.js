function check (){
        let num1 = Number(prompt('Insira o primeiro valor: '));
        let num2 = Number(prompt('Insira o segundo valor: '));
        let sum = (num1+num2);

        if (!num1 || !num2){
            alert('Por favor insira um número!');
            again();
            
        }
        if (sum > 10 || sum < 20)
        {
            if (num1 == num2){
                alert('Os números informados são iguais');
                alert(`Os números ${num1} e ${num2} são iguais. Sua soma é ${sum} que é maior que 10 e menor que 20.`);
                again();
            } else if (num1 !== num2)
            {
                alert('Os números informados são diferentes');
                alert(`Os números ${num1} e ${num2} não são iguais. Sua soma é ${sum} que é maior que 10 e menor que 20.`);
                again();
            }
        }

        function again () {
            let operacao = prompt('Deseja realizar outra operação ? \n 1 - Sim \n 2 - Não');
            if(operacao == 1){
                    check();
            }else if(operacao == 2){
                alert('Até logo e obrigado.');
            }
        }  
    }
check();






