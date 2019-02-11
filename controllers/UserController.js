class UserController {

    constructor(formId, tableId) {

        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit();
    }//fechando constructor

    onSubmit(){ //quando enviarem - eventlistener do botao save

        this.formEl.addEventListener("submit", (event) => { //arrowFunctions

            event.preventDefault(); //cancelar a acao padrao do evento.

            let values = this.getValues();

            values.photo = "";

            this.getPhoto().then(
                    (content)=> {

                        values.photo = content;    //esse conteudo vai para o valor da foto e apos isso adiciona a linha.
                        this.addLine(values);
                    
                    }, 
                    (e)=> {
                        console.error(e);
                    }
             );
            });

            /*this.getPhoto((content)=>{ // content  = conteudo do arquivo
                
            }); */

    
    }//fechando o metodo onSubmit

    getPhoto(){ //por nao ser possivel ter um return, criado uma funcao callback
                            //para pegar o arquivo e montar no index
        return new Promise ((resolve, reject) => {

            let fileReader = new FileReader(); // new FileReader()  = ja invoca o construtor do filereader

            let elements = [...this.formEl.elements].filter(item => {

                if (item.name === 'photo') {
                    return item;
                }
            });
    
            let file = elements[0].files[0]; // pega o primeiro arquivo, do primeiro elemento (foto selecionada)
                                                //guarda na variavel file e manda pro readAsDataURL

            fileReader.onload = () => { //callback - quando terminar de carregar a imagem, executa a funcao a seguir
    
                resolve(fileReader.result); //fileReader.result - apresenta o conteudo do arquivo, ou seja a img (como URL base64)
                //caso de certo o promise resolve
            };

            fileReader.onerror = (e) => { //caso aconteca algum erro dispara o reject

                reject(e);

            };

            fileReader.readAsDataURL(file); //le o arquivo (file) e codifica em base64 

        });
    
    }//fechando getPhoto
    getValues(){
        
        let user = {}; // let deixa a variavel existindo apenas dentro desse metodo getValues

        [...this.formEl.elements].forEach(function(field, index){ //colocando o [] transforma a funcao num array
                                                                        // colocando '...' adiciona indices conforme necessario
                                                                            //'...' = spread
            if (field.name == "gender") {
        
                if (field.checked)  {
                    user[field.name] = field.value;
                }
        
            } else {
        
                user[field.name] = field.value;
        
            }
        });
    
        return new User( // objetUser e uma copia da classe User
            user.name, user.gender, user.birth,
            user.country, user.email, 
            user.password, user.photo, user.admin
            );

    }//fechando  o metodo getValues

    addLine(dataUser){
    
       this.tableEl.innerHTML = 
        ` 
        <tr>
            <td><img src="${dataUser.photo}dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${dataUser.admin}</td>  
            <td>${dataUser.birth}</td>
            <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
        </tr>
        ` ;
    }//fechando o addLine

}//fechando a classe UserController