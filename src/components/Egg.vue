<template>
  <div class="outer" >
  <p style="font-size: 240px; color: white">最后</p>
  <ul class="container" >
    <li v-for="(img,index) in content">
      <div class="Demo">
        <div class="Before" :class="!img.isTop ? 'contain-Before' : ''" @click="handle(index)" >
          <div class="imgconatiner" :style="{ 'background-image': 'url(' + img.url + ')','background-repeat':'no-repeat','background-size':'cover' }">
          </div>
          <div class="icon-container" style="text-align: center;margin-top: 10px;">
            <p style="margin-top: 10px">
              {{img.backText}}
            </p>
          </div>
        </div>
        <div class="After" :class="!img.isTop  ? 'contain-After' : ''" @click="handle(index)" style="font-size:120px;color:black">{{img.id==='15'? deltaDay:img.text}}
        </div>
      </div>
    </li>
  </ul>
  <svg class="icon" aria-hidden="true" style="height: 100px;width: 100px;font-size: 20px;margin-top: 40px">
          <use xlink:href="#icon-aixin"></use>
        </svg>
  <p style="position: absolute;bottom: 40px;color: white;font-size: 20px;left: 50%;margin-left:-50px">四周年快乐 : )</p>
  </div>
</template>

<script>
  export default {
    name: "Egg",
    data:function () {
      return {
        content:[
          {
            id:'1',
            // url:require("@/assets/imgs/egg/1.jpg"),
            url:'./static/egg/1.jpg',
            text:'一',
            iconId:'#icon-home',
            backText:'妈妈',
            isTop:false
          },
          {
            id:'2',
            url:'./static/egg/2.jpg',
            text:'个',
            iconId:'#icon-hulaquanren',
            backText:'这个人',
            isTop:false
          },
          {
            id:'3',
            url:'./static/egg/3.jpg',
            text:'彩',
            iconId:'#icon-ice-cream',
            backText:'在公众场合',
            isTop:false
          },
          {
            id:'4',
            url:'./static/egg/4.jpg',
            text:'蛋',
            iconId:'#icon-waiqinchucha',
            backText:'写代码！',
            isTop:false
          },
          {
            id:'5',
            url:'./static/egg/5.jpg',
            text:'蛋',
            iconId:'#icon-waiqinchucha',
            backText:'哼！大变态',
            isTop:false
          },

        ],
      }
    },
    methods:{
      handle(index){
        this.content[index].isTop = !this.content[index].isTop;

      },
    }
  }
</script>

<style scoped lang="scss" >
  *{
    margin: 0;
    padding: 0;
  }
  html body{
    width: 100%;
    height: 100%;
    background-color: blueviolet;
  }
  .outer{
    text-align: center;
    width: 100%;
    min-height: 1200px;
    background-color: darkseagreen;
    position: relative;
  }
  ul li {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
  .container{
    width:100%;
    min-height:460px;
    background-color: lightpink;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 0px;
    overflow: hidden;
    box-sizing: border-box;
  }
  .Demo{
    width: 300px;
    height: 360px;
    /* margin-left: 500px; */
    position: relative;
    perspective: 800px;
    box-sizing: border-box;
    margin-top: 60px;
  }
  .Before{
    width: 300px;
    height: 360px;
    position: absolute;
    top:0;
    left: 0;
    background-repeat: no-repeat;
    background-position: center center;
    backface-visibility: hidden;
    transition: 1.5s;
    border:1px solid black;
    background-color: white;

    .imgconatiner{
      height: 320px;
      width:280px;
      margin:0 auto;
      margin-top: 10px;
      overflow: hidden;
    }

  }

  .After{
    width: 300px;
    height: 360px;
    position: absolute;
    top:0;
    left: 0;
    color: #fff;
    background-color:#fff;
    text-align: center;
    transform: rotateY(-180deg);
    backface-visibility: hidden;
    transition: 1.5s;
    cursor: pointer;
    line-height: 300px;
    /*border:1px solid darkolivegreen;*/

  }
  .Demo .contain-Before{
    transform: rotateY(180deg);
  }
  .Demo .contain-After{
    transform: rotateY(0deg);
  }

</style>
