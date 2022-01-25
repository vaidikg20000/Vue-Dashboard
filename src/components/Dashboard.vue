<template>
    <div>
        <!-- HEADING -->
        <v-row class="my-2">
            <v-col cols="1">
                <v-avatar height="80" width="80">
                <v-img
                    :src="require('../assets/img_avatar.png')"
                />
                </v-avatar>
            </v-col>
            <v-col cols="4">
                <div class="my-2">
                <h1>Good Morning {{userName}}</h1>
               <p class="grey--text text--darken-1">Here are your stats for Today, {{moment().format("DD MMM YYYY") }} </p> <!-- moment used for checking date -->
               </div>
            </v-col>
        </v-row>

        <!-- STATS -->
        <v-row>
            <v-col 
            v-for="item in items"
            :key="item.id"
            cols="3"
            >
                <span class="mx-2 grey--text text--darken-3">{{item.subTitle}}</span>
                <v-chip
                    small
                    :color="item.percent>0 ? '#C8E6C9' : '#FFCDD2'"
                    :text-color="item.percent>0 ?'#1B5E20':'#B71C1C'"
                > 
                {{item.percent>0?'+'+item.percent:item.percent}} %  <!-- To check the percentage value i.e positive or negative and the color of chip changes dynamically -->
                
                </v-chip>
                <h1 class="mx-2">{{item.value}}</h1>
                <span class="mx-2 grey--text text--darken-3">{{item.downSubtitle.orders}} {{item.downSubtitle.rate}} {{item.downSubtitle.text}}</span> 
            </v-col>
        </v-row>
        
        <!-- CHART -->
        <v-row>
            <v-col>
                 <div>
                 <canvas id="myChart" width="100" height="100"></canvas>
                 </div>
            </v-col>
        </v-row>

        <!-- TABS -->
        <v-row>
            <v-col>
                <v-card class="mx-4">
                <v-tabs
                    v-model="tab"
                    background-color="transparent"
                    color="primary"
                    grow
                    >
                    <v-tab
                        v-for="tabItem in tabItems"
                        :key="tabItem"
                    >
                        {{ tabItem }}
                    </v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="tab">
                    <v-tab-item
                    >
                        <v-card
                        flat
                        >
                            <v-row justify="space-between" v-for="cart in cartItems" :key="cart.id" :class="cart.isHover ? 'tab-row' : '' " @mouseover="hovering(cart.id)" @mouseleave="cart.isHover=false">
                                <v-col cols="1" align-items="center">
                                    <v-avatar height="50" width="50" class="mx-2 my-4">
                                        <v-img
                                            :src="require('../assets/shopcart.jpg')"
                                        />
                                    </v-avatar>
                                </v-col>
                                <v-col cols="5">
                                    <h3 :class="cart.isHover? 'mt-3 mx-2 blue--text': 'mt-3 mx-2'">Abandoned Cart {{cart.days > 0 ? cart.days+' Days' : cart.min+' Min'}} <v-icon v-if="cart.isHover" color="blue">mdi-arrow-right-bold</v-icon></h3> 
                                    <p class="grey--text text--darken-2 mx-2">4024 Sent | 124 Clicks</p>
                                </v-col>
                                <v-spacer>
                                </v-spacer>
                                <v-col cols="4">
                                    <h3 style="text-align:right" class='mt-3 mx-4'>{{cart.rate}}</h3>
                                    <p style="text-align:right" class="mx-2 grey--text text--darken-2">41 Orders | $150 AOV</p>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-tab-item>
                    </v-tabs-items>
                    </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import moment from 'moment'
import "./lineChart"

export default {
    name:'Dashboard',
    data () {
      return {
        userName:'Odguz',
        storeName:'Store Name',
        moment:moment,
        items:[ 
            {id:1,percent:12.5,subTitle:'Total Revenue',downSubtitle:{orders:'433',text:'Orders',rate:''},value:'$32621.72'},
            {id:2,percent:32.5,subTitle:'Subscribers',downSubtitle:{orders:'$56',text:'Average Order',rate:''},value:'484,205'},
            {id:3,percent:-3.4,subTitle:'Conversations',downSubtitle:{orders:'',text:'Average response Time',rate:''},value:'552,553'},
            {id:4,percent:32.5,subTitle:'Popup Conversion Rate',downSubtitle:{orders:'',text:'Sales Conversion Rate',rate:'5%'},value:'25%'},
        ],
        tab:null,
        tabItems:[
            'Automations','Campaigns','Segments'
        ],
        cartItems:[
            {id:1,days:7,min:0,isHover:true,rate:5231},
            {id:2,days:0,min:15,isHover:false,rate:5231},
            {id:3,days:0,min:15,isHover:false,rate:5231},
        ],
      }
    },
    methods:{
        // function for hover on row which changes styles
        hovering(id){
            this.cartItems.forEach(element => {
                if(element.id===id){
                    element.isHover = true;
                }
            });

        }
    }
}
</script>

<style scoped>
.round_img{
    border-radius: 50%;
}
.tab-row{
    background-color: #E3F2FD;
}
</style>