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

const listaProdutos = $("#listaProdutos");
const listaCarrinho = $("#listaCarrinho");
const totalPedido = $("#totalPedido");

let carrinho = [];

function mostrarProdutos() {
    listaProdutos.html("");
    produtos.forEach((produto) => {
        listaProdutos.append(`
            <div class="col-md-3 mb-4">
                <div class="card p-3 h-100">
                    <h3>${produto.nome}</h3>
                    <p class="fs-5">
                        R$ ${produto.preco}
                    </p>
                    <button
                        class="btn btn-success btnAdicionar"
                        data-nome="${produto.nome}"
                    >
                        Adicionar
                    </button>
                </div>
            </div>
        `);
    });
}

function mostrarCarrinho() {
    listaCarrinho.html("");

    let total = 0;

    if (carrinho.length === 0) {
        listaCarrinho.html(`
            <p class="text-muted">Nenhum item adicionado</p>
        `);

        totalPedido.html("Total: R$ 0");
        return;
    }

    carrinho.forEach((produto, index) => {
        total += produto.preco;
        listaCarrinho.append(`
            <div class="card p-3 mb-2">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <strong>${produto.nome}</strong>
                        <p class="mb-0">R$ ${produto.preco}</p>
                    </div>
                    <button 
                        class="btn btn-danger btn-sm btnRemover"
                        data-index="${index}"
                    >
                        Remover
                    </button>
                </div>
            </div>
        `);
    });

    totalPedido.html(`Total: R$ ${total}`);
}

function adicionarCarrinho(nomeProduto) {
    const produtoSelecionado = produtos.find((produto) => {
        return produto.nome === nomeProduto;
    });

    carrinho.push(produtoSelecionado);
    mostrarCarrinho();
    console.log(carrinho);
}

function removerCarrinho(index) {
    carrinho.splice(index, 1);
    mostrarCarrinho();
}

$(document).on("click", ".btnAdicionar", function () {
    const nomeProduto = $(this).data("nome");
    adicionarCarrinho(nomeProduto);
});

$(document).on("click", ".btnRemover", function () {
    const index = $(this).data("index");
    removerCarrinho(index);
});

mostrarProdutos();

const usuarioSistema = {
    email: "admin@kitchenos.com",
    senha: "123456"
};

$("#formLogin").on("submit", function (event) {
    event.preventDefault();

    const email = $("#emailLogin").val();
    const senha = $("#senhaLogin").val();

    if (
        email === usuarioSistema.email &&
        senha === usuarioSistema.senha
    ) {
        alert("Login realizado com sucesso!");
        window.location.href = "cardapio.html";
    } else {
        alert("Email ou senha inválidos!");
    }
});

$("#formCadastro").on("submit", function (event) {
    event.preventDefault();

    const nome = $("#nomeCadastro").val();
    const email = $("#emailCadastro").val();
    const senha = $("#senhaCadastro").val();

    alert(`Cadastro realizado com sucesso, ${nome}!`);

    window.location.href = "login.html";
});

$("#btnFinalizarPedido").on("click", function () {

    const tipoPedido = $("#tipoPedido").val();
    const numeroPedido = $("#numeroPedido").val();
    const formaPagamento = $("#formaPagamento").val();
    const formaEntrega = $("#formaEntrega").val();

    if (carrinho.length === 0) {
        alert("Adicione pelo menos um item ao carrinho.");
        return;
    }

    if (!tipoPedido || !numeroPedido || !formaPagamento || !formaEntrega) {
        alert("Preencha todos os dados do pedido.");
        return;
    }

    alert(
        `Pedido finalizado com sucesso!\n\n` +
        `${tipoPedido}: ${numeroPedido}\n` +
        `Pagamento: ${formaPagamento}\n` +
        `Entrega: ${formaEntrega}`
    );

    carrinho = [];

    mostrarCarrinho();

    $("#tipoPedido").val("");
    $("#numeroPedido").val("");
    $("#formaPagamento").val("");
    $("#formaEntrega").val("");
});