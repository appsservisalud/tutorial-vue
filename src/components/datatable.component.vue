<template>

    <div class="content_datatable">
       <br/>
       <div v-if="personas_correcto"> 
       <div v-if="!personas.length" class="alert alert-info" role="alert">
           No se han agregado personas
       </div>
   </div>
   
           <div v-if="update_success"> 
               <div v-if="actualizar_correcto" class="alert alert-info" role="alert">
                   La persona ha sido actualizada correctamente!
               </div>
           </div>
       <br/>
   
   
        <table class="table" id="datatable">
   
   
   
   
   
   
           <Modal v-show="visible" @close="close">
                   <template v-slot:header> Actualización de usuario</template>
                   <template v-slot:body>
                       
                       <table class="table">
                       <thead>
                       
                       </thead>
                       <tbody>
   
                           <div class="container">
                               <div class="row">
                               
                                   <tr v-for="persona in personas" :key="persona.id">
   
                                   
                               <div class="row">
                                   <td v-if="editando === persona.id">
                                       <div class="col-md-12">
                                           <div class="form-group">
                                              <label>Nombre</label>
                                               <input type="text" class="form-control" v-model="persona.nombre" />
                                           </div>
                                       </div>
                                   </td>
                           
                                   
                                   <td v-if="editando === persona.id">
                                         <div class="col-md-12">
                                           <div class="form-group">
                                               <label>Apellido</label>
                                                <input type="text" class="form-control" v-model="persona.apellido" />
                                           </div>
                                         </div>  
                                   </td>
                                   
                                   <td v-if="editando === persona.id">
                                       <div class="col-md-12">
                                           <div class="form-group">
                                               <label>Email</label>
                                                   <input type="email" class="form-control" v-model="persona.email" />
                                           </div>
                                       </div>
                                   </td>
                                   
                                   <td v-if="editando === persona.id">
   
                                       <div class="col-md-12">
                                           <div class="form-group buttons">
                                                   <button class="btn btn-success" @click="guardarPersona(persona)">💾 Guardar</button>
                                                   <button class="btn btn-secondary ml-2" @click="cancelarEdicion(persona)">❌ Cancelar</button>
                                           </div>
                                       </div>
                                   </td>
                               </div>
                           
                           </tr>
                               </div>
                               
                           </div>
   
                       
   
                       </tbody>
                       </table>
                   </template>
                   <template v-slot:footer> You can put your footer here </template>
       </Modal>
   
   
   
   
   
   
   
   
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
                       <button class="btn btn-success" @click="guardarPersona(persona)">💾</button>
                       <button class="btn btn-secondary ml-2" @click="cancelarEdicion(persona)">❌</button>
                   </td>
                   <td v-else>
                       <button class="btn btn-info" @click="editarPersona(persona)">✏️</button>
                       <button class="btn btn-danger ml-2" @click="$emit('delete-persona', persona.id)">🗑️</button>
                   </td>
   
       
               </tr>
           </tbody>
           </table>
   </div>
   
   
       
     </template>
      
     <script>
     import "jquery/dist/jquery.min.js";
     import "bootstrap/dist/css/bootstrap.min.css";
     import "datatables.net-dt/js/dataTables.dataTables";
     import "datatables.net-dt/css/jquery.dataTables.min.css";
     import $ from "jquery";
     import Modal from "./Modal.vue"
     
     export default {
       name: ['Modal'],
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
               personas_correcto:false,
               actualizar_correcto:false,
               update_success:false,
           }
       },
       mounted() {
             setTimeout(() => {
               
               $("#datatable").DataTable({
                   language: {
                   "decimal": "",
                   "emptyTable": "No hay información",
                   "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
                   "infoEmpty": "Mostrando 0 a 0 de 0 Entradas",
                   "infoFiltered": "(Filtrado de _MAX_ total entradas)",
                   "infoPostFix": "",
                   "thousands": ",",
                   "lengthMenu": "Mostrar _MENU_ Entradas",
                   "loadingRecords": "Cargando...",
                   "processing": "Procesando...",
                   "search": "Buscar:",
                   "zeroRecords": "Sin resultados encontrados",
                   "paginate": {
                   "first": "Primero",
                   "last": "Ultimo",
                   "next": "Siguiente",
                   "previous": "Anterior"
                   }},
                   responsive: true,
                   "columnDefs": [{ "width": "100px","heiht": "100px", "targets": 0 },
                                  { "width": "600px", "targets": 1 },
                                  { "width": "400px", "targets": 2 },
                                  { "width": "400px", "targets": 3 },],
                   
                   scrollV:true,
                   scrollY:200,
                 "bDestroy": true,
                 lengthMenu: [
                   [5,10, 25, 50, -1],
                   [5,10, 25, 50, "All"],
                 ],
                 pageLength: 5,
               });
           });
           this.personas_correcto = true;
           setTimeout(() => { this.personas_correcto= false; }, 2000);
       },
       methods: {
           openModal() {
           this.visible = true;
           },
           close() {
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
               this.actualizar_correcto = true;
               this.update_success = true;
               setTimeout(() => { this.actualizar_correcto= false,this.update_success = false}, 1000);
       
           },
           cancelarEdicion(persona) {
               Object.assign(persona, this.personaEditada);
               this.editando = null;
               this.visible = false;
           }
   }
    
     }
       
     </script>
   
    <style>
       .content_datatable{
          
           margin-top: -50px;
       }
       .update_success{
           margin-top:30px
       }
       .alert-info{
           margin-top:30px
       }
       #datatable_wrapper tbody > tr {
   height: 100px;
   }
   .buttons{
       display: flex;
       justify-content: center;
   }
    </style>