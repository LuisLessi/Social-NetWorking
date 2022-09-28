new Vue({
    el: '#app',
    data: {
        nome: null,
        email: null,
        error: []
    },
    methods: {
        checkForm: function () {
            if (!this.nome) {
                this.errors.push('O nome deve ser preenchido')
            }
            if (!this.email) {
                this.errors.push('O email deve ser preenchido')
            }
        }
    }
})