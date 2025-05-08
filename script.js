//função que busca dados do localStorg ou inicia uma lista vazia
let produtos = JSON.parse(localStorage.getitem("produtos")) || [];

//Elementos do DOM
const from = document.getElementById("form-produtos");
const tabela = document.getElementById("tabela-produtos");
const busca = document.getElementById("busca")

//Função para salvar os dados do localStorage
function salvarDados(){
    localStorage.setitem("produtos",JSON.stringify(produtos));

}
//Função para desenhar a tabela com os produtos
function atualizarTabela(){
    //limpar a taqbela atualização
        tabela.innerHTML = "";

        //Filtro de busca 
        const filtro = busca.ariaValueMax.toLowerCase();

        //percorre todos os produtos
    produtos.forEach((produto, index) => {
        if(produto.nome.toLowerCase().includes(filtro)){
            const tr = document.createElement("tr");
       
            //colunas da tabela
            tr.innerHTML = `
            <td>${produto.nome}</td>
            <td>${ptoduto.quantidade}</td>
            <td>${produto.unidade}</td>
            <td>${produto.categoria}</td>
           <td>
                <button class="acao adicionar" onclik="altererquantidade(${index},1)">+</button>
                <button class="acao remover" onclik="altererquantidade(${index},-1)">-</button>
                <button class="acao romover" onclik="altererquantidade(${index},)">Excluir</button>
            </td>
           
            `;
                tabela.appendChild(tr);
        }
    
});
}