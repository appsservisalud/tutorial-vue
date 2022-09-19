<template>



<div id="tabla-personas">

    <Modal v-show="visible" @close="close">
      <template v-slot:header> Actualización de usuario</template>

      <template v-slot:body>
        
        <table class="table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>

            <tr v-for="persona in personas" :key="persona.id">
                <td v-if="editando === persona.id">
                    <input type="text" class="form-control" v-model="persona.nombre" />
                </td>
        
                <td v-if="editando === persona.id">
                    <input type="text" class="form-control" v-model="persona.apellido" />
                </td>
                
                <td v-if="editando === persona.id">
                    <input type="email" class="form-control" v-model="persona.email" />
                </td>
                
                <td v-if="editando === persona.id">
                    <button class="btn btn-success" @click="guardarPersona(persona)">💾 Guardar</button>
                    <button class="btn btn-secondary ml-2" @click="cancelarEdicion(persona)">❌ Cancelar</button>
                </td>
              
            </tr>
        
        </tbody>
        </table>
    </template>
      <template v-slot:footer> You can put your footer here </template>
    </Modal>






    <div v-if="!personas.length" class="alert alert-info" role="alert">
        No se han agregado personas
    </div>
    <table class="table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="persona in personas" :key="persona.id">
                <td v-if="editando === persona.id">
                    <input type="text" class="form-control" v-model="persona.nombre" id="nombre"/>
                    
                </td>
                <td v-else>
                    {{ persona.nombre}}
                </td>

                
                <td v-if="editando === persona.id">
                    <input type="text" class="form-control" v-model="persona.apellido" id="apellido" />
                </td>
                <td v-else>
                    {{ persona.apellido}}
                </td>
                <td v-if="editando === persona.id">
                    <input type="email" class="form-control" v-model="persona.email"  id="email" />
                </td>
                <td v-else>
                    {{ persona.email}}
                </td>
                <td v-if="editando === persona.id">
                    <button class="btn btn-success" @click="guardarPersona(persona)">💾 Guardar</button>
                    <button class="btn btn-secondary ml-2" @click="cancelarEdicion(persona)">❌ Cancelar</button>
                </td>
                <td v-else>
                    <button class="btn btn-info" @click="editarPersona(persona)">✏️ Editar</button>
                    <button class="btn btn-danger ml-2" @click="$emit('delete-persona', persona.id)">🗑️ Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>




</template>

<script>
import Modal from "./Modal.vue"
export default {
    name: ['tabla-personas','Modal'],
    props: {
        personas: Array,
    },
    components: {
    Modal
  },
    data() {
        return {
            visible: false,
            editando: null,
        }
    },
    methods: {

        openModal() {
      this.visible = true;
    },
    close() {
      this.visible = false;
      this.editando = null;
    },
        editarPersona(persona) {
            this.personaEditada = Object.assign({}, persona);
            this.editando = persona.id;
            this.visible = true;
        },
        guardarPersona(persona) {
            if (!persona.nombre.length || !persona.apellido.length || !persona.email.length) {
                return;  
            }
            this.$emit('actualizar-persona', persona.id, persona);
            this.editando = null;
            this.visible = false;
        },
        cancelarEdicion(persona) {
            Object.assign(persona, this.personaEditada);
            this.editando = null;
            this.visible = false;
        }
    }
}
</script>

