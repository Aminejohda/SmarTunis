<template>
<div class="animated fadeIn">
  <b-card-group columns class="card-columns cols-2">
    <b-card header="Projects By Theme">
      <div class="chart-wrapper">
        <ProjectsByTheme/>
      </div>
      
    </b-card>
    
    <div class="chart-wrapper">
        <ProjectsByMonthAndYear/>
      </div>
    
  </b-card-group>
</div>
</template>

<script>
import ProjectsByTheme from '@/views/project/ProjectsByTheme'
import ProjectsByMonthAndYear from '@/views/project/ProjectsByMonthAndYear'

export default {
    name: 'stat',
    components: {ProjectsByTheme,ProjectsByMonthAndYear}
  }

</script>