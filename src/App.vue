<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <CompCommunicate />  -->
    <!-- <SlotsTest></SlotsTest> -->
    <!-- <Recursion></Recursion> -->
    <!-- <FormSample></FormSample> -->
    <!-- <Tree></Tree> -->
    <Parent></Parent>
    <!-- <Outer></Outer> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import CompCommunicate from "./components/communicate";
// import Parent from "./components/testcommunicate/Parent.vue";
// import Outer from "./components/testprovide/Outer";
// import Outer from "./components/testdispatch/Outer";
import Parent from "./components/testbus/Parent";
// import SlotsTest from "./components/slots";
// import Recursion from "./components/recursion";
// import FormSample from "./components/form";
// import Tree from "./components/tree";

export default {
  name: "app",
  components: {
    // HelloWorld,
    // CompCommunicate,
    // SlotsTest,
    // Recursion,
    // FormSample,
    // Tree,
    Parent
    // Outer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
