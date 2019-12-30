<template>
  <div class="button_a">
    <button id="mybtn"  @click="switchhome">Switch Home</button>
  </div>
</template>
<style lang="scss">
  .button_a{
    button{
      background-color: white;
      padding: 10px;
      border:2px solid;
      border-radius: 4px;
      &:hover{
        background-color: cyan;
        font-weight: bold;
      }
    }
  }
</style>
<script>
  export default {
    props: {
    },
    methods:{
      switchhome:function () {
        this.$emit('switchhome');
      }
    }
  };

</script>
