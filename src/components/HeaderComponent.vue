<script >


</script>

<template>
  <header class="masthead mb-auto">
    <div class="inner">
      <h3 class="masthead-brand apple">
        <span> <i class="bi bi-apple"></i> </span> MasterChef
      </h3>

      <nav
        class="nav nav-masthead justify-content-center"
        @click.prevent="onPath"
      >
        <div v-if="true">  
          <a class="nav-link">Home</a>
          <a class="nav-link">Login</a>
          <a class="nav-link">Register</a>
        </div>

        <div v-else>
          <a class="nav-link" id="ignore-hover"
            >Welcome, Chef <span>{{  }}</span
            >!</a
          >
          <a class="nav-link">Home</a>
          <a class="nav-link">ShareRecipe</a>
          <a class="nav-link" id="logout">Logout</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>

</style>
