<template>
  <div class="addProject">
  <!-- -->
  <div class="inside-banner">
        <div class="container"> 
            <h2>Add New Urban Projects</h2>
        </div>
    </div>
  <div class="container">
        <div class="spacer">
            <div class="row contact">
                <div class="col-lg-6 col-sm-6 ">

                    <h4 id="contact_div"><i class="fa fa-plus-square"></i> please fill out the form</h4>
                    <div   class="contactForm">
                    <div class="form-group">
                        <input required type="text" class="form-control" name="title" placeholder="title" v-model="title">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" rows="10" cols="50" placeholder="DESCRIPTION" v-model="description"></textarea>
                    </div>
                    <div class="form-group">
                        <input type="file" class="form-control" @change="onFileSelected" accept="image/*">
                        
                    </div>
                    
                    <div class="form-group">
                        <select class="form-control" name="theme" v-model="theme">
                          <option value="" disabled selected>Select theme</option>
                          <option value="Technology">Infrastructure & Technology</option>
                          <option value="Energy">Energy, Water & Waste</option>
                          <option value="Education">Governance & Education</option>
                          <option value="Living">Citizens & Living</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <select class="form-control" name="fase" v-model="fase">
                          <option value="" disabled selected>Choose the fase</option>
                          <option value="Idea">Idea</option>
                          <option value="Concept">Concept</option>
                          <option value="Implementation">Implementation</option>
                          <option value="Evaluation">Evaluation</option>
                        </select>
                    </div>  
                      <br><br><br>
                     <h4 id="contact_div"><i class="fa fa-address-book"></i>Contact info (Optional)</h4>
                     <div class="form-group">
                        <i class="fa fa-facebook"><b>Facebook</b><br></i><input type="text" class="form-control"
                         name="facebook" placeholder="Your Facebook Page" v-model="facebook">
                    </div>   
                    <div class="form-group">
                        <i class="fa fa-twitter"><b>Twitter</b><br></i><input type="text" class="form-control"
                         name="twitter" placeholder="Your Twitter ex: @jhon.doe" v-model="twitter">
                    </div>   
                    <div>
                        <button type="submit" class="btn btn-theme" @click="addPost">Add Project</button>
                    </div>
                    <br>
                    </div>

                </div>
                                    <div class="col-lg-6 col-sm-6 ">
                        <h4><i class="fa fa-map-marker"></i> Location Map</h4>
                        <div class="form-group">
                        <GmapAutocomplete required name="adresse" class="form-control" @place_changed="setPlace" placeholder="choose an address">
                        </GmapAutocomplete>
                        </div>
                        <div class="well"  >
                        
                            <GmapMap style="width: 510px; height: 386px;" :zoom="10" :center="{lat: 36.8366475, lng: 10.194840500000055}">
                            <GmapMarker v-for="(marker, index) in markers"
                              :key="index"
                              :position="marker.position"
                              />
                            <GmapMarker
                              v-if="this.place"
                              label="★"
                              :position="{
                                lat: this.place.geometry.location.lat(),
                                lng: this.place.geometry.location.lng(),
                              }"
                              />
                            </GmapMap>
                        </div><br><br><br><br>
                      <div class="form-group">
                        <i class="fa fa-linkedin"><b>Linkedin</b><br></i><input type="text" class="form-control"
                         name="linkedin" placeholder="https://www.linkedin.com/company/1273369/" v-model="linkedin">
                      </div> 
                      <div class="form-group">
                        <i class="fa fa-globe"><b>WebSite</b><br></i><input type="text" class="form-control"
                         name="website" placeholder="https://smartunis.com/" v-model="website">
                      </div> 
                    </div>
              </div>
        </div>
    </div>
  <!-- -->
  </div>
</template>

<script>

import ProjectService from'@/services/ProjectService'
export default {
  name: 'addProject',
  data () {
    return {
      markers: [],
      place: null,
      title: '',
      description: '',
      selectedFile:null,
      adresse: '',
      theme:'',
      twitter:'',
      facebook:'',
      linkedin:'',
      website:'',
      fase:''
    }
  },
  async mounted(){
      if(this.$store.state.isUserLoggedIn){
        this.iduser = this.$store.state.user
        console.log(this.iduser)
      }
      else{
        this.$router.push({ name: 'register' })
        console.log(this.$store.state);
      }
  },
  methods: {
    async addPost () {
      var data = new FormData();
      var details = JSON.stringify(location);
      data.append('projectImage', this.selectedFile);
      data.append('description', this.description);
      data.append('title', this.title);
      data.append('theme', this.theme);
      data.append('location.latitude',this.place.geometry.location.lat());
      data.append('location.longitude',this.place.geometry.location.lng());
      data.append('location.Street',this.place.name +" , "+this.place.formatted_address);
      data.append('Publisher', this.$store.state.user._id);
      data.append('facebook', this.facebook);
      data.append('twitter', this.twitter);
      data.append('linkedin', this.linkedin);
      data.append('website', this.website);
      data.append('fase', this.fase);
      await ProjectService.addProject(data)
      this.$swal(
        'Great!',
        `Your project has been added!`,
        'success'
      )
      //alert(this.title+' added succesfully');
      this.$router.push({ name: 'projects' })
    },
    onFileSelected(event){
          this.selectedFile=event.target.files[0];
          console.log(this.selectedFile);
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
        console.log(place.name)
	  console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng());
	  console.log(place.address_components[0]);
	  console.log("formatted_address : "+place.formatted_address);
      console.log(place);
    },
    usePlace(place) {
      if (this.place) {
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
          }
        })
        this.place = null;
      }
    }

  }
}
</script>
<style type="text/css">
.form input, .form textarea,.form select {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
