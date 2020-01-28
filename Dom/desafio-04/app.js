new Vue({
	el: '#desafio',
	data: {
		classeDestaque: 'destaque',
		classeCSS: 'black',
		classe3: '',
		classeEx: 'exemplo',
		classeEx2: 'exemplo2',
		aplicarRedondo: false,
		width: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classeDestaque = this.classeDestaque == 'destaque'
					? 'encolher' : 'destaque'
			}, 3000);
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			}, 500);
		}
	}
})
