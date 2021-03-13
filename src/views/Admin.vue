<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <NewPizza></NewPizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in menuItems" :key="index">
            <td>{{item.name}}</td>
            <td>
              <button @click="removeFromMenu(item)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import NewPizza from '../components/NewPizza'
export default {
  components: {
    NewPizza
  },
  computed: {
    ...mapState(['menuItems'])
  },
  methods: {
    ...mapMutations(['removeFromMenu'])
  }
}
</script>

<style>

</style>