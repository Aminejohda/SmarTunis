<template>
  <div class="marker">
  <div class="inside-banner">
        <div class="container">
            <h2>Map of Urban Projects</h2>
        </div>
    </div>
   <gmap-map :center="center" :zoom="10" style="width: 100%; height: 500px">
      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
       <img :src="'http://localhost:3000/images/project/' + infos.projectImage"><br>
       <h2>{{infos.title}}</h2>
       <router-link class="btn btn-primary" v-bind:to="{ name: 'projectDetail', params: { id: infos._id } }">Read More</router-link>
       
      </gmap-info-window>
      <gmap-marker :key="i" v-for="(m,i) in projects" :position="{
              lat: Number(m.location.latitude),
              lng:Number(m.location.longitude) 
            }" :clickable="true"  @click="toggleInfoWindow(m,i)" ></gmap-marker>
       
    </gmap-map>
  </div>
</template>
 
<script>
 import ProjectService from '@/services/ProjectService'
  export default {
    data () {
      return {
        projects: [],
        center: {
            lat: 36.8366475, lng: 10.194840500000055
          },
          infos:[],
          infoContent: '',
          infoWindowPos: {
            lat: 0,
            lng: 0
          },
          infoWinOpen: false,
          currentMidx: null,
          //optional: offset infowindow so it visually sits nicely on top of our marker
          infoOptions: {
            pixelOffset: {
              width: 0,
              height: -35
            }
          },
          markers: [{
            position: {
              lat: 47.376332,
              lng: 8.547511
            },
            infoText: 'Marker 1'
          }, {
            position: {
              lat: 47.374592,
              lng: 8.548867
            },
            infoText: 'Marker 2'
          }, {
            position: {
              lat: 47.379592,
              lng: 8.549867
            },
            infoText: 'Marker 3'
          }]
      }
    },
        mounted () {
            this.getProjects();
            console.log(this.projects[0]);
        
        },
  methods: {
     toggleInfoWindow: function(marker, idx) {
            this.infoWindowPos = {
              lat: Number(marker.location.latitude),
              lng:Number(marker.location.longitude) 
            };
            this.infos=marker;
            this.infoContent = marker.title;
            //check if its the same marker that was selected if yes toggle
            if (this.currentMidx == idx) {
              this.infoWinOpen = !this.infoWinOpen;
            }
            //if different marker set infowindow to open and reset current marker index
            else {
              this.infoWinOpen = true;
              this.currentMidx = idx;
            }
          }
          ,async getProjects () {
                const response = await ProjectService.fetchProjects()
                this.projects = response.data
                this.projects.forEach(el=>{
                        this.mark=el.title;

                    })

                

            },
            getMark(){
                this.projects.forEach(el=>{
                console.log(el.title);
            })

            }
    }
    }
</script> 
<style>
img {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
}
</style>

