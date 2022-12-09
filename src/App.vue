<template>
  <nav>
    <router-link to="/">Home</router-link> &nbsp;
    <router-link to="/user">Users</router-link> 
  </nav>
  <router-view/>
</template>

<style lang="scss" scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
    padding: 10px;
    font-size: 20px;
    background-color: gainsboro;
    margin-bottom: 5px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin-left: 5px;
    padding-right: 10px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #4276b9;
      text-decoration: none;
    }
  }
}
</style>
