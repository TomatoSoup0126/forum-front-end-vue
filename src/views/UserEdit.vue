<template>
  <div class="container py-5">
    <form
      @submit.stop.prevent="handleSubmit"
      >
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
        v-if="user.image"
        :src="user.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
        >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>

// eslint-disable-next-line
const dummyUser = {
  user:{
      "id": 1,
        "name": "路特",
        "email": "root@example.com",
        "password": "$2a$10$jXA5iarQmwLM0fD.pF46TexIJ9PFvshOLdG/dWVZJnYibqyeK.NHO",
        "isAdmin": true,
        "image": "https://i.imgur.com/fu6Vwqj.jpg",
        "createdAt": "2019-11-08T17:52:00.809Z",
        "updatedAt": "2019-11-09T10:10:38.804Z",
        "Comments": [
            {
                "id": 11,
                "text": "！",
                "UserId": 1,
                "RestaurantId": 54,
                "createdAt": "2019-11-09T05:08:00.393Z",
                "updatedAt": "2019-11-09T05:08:00.393Z",
                "Restaurant": {
                    "id": 54,
                    "name": "111",
                    "tel": "123124245",
                    "address": "ewqrwerwer",
                    "opening_hours": "12:56",
                    "description": "sdfsdf",
                    "image": "https://i.imgur.com/fKYsMEQ.jpg",
                    "viewCounts": 19,
                    "createdAt": "2019-11-08T18:13:02.861Z",
                    "updatedAt": "2019-11-09T10:23:31.549Z",
                    "CategoryId": 1
                }
            },
            {
                "id": 12,
                "text": "！！",
                "UserId": 1,
                "RestaurantId": 55,
                "createdAt": "2019-11-09T05:08:34.878Z",
                "updatedAt": "2019-11-09T05:08:34.878Z",
                "Restaurant": {
                    "id": 55,
                    "name": "222",
                    "tel": "234234",
                    "address": "rewfererb",
                    "opening_hours": "03:04",
                    "description": "fdbetb",
                    "image": "https://i.imgur.com/D9B2wFm.jpg",
                    "viewCounts": 6,
                    "createdAt": "2019-11-08T18:14:22.300Z",
                    "updatedAt": "2019-11-09T05:08:35.112Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 13,
                "text": "@@@",
                "UserId": 1,
                "RestaurantId": 58,
                "createdAt": "2019-11-09T05:16:46.467Z",
                "updatedAt": "2019-11-09T05:16:46.467Z",
                "Restaurant": {
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
                    "CategoryId": 3
                }
            },
            {
                "id": 17,
                "text": "!!",
                "UserId": 1,
                "RestaurantId": 56,
                "createdAt": "2019-11-09T06:05:04.459Z",
                "updatedAt": "2019-11-09T06:05:04.459Z",
                "Restaurant": {
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
                    "CategoryId": 4
                }
            },
            {
                "id": 18,
                "text": "安安安安",
                "UserId": 1,
                "RestaurantId": 58,
                "createdAt": "2019-11-09T10:16:44.192Z",
                "updatedAt": "2019-11-09T10:16:44.192Z",
                "Restaurant": {
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
                    "CategoryId": 3
                }
            }
        ],
        "FavoritedRestaurants": [],
        "Followings": [],
        "Followers": [
            {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$axEII0959Sc9kdkYmoq2kumRdhxvW5feacxWSJAGBDxTmgf94JcTG",
                "isAdmin": false,
                "image": "https://i.imgur.com/Xr1TinX.png",
                "createdAt": "2019-11-08T17:52:01.328Z",
                "updatedAt": "2019-11-13T17:19:28.919Z",
                "Followship": {
                    "followerId": 2,
                    "followingId": 1,
                    "createdAt": "2019-11-10T15:39:37.480Z",
                    "updatedAt": "2019-11-10T15:39:37.480Z"
                }
            }
        ]
  }
      
}

export default {
  data(){
    return{
      user: {
        'id':'',
        'name':'',
        'email':'',
        'password':'',
        'isAdmin':false,
        'image':'',
        "createdAt": "",
        "updatedAt": "",
        "Comments":[],
        "FavoritedRestaurants":[],
        "Followings": [],
        "Followers": []
        
      }
    }
  },

  created() {
    const {id} = this.$route.params
    this.fetchUser(id)
  },

  methods:{

    fetchUser(userId) {
      // eslint-disable-next-line
      console.log('userId:', userId)
      const {user} = dummyUser
      this.user = {
        ...this.user,
        id:user.id,
        name:user.name,
        email:user.email,
        password:user.password,
        isAdmin:user.isAdmin,
        image:user.image,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        Comments:user.Comments,
        FavoritedRestaurants:user.FavoritedRestaurants,
        Followings: user.Followings,
        Followers: user.Followers
      }
    },
    handleFileChange (e) {
      const files = e.target.files
      
      if (!files.length) return // 如果沒有檔案則離開此函式
      // 否則產生預覽圖...
      const imageURL = window.URL.createObjectURL(files[0])
      this.user.image = imageURL
    },

    handleSubmit (e) {
      const form = e.target  // <form></form>
      const formData = new FormData(form)
      for (let [name, value] of formData.entries()) {
        // eslint-disable-next-line
        console.log(name + ': ' + value)
      }
    }
  }
  
}
</script>