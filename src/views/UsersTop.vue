<template>
  <div class="container py-5">
    <NavTabs />
    <div class="row text-center">
       <div 
        class="col-3"
        v-for="user in users"
        :key="user.id"
        >
        <a href="#">
          <router-link :to="{name: 'users-profile', params: {id: user.id}}">
            <img :src="user.image | emptyImage" width="140px" height="140px" />
          </router-link>
        </a>
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            @click.stop.prevent="removeFollowing(user.id)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addFollowing(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
        <UserCard
        
        
        :initial-user="user"
        />
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'


import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'
import { emptyImageFilter } from './../utils/mixins'


export default {
  mixins: [emptyImageFilter],
  components: {
    NavTabs
  },


  data () {
    return {
      users: []
    }
  },

  created () {
    this.fetchUsers()
  },

  methods: {
    async  fetchUsers () {
      try {
          const {data, statusText} = await usersAPI.getTopUser()

  
          if (statusText !== 'OK') {
              throw new Error(statusText)
          }


          this.users = data.users
      } catch (error) {
          Toast.fire({
              icon: 'error',
              title: '無法取得用戶資料，請稍後再試'
          })
      }
       
    },
    

    async addFollowing(userId) {
      try {
        const {data, statusText} = await usersAPI.addFollowing({
          userId
        })

        if (statusText !== 'OK' ||  data.status !== 'success') {
          throw new Error(statusText)
        }

        this.users = this.users.map(user => {
          if (user.id !== userId) {
            return user
          }

          return {
            ...user,
            FollowerCount: user.FollowerCount + 1,
            isFollowed: true
          }

        }).sort((a,b)=> b.FollowerCount - a.FollowerCount)


      } catch (error) {
                         // eslint-disable-next-line
        console.log(error)
        Toast.fire({
          icon:'error',
          title: '無法加入追蹤，請稍後再試'
        })


      }
    },

    async removeFollowing (userId) {
      try {
        const { data, statusText } = await usersAPI.deleteFollowing({
          userId
        })

        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }

        this.users = this.users.map(user => {
          if (user.id !== userId) {
            return user
          }

          return {
            ...user,
            FollowerCount: user.FollowerCount - 1,
            isFollowed: false
          }
        }).sort((a, b) => b.FollowerCount - a.FollowerCount)
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法取消追蹤，請稍後再試'
        })
      }
    }

  }
}
</script>