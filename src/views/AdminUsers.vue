<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in Users"
          :key="user.id"
          >
          <th scope="row">
            {{user.id}}
          </th>
          <td>{{user.email}}</td>
          <td
            v-if="user.isAdmin"
            >
            admin
          </td>
          <td
            v-else
            >
            user
          </td>
          <td
            v-if="user.isAdmin"
            >
            <button
              type="button"
              class="btn btn-link"
              v-if="user.id === currentUser.id"
            >
            
            </button>
            <button
              type="button"
              class="btn btn-link"
              v-else
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              set as user
            </button>
          </td>
          <td
            v-else
            >
            <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="toggleUserRole(user.id)"
            >
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav'


const dummyData = {
    users: [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$lkpL31VINZ.n/0VswEqsJOAilmXmO/UPrFuj715O74KxjTnPjPunC",
            "isAdmin": true,
            "image": "https://i.imgur.com/Ey363Yd.png",
            "createdAt": "2019-11-08T17:57:16.721Z",
            "updatedAt": "2019-11-08T18:16:30.721Z"
        },

        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$axEII0959Sc9kdkYmoq2kumRdhxvW5feacxWSJAGBDxTmgf94JcTG",
            "isAdmin": false,
            "image": "https://i.imgur.com/Xr1TinX.png",
            "createdAt": "2019-11-08T17:52:01.328Z",
            "updatedAt": "2019-11-13T17:19:28.919Z"
        },

        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$SU.kuOzvTaOOd430wFIfce0rRZ36R/e1qy7m1QvwEio72M/whNyge",
            "isAdmin": false,
            "image": "https://i.imgur.com/2pV2Irz.gif",
            "createdAt": "2019-11-08T17:52:01.923Z",
            "updatedAt": "2019-11-13T17:19:54.433Z"
        }
    ]
}


const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  components:{
    AdminNav
  },

  data () {
    return {
      Users:[],
      currentUser: {
        id: -1,
        name: '',
        email: '',
        image: '',
        isAdmin: false
      },
      isAuthenticated: false
    }
  },

  created(){
    this.fetchUsers()
  },

  methods:{
    fetchUsers(){
      this.Users = [
        ...dummyData.users
      ]
      this.currentUser = dummyUser.currentUser
    },

    toggleUserRole(id) {
      //與api溝通覆寫admin狀態
      this.Users = this.Users.map(user => {
        if (user.id !== id) return user
        
        return {
          ...user,
          isAdmin: !user.isAdmin
        }
      })
    }
  }
}
</script>