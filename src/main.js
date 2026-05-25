import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'

const produtos = [
    {
        nome: "Hamburguer",
        preco: 25
    },

    {
        nome: "Batata Frita",
        preco: 10
    },

    {
        nome: "Refrigerante",
        preco: 5
    },
];

const listaProdutos = document.getElementById("listaProdutos");
let carrinho = [];

produtos.forEach((produto) => {
    listaProdutos.innerHTML += `
    <div class="col-md-3 mb-4">
        <div class="card p--3 h-100">
            <h3>${produto.nome}</h3>
            <p class="fs-5">
                R$ ${produto.preco}
            </p>
            <button class="btn btn-success" onclick="adicionarCarrinho('${produto.nome}')">
                Adicionar
            </button>
        </div>
    </div>
    `;
});

function adicionarCarrinho(nomeProduto){
    const produtoSelecionado = produtos.find((produto) => {
        return produto.nome === nomeProduto;
    });

    carrinho.push(produtoSelecionado);
    console.log(carrinho);
    alert(`${nomeProduto} adicionado ao carrinho`);
}

window.adicionarCarrinho = adicionarCarrinho;