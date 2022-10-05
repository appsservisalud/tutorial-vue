<template>
   <div id="app" class="container">
        <div class="row">
            <div class="col-md-12">
                                  <nav>
                                          <ul>
                                                  <li class="nav-item">
                                            
                                                  <router-link to="/login" @click="show()"><span> <img src="https://drive.google.com/uc?export=download&id=14M2PmG8eS1zv-uQbSOXj5YQa62j2ACHH" width="30" height="30" alt=""> {{session}}</span></router-link> 
                                                 
                                                </li>
                                          </ul>
                                 </nav>
                                 <router-view/>
                                 <IndexView v-if="main"/>
            </div>
   
        </div>
    </div>
    
   
</template>


<script>
import IndexView from './views/IndexView.vue'
  export default {
      props:['status_session'],
      data() {
        return {
              main:true,
              session:this.status_session,
              }
        }
      ,
      components:{ IndexView},
      methods: {
          show() {
            this.main = false
              
          }
      }
    }
    
  
</script>