<template>

  <div class="projectStats">
  <!-- -->
    <div class="inside-banner">
        <div class="container">
            <h2>Urban Projects Stats</h2>
        </div>
    </div>
    <div class="container">
        <h2>Number of projects by theme</h2>

    <div>
        <table>
        <tr>
          <td>Theme</td>
          <td >Number of projects</td>
        </tr>
        <tr v-for="s in projectsByTheme">
          <td>{{s._id}}</td>
          <td width="550">{{s.nbr}}</td>
        </tr>

        </table>
    </div>

            <h2>Number of projects by Year and Month</h2>

    <div>
        <table>
        <tr>
          <td>Year</td>
          <td >Month</td>
          <td >Number of projects</td>
        </tr>
        <tr v-for="m in projectsByMonthAndYear">
          <td>{{m._id.year}}</td>
          <td >{{m._id.month}}</td>
          <td>{{m.nbr}}</td>
        </tr>

        </table>
    </div>
    </div>

    </div>

</template>

<script>
import ProjectService from '@/services/ProjectService'
export default {
  name: 'projectStats',
  data () {
    return {
      projectsByTheme:null,
      projectsByMonthAndYear:null,

    }
  },
  mounted () {
    this.getCountByTheme();
    this.getProjectsByMonthAndYear ()
    

  },
  methods: {
    async getCountByTheme () {
      const response = await ProjectService.getCountByTheme()
      this.projectsByTheme = response.data
    },
    async getProjectsByMonthAndYear () {
        const response = await ProjectService.getCountByMonthAndYear()
        this.projectsByMonthAndYear= response.data
      
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
