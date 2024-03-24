function abrirWhatsapp(){
    var nome = document.getElementById("tecnico").value;
    var registro = document.getElementById("re").value;
    var fttx = document.getElementById("fttx").value;
    var supervisor = document.getElementById("supervisor").value;
    var instancia = document.getElementById("instancia").value;
    var client = document.getElementById("client").value;
    var extern = document.getElementById("extern").value;
    // var msg = document.getElementById("msg").value;
    var idInput = document.getElementById("nsupervisor");
    var url = `https://wa.me/55${idInput.value}?text=` // Seu numero


      + "*PASSO A PASSO - INSTALAÇÃO FTTX*" + "%0a" // Mensagem personalizada
      + "%0a" // Quebra de linha
      + "*Nome do técnico*: " + nome + "%0a" // Dados do formulário
      + "*R.E*: " + registro + "%0a"
      + "*Segmento*: " + fttx + "%0a"
      + "*Supervisor*: " + supervisor + "%0a"
      + "*Instância*: " + instancia + "%0a"
      + "%0a" 
      + "%0a" 
      + "*Entrevista com o cliente*:"
      + "%0a" 
      + "Confirmar nome do assinante: " + client + "%0a"
      + "Verificar o pacote contratado: " + client + "%0a"
      + "Informar o tempo estimado para execução do serviço: " + client + "%0a"
      + "Se a ordem tiver Voip, antes de iniciar deve informar que o telefone  deve ser instalado do lado do Hgu: " + client + "%0a"
      + "Orientar que irá fazer o check-list externo e o tempo estimado para essa atividade: " + client + "%0a"
      + "%0a" 
      + "%0a" 
      + "*Viabilidade Externa*:"
      + "%0a"
      + "Utilizar a caneta de limpeza na porta designada e o conector universal, antes de medir: " + extern + "%0a"
      + "Realizar o teste de potência na fibra designada na CTOP deve estar entre -8 dBm a -24,5 dBm: " + extern + "%0a"
      + "Se a porta estiver sem sinal deve procurar outra, se não achar no raio de 500 metros deve abrir TA: " + extern + "%0a"
      + "Caso precise de manobra, faça e cheque a potência da porta: " + extern + "%0a"
      + "Verificar trajeto da rede e distância: " + extern + "%0a"
    
      // + "*Mensagem*: " + msg;
    window.open(url, '_blank').focus();
  }
  
 