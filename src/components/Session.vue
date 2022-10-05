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
                    <input  @click="open_session()" class="form-submit" type="submit" value="Iniciar sesión">
                    </form>

</template>


<script>

    export default {
    data() {
        return{
            user_name:'David'
        }
    },
    components:{
       
    },
    methods:{
    
        open_session(){
                this.$router.push({name:'home'})
                        
    
            },
    
    },
    }
    </script>
    