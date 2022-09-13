<template>
<div id="app" class="container">
    <div class="row">
        <div class="col-md-12">
            <h1>Personas</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <formulario-persona @add-persona="agregarPersona" />
            <tabla-personas :personas="personas" @delete-persona="eliminarPersona" @actualizar-persona="actualizarPersona" />
        </div>
    </div>
</div>
</template>

<script>
import TablaPersonas from './components/TablaPersonas.vue'
import FormularioPersona from './components/FormularioPersona.vue'
export default {
    name: 'app',
    components: {
        TablaPersonas,
        FormularioPersona,
    },
    data() {
        return {
            personas:null
        }

    },

    mounted(){

        google.script.run
            .withSuccessHandler((personas_Json) => 
                    {
                      this.personas = personas_Json    
                    })

            .withFailureHandler((error)=>{return error})
            .getSheetJson()

    },

    methods: {

        agregarPersona(persona) {
            let id= 0;
            

            if (this.personas.length > 0) {
                id = this.personas[this.personas.length - 1].id + 1;
            }

            id = [...this.personas]
    
            this.personas= [...this.personas, { ...persona, id}];

            
        },
        eliminarPersona(id) {
            this.personas = this.personas.filter(
                persona => persona.id !== id
            );
            return console.log("guarda");
            
        },
        actualizarPersona(id, personaActualizada) {
            this.personas = this.personas.map(persona =>
                persona.id === id ? personaActualizada : persona

            )
            
        }
    }
}
</script>

<style>
body {
    background: #f9f9f9;
}
</style>