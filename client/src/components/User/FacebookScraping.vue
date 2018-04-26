<template>

  <div class="facebookScraping">
  <!-- -->
    <div class="inside-banner">
        <div class="container">
            <h2>Test facebook webscraping</h2>
        </div>
    </div>
    <div class="container">
    <div class="col-lg-6 col-sm-6 ">
    Put your facebook username
    <input class="form-control" type="text" @change="change" placeholder="jhon.doe">
    </div>
    {{fb}}
    </div>

    </div>

</template>

<script>
import ProjectService from '@/services/ProjectService'
export default {
  name: 'facebookScraping',
  data () {
    return {
      projectsByTheme:null,
      projectsByMonthAndYear:null,
      fb:null

    }
  },
  mounted () {    

  },
  methods: {
    async change(event){
        const response = await ProjectService.getScrapingFacebook(event.target.value)
        console.log(response.data)
        this.fb=response.data
       /*await  ProjectService.getScrapingFacebook(event.target.value).then(response => {
          console.log(response.data.data)
           

							}).catch(error => {
				    			console.log(error)
							})*/
       /* setTimeout(() => {
           const response= ProjectService.getScrapingFacebook(event.target.value)
              
          }, 3000)
        
        console.log(response.data)*/

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
