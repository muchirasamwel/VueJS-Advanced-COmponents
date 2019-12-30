<template>
  <div class="pop-up" id="pop">
    <button class="btn" @click="closepop">X</button>
    <h1>You Requested my Loading ??</h1>
    <div>
      <p>I like to pop up</p>
    </div>
  </div>
</template>
<style lang="scss">
  .pop-up{
    width: 400px;
    height: 200px;
    margin: auto;
    position: absolute;
    top:30%;
    left:35%;
    background-color: cyan;
    .btn{
      color: red;
      font-weight: bolder;
    }
  }

</style>
<script>
  export default {
    props: {
    },
    methods:{
      closepop:function () {
        this.$emit('popchange');
      }
    }
  };

</script>
