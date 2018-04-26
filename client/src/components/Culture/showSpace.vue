<template>
<div>
  <div class="inside-banner a14888112237145">
    <div class="container">
      <span class="pull-right"><a href=""><i class="fa fa-home"></i></a> /
      My Cultural Spaces
    </span>
    <h2>
    My Cultural Spaces
    </h2>
  </div>
</div>
<div class="container">
  <div class="listing spacer">
    <div class="row">
      <div class="col-lg-12 cartcustom">
        <div class="item">
          <div class="navtopcart">
        <ul>
              <li class="eltd-listing-active-item"><a @click="navigateTo({name :'profile' })"><div><i class="fa fa-eye"></i>My Profile</div></a></li>
              <li class="eltd-listing-active-item"><a @click="navigateTo({name :'profile' })"><div><i class="fa fa-eye"></i>Edit Profile</div></a></li>
              <li class="eltd-listing-active-item"><a @click="navigateTo({name :'event' })"><div><i class="fa fa-eye"></i>My Events</div></a></li>
              <li class="eltd-listing-active-item"><a @click="navigateTo({name :'myProjects' })"><div><i class="fa fa-eye"></i>My Project</div></a></li>
              <li class="eltd-listing-active-item"><a @click="navigateTo({name :'myspaces' })"><div><i class="fa fa-eye"></i>Cultural Spaces</div></a></li>
            </ul>
          </div>
          <h3 class="blacktitle">
          {{culture.Title}}
          </h3>
          
          <div class="row">
            <div class="col-lg-12">
              <div class="col-lg-12 fields">
                <div class="row field-row">
                  <div class="col-lg-12">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8">
                      <div class="item">
                        <div class="image-holder">
                          <a href="http://smartfordesign.net/smartend/frontend2/PropertiesForSale/topic/53">
                            <img :src = "culture.Image"/>
                          </a>
                          
                          <div class="status visits"><i class="fa fa-eye"></i> Theme
                          : {{culture.Theme}}</div>
                        </div>
                        <h4>
                        <a href="http://smartfordesign.net/smartend/frontend2/PropertiesForSale/topic/53">
                          {{culture.Title}}
                        </a>
                        </h4>
                        <div class="row field-row">
                          <div class="col-lg-3">
                            Description :
                          </div>
                          <div class="col-lg-9">
                            {{culture.Description}}
                          </div>
                        </div>
                        <div class="row field-row">
                          <div class="col-lg-3">
                            More Information :
                          </div>
                          <div class="col-lg-9">
                            {{culture.MoreInformation}}
                          </div>
                        </div>
                        <div class="row field-row">
                          <div class="col-lg-3">
                            Location :
                          </div>
                          <div class="col-lg-9">
                            {{culture.Location.Street}}
                            <div class="row">
                              <div class="col-lg-12">
                                <br>
                                <h4><i class="fa fa-map-marker"></i> Location Map</h4>
                                <div class="well">
                                  <GmapMap style=" min-height: 395px;" :zoom="10" :center="{lat: this.Lat, lng: this.Lng}">
                                    <GmapMarker v-for="(marker, index) in markers"
                                      :key="index"
                                      @place_changed="setPlace"
                                      :position="marker.position"
                                      />
                                      <GmapMarker/>
                                      </GmapMap>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div v-if=" this.iduser != null">
                              
                               <a @click="navigateTo({
                              name :'edit',
                              params : {spotId : culture._id}
                            })" class="btn btn-warning">Edit</a>
                            <a @click="deleteit({
                              name :'myspaces'
                            })"class="btn btn-danger">Delete</a>
                            </div>
                           
                          </div>
                        </div>
                        <div class="col-lg-2"></div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  <script>
  import CultureService from '@/services/CultureService'
  export default{
    data(){
      return{
          culture: null ,
          iduser : null ,
  markers : [],
  Lat : null,
  Lng : null
      }
    },
    async mounted(){
  
  
      if(this.$store.state.isUserLoggedIn){
  this.iduser = this.$store.state.user._id
  }
  const SpaceId = this.$store.state.route.params.spotId
  console.log(SpaceId)
  this.culture = (await CultureService.showSpace(SpaceId,this.iduser)).data
  this.Lat = parseInt(this.culture.Location.Lat)
  this.Lng = parseInt(this.culture.Location.Lng)
  this.markers.push({
  position: {
  lat: this.Lat,
  lng: this.Lng
            }
          })
        },
  methods : {
  navigateTo(route){
  this.$router.push(route)
    },
  async deleteit(route){
  const SpaceId = this.$store.state.route.params.spotId
  this.$swal({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then(async(result) => {
  if (result.value) {
     const res = await CultureService.deleteSpace(SpaceId)
  this.$router.push(route)
    this.$swal(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})
 
    }
   }
  }
  </script>
  <style scoped>
  .cartcustom{
    padding: 40px 49px 60px;
  display: inline-block;
  margin-top: -64px;
  position: relative;
  z-index: 105;
  background-color: #fff;
  border: 1px solid #eee;
  text-align: left;
  }
  .a14888112237145{
  background-image: url(./../../assets/uploads/banners/blog-title.jpg);
  }
  .inside-banner{
    padding: 100px 0;
  }
  .navtopcart{
  position: relative;
  margin: 0 -49px;
  top: -40px;
  border-bottom: 1px solid #f3f3f3;
  text-align: center;}
  .navtopcart ul {
    list-style: none;
  margin: 0;
  }
  .eltd-listing-active-item{
    border-color: #e6e6e6;
  border-bottom-color: #fff;
  cursor: pointer;
  display: inline-block;
  padding: 20px;
  border: 1px solid transparent;
  border-top: 0;
  position: relative;
  top: 1px;
  }
  .blacktitle{
    color: black;
  }
  .listing div.item .status {
    width: 100%
  }
  #map {
  min-height: 395px;
  }
  </style>