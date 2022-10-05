<template>
     <form action class="form" @submit.prevent="login">
                    <label class="form-label" for="#email">Correo:</label>
                    <input 
                        v-model="email"
                        class="form-input"
                        type="email" id="email"
                        required
                        placeholder="email@correounivalle.edu.co"
                    >
                
                    <label class="form-label" for="#password">Contraseña:</label>
                    <input 
                        v-model="password"
                        class="form-input"
                        type="password" 
                        id="password"
                        placeholder="************"
                        >
                        <p v-if="error" class="error">Has introducido mal el correo o la contraseña.</p>
                    <input  @click="login()" class="form-submit" type="submit" value="Iniciar sesión">
                    </form>

</template>

<script>
    import auth from '../logic/auth'
    export default{
        data(){
            return{
                email:'',
                password:'',
                error:false
            }
        },
        methods:{
            async login(){
            try{
                   await auth.login(this.email, this.password);
                   this.$router.push({name:'list'})
            }catch(error){
                this.error = true;
            }
            }
                
        }
    }
</script>
