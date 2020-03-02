<template>
  <div class="card">
    <div class="card-header">
      已收藏 <strong>{{favoritedRestaurants.length}}</strong> 間餐廳
    </div>
    <div class="d-flex flex-wrap py-4 px-4">
      <router-link
        v-for="favoritedRestaurant in favoritedRestaurants"
        :key="favoritedRestaurant.id"
        :to="{name: 'user', params: { id: favoritedRestaurant.id }}"
        >
        <img
          :src="favoritedRestaurant.image"
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
    favoritedRestaurants: {
      type: Array,
      required: true
    }
  }
}
</script>