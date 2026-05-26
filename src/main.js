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
const listaCarrinho = document.getElementById("listaCarrinho");
const totalPedido = document.getElementById("totalPedido")
let carrinho = [];

function mostrarCarrinho(){
    listaCarrinho.innerHTML = "";
    let total = 0;
    if (carrinho.length === 0){
        listaCarrinho.innerHTML = `
        <p class="text-muted">Nenhum item adicionado</p>
        `;
        totalPedido.innerHTML = "Total: R$ 0"
        return;
    }

    carrinho.forEach((produto, index) => {
        total += produto.preco;

        listaCarrinho.innerHTML += `
        <div class="card p-3 mb-2">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <strong>${produto.nome}</strong>
                    <p class="mb-0">R$ ${produto.preco}</p>
                </div>
                <button class="btn btn-danger btn-sm" onclick="removerCarrinho(${index})">Remover</button>
            </div>
        </div>
        `;
    });
    totalPedido.innerHTML = `Total: R$ ${total}`;
}


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
    mostrarCarrinho();
    console.log(carrinho);
    alert(`${nomeProduto} adicionado ao carrinho`);
}

window.adicionarCarrinho = adicionarCarrinho;