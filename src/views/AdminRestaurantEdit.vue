<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      :is-processing="isProcessing"
      @after-submit="handleAfterSubmit" 
      />
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'

import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'


export default {
  components: {
    AdminRestaurantForm
  },

  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      },
      isProcessing: false
    }
  },

  created () {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },

  beforeRouteUpdate (to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  },

  methods: {
    async handleAfterSubmit (formData) {
      try {
          this.isProcessing = true
          const { data, statusText } = await adminAPI.restaurant.update({
            restaurantId: this.restaurant.id,
            formData
          })

          if (statusText !== 'OK' || data.status !== 'success') {
            throw new Error(statusText)
          }

          this.$router.push({ name: 'admin-restaurants' })
      } catch (error) {

          
        // eslint-disable-next-line
          console.log(error)
          this.isProcessing = false
          Toast.fire({
            icon: 'error',
            title: '無法更新餐廳，請稍後再試'
          })

        
      }
    },

    async fetchRestaurant (restaurantId) {
      try {
        const { statusText, data } = await adminAPI.restaurant.getDetail({restaurantId})
        
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        const { restaurant } = data
        // eslint-disable-next-line
        console.log(data)
        this.restaurant = {
          ...this.restaurant,
          id: restaurant.id,
          name: restaurant.name,
          categoryId: restaurant.CategoryId,
          tel: restaurant.tel,
          address: restaurant.address,
          description: restaurant.description,
          image: restaurant.image,
          openingHours: restaurant.opening_hours
        }
      } catch (error) {

        Toast.fire({
          icon:'error',
          title: '無法取得資料，請稍後再試'
        })

      }

      
    }
  }
}
</script>