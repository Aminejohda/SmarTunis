<template>
	<div>
  <div class="inside-banner a14888112237145">
    <div class="container">
      <span class="pull-right"><a href="http://smartfordesign.net/smartend/frontend2"><i class="fa fa-home"></i></a> /
      Profile
    </span>
    <h2>
    Profile
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
          		<li class="eltd-listing-active-item"><a @click="navigateTo({name :'myEvents' })"><div><i class="fa fa-eye"></i>My Events</div></a></li>
          		<li class="eltd-listing-active-item"><a @click="navigateTo({name :'myProjects' })"><div><i class="fa fa-eye"></i>My Project</div></a></li>
          		<li class="eltd-listing-active-item"><a @click="navigateTo({name :'myspaces' })"><div><i class="fa fa-eye"></i>Cultural Spaces</div></a></li>
          	</ul>
          </div>
          <h1 class="blacktitle">
            My Profile
          </h1>

          <div class="row">
            <div class="col-lg-12">

            <div class="col-lg-2"></div>
            <div class="col-lg-8">
              <div class="col-lg-12 fields">


                <div class="row field-row">
                  <div class="col-lg-12">
                  <p>Edit your profile.</p>
                  </div>
                    <div class="container">
                        <div class="col-lg-6 col-sm-6 ">
                        Put your facebook username
                        <input class="form-control" type="text" @change="change" placeholder="jhon.doe" v-model="fbAccount">
                        </div>
                        {{fb}}
                    </div>
                    <div class="container">
                        <div class="col-lg-6 col-sm-6 ">
                        Put your twitter account
                        <input id="Title" name="Title" type="text" @change="scrape" placeholder="twitter account" class="form-control input-md" required="" v-model="id">
                        </div>
                        {{interests}}
                    </div>
                    
                    <div>
                        <button type="submit" class="btn btn-theme" @click="editProfile">Edit Profile</button>
                    </div>
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
</template>
<script>
import ProjectService from '@/services/ProjectService'
import ScrappingService from '@/services/ScrappingService'

export default {
  name: 'facebookScraping',
  data () {
    return {
      fb:null,
      fbAccount:'',
      interests: '',
      id:''
    }
  },
  async mounted(){
      this.fbAccount=this.$store.state.user.Facebookaccount
      this.id=this.$store.state.user.Twitteraccount
      this.getUserInfo();
      if(this.$store.state.isUserLoggedIn){
        this.iduser = this.$store.state.user
        //this.fbAccount=this.$store.state.user.Facebookaccount
        console.log(this.iduser)
      }
      else{
        this.$router.push({ name: 'register' })
        console.log(this.$store.state);
      }
  },
  methods: {
    navigateTo(route){
        this.$router.push(route)
    },
    async change(event){
        const response = await ProjectService.getScrapingFacebook(event.target.value)
        console.log(response.data)
        this.fb=response.data

    },
    async getUserInfo () {
      const response = await ScrappingService.getUser({
        id: this.$store.state.user._id
      })
      this.fbAccount = response.data[0].Facebookaccount

    },
    async editProfile () {
      await ScrappingService.editProfile({
        id: this.$store.state.user._id,
        Facebookaccount:this.fbAccount,
        /*interestsFacebook: [this.fb],
        interestsTwitter:[this.interests],*/
        Twitteraccount:this.id
      })
      this.$swal(
        'Great!',
        ` Your profile has been updated!`,
        'success'
      )
      //alert(this.project.title+' updated succesfully');
      this.$router.push({ name: 'profile' })
    },
    async scrape(){
        this.ScrapeUser(this.id);
        setTimeout(()=>{
          this.CategorizeUser(this.id);

        },3000 );
      },
      async ScrapeUser (iduser) {
        const response = await ScrappingService.ScrapeUser(iduser)
        console.log(response.data)
        console.log("test1")

      },
      async CategorizeUser (iduser) {
        const response = await ScrappingService.CategorizeUser(iduser)
        this.interests = response.data[0];
        console.log(response.data[0])
        console.log("test2")


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
