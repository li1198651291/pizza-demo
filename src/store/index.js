import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baskets: [],
    menuItems: [
      {
        name: "榴莲Pizza",
        description: "这是喜欢吃榴莲朋友的最佳选择",
        options: [{
          size: 9,
          price: 38
        }, {
          size: 12,
          price: 48
        }]
      },
      // {
      //   name: "芝士Pizza",
      //   description: "芝士杀手",
      //   options: [{
      //     size: 9,
      //     price: 38
      //   }, {
      //     size: 12,
      //     price: 48
      //   }]
      // },
      // {
      //   name: "夏威夷Pizza",
      //   description: "众多人的默认选择",
      //   options: [{
      //     size: 9,
      //     price: 36
      //   }, {
      //     size: 12,
      //     price: 46
      //   }]
      // }
    ]
  },
  getters: {
    total (state) {
      let totalCost = 0;
      for (const index in state.baskets) {
        let item = state.baskets[index];
        totalCost += item.price * item.quantity
      }
      return totalCost
    }
  },
  mutations: {
    addToBasket (state, payload) {
      let newItem = {
        name: payload.item.name,
        size: payload.option.size + "寸",
        price: payload.option.price,
        quantity: 1
      }
      if (state.baskets.length > 0) {
        let oldItem = state.baskets.filter(item => item.name == newItem.name && item.size == newItem.size);
        if (oldItem.length > 0) {
          oldItem[0].quantity++
        } else {
          state.baskets.push(newItem)
        }
      } else {
        state.baskets.push(newItem)
      }
    },
    decreaseQuantity (state, item) {
      item.quantity--
      if (item.quantity === 0) {
        this.commit('removeFromBasket', item)
      }
    },
    increaseQuantity (state, item) {
      item.quantity++
    },
    removeFromBasket (state, item) {
      state.baskets.splice(state.baskets.indexOf(item), 1)
    },
    addMenuItem (state, newPizza) {
      let newItem = {
        name: newPizza.name,
        description: newPizza.description,
        options: [{
          size: newPizza.size1,
          price: newPizza.price1
        },{
          size: newPizza.size2,
          price: newPizza.price2
        }]
      }
      state.menuItems.push(newItem);
      console.log(newPizza)
    },
    removeFromMenu(state, item) {
      state.menuItems.splice(state.menuItems.indexOf(item), 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
