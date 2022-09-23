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
            <br/>

            <div v-if="alert_delete" class="alert_delete">
            <b-alert v-if="eliminar_correcto" class="alert alert-success">
                La persona ha sido eliminada correctamente!
            </b-alert>
            </div>

            <div v-if="update_success" class="update_success">
              <div v-if="actualizar_correcto" class="alert alert-success">
                La persona ha sido actualizada correctamente!
            </div>
            </div>

            <DatatableComponent 
            :key="index" 
            :personas="personas"
            @delete-persona="eliminarPersona">
            </DatatableComponent>


        </div>
    </div>
</div>
</template>

<script>

import DatatableComponent from './components/datatable.component.vue'
import TablaPersonas from './components/TablaPersonas.vue'
import FormularioPersona from './components/FormularioPersona.vue'
export default {
    name: 'app',
    components: {
        DatatableComponent,
        TablaPersonas,
        FormularioPersona,
        
    },
    data() {
        return {
            personas:[],
            index:1,
            eliminar_correcto:false,
            alert_delete:false,
    
        }

    },

    methods: {
        agregarPersona(persona) {
            let id= 0;
            
            if (this.personas.length > 0) {
                id = this.personas[this.personas.length - 1].id + 1;
            }
            
            this.personas= [...this.personas, { ...persona, id}];
            this.index++
        },
        eliminarPersona(id) {
            this.personas = this.personas.filter(
                persona => persona.id !== id
            );
            this.eliminar_correcto = true;
            this.alert_delete = true

            setTimeout(() => { this.eliminar_correcto= false,
                                this.alert_delete = false
                ; }, 1000);
    
           
        },
        actualizarPersona(id, personaActualizada) {
            this.personas = this.personas.map(persona =>
                persona.id === id ? personaActualizada : persona
            );
        

        }

    },
}
</script>

<style>
body {
    background: #f9f9f9;
}

.alert_delete{
        margin-bottom: 80px;
    }


</style>