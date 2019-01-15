var rates = {};
var monto = {};
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

	$('.convert').on('click', function(e){
		e.preventDefault();
		monto = $('.cambio').val()
		resultado = (monto / datos.dolar.valor ;
		$('.divisa .usd').text(resultado.toFixed(2));
	});

		
		
});

