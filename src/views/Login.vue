<template>
 

    <div class="login">
    <h1 class="title">Bienvenido</h1>
    <form action class="form" @submit.prevent="login">
      <label class="form-label" for="#email">Email:</label>
      <input 
         v-model="email"
         class="form-input"
         type="email" id="email"
         required
         placeholder="Email"
    >

      <label class="form-label" for="#password">Password:</label>
      <input 
         v-model="password"
         class="form-input"
         type="password" 
         id="password"
         placeholder="Password"
        >
       <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
      <input  class="form-submit" type="submit" value="Iniciar sesión">
    </form>
  </div>
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
                   this.$router.push('/home')
            }catch(error){
                this.error = true;
            }
            }
                
        }
    }
</script>



<style lang="scss" scoped>
    .login {
      padding: 2rem;
    }
    .title {
      text-align: center;
    }
    .form {
      margin: 3rem auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 20%;
      min-width: 350px;
      max-width: 100%;
      background: rgb(254, 254, 255);
      border-radius: 5px;
      padding: 40px;
      box-shadow: 0 4px 10px 4px rgb(226, 224, 224);
    }
    .form-label {
      margin-top: 2rem;
      color: rgb(129, 121, 121);
      margin-bottom: 0.5rem;
      &:first-of-type {
        margin-top: 0rem;
      }
    }
    .form-input {
      padding: 10px 15px;
      background: none;
      background-image: none;
      border: 1px solid white;
      color: rgba(71, 69, 69, 0.856);
      &:focus {
        outline: 0;
        border-color: #1ab188;
      }
    }
    .form-submit {
      background: #1ab188;
      border: none;
      color: white;
      margin-top: 3rem;
      padding: 1rem 0;
      cursor: pointer;
      transition: background 0.2s;
      &:hover {
        background: #0b9185;
      }
    }
    .error {
      margin: 1rem 0 0;
      color: #ff4a96;
    }
    .msg {
      margin-top: 3rem;
      text-align: center;
    }
    </style>