<template>
	<div>
  <div class="inside-banner a14888112237145">
    <div class="container">
      <span class="pull-right"><a href="http://smartfordesign.net/smartend/frontend2"><i class="fa fa-home"></i></a> /
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
          <h1 class="blacktitle">
             My Cultural Spaces
          </h1>
          
          <div class="row">
            <div class="col-lg-12">
              <div class="col-lg-12 fields">
                <div class="row field-row">
                  <div class="col-lg-12">
                  		<div v-for="culture in cultures" :key="culture._id">
        <div class="col-lg-4">    
				<div class="item">
															<div class="image-holder">
																<a href="http://smartfordesign.net/smartend/frontend2/PropertiesForSale/topic/53">
																	<img :src = "culture.Image"/>
																</a>
																
																<div class="status visits"><i class="fa fa-eye"></i> Theme
																: {{culture.Theme}}</div>
																<div class="status comments"><i class="fa fa-comments"></i> Comments
																: 0</div>
																
															</div>
															<h4>
															<a href="http://smartfordesign.net/smartend/frontend2/PropertiesForSale/topic/53">
																{{culture.Title}}
															</a>
															</h4>
															<a  @click="navigateTo({
                              name :'show',
                              params : {spotId : culture._id}
                            })"class="btn btn-primary">Read More</a>
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
</div>

</div>
</div>
</template>

<script>
import CultureService from '@/services/CultureService'
export default{
	data(){
		return{
			cultures: null	,
			iduser : null	
		}
	},
	async mounted(){
		 if(this.$store.state.isUserLoggedIn){
      this.iduser = this.$store.state.user._id
this.cultures = (await CultureService.myCulturalSpaces(this.iduser)).data 

    }
},
    methods : {
        navigateTo(route){
        this.$router.push(route)
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

</style>