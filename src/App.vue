<template>
  <div id="app">
    <!--<mycomp inline-template>
      <div>
        <p>These are compiled as the component's own template.</p>
        <p>Not parent's transclusion content.</p>
      </div>
    </mycomp>-->
    <navbar>
    </navbar>
    <router-view />
<p></p>
  </div>
</template>
<script>
  import navbar from "./components/navbar/navbar";
  export default {
    beforeCreate() {
      console.log(" app not yet created Yet");
    },
    created() {
      console.log('app has been created');
    },
    beforeMount() {
      console.log(`app doesn't exist yet`)
    },
    mounted() {
      console.log('app has been mounted');

    },
    updated() {
      console.log("updated ");
    },
    beforeUpdate() {
      console.log("Not Updated");
    },
    beforeDestroy() {
      this.wasted = null
      delete this.wasted;
    },
    destroyed() {
      alert('App destroyed');
    },
    data() {
      return {
        wasted: 'data!'
      }
    },
    props: {
    },
      components: {
          navbar
      },
  };
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
body {
  margin: 0px !important;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
