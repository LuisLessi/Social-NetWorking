<script>
new Vue({
    el: '#app',
    data: {
        nome: null,
        email: null,
        error: []
    },
    methods: {
        checkForm: function () {

        }
    }
})

</script>
<!-- 
<script>
import axios from 'axios'

export default {
    name: 'CreateCad',
    data() {
        return {
            FormData: {
                signupEmail: '',
                signupPassword: '',
                passwordConfirm: '',

            },
        }
    },
    methods: {
        criarConta() {
            axios.post();//link do API
        }
    }
}
</script>