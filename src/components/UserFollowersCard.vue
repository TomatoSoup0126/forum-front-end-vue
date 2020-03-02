<template>
  <div class="card">
    <div class="card-header">
      <strong>{{followers.length}}</strong> Followers (追隨者)
    </div>
     <div class="d-flex flex-wrap py-4 px-4">
       <router-link
        v-for="follower in followers"
        :key="follower.id"
        :to="{name: 'user', params: { id: follower.id }}"
      >
        <img
          :src="follower.image"
          class="img px-2 py-2"
          style="width: 100px"
        >
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    followers: {
      type: Array,
      required: true
    }
  }
}
</script>