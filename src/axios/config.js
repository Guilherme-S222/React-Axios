import axios from "axios"; //importando biblioteca do axios que permite fazer solicitações HTTP

const blogFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com", //É definido como "https://jsonplaceholder.typicode.com". Isso significa que todas as solicitações feitas com essa instância do cliente terão automaticamente esse URL como base, o que economiza a repetição do URL em cada solicitação.
    headers: {
        "Content-Type": "application/json", //É definido como um objeto que contém um cabeçalho "Content-Type" com o valor "application/json". Isso define o tipo de conteúdo padrão para as solicitações feitas com essa instância como JSON.
    },

});

export default blogFetch;

//Em resumo, esse código cria uma instância do cliente Axios configurada com um URL base e o tipo de conteúdo JSON padrão. Essa instância é exportada para que possa ser usada em outros lugares do código para fazer solicitações HTTP para o URL base fornecido. Isso é útil para centralizar a configuração do cliente Axios e reutilizá-lo em diferentes partes do seu aplicativo que precisam se comunicar com o servidor em https://jsonplaceholder.typicode.com.
