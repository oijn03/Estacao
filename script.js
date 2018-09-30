let botao=document.querySelector(".botao");
// 
let surpresa=document.querySelector(".secreta")
function pedirEmprestimo(){

let nome = prompt ("Olá, querido cliente, qual é o seu nome? (Use apenas letras)");
let idade = prompt ("Olá " +nome+ ", qual é sua idade? (Use apenas números).");
    if(idade != Number (idade)){
        alert ("ERRO! Você não usou apenas números. Repita o processo.");        
    }
    
    else {
            let salario = prompt ("Quanto é o seu salário? (Use apenas números)");
            if (salario != Number (salario)){
            alert ("ERRO! Você não usou apenas números. Repita o processo.");
            
            }
            else{
                let emprestimo = prompt ("Qual o valor do empréstimo que você deseja? (Use apenas números)");
                if (emprestimo != Number (emprestimo)){
                    alert ("ERRO! Você não usou apenas números. Repita o processo.");          
                    }
                    else{
                        if ((21<=idade && idade<55) && (emprestimo<=5*salario)){
                            botao.style.backgroundColor="green";
                            botao.innerHTML="Aprovado";  
                            surpresa.style.display="flex";      
                        }
                        else {
                            botao.style.backgroundColor="red";
                            botao.innerHTML="Recusado! Clique para tentar novamente.";
                            }
                    }
            }
    }


    }


botao.onclick = pedirEmprestimo
// quando se chama uma função num evento não precisa colocar os parenteses depois dela, diferente de quando se vai declará-la
// == compara o valor dentro da variável;=== compara a 
// colocar: "variavel = Number (variavel)" faz com que o a variável salario só aceite valores numéricos
// natureza das variáveis e o conteúdo dentro das variáveis
// && é "e"; || é "ou"
// != diz que é diferente
// !== compara se dois valores dentro de variáveis são diferentes
// !=== compara dois valores e as duas variáveis que os contêm são diferentes 
// "else if" é usado quando se quer dizer: mesmo não tendo cumprido à condição 
// "if", se essa condição for aceita isso acontece