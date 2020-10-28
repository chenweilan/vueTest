<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link to="/navigationMenu">导航菜单</router-link>
      </li>
      <li>
        <router-link to="/editTxt">编辑文本栏</router-link>
      </li>
      <li>
        <router-link to="/orderList">订单列表</router-link>
      </li>
      <li>
        <router-link to="/searchPage">搜索页面</router-link>
      </li>
      <li>
        <router-link to="/switchLayout">切换不同布局</router-link>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <br>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
