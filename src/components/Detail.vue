<template>
<ul class="container" >
  <li v-for="(img,index) in content">
    <div class="Demo">
      <div class="Before" :class="!img.isTop ? 'contain-Before' : ''" @click="handle(index)" >
        <div class="imgconatiner" :style="{ 'background-image': 'url(' + img.url + ')','background-repeat':'no-repeat','background-size':'cover' }">
        </div>
        <div class="icon-container" style="text-align: center;margin-top: 10px;">
          <svg class="icon" :class="{'pointer':img.id==='18'}" aria-hidden="true" style="height: 26px;width: 26px;font-size: 20px" @click="heartClick(index)">
            <use v-bind:xlink:href="img.iconId"></use>
          </svg>
          <p style="margin-top: 10px">
            {{img.backText}}
          </p>

        </div>
      </div>
      <div class="After" :class="!img.isTop  ? 'contain-After' : ''" @click="handle(index)" style="font-size:120px;color:black">{{img.id==='15'? deltaDay:img.text}}</div>
    </div>
  </li>
</ul>
</template>

<script>
    export default {
      name: "Detail",
      data:function () {
        return {
          ourday:"2016-11-12",
          content:[
            {
              id:'1',
              url:'./static/detail/1.jpg',
              text:'小',
              iconId:'#icon-home',
              backText:'一起住大房间',
              isTop:false
            },
            {
              id:'2',
              url:'./static/detail/2.jpg',
              text:'孙',
              iconId:'#icon-hulaquanren',
              backText:'一起在迪卡侬转呼啦圈',
              isTop:false
            },
            {
              id:'3',
              url:'./static/detail/3.jpg',
              text:'呀',
              iconId:'#icon-ice-cream',
              backText:'一起迷路吃冰淇淋',
              isTop:false
            },
            {
              id:'4',
              url:'./static/detail/4.jpg',
              text:'，',
              iconId:'#icon-waiqinchucha',
              backText:'一起去公司玩',
              isTop:false
            },
            {
              id:'5',
              url:'./static/detail/5.jpg',
              text:'今',
              iconId:'#icon-ziyuan_',
              backText:'一起玩游戏',
              isTop:false
            },
            {
              id:'6',
              url:'./static/detail/6.jpg',
              text:'天',
              iconId:'#icon-qiche',
              backText:'一起去刷街',
              isTop:false
            },
            {
              id:'7',
              url:'./static/detail/7.jpg',
              text:'是',
              iconId:'#icon-shouji',
              backText:'一起留下暗号',
              isTop:false
            },
            {
              id:'8',
              url:'./static/detail/8.jpg',
              text:'我',
              iconId:'#icon-SwitchProyouxishoubing',
              backText:'一起蹦迪',
              isTop:false
            },
            {
              id:'9',
              url:'./static/detail/9.jpg',
              text:'们',
              iconId:'#icon-xihutese',
              backText:'一起见夜里的西湖',
              isTop:false
            },
            {
              id:'10',
              url:'./static/detail/10.jpg',
              text:'在',
              iconId:'#icon-guo',
              backText:'一起踩雷',
              isTop:false
            },
            {
              id:'11',
              url:'./static/detail/11.jpg',
              text:'一',
              iconId:'#icon-sanbu',
              backText:'一起散步',
              isTop:false
            },
            {
              id:'12',
              url:'./static/detail/12.jpg',
              text:'起',
              iconId:'#icon-suzhouyuanlin-',
              backText:'一起去苏州玩',
              isTop:false
            },
            {
              id:'13',
              url:'./static/detail/13.jpg',
              text:'的',
              iconId:'#icon-pingpangqiu',
              backText:'一起打乒乓球',
              isTop:false
            },
            {
              id:'14',
              url:'./static/detail/14.jpg',
              text:'第',
              iconId:'#icon-riliaoshousi',
              backText:'一起薅羊毛',
              isTop:false
            },
            {
              id:'15',
              url:'./static/detail/15.jpg',
              text:'',
              iconId:'#icon-shangke',
              backText:'一起上课',
              isTop:false
            },
            {
              id:'16',
              url:'./static/detail/16.jpg',
              text:'天',
              iconId:'#icon-yinliao',
              backText:'一起做饮料',
              isTop:false
            },
            {
              id:'17',
              url:'./static/detail/17.jpg',
              text:'啦',
              iconId:'#icon-pashan',
              backText:'一起探险',
              isTop:false
            },
            {
              id:'18',
              url:'./static/detail/18.jpg',
              text:'！',
              iconId:'#icon-aixin',
              backText:'一起买小花花',
              isTop:false
            },
          ],
        }
      },
      computed:{
          deltaDay:function () {
            let date1=new Date(this.ourday); //2010年12月bai31日0时0分0秒
            let date2=new Date(); //此时的日期
            let date3=date2.getTime()-date1.getTime(); //时间差的毫秒数
//计算出相差天数
            let days=Math.floor(date3/(24*3600*1000));
            return days;
          }
      },
      methods:{
        handle(index){
            this.content[index].isTop = !this.content[index].isTop;

        },
        heartClick(index){
          if(index===17){
            this.$router.push('/egg');
          }
        }
      }
    }
</script>

<style scoped lang="scss" >
  .pointer{
    cursor: pointer;
  }
  *{
    margin: 0;
    padding: 0;
  }
  html body{
    width: 100%;
    height: 100%;
  }
  ul li {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
  .container{
    width:100%;
    min-height:950px;
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
    height: 300px;
    /* margin-left: 500px; */
    position: relative;
    perspective: 800px;
    box-sizing: border-box;
    margin-top: 10px;
  }
  .Before{
    width: 300px;
    height: 300px;
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
      height: 200px;
      width:280px;
      margin:0 auto;
      margin-top: 10px;
      overflow: hidden;
    }

  }

  .After{
    width: 300px;
    height: 300px;
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
