function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p class='mensagem-erro'>Nada foi encontrado. Você precisa digitar o nome de um personagem!</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p class='mensagem-erro'>Eu acho que este não é um personagem de One Piece, tente outro!</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

function mostrarPersonagemSorte() {
    // Obtém a lista de dados
    let dados = getDados();
  
    // Gera um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * dados.length);
  
    // Seleciona o personagem aleatório
    let personagemSorte = dados[indiceAleatorio];
  
    // Exibe o personagem na seção de resultados
    let section = document.getElementById("resultados-pesquisa");
    section.innerHTML = `
      <div class="item-resultado">
        <h2>
          <a href="${personagemSorte.link}" target="_blank">${personagemSorte.titulo}</a>
        </h2>
        <p class="descricao-meta">${personagemSorte.descricao}</p>
        <a href=${personagemSorte.link} target="_blank">Mais informações</a>
      </div>
    `;
  }
  
  function getDados() {
    return dados;
  }
