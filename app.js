// Seleciona o botão de pesquisa pelo seu ID
let botao = document.getElementById("botao-pesquisa");

// Adiciona um ouvinte de evento para o botão
botao.addEventListener("click", function(event) {
  // Impede que o formulário seja enviado e a página recarregada
  event.preventDefault(); 
});

// Função para realizar a pesquisa
function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  console.log(campoPesquisa);

// Se o campo pesquisa estar vazio, retornar
  if (campoPesquisa.trim() === ""){

    section.innerHTML = "Não encontrado";

    return
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLocaleLowerCase()
    // se titulo includes campoPesquisa
    // barra barra significa OU
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        //entao faça
        // Constrói o HTML para cada item de resultado
        resultados += `
        <div class="item-resultado">
          <h2>
           <a href=${dado.links[0]} target="_blank"   class="link-sem-estilo">
            ${dado.titulo}
           </a>
         </h2>
          <p class="cor">${dado.descricao}</p>
         <a href=${dado.links[1]} target="_blank">
          Mais informações
         </a>
        </div>
      `;      
      }   
  }

if (!resultados){
  resultados = "<p>Não encontrado</p>"
}


  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}
