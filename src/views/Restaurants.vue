<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard 
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantPagination 
    v-if="totalPage > 1"
    :category-id="categoryId"
    :current-page="currentPage"
    :total-page="totalPage"
    />
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import RestaurantCard from '../components/RestaurantCard.vue'
import RestaurantsNavPills from '../components/RestaurantsNavPills.vue'
import RestaurantPagination from '../components/RestaurantsPagination.vue'

const dummyData = {
  restaurants: [
      {
          "id": 7,
          "name": "Prudence Ryan",
          "tel": "(171) 693-2090",
          "address": "55314 Jadon Islands",
          "opening_hours": "08:00",
          "description": "facere impedit aspernatur",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 10,
          "createdAt": "2019-11-08T17:57:17.214Z",
          "updatedAt": "2019-11-08T17:57:17.214Z",
          "CategoryId": 4,
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          },
          "isFavorited": true,
          "isLiked": true
      },
      {
          "id": 10,
          "name": "Caesar McClure",
          "tel": "261-935-4593 x981",
          "address": "95048 Swaniawski Circle",
          "opening_hours": "08:00",
          "description": "Voluptas reprehenderit temporibus sed et fuga.\nNat",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 12,
          "createdAt": "2019-11-08T17:57:17.215Z",
          "updatedAt": "2019-11-08T17:57:17.215Z",
          "CategoryId": 4,
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          },
          "isFavorited": true,
          "isLiked": true
      },
      {
          "id": 11,
          "name": "Vita Trantow",
          "tel": "410.576.5657",
          "address": "4079 Wehner Prairie",
          "opening_hours": "08:00",
          "description": "Dignissimos doloribus aut deleniti voluptatibus.\nE",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 12,
          "createdAt": "2019-11-08T17:57:17.215Z",
          "updatedAt": "2019-11-08T17:57:17.215Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "日本料理",
              "createdAt": "2019-11-08T17:52:00.469Z",
              "updatedAt": "2019-11-08T17:52:00.469Z"
          },
          "isFavorited": false,
          "isLiked": true
      },
      {
          "id": 12,
          "name": "Norma Batz",
          "tel": "1-283-441-2375",
          "address": "8408 Vidal Skyway",
          "opening_hours": "08:00",
          "description": "at dolorum tempora",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 11,
          "createdAt": "2019-11-08T17:57:17.216Z",
          "updatedAt": "2019-11-08T17:57:17.216Z",
          "CategoryId": 3,
          "Category": {
              "id": 3,
              "name": "義大利料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          },
          "isFavorited": false,
          "isLiked": true
      },
      {
          "id": 13,
          "name": "Jarrett Prosacco",
          "tel": "761.580.7983 x221",
          "address": "7430 Veum Wall",
          "opening_hours": "08:00",
          "description": "Velit tempora qui dolorem ipsum blanditiis incidun",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 1,
          "createdAt": "2019-11-08T17:57:17.216Z",
          "updatedAt": "2019-11-08T17:57:17.216Z",
          "CategoryId": 3,
          "Category": {
              "id": 3,
              "name": "義大利料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 14,
          "name": "Joyce Gulgowski",
          "tel": "(174) 364-7551 x37784",
          "address": "123 Krystina Overpass",
          "opening_hours": "08:00",
          "description": "Qui et iusto.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 9,
          "createdAt": "2019-11-08T17:57:17.216Z",
          "updatedAt": "2019-11-08T17:57:17.216Z",
          "CategoryId": 4,
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 15,
          "name": "Effie Bernier",
          "tel": "603.911.6561 x177",
          "address": "5130 Jerry Crest",
          "opening_hours": "08:00",
          "description": "Aut sed nobis ut aspernatur reiciendis illum quaer",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 3,
          "createdAt": "2019-11-08T17:57:17.216Z",
          "updatedAt": "2019-11-08T17:57:17.216Z",
          "CategoryId": 5,
          "Category": {
              "id": 5,
              "name": "素食料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 16,
          "name": "Jana Schuster",
          "tel": "283.513.9756",
          "address": "21826 Murphy Dale",
          "opening_hours": "08:00",
          "description": "Ex provident nobis corrupti et non incidunt.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 13,
          "createdAt": "2019-11-08T17:57:17.217Z",
          "updatedAt": "2019-11-08T17:57:17.217Z",
          "CategoryId": 3,
          "Category": {
              "id": 3,
              "name": "義大利料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 17,
          "name": "Terrell Torp",
          "tel": "002-232-6180 x4586",
          "address": "2832 Jared Crossroad",
          "opening_hours": "08:00",
          "description": "Quis et deserunt ratione autem odit blanditiis quo",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 3,
          "createdAt": "2019-11-08T17:57:17.219Z",
          "updatedAt": "2019-11-08T17:57:17.219Z",
          "CategoryId": 3,
          "Category": {
              "id": 3,
              "name": "義大利料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 18,
          "name": "Krystel Skiles",
          "tel": "1-553-882-3567 x70295",
          "address": "989 Blick Viaduct",
          "opening_hours": "08:00",
          "description": "fugit",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 19,
          "createdAt": "2019-11-08T17:57:17.219Z",
          "updatedAt": "2019-11-08T17:57:17.219Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "日本料理",
              "createdAt": "2019-11-08T17:52:00.469Z",
              "updatedAt": "2019-11-08T17:52:00.469Z"
          },
          "isFavorited": false,
          "isLiked": false
      }
  ],
  categories: [
      {
          "id": 1,
          "name": "中式料理",
          "createdAt": "2019-11-08T17:52:00.469Z",
          "updatedAt": "2019-11-08T17:52:00.469Z"
      },
      {
          "id": 2,
          "name": "日本料理",
          "createdAt": "2019-11-08T17:52:00.469Z",
          "updatedAt": "2019-11-08T17:52:00.469Z"
      },
      {
          "id": 3,
          "name": "義大利料理",
          "createdAt": "2019-11-08T17:52:00.470Z",
          "updatedAt": "2019-11-08T17:52:00.470Z"
      },
      {
          "id": 4,
          "name": "墨西哥料理",
          "createdAt": "2019-11-08T17:52:00.470Z",
          "updatedAt": "2019-11-08T17:52:00.470Z"
      },
      {
          "id": 5,
          "name": "素食料理",
          "createdAt": "2019-11-08T17:52:00.470Z",
          "updatedAt": "2019-11-08T17:52:00.470Z"
      },
      {
          "id": 6,
          "name": "美式料理",
          "createdAt": "2019-11-08T17:52:00.470Z",
          "updatedAt": "2019-11-08T17:52:00.470Z"
      },
      {
          "id": 7,
          "name": "複合式料理",
          "createdAt": "2019-11-08T17:52:00.470Z",
          "updatedAt": "2019-11-08T17:52:00.470Z"
      }
  ],
   page: 1,
  totalPage: [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  prev: 1,
  next: 2,
  categoryId: ''
}

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantPagination
  },
  data () {
    return {
      categories: [],
      categoryId: -1,
      currentPage: 1,
      restaurants: [],
      totalPage: -1
    }
  },
  created(){
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.categories = dummyData.categories
      this.categoryId = dummyData.categoryId
      this.currentPage = dummyData.page
      this.restaurants = dummyData.restaurants
      this.totalPage = dummyData.totalPage.length
    }
  }
}
</script>