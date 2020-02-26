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
      :to="{ name: 'restaurant', params: { id: 1 } }"
    >回上一頁
    </router-link>
  </div>
</div>

</template>

<script>

const dummyData = {
    "restaurant": {
      "id": 1,
      "name": "123",
      "tel": "02-8888-0000",
      "address": "01313 ketlch deive",
      "opening_hours": "08:00",
      "description": "dsfsafdsadfasasdfasdf",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.148585495422335",
      "viewCounts": 19,
      "createdAt": "2019-11-20T06:25:42.921Z",
      "updatedAt": "2020-02-25T14:21:20.382Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2019-06-22T09:00:43.000Z",
        "updatedAt": "2019-06-22T09:00:43.000Z"
      },
      "FavoritedUsers": [],
      "LikedUsers": [],
      "Comments": [
          {
              "id": 1,
              "text": "Voluptas omnis laudantium et non ut quia unde.",
              "UserId": 2,
              "RestaurantId": 1,
              "createdAt": "2019-11-20T06:25:42.942Z",
              "updatedAt": "2019-11-20T06:25:42.942Z",
              "User": {
                  "id": 2,
                  "name": "user1",
                  "email": "user1@example.com",
                  "password": "$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy",
                  "isAdmin": false,
                  "image": null,
                  "createdAt": "2019-11-20T06:25:42.685Z",
                  "updatedAt": "2019-11-21T09:55:30.970Z"
              }
          },
          {
              "id": 51,
              "text": "Distinctio laborum explicabo quasi.",
              "UserId": 2,
              "RestaurantId": 1,
              "createdAt": "2019-11-20T06:25:42.944Z",
              "updatedAt": "2019-11-20T06:25:42.944Z",
              "User": {
                  "id": 2,
                  "name": "user1",
                  "email": "user1@example.com",
                  "password": "$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy",
                  "isAdmin": false,
                  "image": null,
                  "createdAt": "2019-11-20T06:25:42.685Z",
                  "updatedAt": "2019-11-21T09:55:30.970Z"
              }
          },
          {
              "id": 101,
              "text": "Nihil iure quas.",
              "UserId": 2,
              "RestaurantId": 1,
              "createdAt": "2019-11-20T06:25:42.946Z",
              "updatedAt": "2019-11-20T06:25:42.946Z",
              "User": {
                  "id": 2,
                  "name": "user1",
                  "email": "user1@example.com",
                  "password": "$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy",
                  "isAdmin": false,
                  "image": null,
                  "createdAt": "2019-11-20T06:25:42.685Z",
                  "updatedAt": "2019-11-21T09:55:30.970Z"
              }
          }
      ]
  }


}

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

  methods: {
    fetchRestaurant (restaurantId) {
      // eslint-disable-next-line
      console.log('fetchRestaurant id: ', restaurantId)
      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
        viewCounts: dummyData.restaurant.viewCounts
      }

      this.restaurantComments = dummyData.restaurant.Comments
    }
  }

}
</script>