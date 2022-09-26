<template>
  <div id="app" class="container">
      <div class="row">
          <div class="col-md-12">
                                <nav>
                                        <ul>
                                                <li class="nav-item">
                                                <router-link to="/"><span> <img src="../assets/Loggin/check-out.png" width="30" height="30" alt=""> Cerrar sesión</span></router-link> 
                                                </li>
                                        </ul>
                               </nav>

              <h1>Personas</h1>
          </div>
      </div>
      <div class="row">
          <div class="col-md-12">
              <formulario-persona @add-persona="agregarPersona" />
              <br/>

                <div v-if="alert_delete" class="alert_delete">
                    <div v-if="eliminar_correcto" class="alert alert-success">
                        La persona ha sido eliminada correctamente!
                    </div>
                </div>

                <div v-if="update_success" class="update_success">
                    <div v-if="actualizar_correcto" class="alert alert-success">
                        La persona ha sido actualizada correctamente!
                    </div>
                </div>


       <!--<tabla-personas :personas="personas" @delete-persona="eliminarPersona" @actualizar-persona="actualizarPersona" />-->
              

              <DatatableComponent 
                :key="index" 
                :personas="personas"
                @delete-persona="eliminarPersona"
                @actualizar-persona="actualizarPersona"
             />


            
          </div>
      </div>
  </div>
  </template>
  
  <script>
    import DatatableComponent from '../components/datatable.component.vue'
  import TablaPersonas from '../components/TablaPersonas.vue'
  import FormularioPersona from '../components/FormularioPersona.vue'
  export default {
      name: 'app',
      components: {
        DatatableComponent,
          TablaPersonas,
          FormularioPersona,
      },
      data() {
          return {
              personas: [
                  {
                      id: 1,
                      nombre: 'Jon',
                      apellido: 'Nieve',
                      email: 'jon@email.com',
                  },
                  {
                      id: 2,
                      nombre: 'Tyrion',
                      apellido: 'Lannister',
                      email: 'tyrion@email.com',
                  },
                  {
                      id: 3,
                      nombre: 'Daenerys',
                      apellido: 'Targaryen',
                      email: 'daenerys@email.com',
                  },
              ],
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
              console.log(id)
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

  .alert_delete{
        
        width:100%;
        margin-bottom: 80px;
    }
a:link, a:visited, a:active {
text-decoration:none;
}
nav a{
text-decoration:none;
color:inherit;
font-size:14px;
}
nav li{
display:inline-block;
margin-left: 600px;
width:50%;
padding:30px 50px;
background: #f9f9f9;
text-align:right;
color:rgb(100, 100, 100);
} 
nav li a:hover{
color:rgb(129, 17, 17);
}


 
  </style>