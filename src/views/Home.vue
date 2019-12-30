<template>
  <div class="home">
    <button class="btn" @click="popUp">Pop-Over</button>
    <div v-if="showpop">
      <pop @popchange="popUp"></pop>
    </div>
    <keep-alive>
      <component v-bind:is="component" />
    </keep-alive>
    <mybtn @switchhome="switchhome"></mybtn>

    <foot></foot>
  </div>
</template>

<script>
import foot from "@/components/footer/foot.vue";
import mybtn from "@/components/buttons/button_a.vue";
import Home1 from "./home1.vue";
import Home2 from "./home2.vue";

export default {
  name: "home",
  components: {
    foot, mybtn, Home1, Home2,pop: () => import("@/views/pop_up.vue"),
  },
  data (){
    return {
      component:"Home1",
      showpop:false,
      name:'Home'
    }
  },
  methods:{
    switchhome:function () {
      if (this.component === Home1) {
        this.component = Home2;
      } else {
        this.component = Home1;
      }
    },
    popUp:function () {
      this.showpop=!this.showpop;
    }
  },
  provide: function () {
    return {
      name: this.name
    }
  }
};

</script>
