new Vue ({
    el: '#desafio',
    data: {
        nome: 'Roberto Borges da Silva',
        idade: '35',
        image: src ="https://pleno.news/wp-content/uploads/2019/09/plenonews_69429078_424547198412357_2917137491588994799_n-1024x684.jpg"
    },
    methods: {
        multiplicacao() {
            return this.idade*3
        },

        randomico() {
            return Math.random()
        }
    }
})