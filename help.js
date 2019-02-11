/* 
    <script> </script> tag html para chamar o js
        quando e usado de modo local, e chamado de script incorporado

    uma boa pratica do js e colocar ele no final do arquivo html

    js. e' case sensitive.

    todo conteudo do html e um elemento.
    e possivel criar os elementos pelo js.
    
    /*
    var name = document.querySelector("#exampleInputName"); // e' mais interessante por o elemento todo na var
    var gender = document.querySelectorAll("#form-user-create [name=gender]:checked"); //pega somente o checked
    var birth = document.querySelector("#exampleInputBirth");
    var country = document.querySelector("#exampleInputCountry");
    var email = document.querySelector("#exampleInputEmail");
    var password = document.querySelector("#exampleInputPassword");
    var photo = document.querySelector("#exampleInputFile");
    var admin = document.querySelector("#exampleInputAdmin");


**** forEach para selecionar todos os campos que contem algo em comum - ou seja o name  ****

    document - refere-se ao site - E' um objeto JS - ele armazena TUDO do documento
    window - janela do navegador utilizado. (document pertence a window)

    metodo e uma acao a ser executada, e sempre com ()
        as informacoes vem dentro do ()

    seletor e baseado no css3 que acessa informacoes do documento do html
        pra pegar a id com o querySelector, tem que por a # 

        objeto possui metodos e atributos.

    variavel que armazena objeto vira uma referencia do objeto. acessa os recursos dela

    pseudo seletor - seletores que casam com uma regra css

    frontEnd  - use sempre class e evite id sempre que possivel
    possibilidade de reuso? e' class -- e usado somente uma vez? e' ID

    avestrato - diminiuir o codigo

    forEach - laço que percorre o array - para cada item executa uma acao

    todo array comeca em 0

    console.log(field.name, field.id, field.value, field.checked, index); //ver cada informacao do field 

    === true  -  e' a mesma coisa que sem se for comparar
            campo.name === true       =        campo.name

    json = javascript object notation
        um padrao de notacao js. baseado em chave e valor
            nome de uma propriedade e o valor dela
            json utiliza: {chave: valor}

    EX: var data = {name: "Kennedy", email:"kennedy.1308@hotmail.com", year: 2019 }
             data.email = kennedy....

    json e' objeto literal = possui atributos e metodos

    apend browser

    this = referencia atributos e metodos da propria classe

    antes do queryselector era comum utilizar o getElementById
        o metodo get - faz com que os dados vao para a URL

    preventDefault - cancela o comando padrao que o evento teria

    funcoes - trecho de codigo q executa algo e retorna valor       
        subrotina e uma funcao q so executa nao retorna valor
            porem JS so usa funcao nos dois casos

    return - retorna valor e encerra a funcao - nao e obrigatorio

    funcoes sao escrita entre parenteses e separados por virgulas

    InnerHTML - recupera ou atribui um valor a um elemento HTML

    Template String- utiliza ` (crase) ` para delimitar texto
    

    --UM OBJETO E UMA VARIAVEL QUE INSTANCIA (REPRESENTA) UMA CLASSE--

    /* 
***************************************************

        ******CRIANDO O addEventListener******
document.querySelectorAll("button").forEach(function(){

    this.addEventListener("click", function() { //this pega o elemento que esta passando no 
                                                                    //for each, que e' todos os button
        console.log("clicou!");
    });
});

***************************************************

            *****PASSAR FUNCAO*****  
forEach(function(){
     if {...}   else{...}                                       
});

***************************************************

        *****MODIFICANDO CSS VIA JS******
nome.value = "Kennedao"; nome.style.color = "blue";
    
***************************************************


        (parametros)=> {
            //sintaxe
        }

*/

