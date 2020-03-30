<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="text">留下評論：</label>
      <textarea
        v-model="text"
        class="form-control"
        rows="3"
        name="text"
      />
    </div>
    <div class="text-right">
      <button
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
// import uuid from 'uuid/v4'
import commentAPI from '../apis/comments'
import { Toast } from '../utils/helpers'

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      text: ''
    }
  },

  methods: {
  async handleSubmit () {

    try {

       // TODO: 向 API 發送 POST 請求
      const { data, statusText} = await commentAPI.postComment({
        restaurantId: this.restaurantId,
        text: this.text
      })



      if (statusText !== 'OK') {
        throw new Error(statusText)
      }
      // eslint-disable-next-line
      console.log(data)

      // 伺服器新增 Comment 成功後...
      this.$emit('after-create-comment', {
        commentId: data.commentId, // 尚未串接 API 暫時使用隨機的 id
        restaurantId: data.RestaurantId,
        text: this.text
      })
      this.text = '' // 將表單內的資料清空
      
    } catch (error) {

      Toast.fire({
        icon:'error',
        title:'無法新增評論，請稍後再試'
      })

    }

     
    }
  }
}
</script>

