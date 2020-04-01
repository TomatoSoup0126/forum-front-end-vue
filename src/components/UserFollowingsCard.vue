<template>
  <div class="card">
    <div class="card-header">
      <strong>{{user.Followings.length}}</strong> Followings (追蹤者)
    </div>
    <div class="d-flex flex-wrap py-4 px-4">
       <router-link
        v-for="following in user.Followings"
        :key="following.id"
        :to="{name: 'user', params: { id: following.id }}"
      >
        <img
          :src="following.image"
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
    user: {
      type: Object,
      required: true
    }
  }
}
</script>