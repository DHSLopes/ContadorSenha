function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

jQuery(document).ready(function($) {

	$("body").on('keydown', function(e) {
		var senhaAtual   = $("#senhaAtualNumero");
		var senhaNormal  = $("#senhaNormal");
		var senhaFinanceiro = $("#senhaFinanceiro");
		var ultimaSenha  = $("#ultimaSenhaNumero");
		var audioChamada = $("#audioChamada");
		var mesaAtendimento = $("#mesaAtendimentoNumero");

        if(e.keyCode == 75){
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaNormal.val().replace("P","")) + 1;
            senhaAtual.html("P" + pad(senha, 3));
            senhaNormal.val("P" + pad(senha, 3));
            mesaAtendimento.html("P01");
            audioChamada.trigger("play");
        }

        if(e.keyCode == 82){
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaNormal.val().replace("P","")) + 1;
            senhaAtual.html("P" + pad(senha, 3));
            senhaNormal.val("P" + pad(senha, 3));
            mesaAtendimento.html("P02");
            audioChamada.trigger("play");
        }

        if(e.keyCode == 69){
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaFinanceiro.val().replace("F","")) + 1;
            senhaAtual.html("F" + pad(senha, 3));
            senhaFinanceiro.val("F" + pad(senha, 3));
            audioChamada.trigger("play");
            mesaAtendimento.html("CAIXA 2");
        }

        if(e.keyCode == 76){
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaFinanceiro.val().replace("F","")) + 1;
            senhaAtual.html("F" + pad(senha, 3));
            senhaFinanceiro.val("F" + pad(senha, 3));
            audioChamada.trigger("play");
            mesaAtendimento.html("CAIXA");
        }

        if(e.keyCode == 65){
            senha = parseInt(senhaNormal.val().replace("P","")) - 1;
            senhaAtual.html("P" + pad(senha, 3));
            senhaNormal.val("P" + pad(senha, 3));
        }
        if(e.keyCode == 80){
            senha = parseInt(senhaFinanceiro.val().replace("F","")) - 1;
            senhaAtual.html("F" + pad(senha, 3));
            senhaFinanceiro.val("F" + pad(senha, 3));
        }
         if(e.keyCode == 83){
            senha = parseInt(senhaFinanceiro.val().replace("F","")) - 1;
            senhaAtual.html("F" + pad(senha, 3));
            senhaFinanceiro.val("F" + pad(senha, 3));
        }
    });
});