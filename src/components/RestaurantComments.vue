<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div 
      v-for="comment in restaurantComments"
      :key="comment.id"
    >
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          type="button"
          class="btn btn-danger float-right"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
        >
          Delete
        </button>
        <h3>
          <router-link
            :to="{ name: 'users-profile', params: {id: comment.User.id }}"
            >
            {{ comment.User.name }}
          </router-link>
        </h3>
        <p>{{comment.text}}</p>
        <footer class="blockquote-footer">
           {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr>
    </div>
  </div>
</template>

<script>
// 載入撰寫好的 mixin
import { fromNowFilter } from './../utils/mixins'
import commentAPI from '../apis/comments'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'



export default {
  mixins: [fromNowFilter],
  
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },

  computed:{
    ...mapState(['currentUser', 'isAuthenticated'])
  },

  methods: {
   async handleDeleteButtonClick (commentId) {
     try {
       const { statusText } = await commentAPI.deleteComment({commentId}) 

       if (statusText !== 'OK') {
         throw new Error(statusText)
       }

      // eslint-disable-next-line
      console.log('handleDeleteButtonClick', commentId)

      // 觸發父層事件 - $emit( '事件名稱' , 傳遞的資料 )
      this.$emit('after-delete-comment', commentId)

     } catch (error) {

       Toast.fire({
         icon: 'error',
         title: '無法刪除評論，請稍後再試'
       })
     }


    }
  }
}


</script>