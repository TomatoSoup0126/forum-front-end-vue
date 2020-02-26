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
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoritedUsers.length}}</span>
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


const dummyData = {
  "restaurants": [
    {
        "id": 58,
        "name": "555",
        "tel": "6445645",
        "address": "rthrth",
        "opening_hours": "09:04",
        "description": "fgrnryn",
        "image": "https://i.imgur.com/eYYfox7.jpg",
        "viewCounts": 5,
        "createdAt": "2019-11-09T05:16:27.256Z",
        "updatedAt": "2019-11-09T10:16:44.544Z",
        "CategoryId": 3,
        "FavoritedUsers": [
            {
                "id": 4,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$lkpL31VINZ.n/0VswEqsJOAilmXmO/UPrFuj715O74KxjTnPjPunC",
                "isAdmin": true,
                "image": "https://i.imgur.com/Ey363Yd.png",
                "createdAt": "2019-11-08T17:57:16.721Z",
                "updatedAt": "2019-11-08T18:16:30.721Z",
                "Favorite": {
                    "UserId": 4,
                    "RestaurantId": 58,
                    "createdAt": "2019-11-10T15:39:20.625Z",
                    "updatedAt": "2019-11-10T15:39:20.625Z"
                }
            },
            {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$axEII0959Sc9kdkYmoq2kumRdhxvW5feacxWSJAGBDxTmgf94JcTG",
                "isAdmin": false,
                "image": "https://i.imgur.com/Xr1TinX.png",
                "createdAt": "2019-11-08T17:52:01.328Z",
                "updatedAt": "2019-11-13T17:19:28.919Z",
                "Favorite": {
                    "UserId": 2,
                    "RestaurantId": 58,
                    "createdAt": "2019-11-10T15:40:00.165Z",
                    "updatedAt": "2019-11-10T15:40:00.165Z"
                }
            }
        ],
        "favoritedCount": 2,
        "isFavorited": true
    },
    {
        "id": 56,
        "name": "333",
        "tel": "32352345",
        "address": "tbrtbrtb",
        "opening_hours": "18:54",
        "description": "rythrth",
        "image": "https://i.imgur.com/6GUOqjy.jpg",
        "viewCounts": 8,
        "createdAt": "2019-11-08T18:14:58.162Z",
        "updatedAt": "2019-11-09T06:05:05.003Z",
        "CategoryId": 4,
        "FavoritedUsers": [
            {
                "id": 4,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$lkpL31VINZ.n/0VswEqsJOAilmXmO/UPrFuj715O74KxjTnPjPunC",
                "isAdmin": true,
                "image": "https://i.imgur.com/Ey363Yd.png",
                "createdAt": "2019-11-08T17:57:16.721Z",
                "updatedAt": "2019-11-08T18:16:30.721Z",
                "Favorite": {
                    "UserId": 4,
                    "RestaurantId": 56,
                    "createdAt": "2019-11-10T15:39:22.799Z",
                    "updatedAt": "2019-11-10T15:39:22.799Z"
                }
            },
            {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$axEII0959Sc9kdkYmoq2kumRdhxvW5feacxWSJAGBDxTmgf94JcTG",
                "isAdmin": false,
                "image": "https://i.imgur.com/Xr1TinX.png",
                "createdAt": "2019-11-08T17:52:01.328Z",
                "updatedAt": "2019-11-13T17:19:28.919Z",
                "Favorite": {
                    "UserId": 2,
                    "RestaurantId": 56,
                    "createdAt": "2019-11-10T15:39:47.197Z",
                    "updatedAt": "2019-11-10T15:39:47.197Z"
                }
            }
        ],
        "favoritedCount": 2,
        "isFavorited": true
    },
    {
        "id": 57,
        "name": "444",
        "tel": "467567",
        "address": "dsfsdfsdfg",
        "opening_hours": "10:46",
        "description": "wefrege3",
        "image": "https://i.imgur.com/236hhTJ.jpg",
        "viewCounts": 11,
        "createdAt": "2019-11-08T18:15:32.750Z",
        "updatedAt": "2019-11-08T18:17:16.838Z",
        "CategoryId": 6,
        "FavoritedUsers": [
            {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$axEII0959Sc9kdkYmoq2kumRdhxvW5feacxWSJAGBDxTmgf94JcTG",
                "isAdmin": false,
                "image": "https://i.imgur.com/Xr1TinX.png",
                "createdAt": "2019-11-08T17:52:01.328Z",
                "updatedAt": "2019-11-13T17:19:28.919Z",
                "Favorite": {
                    "UserId": 2,
                    "RestaurantId": 57,
                    "createdAt": "2019-11-10T15:39:57.892Z",
                    "updatedAt": "2019-11-10T15:39:57.892Z"
                }
            },
            {
                "id": 4,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$lkpL31VINZ.n/0VswEqsJOAilmXmO/UPrFuj715O74KxjTnPjPunC",
                "isAdmin": true,
                "image": "https://i.imgur.com/Ey363Yd.png",
                "createdAt": "2019-11-08T17:57:16.721Z",
                "updatedAt": "2019-11-08T18:16:30.721Z",
                "Favorite": {
                    "UserId": 4,
                    "RestaurantId": 57,
                    "createdAt": "2019-11-11T13:51:25.215Z",
                    "updatedAt": "2019-11-11T13:51:25.215Z"
                }
            }
        ],
        "favoritedCount": 2,
        "isFavorited": true
    },
    {
        "id": 10,
        "name": "Caesar McClure",
        "tel": "261-935-4593 x981",
        "address": "95048 Swaniawski Circle",
        "opening_hours": "08:00",
        "description": "Voluptas reprehenderit temporibus sed et fuga.\nNatus et ullam libero consequatur neque.\nAccusamus nihil molestiae.",
        "image": "http://lorempixel.com/640/480",
        "viewCounts": 12,
        "createdAt": "2019-11-08T17:57:17.215Z",
        "updatedAt": "2019-11-08T17:57:17.215Z",
        "CategoryId": 4,
        "FavoritedUsers": [
            {
                "id": 4,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$lkpL31VINZ.n/0VswEqsJOAilmXmO/UPrFuj715O74KxjTnPjPunC",
                "isAdmin": true,
                "image": "https://i.imgur.com/Ey363Yd.png",
                "createdAt": "2019-11-08T17:57:16.721Z",
                "updatedAt": "2019-11-08T18:16:30.721Z",
                "Favorite": {
                    "UserId": 4,
                    "RestaurantId": 10,
                    "createdAt": "2019-11-09T17:16:29.278Z",
                    "updatedAt": "2019-11-09T17:16:29.278Z"
                }
            }
        ],
        "favoritedCount": 1,
        "isFavorited": true
    },
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
        "FavoritedUsers": [
            {
                "id": 4,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$lkpL31VINZ.n/0VswEqsJOAilmXmO/UPrFuj715O74KxjTnPjPunC",
                "isAdmin": true,
                "image": "https://i.imgur.com/Ey363Yd.png",
                "createdAt": "2019-11-08T17:57:16.721Z",
                "updatedAt": "2019-11-08T18:16:30.721Z",
                "Favorite": {
                    "UserId": 4,
                    "RestaurantId": 7,
                    "createdAt": "2019-11-09T17:16:34.781Z",
                    "updatedAt": "2019-11-09T17:16:34.781Z"
                }
            }
        ],
        "favoritedCount": 1,
        "isFavorited": true
    },
    {
        "id": 6,
        "name": "Sylvan Goldner",
        "tel": "872.204.4162 x610",
        "address": "154 Otha Springs",
        "opening_hours": "08:00",
        "description": "Nostrum quia quam necessitatibus deserunt natus.",
        "image": "http://lorempixel.com/640/480",
        "viewCounts": 22,
        "createdAt": "2019-11-08T17:57:17.214Z",
        "updatedAt": "2019-11-09T06:04:48.444Z",
        "CategoryId": 3,
        "FavoritedUsers": [
            {
                "id": 4,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$lkpL31VINZ.n/0VswEqsJOAilmXmO/UPrFuj715O74KxjTnPjPunC",
                "isAdmin": true,
                "image": "https://i.imgur.com/Ey363Yd.png",
                "createdAt": "2019-11-08T17:57:16.721Z",
                "updatedAt": "2019-11-08T18:16:30.721Z",
                "Favorite": {
                    "UserId": 4,
                    "RestaurantId": 6,
                    "createdAt": "2019-11-10T15:39:18.593Z",
                    "updatedAt": "2019-11-10T15:39:18.593Z"
                }
            }
        ],
        "favoritedCount": 1,
        "isFavorited": true
    },
    {
        "id": 20,
        "name": "Broderick Satterfield",
        "tel": "(786) 135-3380",
        "address": "11469 Chelsea Path",
        "opening_hours": "08:00",
        "description": "Nulla dolore nesciunt ea. Ipsa quos quia omnis nihil quaerat vitae ab amet modi. Dolorem quas itaque aut ea rerum neque. Rem voluptatem rerum. Delectus repellendus veniam doloremque dolores et repellat unde quia.",
        "image": "http://lorempixel.com/640/480",
        "viewCounts": 12,
        "createdAt": "2019-11-08T17:57:17.220Z",
        "updatedAt": "2019-11-08T17:57:17.220Z",
        "CategoryId": 1,
        "FavoritedUsers": [],
        "favoritedCount": 0,
        "isFavorited": false
    },
    {
        "id": 25,
        "name": "Norwood Pollich",
        "tel": "(807) 662-3755 x145",
        "address": "87321 Koelpin Valley",
        "opening_hours": "08:00",
        "description": "Reiciendis amet vero maxime non aliquam. Voluptate consequuntur velit id est assumenda expedita. Sunt quasi et et animi odio dolore.",
        "image": "http://lorempixel.com/640/480",
        "viewCounts": 11,
        "createdAt": "2019-11-08T17:57:17.222Z",
        "updatedAt": "2019-11-08T17:57:17.222Z",
        "CategoryId": 5,
        "FavoritedUsers": [],
        "favoritedCount": 0,
        "isFavorited": false
    },
    {
        "id": 26,
        "name": "Scotty Wunsch",
        "tel": "(508) 938-1618 x3589",
        "address": "9708 Kristin Alley",
        "opening_hours": "08:00",
        "description": "Eum dicta blanditiis aperiam.\nNobis earum voluptatem ut eligendi id sequi ex.\nNon odio vel possimus consequatur.",
        "image": "http://lorempixel.com/640/480",
        "viewCounts": 16,
        "createdAt": "2019-11-08T17:57:17.222Z",
        "updatedAt": "2019-11-08T17:57:17.222Z",
        "CategoryId": 3,
        "FavoritedUsers": [],
        "favoritedCount": 0,
        "isFavorited": false
    },
    {
        "id": 27,
        "name": "Armand Pollich",
        "tel": "1-122-913-8135 x542",
        "address": "40980 Helen Isle",
        "opening_hours": "08:00",
        "description": "Et illo voluptas qui reiciendis voluptatibus.\nAssumenda animi voluptas vitae.\nQuidem possimus quis optio odit.\nAt ut repellendus dolores eos deserunt molestiae voluptatem facilis.\nSed sed id eveniet qui atque adipisci vero voluptatibus.",
        "image": "http://lorempixel.com/640/480",
        "viewCounts": 19,
        "createdAt": "2019-11-08T17:57:17.223Z",
        "updatedAt": "2019-11-08T17:57:17.223Z",
        "CategoryId": 4,
        "FavoritedUsers": [],
        "favoritedCount": 0,
        "isFavorited": false
    }
  ]
}

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
    fetchFeeds () {
      this.restaurants = dummyData.restaurants
    },

    addFavorite (restaurantId) {
      this.restaurants = this.restaurants.map(restaurant => {
        if (restaurant.id !== restaurantId) {
          return restaurant;
        }
        return {
          ...restaurant,
          isFavorited: true
        };
      });
    },
    deleteFavorite (restaurantId) {
      this.restaurants = this.restaurants.map(restaurant => {
        if (restaurant.id !== restaurantId) {
          return restaurant;
        }
        return {
          ...restaurant,
          isFavorited: false
        };
      });
    },

  }
}
</script>