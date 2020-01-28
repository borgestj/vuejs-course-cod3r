new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta(){
            return alert('Estou te alertando')
        },
        mostraValor(event) {
            this.valor = event.target.value
        }
    }
})