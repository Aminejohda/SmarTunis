<template>
<div>
	<div class="inside-banner">
		<div class="container">
			<span class="pull-right"><a><i class="fa fa-home"></i></a> /Cultural Spaces</span>
		<h2>
		Cultural Spaces
		</h2>
	</div>
</div>


<div class="container">
	<div class="listing spacer">
		<div class="row">
			<div class="col-lg-3 fixme">
				<aside class="right-sidebar">
					<div class="widget">
						
						<ul class="list-group">
							<li class="list-group-item" v-if="$store.state.isUserLoggedIn">

								<a @click="addspace">
									<i class="fa fa-map-o"></i> &nbsp;
									Add New Space<span class="badge">+</span></a></li>
							<li class="list-group-item">
								<a @click="navigateTo({
                              name :'categorie',
                              params : {categorie : 'Cinemas'}})">
									<i class="fa fa-building-o"></i> &nbsp;
									Cinemas<span class="badge">{{nbrc}}</span></a></li>
									
									<li class="list-group-item">
										<a @click="navigateTo({
                              name :'categorie',
                              params : {categorie :'Galleries' }})">
											<i class="fa fa-university"></i> &nbsp;
											Galleries<span class="badge">{{nbrg}}</span></a></li>
											
											<li class="list-group-item">
												<a  @click="navigateTo({
                              name :'categorie',
                              params : {categorie : 'Museums'}})">
													<i class="fa fa-coffee"></i> &nbsp;
													Museums<span class="badge">{{nbrmu}}</span></a></li>
													
													<li class="list-group-item">
														<a  @click="navigateTo({
                              name :'categorie',
                              params : {categorie : 'Theatres'}})">
															<i class="fa fa-building"></i> &nbsp;
															Theatres<span class="badge">{{nbrt}}</span></a></li>
															
															<li class="list-group-item">
																<a  @click="navigateTo({
                              name :'categorie',
                              params : {categorie : 'Monuments'}})">
																	<i class="fa fa-map"></i> &nbsp;
																	Monuments<span class="badge">{{nbrmo}}</span></a></li>
																	
																	
																</ul>
															</div>
															
															<div class="widget  hidden-xs">
																<h5 class="widgetheading">Search</h5>
																<form method="POST" action="http://smartfordesign.net/smartend/frontend2/search" accept-charset="UTF-8" class="form-search"><input name="_token" type="hidden" value="JBmDjLRSsWRkduVLd3tZPyLf89LnpLPtnHUhkidA">
																<div class="input-group">
																	<input placeholder="Search for..." class="form-control" id="search_word" required="" name="search_word" type="text">
																	<span class="input-group-btn">
																		<button type="submit" class="btn btn-theme"><i class="fa fa-search"></i></button>
																	</span>
																</div>
															</form>
														</div>
														<div class="hot-properties hidden-xs">
															<h4>Most Viewed</h4>
				<div v-for="mostview in mostviews" :key="mostview._id">
															<div class="row">
																<div class="col-lg-4 col-sm-5">
																	<a href="http://smartfordesign.net/smartend/frontend2/PropertiesForSale/topic/53">
																		<img :src = "mostview.Image" class="img-responsive img-circle"/>
																	</a>
																</div>
																
																<div class="col-lg-8 col-sm-7">
																	<h5><a @click="navigateTo({
                              name :'show',
                              params : {spotId : mostview._id}
                            })">{{mostview.Title}}</a></h5>
																</div>
															</div>
				</div>	
														</div>
														
													
													</aside>
												</div>                                <div class="col-lg-9">
												<div class="row">
													<div class="col-lg-6">
													<div class="itemscul">
				<div v-for="culture in cultures" :key="culture._id">
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
															
															
															
															<p>
																{{culture.Description}}
															</p>
															<a @click="navigateTo({
                              name :'show',
                              params : {spotId : culture._id}
                            })" class="btn btn-primary">Read More</a>
				</div></div>
													
													</div>
													</div>
												<div class="col-lg-6">
													 <GmapMap style="  height: 700px;
        width: 500px;" :zoom="10" :center="{lat: 36.8366475, lng: 10.194840500000055}">
                                    <GmapMarker v-for="(marker, index) in markers"
                                      :key="index"
                                      :position="marker.position"
                                      />
                                      <GmapMarker/>
                                      </GmapMap>
												</div>	
												</div>

											</div>
										</div>
									</div>
								</div>
							</div>
</template>
<script>
window.addEventListener("load", function(event) {
  });
import CultureService from '@/services/CultureService'
export default{
	data(){
		return{
			cultures: null	,
			mostviews: null	,
			iduser : null,	
			markers : [],
  			x : null,
  			y : null,
  			countcategories : null,
  			nbrc : 0,
  			nbrg : 0,
  			nbrmu : 0,
  			nbrt : 0,
  			nbrmo : 0,
		}
	},
	async mounted(){
		var path =(this.$store.state.route.fullPath).toString()
		var theme =path.substr(path.lastIndexOf('/')+1, path.length) ;
		console.log(theme)
this.cultures = (await CultureService.showByCategorie(theme)).data 
	for (var i = 0; i < this.cultures.length; i++) {
		 this.markers.push({
  position: {
  lat: parseInt(this.cultures[i].Location.Lat),
  lng: parseInt(this.cultures[i].Location.Lng)
            }
          })
	}

this.mostviews =( await CultureService.mostviewd()).data 
this.countcategories =( await CultureService.countcategories()).data 
for (var i = 0; i < this.countcategories.length; i++) {
	if(this.countcategories[i]._id === "Galleries") this.nbrg = this.countcategories[i].count
	if(this.countcategories[i]._id === "Theatres") this.nbrt = this.countcategories[i].count
	if(this.countcategories[i]._id === "Museums") this.nbrmu = this.countcategories[i].count
	if(this.countcategories[i]._id === "Cinemas") this.nbrc = this.countcategories[i].count
	if(this.countcategories[i]._id === "Monuments") this.nbrmo = this.countcategories[i].count
	
}
	},
	watch:{
    async $route (to, from){
        this.show = false;
        var path =(this.$store.state.route.fullPath).toString()
		var theme =path.substr(path.lastIndexOf('/')+1, path.length) ;
        this.cultures = (await CultureService.showByCategorie(theme)).data
    }
}, 
route: {
        canReuse: false, // force to reload data
        activate(transition) {
        // load your data
    }
},
	  methods : {
        addspace(){
        this.$router.push({
            name : 'newspace'
        })
        },
         navigateTo(route){
        this.$router.push(route)
        }
    }
}
</script>
<style scoped>
  .itemscul{

    height: 700px;
    overflow: scroll;
  }
</style>