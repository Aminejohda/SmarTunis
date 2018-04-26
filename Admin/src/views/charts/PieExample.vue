<script>
import { Pie } from 'vue-chartjs'
import CultureService from '@/services/CultureServices'
export default {
  extends: Pie,
  async mounted () {
this.countcategories =( await CultureService.countcategories()).data 
for (var i = 0; i < this.countcategories.length; i++) {
  if(this.countcategories[i]._id === "Galleries") this.nbrg = this.countcategories[i].count
  if(this.countcategories[i]._id === "Theatres") this.nbrt = this.countcategories[i].count
  if(this.countcategories[i]._id === "Museums") this.nbrmu = this.countcategories[i].count
  if(this.countcategories[i]._id === "Cinemas") this.nbrc = this.countcategories[i].count
  if(this.countcategories[i]._id === "Monuments") this.nbrmo = this.countcategories[i].count
  
}
    this.renderChart({
      labels: ['Cinemas', 'Galleries', 'Museums', 'Theatres', 'Monuments'],
      datasets: [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#11E6FF',
            '#DD1B16'
          ],
          data: [this.nbrc, this.nbrg, this.nbrmu, this.nbrt, this.nbrmo]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>
