/*
------------------- PASOS A SEGUIR -------------------

1) Buscar en la tienda
2) Obtener resultados ordenados por el más barato
3) Coger la url del primero
4) Obtener el detalle
5) Coger nombre, foto y precio
6) Pintar nombre de la tienda y datos del producto

------------------- SELECTORES -------------------

PCCOMPONENTES
	get cheapest params:
		#pg-0&or-price-asc
	classes & ids:
		master:
			#articleListContent
		detail:
			#precio-main > span.baseprice

AMAZON
	get cheapest params:
		s?k=nintendo+switch+2019
		&s=price-asc-rank
	classes & ids:
		master:
			#search .s-result-item .a-link-normal.a-text-normal
		detail:
			#productTitle
			#landingImage
			#price_inside_buybox
*/