<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="(item,index) in menuItems" :key="index">
          <tr>
            <td><strong>{{item.name}}</strong></td>
          </tr>
          <tr v-for="(option,index) in item.options" :key="index">
            <td>{{option.size}}</td>
            <td>{{option.price}}</td>
            <td><button class="btn btn-sm btn-outline-success" @click="addToBasket({item,option})">+</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-sm-12 col-md-4">
      <div v-if="baskets.length === 0">
        <p class="text-center">购物车还没有商品</p>
      </div>
      <div v-else>
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in baskets" :key="index">
              <td>
                <button class="btn btn-sm" @click="decreaseQuantity(item)">-</button>
                <span>{{item.quantity}}</span>
                <button class="btn btn-sm" @click="increaseQuantity(item)">+</button>
              </td>
              <td>{{item.name + '-' + item.size}}</td>
              <td>{{item.price * item.quantity}}</td>
            </tr>
          </tbody>
        </table>
        <p>总价：{{total + "RMB"}}</p>
        <button class="btn btn-success btn-block">提交</button>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
  methods: {
    ...mapMutations(['addToBasket','decreaseQuantity','increaseQuantity','removeFromBasket'])
  },
  computed: {
    ...mapState(['baskets','menuItems']),
    ...mapGetters(['total'])
  }
}
</script>

<style>
</style>