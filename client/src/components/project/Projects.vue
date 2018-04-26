<template>

  <div class="projects">
  <!-- -->
    <div class="inside-banner">
        <div class="container">
            <h2>Urban Projects</h2>
        </div>
    </div>
<div class="container">
    <div class="listing spacer">


        <div class="row">
            <div class="col-lg-3">
                <aside class="right-sidebar">


                    <div class="widget">

                        <ul class="list-group" >
                            <li class="list-group-item">
                                <a  @click="getPosts()">
                                <i class="fa fa-android"></i> &nbsp;
                                All Projects<span class="badge">5</span></a>
                            </li>
                           <h5 class="widgetheading">Search By Theme</h5>
                            <li class="list-group-item" v-for="s in projectsByTheme">

                                <a  @click="getProjectsByTheme(s._id)">
                                    <i class="fa fa-android"></i> &nbsp;
                                    {{s._id}}<span class="badge">{{s.nbr}}</span></a>
                                    
                            </li>
                        </ul>
                    </div>
                    <div class="hot-properties hidden-xs">
                        <h4>Most Viewed</h4>

                        <div class="row" v-for="p in mostViewed">
                            <div class="col-lg-4 col-sm-5">
                                <router-link  v-bind:to="{ name: 'projectDetail', params: { id: p._id } }">
                                    <img :src="'http://localhost:3000/images/project/' + p.projectImage" class="img-responsive img-circle" >
                                </router-link>
                            </div>

                            <div class="col-lg-8 col-sm-7">
                                <h5>{{p.title}}</h5>
                                <h5>Visits : {{p.Views}}</h5>
                            </div>
                        </div>

                    </div>
                    <ProjectAds/>
                    


                    <!--<div class="widget  hidden-xs">
                        <h5 class="widgetheading">Search</h5>
                        <form method="POST" action="http://smartfordesign.net/smartend/frontend2/search" accept-charset="UTF-8" class="form-search"><input name="_token" type="hidden" value="7o9ohNztxlKfRuBkqaXNCj8AX5F8ACHXMdM81bk7">
                            <div class="input-group">
                                <input placeholder="Search for..." class="form-control" id="search_word" required="" name="search_word" type="text">
                                <span class="input-group-btn">
                    <button type="submit" class="btn btn-theme"><i class="fa fa-search"></i></button>
                </span>
                            </div>

                        </form>
                    </div>-->
                    
                    

                   
                </aside>
            </div>                                <div class="col-lg-9">
            <div class="row">

                <div class="col-lg-6" v-for="project in projects" :key="project._id">
                    <div class="item">
                        <div class="image-holder">
                            <a href="http://smartfordesign.net/smartend/frontend2/products/topic/32">
                                <img :src="'http://localhost:3000/images/project/' + project.projectImage">
                            </a>


                            <div class="status visits"><!--<i class="fa fa-eye"></i> Visits
                                : 15--></div>
                            <div class="status comments"><!--<i class="fa fa-comments"></i> Comments
                                : 0--></div>

                        </div>
                        <h4>
                            <a href="http://smartfordesign.net/smartend/frontend2/products/topic/32">
                                {{ project.title }}
                            </a>
                        </h4>


                        <div class="row">
                            <div class="col-lg-12">
                                <div class="col-lg-12 fields">


                                    <div class="row field-row">
                                        <div class="col-lg-4">
                                            Theme :
                                        </div>
                                        <div class="col-lg-8">
                                            {{project.theme}}
                                        </div>
                                    </div>


                                    <div class="row field-row">
                                        <div class="col-lg-4">
                                            Fase :
                                        </div>
                                        <div class="col-lg-8">
                                            {{project.fase}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>
                            <!--{{project.description}}-->
                        </p>
                        <router-link class="btn btn-primary" v-bind:to="{ name: 'projectDetail', params: { id: project._id } }">Read More</router-link>
                    </div>
                </div>

                <div class="col-lg-6">

                </div>


            </div>
            <div class="row">
                <div class="col-lg-8">

                </div>
                <div class="col-lg-4 text-right">
                    <br>
                    <!--<small>1 - 2 of
                        ( 2 ) records</small>-->
                </div>
            </div>
        </div>

        </div>
    </div>
</div>
  </div>

</template>

<script>
import ProjectAds from '@/components/project/ProjectAds.vue'
import ProjectService from '@/services/ProjectService'
export default {
  name: 'projects',
  components : {
    ProjectAds
  },
  data () {
    return {
         projectsByTheme:null,
      projects: [],
      mostViewed:[],
     // ads:null
    }
  },
  mounted () {
    this.getPosts()
    this.getCountByTheme();
    this.getMostViewedProjects();
   /* if(this.$store.state.user.Facebookaccount!=null){
        this.fbScraping();
    }*/
    
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
    async deletePost (id) {
      await PostsService.deletePost(id);
      alert(' deleted succesfully');
      this.$router.push({ name: 'Posts' })
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
      
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
img {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
}
</style>
