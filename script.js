const produtos = [
  { id: 1, nome: "Produto A", descricao: "Descrição do Produto A" },
  { id: 2, nome: "Produto B", descricao: "Descrição do Produto B" },
  { id: 3, nome: "Produto C", descricao: "Descrição do Produto C" },
];

function pesquisarProduto(termo) {
  termo = termo.toLowerCase();
  const resultados = [];

  for (const produto of produtos) {
    if (
      produto.id.toString().includes(termo) ||
      produto.nome.toLowerCase().includes(termo) ||
      produto.descricao.toLowerCase().includes(termo)
    ) {
      resultados.push(produto);
    }
  }

  return resultados;
}

function exibirResultados(resultados) {
  const resultadosDiv = document.getElementById("search-results");
  resultadosDiv.innerHTML = "";

  if (resultados.length === 0) {
    resultadosDiv.innerHTML = "<p>Nenhum resultado encontrado.</p>";
    return;
  }

  for (const produto of resultados) {
    const produtoDiv = document.createElement("div");
    produtoDiv.classList.add("product");
    produtoDiv.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>ID: ${produto.id}</p>
            <p>${produto.descricao}</p>
        `;
    resultadosDiv.appendChild(produtoDiv);
  }
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const searchTerm = document.getElementById("search").value;
  const resultados = pesquisarProduto(searchTerm);
  exibirResultados(resultados);
});
