<template>
  <div>
  <div class="inside-banner a14888112237145">
    <div class="container">
      <span class="pull-right"><a href="http://smartfordesign.net/smartend/frontend2"><i class="fa fa-home"></i></a> /
      Add New Product
    </span>
    <h2>
    Add New Product
    </h2>
  </div>
</div>
<div class="container">
  <div class="listing spacer">
    <div class="row">
       <div class="col-lg-12 cartcustom">
        <div class="item">
         <h1 class="blacktitle">
            Add Product
          </h1>
          <div class="row">
            <div class="col-lg-12">
              <div class="col-lg-12 fields">
                <div class="row field-row">
                  <div class="col-lg-4">
                    Category :
                  </div>
                  <div class="col-lg-8">
                    <select v-model="theme">
                     <option value="Cinemas">Cinemas</option>
                     <option value="Galleries">Galleries</option>
                     <option value="Museums">Museums</option>
                     <option value="Theatres">Theatres</option>
                     <option value="Monuments">Monuments</option>
                    </select>
                  </div>
               </div>
               <div class="row field-row">
                  <div class="col-lg-4">
                   Description:
                  </div>
                  <div class="col-lg-8">
                    <textarea v-model="description" placeholder="Description"></textarea>
                  </div>
                </div>
                
                
                <div class="row field-row">
                  <div class="col-lg-4">
                    Image :
                  </div>
                  <div class="col-lg-8">
                    <input type="file" @change="processFile($event)" id="files" >
                    
                  </div>
                </div>

                <div class="row field-row">
                  <div class="col-lg-4">
                    Price :
                  </div>
                  <div class="col-lg-8">
                    <input type="text" name="price" v-model="price" placeholder="Price">
                  </div>
                </div>
                 <div class="row field-row">
                  <div class="col-lg-4">
                    <button @click="newspace" class="btn btn-primary"> Done </button><br><br><br>
                  </div>
                  <div class="col-lg-8">
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
import ProductService from'@/services/ProductService'
export default {
  name: 'addProduct',
  data () {
    return {
      category: '',
      description: '',
      selectedFile:null,
      Price: ''
    }
  },
  methods: {
    async addProduct () {
      var data = new FormData();
      data.append('Image', this.selectedFile);
      data.append('Description', this.description);
      data.append('Category', this.category);
      data.append('Price', this.price);
      await ProductService.addProduct(data)
      /*this.$swal(
        'Great!',
        `Your Project has been added!`,
        'success'
      )*/
      alert(this.title+' added succesfully');
      this.$router.push({ name: 'products' })
    },
    onFileSelected(event){
          this.selectedFile=event.target.files[0];
          console.log(this.selectedFile);
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
   #map {
       height: 300px;
        width: 500px;
      }
</style>