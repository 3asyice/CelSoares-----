var news1 = document.getElementById('noticias');
    var news2 = false;

    function news() {
      news2 = !news2;
      news1.style.display = news2 ?
        'block' : 'none';
    }
    var news3 = document.getElementById('btn-2');
    var news4 = false;

    function buttonOne() {
      news4 = !news4;
      news3.style.display = news4 ?
        'block' : 'none';
    }
    var news5 = document.getElementById('btn-5');
    var news6 = false;

    function buttonTwo() {
      news6 = !news6;
      news5.style.display = news6 ?
        'block' : 'none';
    }
    var temas = document.getElementById('osTemas');
    var temas1 = false;

    function themes() {
      temas1 = !temas1;
      temas.style.display = temas1 ?
        'block' : 'none';
    }
    var temasss = document.getElementById('themess');
    var temas44 = false;

    function otema() {
      temas44 = !temas44;
      temasss.style.display = temas44 ?
        'block' : 'none';
    }
    var suy = document.getElementById('suicide');
    var live = false;
    
    function meuSuicidio() {
      live = !live;
      suy.style.display = live ?
      'block' : 'none';
    }
    const root = document.documentElement;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          root.style.setProperty('--bg-color', this.value);
          checkboxes.forEach(otherCheckbox => {
            if (otherCheckbox !== this) {
              otherCheckbox.checked = false;
            }
          });
        } else {
          root.style.setProperty('--bg-color', 'darkred');
        }
      });
    });
    document.getElementById('shareBtn').addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Notícia de Um Ex Soldado do Exército Brasileiro',
                text: 'Soldado expulso conta relatos em site da Internet',
                url: window.location.href,
            });
            console.log('Post compartilhado com sucesso');
        } catch (error) {
            console.error('Erro ao compartilhar:', error);
        }
    } else {
        alert('Compartilhamento não suportado neste navegador.');
    }
});

document.getElementById('shareBtn').addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Notícia de Um Ex Soldado do Exército Brasileiro',
                text: 'Soldado expulso conta relatos em site da Internet',
                url: window.location.href,
            });
            console.log('Post compartilhado com sucesso');
        } catch (error) {
            console.error('Erro ao compartilhar:', error);
        }
    } else {
        alert('Compartilhamento não suportado neste navegador.');
    }
});
  
    
document.addEventListener('DOMContentLoaded', (event) => {
    loadComments();
});

function addComment() {
    const commentInput = document.getElementById('commentInput').value;
    if (commentInput) {
        let comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(commentInput);
        localStorage.setItem('comments', JSON.stringify(comments));
        document.getElementById('commentInput').value = '';
        loadComments();
    }
}

function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentsContainer = document.getElementById('comments');
    commentsContainer.innerHTML = '';
    comments.forEach((comment, index) => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerText = comment;
        commentsContainer.appendChild(commentElement);
    });
}
