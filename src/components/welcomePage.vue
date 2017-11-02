<template>
  <div class="welcome">
    <h3>{{msg}}</h3>
    <div class="input-wrap">
      <input type="text" v-model="username">
      <span>{{error.username}}</span>
    </div>
    <div class="input-wrap">
      <input type="password" v-model="password">
      <span>{{error.password}}</span>
    </div>
    <div class="input-wrap">
      <input type="submit" @click="login"></input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcomPage',
  data () {
    return {
      msg: 'please Login first',
      username: '',
      password: '',
      error: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    checkInput (username, password) {
      if (!username) {
        this.error.username = 'Username required!'
        return false
      }
      if (!password) {
        this.error.password = 'password required'
        return false
      }
      return true
    },
    login () {
      const {username, password, $router} = this
      if (!this.checkInput(username, password)) {
        return
      }
      if (username === 'admin' && password === '123') {
        // $router.go({name: 'main'})
        console.log($router)
        console.log(this.username + ':' + this.password)
      } else {

      }
    }
  }
}
</script>
