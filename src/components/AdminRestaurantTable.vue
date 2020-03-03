<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th
          scope="col"
          width="300"
        >
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category && restaurant.Category.name }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{name: 'admin-restaurant', params: {id: restaurant.id}}"
            class="btn btn-link"
          >
            Show
          </router-link>

          <a
            href="#"
            class="btn btn-link"
          >Edit</a>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  
  "restaurants": [
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
          }
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
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
      },
      {
          "id": 11,
          "name": "Vita Trantow",
          "tel": "410.576.5657",
          "address": "4079 Wehner Prairie",
          "opening_hours": "08:00",
          "description": "Dignissimos doloribus aut deleniti voluptatibus.\nEum ut perspiciatis modi quas.\nDolorem a ex nostrum quis consequatur consectetur.",
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
          }
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
          }
      },
      {
          "id": 13,
          "name": "Jarrett Prosacco",
          "tel": "761.580.7983 x221",
          "address": "7430 Veum Wall",
          "opening_hours": "08:00",
          "description": "Velit tempora qui dolorem ipsum blanditiis incidunt et. Aliquid quis nam id asperiores.",
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
          }
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
          }
      },
      {
          "id": 15,
          "name": "Effie Bernier",
          "tel": "603.911.6561 x177",
          "address": "5130 Jerry Crest",
          "opening_hours": "08:00",
          "description": "Aut sed nobis ut aspernatur reiciendis illum quaerat ipsam quo. Commodi natus in in repudiandae similique. Nobis nihil reiciendis nihil sapiente ut velit ut est. Ut aut saepe error.",
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
          }
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
          }
      },
      {
          "id": 17,
          "name": "Terrell Torp",
          "tel": "002-232-6180 x4586",
          "address": "2832 Jared Crossroad",
          "opening_hours": "08:00",
          "description": "Quis et deserunt ratione autem odit blanditiis quo veritatis et. Illo eos laborum dignissimos. Voluptate ut ratione.\n \rHarum qui sed doloribus dolores deserunt laborum quidem et in. Non voluptatem qui quam sint iure. Nisi iure id et eligendi ut. Libero aut sed repellat consequuntur dolore itaque quia. Harum harum vel qui maxime neque omnis possimus delectus.\n \rVoluptates sed et ad praesentium. Eveniet aperiam porro. Quisquam aut vel aliquid consequatur itaque adipisci rerum velit labore. Ut tempore laborum iste. Voluptas molestias earum fugiat.",
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
          }
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
          }
      },
      {
          "id": 19,
          "name": "Dr. Juanita Torphy",
          "tel": "599.794.4263",
          "address": "38567 Aileen Stream",
          "opening_hours": "08:00",
          "description": "Mollitia temporibus distinctio est consequuntur. Dolorum sunt distinctio molestias expedita pariatur harum labore. Sunt numquam recusandae suscipit laboriosam facilis. Nihil repellat qui id voluptas. Minima provident iure sunt blanditiis accusantium quia numquam.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 18,
          "createdAt": "2019-11-08T17:57:17.219Z",
          "updatedAt": "2019-11-08T17:57:17.219Z",
          "CategoryId": 4,
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
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
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2019-11-08T17:52:00.469Z",
              "updatedAt": "2019-11-08T17:52:00.469Z"
          }
      },
      {
          "id": 21,
          "name": "Dr. Gladys Dickens",
          "tel": "1-674-261-6304 x70688",
          "address": "8592 Clement Inlet",
          "opening_hours": "08:00",
          "description": "Quis et ut ab. Est omnis dolores error eligendi amet nisi sit excepturi. Repudiandae et delectus.\n \rIn praesentium illo sit fugit adipisci labore temporibus quae. Adipisci assumenda placeat. Rem eligendi dolores commodi est ea.\n \rCorporis ratione saepe voluptatibus culpa omnis laboriosam facere vel fugit. Consequatur qui aut deserunt aut deserunt ducimus ullam recusandae et. Ab quaerat maxime aliquam voluptas in. Libero et qui sit facere. Quisquam dolor incidunt esse voluptatem.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 19,
          "createdAt": "2019-11-08T17:57:17.220Z",
          "updatedAt": "2019-11-08T17:57:17.220Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2019-11-08T17:52:00.469Z",
              "updatedAt": "2019-11-08T17:52:00.469Z"
          }
      },
      {
          "id": 22,
          "name": "Donny Streich",
          "tel": "061.921.4462",
          "address": "871 Sheila Valley",
          "opening_hours": "08:00",
          "description": "Et tempora nemo. In qui eaque nihil saepe aperiam. Rerum earum sunt quasi qui. Animi maxime provident delectus rerum est nihil dolores.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 16,
          "createdAt": "2019-11-08T17:57:17.221Z",
          "updatedAt": "2019-11-08T17:57:17.221Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2019-11-08T17:52:00.469Z",
              "updatedAt": "2019-11-08T17:52:00.469Z"
          }
      },
      {
          "id": 23,
          "name": "Estevan Crist",
          "tel": "1-180-969-5975 x6283",
          "address": "448 Carlie Field",
          "opening_hours": "08:00",
          "description": "Ea consectetur amet. Ad facere sequi tempora officiis dolor animi qui repellat rerum. Voluptatibus exercitationem sit sed distinctio explicabo quis impedit. Voluptate occaecati adipisci molestias atque voluptate voluptatem.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 1,
          "createdAt": "2019-11-08T17:57:17.221Z",
          "updatedAt": "2019-11-08T17:57:17.221Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "日本料理",
              "createdAt": "2019-11-08T17:52:00.469Z",
              "updatedAt": "2019-11-08T17:52:00.469Z"
          }
      },
      {
          "id": 24,
          "name": "Holly Stanton",
          "tel": "082.991.2568",
          "address": "8736 Brooks Crossroad",
          "opening_hours": "08:00",
          "description": "Nostrum deserunt est nihil reprehenderit. Officia cumque ut quia explicabo expedita. Qui veniam omnis facilis non sed labore ipsum. Iure quos quo sapiente doloremque consequuntur ipsa quo id. Veniam at quis quidem quasi. Aliquid aut ipsa soluta excepturi autem officia.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 14,
          "createdAt": "2019-11-08T17:57:17.221Z",
          "updatedAt": "2019-11-08T17:57:17.221Z",
          "CategoryId": 4,
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
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
          "Category": {
              "id": 5,
              "name": "素食料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
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
          "Category": {
              "id": 3,
              "name": "義大利料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
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
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
      },
      {
          "id": 28,
          "name": "Ms. Jayce Lubowitz",
          "tel": "1-741-057-1801 x4151",
          "address": "172 Welch Locks",
          "opening_hours": "08:00",
          "description": "et",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 12,
          "createdAt": "2019-11-08T17:57:17.223Z",
          "updatedAt": "2019-11-08T17:57:17.223Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2019-11-08T17:52:00.469Z",
              "updatedAt": "2019-11-08T17:52:00.469Z"
          }
      },
      {
          "id": 8,
          "name": "Anastacio Quitzon",
          "tel": "(288) 430-5913 x11831",
          "address": "121 Kaylin Knoll",
          "opening_hours": "08:00",
          "description": "Quod exercitationem nemo illo libero labore voluptatem repellendus ut perspiciatis.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 9,
          "createdAt": "2019-11-08T17:57:17.214Z",
          "updatedAt": "2019-11-09T06:04:10.323Z",
          "CategoryId": 3,
          "Category": {
              "id": 3,
              "name": "義大利料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
      },
      {
          "id": 9,
          "name": "Bobby Schaefer",
          "tel": "522-749-6865 x2019",
          "address": "5031 Lisette Circle",
          "opening_hours": "08:00",
          "description": "Minima dolor veritatis et voluptates molestiae.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 22,
          "createdAt": "2019-11-08T17:57:17.215Z",
          "updatedAt": "2019-11-09T06:04:20.663Z",
          "CategoryId": 5,
          "Category": {
              "id": 5,
              "name": "素食料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
      },
      {
          "id": 29,
          "name": "Elwin Strosin III",
          "tel": "405-755-0259 x05432",
          "address": "2025 Judah Turnpike",
          "opening_hours": "08:00",
          "description": "Vel veniam dolore debitis ut et.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 15,
          "createdAt": "2019-11-08T17:57:17.223Z",
          "updatedAt": "2019-11-08T17:57:17.223Z",
          "CategoryId": 3,
          "Category": {
              "id": 3,
              "name": "義大利料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
      },
      {
          "id": 30,
          "name": "Hayley Gleason",
          "tel": "(403) 992-1035",
          "address": "8930 Fredy Cliff",
          "opening_hours": "08:00",
          "description": "Quia laboriosam ex quia soluta.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 6,
          "createdAt": "2019-11-08T17:57:17.224Z",
          "updatedAt": "2019-11-08T17:57:17.224Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2019-11-08T17:52:00.469Z",
              "updatedAt": "2019-11-08T17:52:00.469Z"
          }
      },
      {
          "id": 31,
          "name": "Garry Marquardt IV",
          "tel": "921-932-1287 x491",
          "address": "391 Howe Path",
          "opening_hours": "08:00",
          "description": "blanditiis et sunt",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 8,
          "createdAt": "2019-11-08T17:57:17.224Z",
          "updatedAt": "2019-11-08T17:57:17.224Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "日本料理",
              "createdAt": "2019-11-08T17:52:00.469Z",
              "updatedAt": "2019-11-08T17:52:00.469Z"
          }
      },
      {
          "id": 32,
          "name": "Tyra Schaden",
          "tel": "261.470.8901",
          "address": "236 Murray Springs",
          "opening_hours": "08:00",
          "description": "Architecto inventore culpa quaerat impedit. Dolorem corrupti quae praesentium mollitia optio ut. Sed ullam voluptas voluptates deleniti. Dolor consequatur nesciunt incidunt quasi. Commodi saepe eaque reprehenderit non voluptatum id molestiae rem.\n \rEum iste aut non quia. Dolor sint inventore in sit ex rerum. Ea et sequi nostrum asperiores explicabo optio. Quia non odio expedita quibusdam.\n \rMaxime aut ea veritatis. Ea exercitationem laudantium veritatis est. Deserunt ut eos nisi qui reiciendis illum autem numquam ab. Et tempora voluptatem harum beatae architecto qui officiis ratione. Aut reprehenderit aliquam recusandae ea in delectus.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 14,
          "createdAt": "2019-11-08T17:57:17.224Z",
          "updatedAt": "2019-11-08T17:57:17.224Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "日本料理",
              "createdAt": "2019-11-08T17:52:00.469Z",
              "updatedAt": "2019-11-08T17:52:00.469Z"
          }
      },
      {
          "id": 33,
          "name": "Jacey Lemke",
          "tel": "917.014.3706",
          "address": "95715 Coy Harbor",
          "opening_hours": "08:00",
          "description": "placeat",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 7,
          "createdAt": "2019-11-08T17:57:17.225Z",
          "updatedAt": "2019-11-08T17:57:17.225Z",
          "CategoryId": 4,
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
      },
      {
          "id": 34,
          "name": "Rae Corwin",
          "tel": "989.045.3071",
          "address": "465 Amya Mountains",
          "opening_hours": "08:00",
          "description": "Aut rerum quia explicabo rerum eum quia. Cupiditate ratione possimus qui temporibus nisi. Nesciunt dolores optio quia.\n \rLabore et in mollitia voluptatem dolorem. Tempore eos iste harum laboriosam sed. Voluptatum praesentium deserunt ducimus omnis excepturi aut beatae est.\n \rNisi magni aliquam voluptatem. Soluta praesentium nihil rem dignissimos. Magni quos voluptas. Sed hic qui enim in repellendus. Non error voluptas nulla recusandae perspiciatis doloremque deserunt repellendus officia.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 17,
          "createdAt": "2019-11-08T17:57:17.225Z",
          "updatedAt": "2019-11-08T17:57:17.225Z",
          "CategoryId": 5,
          "Category": {
              "id": 5,
              "name": "素食料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
      },
      {
          "id": 35,
          "name": "Berenice Kub",
          "tel": "745.879.0219 x8875",
          "address": "0859 Taylor Forest",
          "opening_hours": "08:00",
          "description": "Vel voluptatem optio eos rerum in. Alias et laudantium sint eveniet quaerat. Explicabo omnis ullam reiciendis accusantium tenetur dolorem sequi deserunt. Sit optio sint asperiores fuga aut sed eum beatae. Asperiores eum quos aspernatur quis in labore dolorem in numquam. Ut non voluptas.\n \rIusto suscipit dolores sint consequuntur dolore commodi. Quisquam error eligendi autem eum non qui quidem ipsa qui. Error modi architecto sunt.\n \rIste nesciunt officiis consequatur animi nostrum beatae. Sint nam optio eum minus. Qui sed dolores excepturi. Iure et et et.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 19,
          "createdAt": "2019-11-08T17:57:17.226Z",
          "updatedAt": "2019-11-08T17:57:17.226Z",
          "CategoryId": 4,
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
      },
      {
          "id": 36,
          "name": "Katlyn Walter",
          "tel": "510.863.3667",
          "address": "00046 Runolfsdottir Club",
          "opening_hours": "08:00",
          "description": "Voluptatibus pariatur ad aut earum. Eum voluptas quam quisquam consequatur. Illum tenetur quia et aperiam.\n \rIure quod rerum cupiditate consequuntur nobis ipsum temporibus. Suscipit neque vitae perspiciatis vel eos et hic consequatur. Id nihil quidem id dicta pariatur provident non.\n \rEt nihil quos doloremque ratione eligendi ullam. Et rerum praesentium eum veniam hic cum. Dicta atque eum ducimus harum et. Non tempore voluptas pariatur reiciendis error.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 15,
          "createdAt": "2019-11-08T17:57:17.228Z",
          "updatedAt": "2019-11-08T17:57:17.228Z",
          "CategoryId": 5,
          "Category": {
              "id": 5,
              "name": "素食料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
      },
      {
          "id": 37,
          "name": "Cedrick Prohaska",
          "tel": "(807) 715-6941",
          "address": "2016 Brekke Estates",
          "opening_hours": "08:00",
          "description": "Hic inventore enim.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 2,
          "createdAt": "2019-11-08T17:57:17.228Z",
          "updatedAt": "2019-11-08T17:57:17.228Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "日本料理",
              "createdAt": "2019-11-08T17:52:00.469Z",
              "updatedAt": "2019-11-08T17:52:00.469Z"
          }
      },
      {
          "id": 38,
          "name": "Ms. Aimee Aufderhar",
          "tel": "1-383-531-9419",
          "address": "2221 Otho Neck",
          "opening_hours": "08:00",
          "description": "minus eum delectus",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 1,
          "createdAt": "2019-11-08T17:57:17.229Z",
          "updatedAt": "2019-11-08T17:57:17.229Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "日本料理",
              "createdAt": "2019-11-08T17:52:00.469Z",
              "updatedAt": "2019-11-08T17:52:00.469Z"
          }
      },
      {
          "id": 39,
          "name": "Jeffrey Hackett",
          "tel": "366-737-7966",
          "address": "9351 Labadie Plain",
          "opening_hours": "08:00",
          "description": "Qui ratione quod. Sunt voluptas odio et dolorem et ex quod. Est eveniet optio iste consequatur.\n \rQuis et ipsa a inventore atque qui. Et voluptates quo esse placeat delectus voluptatem id quasi et. Ipsam eligendi qui sunt qui aut.\n \rEst non ipsam repellat est aut dolorem occaecati. Qui perspiciatis enim cupiditate nobis. Dolorem reprehenderit aut nulla nobis ipsa dignissimos dolore id ut. Vero inventore enim cumque.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 18,
          "createdAt": "2019-11-08T17:57:17.229Z",
          "updatedAt": "2019-11-08T17:57:17.229Z",
          "CategoryId": 4,
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
      },
      {
          "id": 40,
          "name": "Keven Hegmann",
          "tel": "051.719.3164",
          "address": "4453 Terry Field",
          "opening_hours": "08:00",
          "description": "ut",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 13,
          "createdAt": "2019-11-08T17:57:17.229Z",
          "updatedAt": "2019-11-08T17:57:17.229Z",
          "CategoryId": 5,
          "Category": {
              "id": 5,
              "name": "素食料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
      },
      {
          "id": 41,
          "name": "Maci O'Connell",
          "tel": "468.861.3645",
          "address": "3578 Rowan Mount",
          "opening_hours": "08:00",
          "description": "Consequuntur pariatur dolorem. Voluptate molestiae delectus error. Iusto soluta dicta. Omnis totam vel.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 17,
          "createdAt": "2019-11-08T17:57:17.230Z",
          "updatedAt": "2019-11-08T17:57:17.230Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "日本料理",
              "createdAt": "2019-11-08T17:52:00.469Z",
              "updatedAt": "2019-11-08T17:52:00.469Z"
          }
      },
      {
          "id": 42,
          "name": "Demond Weimann III",
          "tel": "141.653.5391",
          "address": "329 Nicole Valleys",
          "opening_hours": "08:00",
          "description": "Sint est qui molestiae minus.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 10,
          "createdAt": "2019-11-08T17:57:17.230Z",
          "updatedAt": "2019-11-08T17:57:17.230Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "日本料理",
              "createdAt": "2019-11-08T17:52:00.469Z",
              "updatedAt": "2019-11-08T17:52:00.469Z"
          }
      },
      {
          "id": 43,
          "name": "Ricardo Wolf",
          "tel": "764-199-7858 x2237",
          "address": "269 Francisca Manors",
          "opening_hours": "08:00",
          "description": "Incidunt impedit numquam occaecati corrupti magni ut. Dolorem ratione quia minus qui sed velit autem. Praesentium natus consequatur officia quo. Eos perferendis error accusamus ea inventore.\n \rAtque ad est modi ratione et dicta nam incidunt. Perferendis ut quia suscipit. Voluptates soluta quia ut. Reprehenderit error id eos et necessitatibus facere. Dignissimos molestias nesciunt repudiandae esse expedita exercitationem atque praesentium. Nobis impedit quis id nostrum quia.\n \rNon ut illo eius laboriosam. Est ab iusto mollitia harum explicabo. Minima saepe voluptatem quae sed et vitae eligendi rerum. Et et aliquid asperiores. Voluptate quam quia dolorem.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 6,
          "createdAt": "2019-11-08T17:57:17.230Z",
          "updatedAt": "2019-11-08T17:57:17.230Z",
          "CategoryId": 4,
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
      },
      {
          "id": 44,
          "name": "Garry Wilkinson",
          "tel": "962-010-2818 x73016",
          "address": "50522 Gail Light",
          "opening_hours": "08:00",
          "description": "Soluta veniam in officiis tenetur aliquam ut impedit nisi quia. Quos ipsum est possimus. Distinctio a harum delectus provident. Vel perferendis atque alias consequatur. Et ratione quo nobis magni. At amet eos.\n \rEt explicabo saepe. Molestias et fuga vel recusandae in dignissimos et animi quos. Itaque eius explicabo. Facilis quas facilis. Amet voluptatem corrupti itaque itaque eaque atque blanditiis repellat odio. Qui repellat dolores ut voluptatibus iure sunt provident.\n \rOmnis quibusdam officia rem porro veniam. Vero ut impedit incidunt quibusdam totam libero error beatae non. Corporis deleniti tenetur suscipit amet dolores. Accusamus corrupti mollitia culpa aliquid quia.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 4,
          "createdAt": "2019-11-08T17:57:17.236Z",
          "updatedAt": "2019-11-08T17:57:17.236Z",
          "CategoryId": 5,
          "Category": {
              "id": 5,
              "name": "素食料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
      },
      {
          "id": 45,
          "name": "Alexander Buckridge",
          "tel": "275-307-9415 x329",
          "address": "06718 Rodger Circle",
          "opening_hours": "08:00",
          "description": "Tempora molestiae eveniet et et sequi repellat est.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 13,
          "createdAt": "2019-11-08T17:57:17.236Z",
          "updatedAt": "2019-11-08T17:57:17.236Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "日本料理",
              "createdAt": "2019-11-08T17:52:00.469Z",
              "updatedAt": "2019-11-08T17:52:00.469Z"
          }
      },
      {
          "id": 46,
          "name": "Lillie Rutherford IV",
          "tel": "399-814-2166 x2551",
          "address": "880 Stan Mountains",
          "opening_hours": "08:00",
          "description": "Aperiam fuga dolorum enim. Qui alias quos sit aut eos laboriosam. Cum modi quas doloribus impedit. Aut non sit laboriosam adipisci error consequatur ratione illum minima. Quia consectetur quas qui. Facilis quia voluptatem tempora voluptas.\n \rNostrum et natus voluptas quia quia laudantium aliquam rerum earum. Vel iure pariatur. Doloribus aliquam modi quis eaque eum quis. Tempore at dignissimos odio fugiat. Non harum enim sit dolor iste. Accusantium natus perspiciatis consequuntur ab vel tempore aspernatur aliquid quo.\n \rQuibusdam aliquam ex maxime magni repudiandae quia. Aut et doloremque explicabo suscipit. Eos porro vel doloremque. Est ea exercitationem in inventore. Dolore nesciunt harum ullam repellat est rerum autem. Itaque molestiae nihil voluptatem consequuntur.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 5,
          "createdAt": "2019-11-08T17:57:17.238Z",
          "updatedAt": "2019-11-08T17:57:17.238Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2019-11-08T17:52:00.469Z",
              "updatedAt": "2019-11-08T17:52:00.469Z"
          }
      },
      {
          "id": 47,
          "name": "Chelsea Funk",
          "tel": "463.007.4255",
          "address": "9919 Melody Port",
          "opening_hours": "08:00",
          "description": "Dicta corrupti aliquid expedita nostrum et similique. Libero debitis doloremque quia molestias ipsam facere eos. Qui libero minus ducimus est quo mollitia reiciendis pariatur eveniet. Nihil aspernatur tempora. Necessitatibus sunt voluptatem ex dolorum atque et facere aut in.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 3,
          "createdAt": "2019-11-08T17:57:17.239Z",
          "updatedAt": "2019-11-08T17:57:17.239Z",
          "CategoryId": 3,
          "Category": {
              "id": 3,
              "name": "義大利料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
      },
      {
          "id": 48,
          "name": "Merl Kub DVM",
          "tel": "(835) 151-8554 x6193",
          "address": "602 Dudley Mill",
          "opening_hours": "08:00",
          "description": "In voluptatum rerum modi et voluptates. Enim facilis dolor fugit omnis. Maiores qui et ut tempore.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 16,
          "createdAt": "2019-11-08T17:57:17.239Z",
          "updatedAt": "2019-11-08T17:57:17.239Z",
          "CategoryId": 3,
          "Category": {
              "id": 3,
              "name": "義大利料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
      },
      {
          "id": 49,
          "name": "Christa Rowe",
          "tel": "222.403.1699",
          "address": "770 Legros Ford",
          "opening_hours": "08:00",
          "description": "ratione sit iste",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 19,
          "createdAt": "2019-11-08T17:57:17.239Z",
          "updatedAt": "2019-11-08T17:57:17.239Z",
          "CategoryId": 4,
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
      },
      {
          "id": 50,
          "name": "Rachael Schneider",
          "tel": "(274) 004-0824 x03916",
          "address": "02845 Deron Roads",
          "opening_hours": "08:00",
          "description": "labore",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 2,
          "createdAt": "2019-11-08T17:57:17.239Z",
          "updatedAt": "2019-11-08T17:57:17.239Z",
          "CategoryId": 5,
          "Category": {
              "id": 5,
              "name": "素食料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
      },
      {
          "id": 51,
          "name": "Dr. Magnus Hansen",
          "tel": "1-966-101-8419 x45523",
          "address": "69781 Creola Ridge",
          "opening_hours": "08:00",
          "description": "Enim omnis vero minus vitae. Numquam ut repellat tenetur in. Harum eos deleniti quis labore incidunt dolorem. Soluta earum rerum. Asperiores alias vitae tenetur debitis officiis et. Nihil reiciendis eveniet nostrum culpa unde nihil.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 19,
          "createdAt": "2019-11-08T17:57:17.246Z",
          "updatedAt": "2019-11-08T17:57:17.246Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2019-11-08T17:52:00.469Z",
              "updatedAt": "2019-11-08T17:52:00.469Z"
          }
      },
      {
          "id": 2,
          "name": "Vada D'Amore",
          "tel": "438-466-5624 x687",
          "address": "601 Brekke Radial",
          "opening_hours": "08:00",
          "description": "Itaque eveniet alias et est nulla.\nDelectus et modi labore.\nEt cumque ut pariatur non officiis porro ex.\nPlaceat praesentium doloremque magni consequatur.\nEt voluptatibus officiis dignissimos quibusdam sunt.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 10,
          "createdAt": "2019-11-08T17:57:17.212Z",
          "updatedAt": "2019-11-08T17:57:50.275Z",
          "CategoryId": 3,
          "Category": {
              "id": 3,
              "name": "義大利料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
      },
      {
          "id": 4,
          "name": "Merlin Hermann",
          "tel": "1-910-532-4627",
          "address": "86040 Marks Groves",
          "opening_hours": "08:00",
          "description": "Porro totam quis sed maiores quo delectus qui. Rerum et illo assumenda. Debitis quia placeat sint non iure qui labore nesciunt. Assumenda ipsum harum.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 7,
          "createdAt": "2019-11-08T17:57:17.213Z",
          "updatedAt": "2019-11-08T17:58:02.218Z",
          "CategoryId": 5,
          "Category": {
              "id": 5,
              "name": "素食料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
      },
      {
          "id": 3,
          "name": "Guadalupe Ruecker",
          "tel": "734-567-8278 x957",
          "address": "4004 Schuster Meadows",
          "opening_hours": "08:00",
          "description": "Tempore aliquid consequatur quos eos quis dicta qui quia sed.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 22,
          "createdAt": "2019-11-08T17:57:17.213Z",
          "updatedAt": "2019-11-08T18:04:39.366Z",
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2019-11-08T17:52:00.469Z",
              "updatedAt": "2019-11-08T17:52:00.469Z"
          }
      },
      {
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
          "CategoryId": 1,
          "Category": {
              "id": 1,
              "name": "中式料理",
              "createdAt": "2019-11-08T17:52:00.469Z",
              "updatedAt": "2019-11-08T17:52:00.469Z"
          }
      },
      {
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
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "日本料理",
              "createdAt": "2019-11-08T17:52:00.469Z",
              "updatedAt": "2019-11-08T17:52:00.469Z"
          }
      },
      {
          "id": 5,
          "name": "Oscar Osinski",
          "tel": "(393) 818-0362",
          "address": "090 Ansley Ramp",
          "opening_hours": "08:00",
          "description": "Sit dolorum odit occaecati dicta et ipsa. Sint nihil aut et sed voluptas numquam enim aut rerum. Saepe voluptatem eligendi voluptatum voluptatum vero nostrum aut.",
          "image": "http://lorempixel.com/640/480",
          "viewCounts": 12,
          "createdAt": "2019-11-08T17:57:17.214Z",
          "updatedAt": "2019-11-09T05:09:12.599Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "日本料理",
              "createdAt": "2019-11-08T17:52:00.469Z",
              "updatedAt": "2019-11-08T17:52:00.469Z"
          }
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
          "Category": {
              "id": 3,
              "name": "義大利料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
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
          "Category": {
              "id": 6,
              "name": "美式料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
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
          "Category": {
              "id": 4,
              "name": "墨西哥料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
      },
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
          "Category": {
              "id": 3,
              "name": "義大利料理",
              "createdAt": "2019-11-08T17:52:00.470Z",
              "updatedAt": "2019-11-08T17:52:00.470Z"
          }
      }
  ]

}

export default {
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants
    },

    deleteRestaurant (restaurantId) {
      this.restaurants = this.restaurants.filter(
        restaurant => restaurant.id !== restaurantId
      )
    }
  }
}
</script>