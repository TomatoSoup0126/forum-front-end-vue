<template>
<div class="card">
  <div class="card-body d-flex">
    <div>
      <img src="https://i.imgur.com/fu6Vwqj.jpg" style="width: 200px" alt="userImage">
    </div>
    <div class="mx-4">
      <h5 class="card-title">{{profile.name}}</h5>
      <p>{{profile.email}}</p>
      <ul class="list-unstyled">
            <li>
              <strong>{{profile.Comments.length}}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{profile.FavoritedRestaurants.length}}</strong> 收藏的餐廳
            </li>
            <li>
              <strong>{{profile.Followings.length}}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{profile.Followers.length}}</strong> followers (追隨者)
            </li>
          </ul>
      <router-link
        v-if="User.id === profile.id"
        to="#"
        class="btn btn-primary"
        >
        Edit   
      </router-link>
      <div
        v-else
        >
        <button
          v-if="Followed"
          type="button"
          class="btn btn-danger like mr-2"
          @click.stop.prevent="deleteFollowing"
        >
          Unfollow
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary like mr-2"
          @click.stop.prevent="addFollowing"
        >
          Follow
        </button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  props:{
    initialProfile: {
      type: Object,
      required: true
    },
    
    currentUser: {
      type: Object,
      required: true
    },

    isFollowed: {
      type: Boolean,
      required: true
    }

  },

  data () {
    return {
      profile: this.initialProfile,
      User: this.currentUser,
      Followed:this.isFollowed
    }
  },

  methods:{
     addFollowing () {
      this.Followed =  true
    },

    deleteFollowing () {
      this.Followed = false
    }
  }
}
</script>