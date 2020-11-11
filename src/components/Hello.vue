<template>
    <div class="container">
      <h1>你是面包上的黄油，生命里的四季奶青！</h1>
      <h3 @click="clickhandler">
        <svg class="icon" aria-hidden="true" style="height: 26px;width: 26px;font-size: 20px">
          <use xlink:href="#icon-aixin"></use>
        </svg>
        4周年</h3>
    </div>
</template>

<script>
    export default {
        name: "Hello",
      methods:{
        clickhandler(){
          console.log('点到我了');
          this.$router.push('/detail')
        }
      },
      data(){
          return{

          }
      }
    }
</script>

<style lang="scss" scoped>
  .container {
    width: 60%;
    margin: 10% auto 0;
    background-color: #f0f0f0;
    padding: 2% 5%;
    border-radius: 10px;
    display: block;
  }
  h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  h3 {
    cursor: pointer;
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color: #20a53a;
  }
</style>
