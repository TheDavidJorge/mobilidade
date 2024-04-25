
  // Função para maximizar a imagem ao clicar
  function maximizarImagem() {
    var imagem = document.getElementById('imagem');
    imagem.style.width = '70%';
    imagem.style.height = '1000px';
    imagem.style.position = 'absolute';
    imagem.style.top = '300px';
    imagem.style.left = '300px';
    imagem.style.zIndex = '9999';
    imagem.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    imagem.style.cursor = 'zoom-out';
    imagem.setAttribute('onclick', 'minimizarImagem()');
  }

  // Função para minimizar a imagem ao clicar novamente
  function minimizarImagem() {
    var imagem = document.getElementById('imagem');
    imagem.style.width = '500px';
    imagem.style.height = '700px';
    imagem.style.position = 'static';
    imagem.style.zIndex = 'auto';
    imagem.style.backgroundColor = 'transparent';
    imagem.style.cursor = 'pointer';
    imagem.setAttribute('onclick', 'maximizarImagem()');
  }

  // Função para maximizar a imagem ao clicar
  function maximizarImagem1() {
    var imagem = document.getElementById('imagem1');
    imagem.style.width = '70%';
    imagem.style.height = '1000px';
    imagem.style.position = 'absolute';
    imagem.style.top = '300px';
    imagem.style.left = '300px';
    imagem.style.zIndex = '9999';
    imagem.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    imagem.style.cursor = 'zoom-out';
    imagem.setAttribute('onclick', 'minimizarImagem1()');
  }

  // Função para minimizar a imagem ao clicar novamente
  function minimizarImagem1() {
    var imagem = document.getElementById('imagem1');
    imagem.style.width = '500px';
    imagem.style.height = '700px';
    imagem.style.position = 'static';
    imagem.style.zIndex = 'auto';
    imagem.style.backgroundColor = 'transparent';
    imagem.style.cursor = 'pointer';
    imagem.setAttribute('onclick', 'maximizarImagem1()');
  }
