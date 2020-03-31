<template>

<div class="container py-5">
  <div>
    <div class="col-md-12 mb-3">
        <h1>{{restaurant.name}}</h1>
        <p class="badge badge-secondary mt-1 mb-3">
          {{restaurant.categoryName}}
        </p>
    </div>

    <hr>

    <div class="col-lg-4">
      <ul>
        <li>評論數：{{restaurantComments.length}}</li>
        <li>瀏覽次數：{{restaurant.viewCounts}}</li>
      </ul>
    </div>

    <router-link
      :to="{ name: 'restaurant', params: { id: restaurant.id } }"
    >回上一頁
    </router-link>
  </div>
</div>

</template>

<script>

import restaurantAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'



export default {
  
    data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false,
        viewCounts:-1
      },
      restaurantComments: [],

    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },

  beforeRouteUpdate(to, from, next) {
    const { id: restaurantId } = to.params
    this.fetchRestaurant(restaurantId)
    next()
  },

  methods: {
    async fetchRestaurant (restaurantId) {

      try {

        const { data, statusText } = await restaurantAPI.getRestaurant({restaurantId})

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }


        // // eslint-disable-next-line
        // console.log('fetchRestaurant id: ', restaurantId)
        this.restaurant = {
          id: data.restaurant.id,
          name: data.restaurant.name,
          categoryName: data.restaurant.Category.name,
          image: data.restaurant.image,
          openingHours: data.restaurant.opening_hours,
          tel: data.restaurant.tel,
          address: data.restaurant.address,
          description: data.restaurant.description,
          isFavorited: data.isFavorited,
          isLiked: data.isLiked,
          viewCounts: data.restaurant.viewCounts
        }

        this.restaurantComments = data.restaurant.Comments
      } catch (error) {
        
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資訊，請稍後再試'
        })

      }
     
    }
  }

}
</script>