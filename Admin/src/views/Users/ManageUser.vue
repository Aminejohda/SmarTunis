<template>
<div>
  <b-card :header="caption">
     <b-form-group horizontal label="" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
    <b-table :hover="hover" :sort-by.sync="sortBy" :filter="filter"
             :sort-desc.sync="sortDesc" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage"@filtered="onFiltered">
   
      
    <template slot="FaceBookId" slot-scope="data">
       <b-badge :variant="getBadge(data.item.FaceBookId)">{{changeisaa(data.item.FaceBookId)}}</b-badge>

    </template>
    <template slot="IsActive" slot-scope="data">
       <b-badge>{{data.item.IsActive}}</b-badge>

    </template>
    <template slot="Action" slot-scope="data">
      <input type="hidden" v-model="accepit">
       <b-button variant="danger"v-show="(data.item.IsActive)" @click="navigateTo(data.item._id)">Bann</b-button>
       <b-button variant="primary"v-show="!(data.item.IsActive)" @click="navigateTo(data.item._id)">Approve</b-button>
       <b-button variant="warning" @click="showmodal(data.item)">See Full Information</b-button>
    </template>
    </b-table>
    <nav>
      <b-pagination :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
    </nav>
   
  </b-card>
  <modal name="demo-login" transition="pop-out" @before-open="beforeOpen" :height="600" :width="800">
      <b-row class="justify-content-center">
        <b-col md="12">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <h1>{{fullname}}</h1>
                <p class="text-muted">Email : {{Email}}</p>
                <p class="text-muted">Facebook Account : <a :href="Facebookaccount" target="_blank">{{fullname}}</a></p>
                <p class="text-muted">Twitter Account : {{Twitteraccount}}</p>
                <p class="text-muted">Linkedin Account : <div v-for="item in Linkedinaccount">
                  <a :href="item">try me</a>
                </div></p>
                <p class="text-muted">Phone : {{Phone}}</p>
                <p class="text-muted">Address : {{Address}}</p>
                <p class="text-muted">Interests via SmarTunis  : {{Interests}}</p>
                <p class="text-muted">Interests via Facebook  : {{interestsFacebook}}</p>
                <p class="text-muted">Interests via Twitter  : {{interestsTwitter}}</p>
                <p class="text-muted">Interests via Linkdin  : {{interestsLinkedin}}</p>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <img :src = "Picture" style="width:40%"/>
                  <img :src = "FacebookPicture" style="width:40%"/>
                  <b-row>
                  <b-col cols="6">
                    <b-button variant="primary" class="px-4" v-show="Facebookaccount  == null">Find his Facebook</b-button>
                    <br>
                    <br>
                    <b-button variant="teal" class="px-4" @click="linkiiTo(FirstName,LastName,_id)">Find his Linkedin</b-button>
                    <br>
                    <br>
                    <b-button variant="blue" class="px-4"v-show="Facebookaccount  != null">Send Friend Request</b-button>
                    <br>
                    <br>
                    <b-button variant="cyan" class="px-4 text-white" v-show="Twitteraccount == null">Find his Twitter</b-button>
                  </b-col>
                  
                </b-row>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
</modal>
</div>
</template>

<script>

import UserService from '@/services/UserServices'
      var i = 1

  export default {
    name: 'c-table',
    props: {
      caption: {
        type: String,
        default: 'Table'
      },
      hover: {
        type: Boolean,
        default: false
      },
      striped: {
        type: Boolean,
        default: false
      },
      fixed: {
        type: Boolean,
        default: false
      },
      small: {
        type: Boolean,
        default: false
      },
      bordered: {
        type: Boolean,
        default: false
      }
    },
    data: () => {
      return {
        items: [],
        fullname:'',
        Picture:'',
         _id  : '',
    FirstName : '',
    LastName : '',
        Facebookaccount:null,
        Twitteraccount:null,
        FacebookPicture:null,
        Linkedinaccount:[],
        interestsFacebook:[],
        interestsTwitter:[],
        interestsLinkedin:[],
        Address:'',
        Phone:'',
        Interests:[],
        Email:'',
        accepit :  "false",
        test : true,
        filter: null,
        sortBy: 'IsActive',
      sortDesc: false,
        fields: [
          {key: 'FirstName', sortable: true},
          {key: 'LastName', sortable: true},
          {key: 'Email', sortable: true},
          {key :'FaceBookId', sortable: true},
          {key :'Action', sortable: false},
          {key :'IsActive', sortable: false}
        ],
        currentPage: 1,
        perPage: 5,
        totalRows: 0
      }
    },
     computed: {
      icon (icon) {
        return icon
      },
    sortOptions () {
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    }
  },
    methods: {
      async navigateTo(UserId){
        console.log(UserId)
      this.accepit ="ll"+i
      i++
        return await UserService.bann(UserId)
       // return SpaceId
        console.log("bann me")
      },
      async linkiiTo(firstname,lastname,iduser){
        //console.log(firstname)
        return await UserService.linkindinit(firstname,lastname,iduser)
        },
       beforeOpen (event) {
    var userinstant = event.params.users
    this.fullname = userinstant.FirstName+ " " +userinstant.LastName
    this._id = userinstant._id
    this.FirstName =userinstant.FirstName 
    this.LastName =userinstant.LastName 
    this.Email = userinstant.Email
    this.Phone = userinstant.Phone
    this.Address = userinstant.Address
    this.Interests = userinstant.Interests
    this.Facebookaccount = userinstant.Facebookaccount
    this.Twitteraccount = userinstant.Twitteraccount
    this.Linkedinaccount = userinstant.Linkedinaccount
    this.interestsFacebook = userinstant.interestsFacebook
    this.interestsTwitter = userinstant.interestsTwitter
    this.interestsLinkedin = userinstant.interestsLinkedin
    this.Picture = "http://localhost:3000/images/uploads/Users/"+userinstant.Picture
    this.FacebookPicture = userinstant.FacebookPicture
    this.accepit = userinstant.IsActive

  },
      showmodal(user){
this.$modal.show("demo-login", { users: user });
      },
     
changeisaa(status){
         return  typeof status !== 'undefined' ? 'we got it'
             : 'not define yet'
      },
      getBadge (status) {
        return  typeof status !== 'undefined' ? 'success'
             : 'warning'
      },
      onFiltered (filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
      getRowCount (items) {
        return items.length
      }
    }
    ,
      async mounted(){
this.items = (await UserService.index()).data 
console.log(this.items)
},
 watch: {
    accepit : async function(){
  this.items = (await UserService.index()).data 
 }
}
  }
</script>
