<template>
    <div>
        <v-card
            height="100vh"
            width="256"
            class="mx-auto"
        >
            <v-navigation-drawer permanent>
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title class="text-h6">
                   <v-icon large color="blue darken-2">mdi-water-circle</v-icon> 
                   BlueReceipt
                </v-list-item-title>
                 
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list
                dense
                nav
            >
                <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>

            <!-- NAVBAR PROFILE INFO -->
             <template v-slot:append>
                <v-row>
                    <v-col cols="4">
                        <v-avatar class="mx-2" height="60" width="60">
                           <v-img
                             :src="require('../assets/img_avatar.png')"
                            />
                        </v-avatar>
                    </v-col>
                    <v-col cols="8">
                        <div class="mt-2">
                        <h4 >{{userName}}</h4>
                        <p class="grey--text text--darken-2">{{storeName}}</p>
                        </div>
                    </v-col>
                </v-row>
            </template>
            </v-navigation-drawer>
        </v-card>
    </div>
</template>

<script>
export default {
    name:'Navbar',
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Conversation', icon: 'mdi-message-bulleted' },
          { title: 'Automations', icon: 'mdi-collage' },
          { title: 'Campaigns', icon: 'mdi-newspaper' },
          { title: 'Popup', icon: 'mdi-wechat' },
          { title: 'Live Chat', icon: 'mdi-chat' },
          { title: 'Segments', icon: 'mdi-chart-arc' },
          { title: 'integrations', icon: 'mdi-swap-horizontal' },
        ],
        right: null,
        userName:'Odguz Yulgz Kara',
        storeName:'Store Name',
      }
    },
}
</script>