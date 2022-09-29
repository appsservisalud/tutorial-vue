<template>

    <h3>Soy la sesión principal</h3>
    <button @click="go_login()">Ingresar</button>
    <router-view/>
</template>

<script>
    export default {
    data() {
        return{}
    },
    methods:{

        go_login(){
                this.$router.push({name:'list_view'})
                console.log("funciona")
            }

    }
}
</script>
