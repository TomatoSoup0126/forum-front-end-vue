<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
     <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
       v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{restaurant.name}}
            </h5>
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">
              {{restaurant.description}}
            </p>
            <router-link
              class="btn btn-primary mr-2"
              :to="{name: 'restaurant', params: {id: restaurant.id }}"
            >Show</router-link>

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click.stop.prevent="deleteFavorite(restaurant.id)"

            >
              移除最愛
            </button>

            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import NavTabs from '../components/NavTabs.vue'

import restaurantsAPI from '../apis/restaurants'
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'


export default {
  components: {
    NavTabs,

  },

   data () {
    return {
      restaurants: []
    }
  },

  created () {
    this.fetchFeeds()
  },

  methods: {
    async  fetchFeeds () {
      try {
        const {data, statusText} = await restaurantsAPI.getTopRestaurants()
    // eslint-disable-next-line
  

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.restaurants = data.restaurants

      } catch (error) {
        Toast.fire({
            icon: 'error',
            title: '無法取得餐廳資料，請稍後再試'
        })
      }

    },

    async addFavorite (restaurantId) {
      try {
        const { statusText } = await usersAPI.addFavorite({restaurantId})

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.restaurants = this.restaurants.map(restaurant => {
          if (restaurant.id !== restaurantId) {
            return restaurant;
          }
          return {
            ...restaurant,
            FavoriteCount: restaurant.FavoriteCount + 1,
            isFavorited: true
          };
        });


      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法新增最愛，請稍後再試'
        })
      }

      
    },
    async deleteFavorite (restaurantId) {

      try {
         // eslint-disable-next-line

        const { statusText } = await usersAPI.deleteFavorite({restaurantId})

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.restaurants = this.restaurants.map(restaurant => {
          if (restaurant.id !== restaurantId) {
            return restaurant;
          }
          return {
            ...restaurant,
            FavoriteCount: restaurant.FavoriteCount - 1,
            isFavorited: false
          };
        });

        
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法移除最愛，請稍後再試'
        })
      }

    }

  }
}
</script>