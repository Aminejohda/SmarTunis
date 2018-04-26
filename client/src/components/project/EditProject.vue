<template>

  <div class="projects">
  <!-- -->
  <div class="inside-banner">
        <div class="container">
            <h2>Edit tour Urban Project</h2>
        </div>
    </div>
    <!-- n7awlou modif-->
    <div class="container">
        <div class="spacer">
            <div class="row contact">
                <div class="col-lg-6 col-sm-6 ">
                <h4 id="contact_div"><i class="fa fa-plus-square"></i> please fill out the form</h4>
                <div   class="contactForm">
                <div class="form-group">
                        <input type="text" class="form-control" name="title" placeholder="title" v-model="project.title">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" rows="8" cols="50" placeholder="DESCRIPTION" v-model="project.description"></textarea>
                    </div>
                    <div class="form-group">
                        <select class="form-control" name="theme" v-model="project.theme">
                          <option value="" disabled selected>Select theme</option>
                          <option value="Technology">Infrastructure & Technology</option>
                          <option value="Energy">Energy, Water & Waste</option>
                          <option value="Education">Governance & Education</option>
                          <option value="Living">Citizens & Living</option>
                        </select>
                    </div> 
                    <div class="form-group">
                        <select class="form-control" name="fase" v-model="project.fase">
                          <option value="" disabled selected>Choose the fase</option>
                          <option value="Idea">Idea</option>
                          <option value="Concept">Concept</option>
                          <option value="Implementation">Implementation</option>
                          <option value="Evaluation">Evaluation</option>
                        </select>
                    </div> 
                    <div class="form-group">
                      <div class="well">
                     <img :src="'http://localhost:3000/images/project/' + project.projectImage">
                      </div>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-theme" @click="editProject">Edit Project</button>
                    </div>
                    <br>
                </div>
                </div>
                <div class="col-lg-6 col-sm-6 ">
                <h4><i class="fa fa-map-marker"></i> Location Map</h4>
                <div class="form-group">
                        <GmapAutocomplete readonly name="adresse" class="form-control" placeholder="choose an address" @place_changed="setPlace" v-model="project.location.Street" >
                        </GmapAutocomplete>
                </div>
                <div class="well">
                            <GmapMap style="width: 510px; height: 395px;" :zoom="10" :center="{lat: 36.8366475, lng: 10.194840500000055}">
                            <GmapMarker
                             
                              :position="{
                                  lat: Number(project.location.latitude),
                                  lng:Number(project.location.longitude) 
                                }"
                              />
                            
                            </GmapMap>
                            <GmapMarker
                              v-if="this.place"
                              label="★"
                              :position="{
                                lat: this.place.geometry.location.lat(),
                                lng: this.place.geometry.location.lng(),
                              }"
                              />
                            </GmapMap>
                </div>
                </div>
            </div>
        </div>
    </div>

    <!-- -->
</div>

  <!-- -->
  

</div>
  <!-- -->
  <!--Banner -->
    
      <!-- End Banner -->
      <!-- -->
    

  </div>

</template>

<script>
import ProjectService from '@/services/ProjectService'
export default {
  name: 'projects',
  data () {
    return {
      projects: [],
      project:[],
      title:'',
      description:'',
      theme:'',
      place: null
    }
  },
  mounted () {
    this.getPosts();
    this.getProject();
    console.log(this.project);
  },
  methods: {
      async getProject () {
      const response = await ProjectService.getProject({
        id: this.$route.params.id
      })
      this.project = response.data[0]
      this.theme=this.project.theme

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
    async editProject () {
      await ProjectService.updateProject({
        id: this.$route.params.id,
        title: this.project.title,
        description: this.project.description,
        theme : this.project.theme,
        fase : this.project.fase
      })
      this.$swal(
        'Great!',
        this.project.title+` Your post has been updated!`,
        'success'
      )
      //alert(this.project.title+' updated succesfully');
      this.$router.push({ name: 'myProjects' })
    },
    setPlace(place) {
      this.place = place
      this.markers={
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
          }
        }
        this.markers = null;
        
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
