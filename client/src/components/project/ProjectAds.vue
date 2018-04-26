<template>
<div class="projectsAds">
    <div class="col-lg-12" v-if="this.$store.state.user !== null">
        <div class="hot-properties hidden-xs">
        <h4>Ads</h4>
        </div>

        <div class="text-center">
        <p>This project can interest you</p>
        
            <div>
                <router-link  v-bind:to="{ name: 'projectDetail', params: { id: ads._id } }">
                <img  :src="'http://localhost:3000/images/project/' + ads.projectImage" style="width: 330px; height: 600px;">
                    {{ads.title}}
                </router-link>
            </div>
        </div>
    </div>

</div>

</template>

<script>
import ProjectService from '@/services/ProjectService'
export default {
  name: 'projectsAds',
  data () {
    return {
         projectsByTheme:null,
      projects: [],
      mostViewed:[],
      ads:null
    }
  },
  mounted () {
    this.getPosts()
    this.getCountByTheme();
    this.getMostViewedProjects();
    if(this.$store.state.user.Facebookaccount!=null){
        this.fbScraping();
    }
    
  },
  methods: {
      async getCountByTheme () {
      const response = await ProjectService.getCountByTheme()
      this.projectsByTheme = response.data
    },
    async getPosts () {
      const response = await ProjectService.fetchProjects()
      this.projects = response.data
    },
    async getProjectsByTheme (theme) {
      const response = await ProjectService.getProjectsByTheme(theme)
      this.projects=response.data
    },
    async getMostViewedProjects () {
      const response = await ProjectService.mostViewed()
      this.mostViewed = response.data
    },
    async fbScraping(){
        const response = await ProjectService.getScrapingFacebook(this.$store.state.user.Facebookaccount)
        console.log(response.data)
        var max = Math.max.apply(null,Object.keys(response.data).map(function(x){ return response.data[x] }));
        var theme=Object.keys(response.data).filter(function(x){ return response.data[x] == max; })[0];
        console.log(Object.keys(response.data).filter(function(x){ return response.data[x] == max; })[0]);
        if(theme=="Sport"){
            const response = await ProjectService.adsByScraping("Living")
            this.ads=response.data[0]
            console.log(this.ads)
        }
        else if(theme=="Education"){
            const response = await ProjectService.adsByScraping("Education")
            this.ads=response.data[0]
            console.log(this.ads)
        }else if(theme=="Informatique"){
            const response = await ProjectService.adsByScraping("Technology")
            this.ads=response.data[0]
            console.log(this.ads)
        } else if(theme=="Mode"){
            const response = await ProjectService.adsByScraping("Living")
            this.ads=response.data[0]
            console.log(this.ads)
        }  else if(theme=="Music"){
            const response = await ProjectService.adsByScraping("Energy")
            this.ads=response.data[0]
            console.log(this.ads)
        }  
      
    }
  }
}

</script>

<style>

</style>