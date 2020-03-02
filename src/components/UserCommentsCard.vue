<template>
  <div class="card">
    <div class="card-header">
      已評論 <strong>{{Comments.length}}</strong> 間餐廳
    </div>
    <div class="d-flex flex-wrap py-4 px-4">
        <router-link
          v-for="comment in Comments"
          :key="comment.id"
          :to="{name: 'restaurant', params: { id: comment.Restaurant.id }}">
            <img :src="comment.Restaurant.image" alt="restaurantImg" class="img px-2 py-2" style="width: 100px">
        </router-link>  
        
    </div>
  </div>
</template>

<script>
export default {
  props:{
    Comments: {
      type: Array,
      required: true
    }
  }
}
</script>