<template>
  <div class="container py-5">
    <NavTabs />
    <div class="row text-center">
        <UserCard
        v-for="user in users"
        :key="user.id"
        :initial-user="user"
        />
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import UserCard from '../components/UserCard.vue'

const dummyData = {
    users: [
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$SU.kuOzvTaOOd430wFIfce0rRZ36R/e1qy7m1QvwEio72M/whNyge",
            "isAdmin": false,
            "image": "https://i.imgur.com/2pV2Irz.gif",
            "createdAt": "2019-11-08T17:52:01.923Z",
            "updatedAt": "2019-11-13T17:19:54.433Z",
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
                        "followingId": 3,
                        "createdAt": "2019-11-10T15:39:38.970Z",
                        "updatedAt": "2019-11-10T15:39:38.970Z"
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
                    "Followship": {
                        "followerId": 4,
                        "followingId": 3,
                        "createdAt": "2019-11-10T15:40:33.990Z",
                        "updatedAt": "2019-11-10T15:40:33.990Z"
                    }
                }
            ],
            "FollowerCount": 2,
            "isFollowed": true
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
                        "followingId": 4,
                        "createdAt": "2019-11-10T15:39:35.109Z",
                        "updatedAt": "2019-11-10T15:39:35.109Z"
                    }
                }
            ],
            "FollowerCount": 1,
            "isFollowed": false
        },
        {
            "id": 1,
            "name": "路特",
            "email": "root@example.com",
            "password": "$2a$10$jXA5iarQmwLM0fD.pF46TexIJ9PFvshOLdG/dWVZJnYibqyeK.NHO",
            "isAdmin": true,
            "image": "https://i.imgur.com/fu6Vwqj.jpg",
            "createdAt": "2019-11-08T17:52:00.809Z",
            "updatedAt": "2019-11-09T10:10:38.804Z",
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
            ],
            "FollowerCount": 1,
            "isFollowed": false
        },
        {
            "id": 6,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$jCVFnFNB/qQrlQb898gEseGgflP8vMq2Cx2caXGIjRABEo2AsMFJm",
            "isAdmin": false,
            "image": null,
            "createdAt": "2019-11-08T17:57:17.207Z",
            "updatedAt": "2019-11-08T17:57:17.207Z",
            "Followers": [
                {
                    "id": 4,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$lkpL31VINZ.n/0VswEqsJOAilmXmO/UPrFuj715O74KxjTnPjPunC",
                    "isAdmin": true,
                    "image": "https://i.imgur.com/Ey363Yd.png",
                    "createdAt": "2019-11-08T17:57:16.721Z",
                    "updatedAt": "2019-11-08T18:16:30.721Z",
                    "Followship": {
                        "followerId": 4,
                        "followingId": 6,
                        "createdAt": "2019-11-10T15:40:35.789Z",
                        "updatedAt": "2019-11-10T15:40:35.789Z"
                    }
                }
            ],
            "FollowerCount": 1,
            "isFollowed": true
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
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 5,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$xkUVufO3LJFmnv3tq4LbfOJkUhbEkCQznhkKnj6OBQP41ae3zD8eW",
            "isAdmin": false,
            "image": null,
            "createdAt": "2019-11-08T17:57:16.968Z",
            "updatedAt": "2019-11-08T17:57:16.968Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
}

export default {
  components: {
    NavTabs,
    UserCard
  },


  data () {
    return {
      users: []
    }
  },

  created () {
    this.fetchUsers()
  },

  methods: {
    fetchUsers () {
      this.users = dummyData.users
    }
  }
}
</script>