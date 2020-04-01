<template>
  <div class="container py-5">
    <UserProfileCard 
      :user="user"
      :isCurrentUser="currentUser.id === user.id"
      :initialIsFollowed="isFollowed"
      />
<br>
<div class="row">
  <div class="col-4">
    <UserFollowingCard 
      :user="user"
      />
  </div>
  <div class="col-8">
    <UserCommentsCard 
      :user="user"
      />
  </div>
</div>
<br>
<div class="row">
  <div class="col-4">
    <UserFollowersCard 
      :user="user"
      />
  </div>
  <div class="col-8">
    <UserFavoritedRestaurantsCard 
      :user="user"
      />
  </div>
</div>
      </div>
</template>



<script>
import UserProfileCard from '../components/UserProfileCard'
import UserFollowingCard from '../components/UserFollowingsCard'
import UserFollowersCard from '../components/UserFollowersCard'
import UserCommentsCard from '../components/UserCommentsCard'
import UserFavoritedRestaurantsCard from '../components/UserFavoritedRestaurantsCard'

import userAPI from '../apis/users'
import { Toast } from '../utils/helpers'

import { mapState } from 'vuex'




export default {

  components:{
    UserProfileCard,
    UserFollowingCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard
  },

  data () {
    return {
      user: {
        id: -1,
        name: '',
        email: '',
        password: '',
        isAdmin: '',
        image: '',
        createdAt: '',
        updatedAt: '',
        Comments:[],
        FavoritedRestaurants:[],
        Followers:[],
        Followings:[]
      },
      isFollowed: false,

    }
  },
  
  created () {
    const { id: userId } = this.$route.params
    this.fetchUser(userId)
  },

  beforeRouteUpdate(to,from,next){

    const { id: userId } = to.params
    this.fetchUser(userId)
    next()
  },

  computed:{
    ...mapState(['currentUser'])
  },

  methods: {
    async fetchUser(userId) {

      try {
        const { data, statusText } = await userAPI.get({userId})

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        const { profile, isFollowed } = data

        this.user = {

          ...this.user,
          
          id: profile.id,
          name: profile.name,
          email: profile.email,
          password: profile.password,
          isAdmin: profile.isAdmin,
          image: profile.image,
          createdAt: profile.createdAt,
          updatedAt: profile.updatedAt,
          Comments:profile.Comments,
          FavoritedRestaurants:profile.FavoritedRestaurants,
          Followers:profile.Followers,
          Followings:profile.Followings

        }

        this.isFollowed = isFollowed

      } catch (error) {

        Toast.fire({
          icon:'error',
          title:'無法取得用戶資訊，請稍後再試'
        })
        
      }
      
    }
  }
}
</script>