<template>
<!--  <div v-once>-->
  <div >
    <img alt="Vue logo" src="../assets/smb.webp"/>
    <h1>{{name}} Hi FROM SMB HOME PAGE 1 !</h1>
    <input  v-model="name" type="text" placeholder="Hi, Place your text here" >
  </div>
</template>
<script>
  export default {
    props: {
    },
    inject: ['name']
  };
</script>