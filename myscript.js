
        document.getElementById('loginBtn').addEventListener('click', function() {
            var formContainer = document.getElementById('formContainer');
            if (formContainer.classList.contains('hidden')) {
                formContainer.classList.remove('hidden');
            } else {
                formContainer.classList.add('hidden');
            }
        });

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function botaoMenu(){

  let btnMenuMob = document.getElementById('btn-menu-mob')
  let line1 = document.getElementById('line-menumob-1')
  let line2 = document.getElementById('line-menumob-2')
  let menuMobile = document.querySelector('#menu-mobile')

  let body = document.querySelector('body')
  
  btnMenuMob.addEventListener('click', function() {
    line1.classList.toggle('ativo1')
    line2.classList.toggle('ativo2')
    menuMobile.classList.toggle('abrir')

    body.classList.toggle('no-overflow')
  });
}

function sucesso(){
  window.alert('Sucesso!')
}



// Função para pesquisar produtos
function search_product() {
  const input = document.getElementById('searchbar');
  const filter = input.value.toLowerCase();
  const list = document.getElementById('list');
  const items = list.getElementsByTagName('li');

  let hasResults = false;

  for (let i = 0; i < items.length; i++) {
      const item = items[i].textContent || items[i].innerText;

      if (item.toLowerCase().indexOf(filter) > -1) {
          items[i].style.display = ""; // Exibe o item
          hasResults = true; // Indica que há resultados
      } else {
          items[i].style.display = "none"; // Oculta o item
      }
  }

  // Exibe a lista apenas se houver resultados e a barra não estiver vazia
  list.style.display = hasResults && filter.length > 0 ? "block" : "none";
}

// Função para fechar a lista e a barra de pesquisa
function closeSearch() {
  const list = document.getElementById('list');
  const input = document.getElementById('searchbar');
  list.style.display = 'none'; // Oculta a lista
  input.value = ''; // Limpa a barra de pesquisa
}

// Evento de clique no documento
document.addEventListener('click', function(event) {
  const searchbar = document.getElementById('searchbar');
  const list = document.getElementById('list');

  // Verifica se o clique foi fora da barra de pesquisa e da lista
  if (!searchbar.contains(event.target) && !list.contains(event.target)) {
      closeSearch(); // Chama a função para fechar a lista e limpar a barra
  }
});
