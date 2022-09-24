<template>
  <div class="about">
    <nav>
    <router-link to="/">Cerrar sesión</router-link> 
    <router-link to="/home">Home</router-link> ||
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
    <h1>This is an about page</h1>
  </div>
</template>
