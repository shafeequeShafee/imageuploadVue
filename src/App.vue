<template>
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Photo Collage</router-link>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link> 
        </li>
      </ul>
    </div>
  </div>
</nav>




  
  <router-view />
</template>

<script>




export default {
  name: 'App',
  components: {
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
