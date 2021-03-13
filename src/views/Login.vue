<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img src="../assets/icon.png" alt="" class="mx-auto d-block">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <button class="btn btn-block btn-success" type="submit">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import users from '../users'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    onSubmit() {
      const user = users.filter(item => item.email === this.email);
      if(user.length !== 0) {
        console.log(user[0])
        if(user[0].password === this.password) {
          alert("成功")
          this.$router.push({name: "Menu"})
        } else {
          alert("密码错误")
        }
      } else {
        alert("用户名不存在")
      }
    }
  }
}
</script>

<style>

</style>