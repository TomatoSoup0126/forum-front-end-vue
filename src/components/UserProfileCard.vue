<template>
<div class="card">
  <div class="card-body d-flex">
    <div>
      <img :src="user.image" style="width: 200px" alt="userImage">
    </div>
    <div class="mx-4">
      <h5 class="card-title">{{user.name}}</h5>
      <p>{{user.email}}</p>
      <ul class="list-unstyled">
            <li>
              <strong>{{user.Comments.length}}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{user.FavoritedRestaurants.length}}</strong> 收藏的餐廳
            </li>
            <li>
              <strong>{{user.Followings.length}}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{user.Followers.length}}</strong> followers (追隨者)
            </li>
          </ul>
      <router-link
        v-if="isCurrentUser"
        :to="{name: 'users-edit', params: {id: user.id}}"
        class="btn btn-primary"
        >
        Edit   
      </router-link>
      <div
        v-else
        >
        <button
          v-if="isFollowed"
          type="button"
          class="btn btn-danger like mr-2"
          @click.stop.prevent="deleteFollowing(user.id)"
        >
          Unfollow
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary like mr-2"
          @click.stop.prevent="addFollowing(user.id)"
        >
          Follow
        </button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import userAPI from '../apis/users'
import { Toast } from '../utils/helpers'


export default {
  props:{
    user: {
      type: Object,
      required: true
    },
    
    isCurrentUser: {
      type: Boolean,
      required: true
    },

    initialIsFollowed: {
      type: Boolean,
      required: true
    }

  },

  data () {
    return {
      isFollowed:this.initialIsFollowed
    }
  },

  watch: {
    initialIsFollowed(isFollowed) {
      this.isFollowed = isFollowed;
    }
  },

  methods:{
    async addFollowing (userId) {
      try {
        
        const { statusText } = await userAPI.addFollowing({userId})

        // eslint-disable-next-line
        console.log(statusText)

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }


        this.isFollowed = true
      } catch (error) {
        
        Toast.fire({
          icon:'error',
          title:'無法加入追蹤，請稍後再試'
        })
      }

    },

    async deleteFollowing (userId) {
      try {
        const { statusText } = await userAPI.deleteFollowing({userId})


        // eslint-disable-next-line
        console.log(statusText)

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }


        this.isFollowed = false
      } catch (error) {
        Toast.fire({
          icon:'error',
          title:'無法移除追蹤，請稍後再試'
        })
      }

    }
  }
}
</script>