var rates = {};
var resultado = {};
$(function(){
		
	$.ajax({
		url:  'https://mindicador.cl/api',
		method: 'GET'
	}).then(function(data){
		rates = data;
		$('.indicador.usd').html(rates.dolar.valor);		
		$('.indicador.euro').html(rates.euro.valor);
		$('.indicador.utm').html(rates.utm.valor);
		$('.indicador.uf').html(rates.uf.valor);
	

	});

	$('button').on('click', function(e){
		e.preventDefault();
		var currency = $('.indicador.usd').text();
		var monto = $('input').val();
		$('.divisa.usd').text(monto / rates.dolar.valor .toFixed(0));


	});

		
		
});

