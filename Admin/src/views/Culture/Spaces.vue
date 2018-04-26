<template>

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
   
      <template slot="Publisher" slot-scope="data">
      {{data.value.FirstName}} {{data.value.LastName}}
    </template>
    <template slot="isAccepted" slot-scope="data">
       <b-badge :variant="getBadge(data.item.isAccepted)">{{changeisaa(data.item.isAccepted)}}</b-badge>

    </template>
    <template slot="Action" slot-scope="data">
       <b-button v-show="!(data.item.isAccepted)" variant="primary" @click="navigateTo(data.item._id)">Accept it</b-button>
       <input type="hidden" v-model="accepit">
       <b-button variant="danger">Delete it</b-button>
       <b-button variant="warning">See it</b-button>
    </template>
    </b-table>
    <nav>
      <b-pagination :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
    </nav>
    <b-col md="6" class="py-6">
     <b-card header="Categorie Chart">
        <div class="chart-wrapper">
          <pie-example/>
        </div>
      </b-card>
      </b-col>
  </b-card>
</template>

<script>
import PieExample from '@/views/charts/PieExample'
import CultureService from '@/services/CultureServices'
 import cSwitch from '@/components/Switch'
      var i = 1

  export default {
    name: 'c-table',
    components: {
      cSwitch,
      PieExample
    },
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
      bordered: {
        type: Boolean,
        default: false
      },
      small: {
        type: Boolean,
        default: false
      },
      fixed: {
        type: Boolean,
        default: false
      }
    },
    data: () => {
      return {
        items: [],
        accepit :  "false",
        test : true,
        filter: null,
        sortBy: 'isAccepted',
      sortDesc: false,
        fields: [
          {key: 'Title', sortable: true},
          {key: 'Theme', sortable: true},
          {key: 'isAccepted', sortable: true},
          {key :'Publisher', sortable: true},
          {key :'Action', sortable: false}
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
     async navigateTo(SpaceId){
      this.accepit ="ll"+i
      i++
        return await CultureService.edit(SpaceId)
       // return SpaceId
      },

      getBadge (status) {
        return status === true ? 'success'
             : 'warning'
      },
      changeisaa(status){
        return status === true ? 'Accepted'
             : 'Pending'
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
this.items = (await CultureService.index()).data 
},
 watch: {
    accepit : async function(){
  this.items = (await CultureService.index()).data 
 }
}
  }
</script>
