<script setup>
</script>

<template>


  <div id="app" class="container">
        <div class="row">
            <div class="col-md-12">
              <nav>
                  <ul>
                      <li class="nav-item">
                      <router-link 
                        to="/">
                        <span> 
                        <img 
                        src="https://drive.google.com/uc?export=download&id=1fxiw5davvlb3IKAvaBJDuad5pkr7U7Vn" 
                        width="30" height="30" alt=""> Home</span>
                      </router-link> 

                        <router-link 
                          to="/session">}
                          <span> 
                          <img 
                          src="https://drive.google.com/uc?export=download&id=14M2PmG8eS1zv-uQbSOXj5YQa62j2ACHH"
                          width="30" height="30" alt=""> Sesión</span>
                      </router-link>
                      </li>
                      <router-view/>
                  </ul>
              </nav>
            </div>
        </div>
  </div>
</template>

<style></style>
