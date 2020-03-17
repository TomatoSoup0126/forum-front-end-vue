<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign Up
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          required
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          required
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          id="password-check"
          v-model="passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          required
        >
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >{{isProcessing ? 'Processing' : 'Submit'}}</button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin">
            Sign In
          </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>
</template>

<script>
import { Toast } from '../utils/helpers'
import authAPI from '../apis/authorization'

export default {
  name: 'SignUp',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      passwordCheck: '',
      isProcessing: false
    }
  },
  methods: {
    // eslint-disable-next-line
  async handleSubmit (e) {

    try {

      if (!this.name) {

        Toast.fire({
          icon: 'warning',
          title: '請填寫使用者名稱'
        })
        return

      } else if (!this.email) {

        Toast.fire({
          icon: 'warning',
          title: '請填寫使用者信箱'
        })
        return

      } else if (!this.password) {
        
        Toast.fire({
          icon: 'warning',
          title: '請填寫使用者密碼'
        })
        return

      } else if (!this.passwordCheck) {
        
        Toast.fire({
          icon: 'warning',
          title: '請再次填寫使用者密碼'
        })
        return

      } else if (this.password !== this.passwordCheck) {

        Toast.fire({
          icon: 'warning',
          title: '兩次密碼不一致'
        })
        return

      }
  

      this.isProcessing = true

      const { statusText } = await authAPI.signUp({
        name: this.name,
        email: this.email,
        password: this.password,
        passwordCheck: this.passwordCheck
      })
        
      if (statusText !== 'OK') {
      
        throw new Error(statusText)
      }

      Toast.fire({
        icon: "success",
        title: '註冊成功！'
      });
      
      this.$router.push("/signin");

      
    } catch (error) {

      this.isProcessing = false
      
      Toast.fire({
          icon: 'warning',
          title: '註冊失敗，請再試一次'
      })

    }


    }
  }
}
</script>