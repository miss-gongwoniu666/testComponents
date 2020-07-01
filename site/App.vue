<template>
  <div id="app">
    <img src="@/assets/logo.png">
    <h1>{{ msg }}</h1>
    <div class="pb48 underline">
      <h2>Button组件</h2>
      <p>1.基础样式：type</p>
      <test-button>default</test-button>
      <test-button type="success">success</test-button>
      <test-button type="error">error</test-button>
      <test-button type="warning">warning</test-button>
      <test-button type="info" style="min-width:120px">info</test-button>
      <p>2.按钮大小：size</p>
      <test-button>default</test-button>
      <test-button size="small">small</test-button>
      <test-button size="medium">medium</test-button>
      <test-button size="large">large</test-button>
      <p>3.按钮形状：shape</p>
      <test-button>default</test-button>
      <test-button shape="circle" type="info">circle</test-button>
      <test-button shape="rectangle" type="info">rectangle</test-button>
      <p>4.禁用按钮：isDisabled</p>
      <test-button isDisabled>default</test-button>
      <test-button type="success" isDisabled>success</test-button>
      <test-button type="error" isDisabled>error</test-button>
      <test-button type="warning" isDisabled>warning</test-button>
      <test-button type="info" isDisabled>info</test-button>
    </div>
   
  </div>
</template>

<script>
// import Button from '@/components/Button/Button'
// import Modal from '@/components/Modal/Modal'
export default {
  name: 'app',
  // components: {
  //   ywButton: Button,
  //   ywModal: Modal,
  // },
  data () {
    return {
      msg: 'Welcome to testcomponents',
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      size: '',
    }
  },
  methods: {
    showSize(item) {
      this.size = item
      this.show4 = true
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 200px;
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
.pt48, .py48 {
  padding-top: 48px;
}
.pb48, py48 {
  padding-bottom: 48px;
}
.underline {border-bottom: 1px solid #ccc;}
</style>
