<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Hi FROM SMB HOME PAGE 2!</h1>
    <p>Page two data</p>
    <form action="">
      <input type="text" name="info" v-model="data.info" placeholder="Hi, Place your text here"><p>{{data.info}}</p>

    </form>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        data:{}
      }
    },
    props: {
    }
  };
</script>
