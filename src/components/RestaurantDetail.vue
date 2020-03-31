<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{restaurant.name}}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{restaurant.categoryName}}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block" 
        :src="restaurant.image"
        style="width: 250px;margin-bottom: 25px;"
      >
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{restaurant.openingHours}}
          </li>
          <li>
            <strong>Tel:</strong>
            {{restaurant.tel}}
          </li>
          <li>
            <strong>Address:</strong>
            {{restaurant.address}}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="{name: 'restaurant-dashboard', params: {id: restaurant.id }}"
      >
      Dashboard
      </router-link>

      <button
        v-if="restaurant.isFavorited"
        type="button"
        class="btn btn-danger btn-border mr-2"
        :disabled="favoriteIsProcessing"
        @click.stop.prevent="deleteFavorite(restaurant.id)"
      >
        移除最愛
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary btn-border mr-2"
        :disabled="favoriteIsProcessing"
        @click.stop.prevent="addFavorite(restaurant.id)"
      >
        加到最愛
      </button>
      <button
        v-if="restaurant.isLiked"
        type="button"
        class="btn btn-danger like mr-2"
        :disabled="likeIsProcessing"
        @click.stop.prevent="deleteLike(restaurant.id)"
      >
        Unlike
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary like mr-2"
        :disabled="likeIsProcessing"
        @click.stop.prevent="addLike(restaurant.id)"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import UserAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    },

    favoriteIsProcessing: {
      type: Boolean,
      default: false
    },

    likeIsProcessing:{
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      restaurant: this.initialRestaurant,
    }
  },

  watch: {
    initialRestaurant(restaurant) {
      this.restaurant = {
        ...this.restaurant,
        ...restaurant
      }
    }
  },

  methods: {
    async addFavorite (restaurantId) {
      try {
        this.favoriteIsProcessing = true

        const { statusText} = await UserAPI.addFavorite({restaurantId})

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }


        this.restaurant = {
          ...this.restaurant, 
          isFavorited: true
        }

        this.favoriteIsProcessing = false
      } catch (error) {
        
        Toast.fire({
          icon:'error',
          title:'無法加入最愛，請稍後再試'
        })

      }

    },
    async deleteFavorite (restaurantId) {

      try {
        this.favoriteIsProcessing = true

        const { statusText } = await UserAPI.deleteFavorite({restaurantId})

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.restaurant = {
          ...this.restaurant, 
          isFavorited: false
        }

        this.favoriteIsProcessing = false
        
      } catch (error) {
       
        
        Toast.fire({
          icon:'error',
          title:'無法移除最愛，請稍後再試'
        })

      }
      
    },
    async addLike (restaurantId) {

      try {
        this.likeIsProcessing = true

        const { statusText } = await UserAPI.addLike({restaurantId})

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        

        this.restaurant = {
          ...this.restaurant, 
          isLiked: true
        }

        this.likeIsProcessing = false
      } catch (error) {
               
        Toast.fire({
          icon:'error',
          title:'無法按讚，請稍後再試'
        })

      }
     
    },
    async deleteLike (restaurantId) {

      try {

        this.likeIsProcessing = true
        
        const { statusText } = await UserAPI.deleteLike({restaurantId})

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.restaurant = {
          ...this.restaurant, 
          isLiked: false
        }

        this.likeIsProcessing = false
      } catch (error) {
        
        Toast.fire({
          icon:'error',
          title:'無法收讚，請稍後再試'
        })
  
      }

    }
  }
}
</script>

//  addFavorite, deleteFavorite, addLike  deleteLike