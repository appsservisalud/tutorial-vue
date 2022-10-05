<template>
<nav>
    <ul>
        <li class="nav-item">
        <router-link 
        to="/">
        <span> 
            <img 
            src="https://drive.google.com/uc?export=download&id=1fxiw5davvlb3IKAvaBJDuad5pkr7U7Vn" 
            width="30" 
            height="30" 
            alt=""
            > 
        Home
        </span>
        
        </router-link>
        
        <span>
            <router-link to="/session"><img src="https://drive.google.com/uc?export=download&id=14M2PmG8eS1zv-uQbSOXj5YQa62j2ACHH" width="30" height="30" alt=""> 
             {{status}}
        </router-link>
        </span>



        

        </li>
        <router-view/>
    </ul>
</nav>

<span>{{message}}</span>

</template>

<script>

    export default {
    props:{
        value:String
    },
    components:{
    },
    data() {
        return{
            status:'Sesion',
        }
    },

    computed:{
        message(){
            value = JSON.parse(localStorage.getItem("status"))
    
        }
    },

    components:{
    },
}

 
</script>
<style></style>