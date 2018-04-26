<template>

  <div class="projects">
  <!-- -->
  <div class="inside-banner">
        <div class="container">
            <h2>Urban Project Detail</h2>
        </div>
    </div>
<div class="container">
    <div class="spacer">
        <div class="row">
            <div class="col-lg-3">
                <aside class="right-sidebar">
                    <div class="widget">
                        <ul class="list-group">
                            
                            <li class="list-group-item" v-for="s in projectsByTheme">

                                <a href="#">
                                    <i class="fa fa-android"></i> &nbsp;
                                    {{s._id}}<span class="badge">{{s.nbr}}</span></a>
                            </li>

                           

                        </ul>
                    </div>
                    <div class="widget  hidden-xs">
                        <h5 class="widgetheading">Search</h5>
                        <form method="POST" action="http://smartfordesign.net/smartend/frontend2/search"
                              accept-charset="UTF-8" class="form-search"><input name="_token" type="hidden"
                                                                                value="7o9ohNztxlKfRuBkqaXNCj8AX5F8ACHXMdM81bk7">
                            <div class="input-group">
                                <input placeholder="Search for..." class="form-control" id="search_word" required=""
                                       name="search_word" type="text">
                                <span class="input-group-btn">
                    <button type="submit" class="btn btn-theme"><i class="fa fa-search"></i></button>
                </span>
                            </div>

                        </form>
                    </div>
                    

                        
                        
                        
                        

                    
                </aside>
            </div>
            <div class="col-lg-9">
                <h1 class="main-title">
                    {{project.title}} 
                </h1>
            </div>
            <div class="col-lg-6">
                <article>
                    <div class="post-image">
                    <img style="width: 500px; height: 300px;"  :src="'http://localhost:3000/images/project/' + project.projectImage">
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="col-lg-12">
                                <div class="row field-row">
                                    {{project.description}}
                                </div>
                                <div class="row field-row">
                                    <div class="col-lg-3">
                                        Publish Date :
                                    </div>
                                    <div class="col-lg-9">
                                        {{project.publishDate}}
                                    </div>
                                </div>
                                <div class="row field-row">
                                    <div class="col-lg-3">
                                        Theme :
                                    </div>
                                    <div class="col-lg-9">
                                        {{project.theme}}
                                    </div>
                                </div>
                                <div class="row field-row">
                                    <div class="col-lg-3">
                                        Fase :
                                    </div>
                                    <div class="col-lg-9">
                                        {{project.fase}}
                                    </div>
                                </div>
                                <div class="row field-row" v-if="project.website!=''">
                                    <div class="col-lg-3">
                                        <i class="fa fa-globe"></i>Website :
                                    </div>
                                    <div class="col-lg-9">
                                        {{project.website}}
                                    </div>
                                </div>
                                <div class="row field-row" v-if="project.twitter!=''">
                                    <div class="col-lg-3">
                                       <i class="fa fa-twitter"></i> Twitter :
                                    </div>
                                    <div class="col-lg-9">
                                        {{project.twitter}}
                                    </div>
                                </div>
                                <div class="row field-row" v-if="project.facebook!=''">
                                    <div class="col-lg-3">
                                       <i class="fa fa-facebook"></i> Facebook :
                                    </div>
                                    <div class="col-lg-9">
                                        {{project.facebook}}
                                    </div>
                                </div>
                                <div class="row field-row" v-if="project.linkedin!=''">
                                    <div class="col-lg-3">
                                        <i class="fa fa-linkedin"></i>Linkedin :
                                    </div>
                                    <div class="col-lg-9">
                                        {{project.linkedin}}
                                    </div>
                                </div>
                                <div class="row field-row">
                                    <div class="col-lg-3">
                                        Location :
                                    </div>
                                    <div class="col-lg-9">
                                        {{project.location.Street}}
                                    </div>
                                </div>
                                <div class="row field-row">
                                    <GmapMap style="width: 510px; height: 395px;" :zoom="10" :center="{lat: 36.8366475, lng: 10.194840500000055}">
                                    <GmapMarker
                                    
                                    :position="{
                                        lat: Number(project.location.latitude),
                                        lng:Number(project.location.longitude) 
                                        }"
                                    />
                                    
                                    </GmapMap>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div dir="ltr">
                        
                        
                        
                        <div style="text-align: justify; "><br></div>
                    </div>
                    <div id="comments">
                    </div>
                </article>
            </div>
            <div class="col-lg-3">
                <div>
                    <div class="topic-info">
                        <div class="info">
                            <i class="fa fa-user"></i> <a href="http://smartfordesign.net/smartend/frontend2/user/1">{{project.Publisher.FirstName}}</a>
                        </div>
                        <div class="info">
                            <i class="fa fa-eye"></i> Visits : {{project.Views}}
                        </div>
                        <div class="info">
                            <i class="fa fa-comments"></i> Comments
                            : 0
                        </div>
                        <br>
                        Share :
                        <ul class="social-network share">
                            <li><a href="" class="facebook" data-placement="top" title="" target="_blank"
                                   data-original-title="Facebook"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="" class="twitter" data-placement="top" title="" target="_blank"
                                   data-original-title="Twitter"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="" class="google" data-placement="top" title="" target="_blank"
                                   data-original-title="Google+"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="" class="linkedin" data-placement="top" title="" target="_blank"
                                   data-original-title="linkedin"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="" class="pintrest" data-placement="top" title="" target="_blank"
                                   data-original-title="Pinterest"><i class="fa fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div id="new-comment">
                    <div class="row">
                        <div class="col-lg-12">
                            <br>
                            <h4><i class="fa fa-plus"></i> Add New Comment</h4>
                            <div class="newcomment">
                                <div class="commentForm">
                                    <div class="form-group">
                                        <textarea placeholder="Comment" class="form-control" id="comment_message"
                                                  rows="5" data-msg="Please enter your comment" data-rule="required"
                                                  name="comment_message" cols="50"></textarea>
                                        <div class="validation"></div>
                                    </div>
                                    <div>
                                        <button type="submit" class="btn btn-theme">Send Comment</button>
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

  <!-- -->
  

    </div>
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
        projectsByTheme:null,
      projects: [],
      project:[]
    }
  },
  mounted () {
    this.getPosts();
    this.getProject();
    this.getCountByTheme();
    console.log(this.project);
  },
  methods: {
      async getCountByTheme () {
      const response = await ProjectService.getCountByTheme()
      this.projectsByTheme = response.data
    },
      async getProject () {
      const response = await ProjectService.getProject({
        id: this.$route.params.id
      })
      this.project = response.data[0]
    },
    async getPosts () {
      const response = await ProjectService.fetchProjects()
      this.projects = response.data
    },
    async deletePost (id) {
      await PostsService.deletePost(id);
      alert(' deleted succesfully');
      this.$router.push({ name: 'Posts' })
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
