<template>
  <form action="">
    <h3 class="text-muted my-5">添加新的Pizza</h3>
    <div class="form-group row">
      <label for="" class="col-sm-1">品种</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.name">
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-1">描述</label>
      <div class="col-sm-11">
        <textarea rows="5" class="form-control" v-model="newPizza.description"></textarea>
      </div>
    </div>
    <p><strong>选项1</strong></p>
    <div class="form-group row">
      <label for="" class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.size1">
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.price1">
      </div>
    </div>
    <p><strong>选项2</strong></p>
    <div class="form-group row">
      <label for="" class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.size2">
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.price2">
      </div>
    </div>
    <div class="form-group row">
      <button @click="addMenuItem(newPizza)" type="button" class="btn btn-success btn-block">添加</button>
    </div>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      newPizza: {}
    }
  },
  methods: {
    // ...mapMutations(['addMenuItem'])
    addMenuItem(newPizza) {
      this.$store.commit('addMenuItem', newPizza);
      this.newPizza = {}
    }
  }
}
</script>

<style>
</style>