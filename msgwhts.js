 

    document.getElementById('enviar-whatsapp-btn').addEventListener('click', function() {
        var nome = document.getElementById('nome').value;
        var mensagem = document.getElementById('mensagem').value;
      
        if (nome !== '' && mensagem !== '') {
          var numeroWhatsApp = '5531996326106';
      
          var mensagemWhatsApp = 'Olá, meu nome é ' + nome + '. Gostaria de fazer o seguinte pedido: ' + mensagem;
      
          var numeroWhatsAppCodificado = encodeURIComponent(numeroWhatsApp);
          var mensagemWhatsAppCodificada = encodeURIComponent(mensagemWhatsApp);
      
          var urlWhatsApp = 'https://wa.me/' + numeroWhatsAppCodificado + '?text=' + mensagemWhatsAppCodificada;
      
          window.open(urlWhatsApp);
        } else {
          alert('Por favor, preencha todos os campos do formulário.');
        }
      });
      
      
