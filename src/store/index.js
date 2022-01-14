import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =   new Vuex.Store({
    state:  {
        products:   [
            {
                id:         1,
                name:       'one plus 3T',
                category:   'Electronics',
                mfd:        '14/07/2020',
                currency:   'INR',
                price:      10000
            },
            {
                id:         2,
                name:       'samsung galaxy A51',
                category:   'Electronics',
                mfd:        '13/07/2020',
                currency:   'INR',
                price:      25000
            },
            {
                id:         3,
                name:       'iphone 12 pro max',
                category:   'Electronics',
                mfd:        '14/08/2020',
                currency:   'INR',
                price:      100000
            },
            {
                id:         4,
                name:       'one plus 4T',
                category:   'Electronics',
                mfd:        '12/09/2020',
                currency:   'INR',
                price:      12000
            },
        ]
    },
    actions: {
        addProduct({commit}, objNewProduct) {
            commit('addProduct', objNewProduct);
        },
        editProduct({commit}, objProduct) {
            commit('editProduct', objProduct);
        },
        deleteProduct({commit}, intProductId) {
            commit('deleteProduct', intProductId);
        }
    },
    mutations: {
        addProduct(state, objNewProduct) {
            state.products   =   [...state.products, {...objNewProduct, id: state.products.length+1}]
            console.log(state.products);
        },
        editProduct(state, objProduct) {
            state.products  =   state.products.map((val) => {
                return val.id === objProduct.id ? objProduct : val;
            })
            console.log(state.products);
        },
        deleteProduct(state, intProductId) {
            state.products  =   state.products.filter((val) => val.id != intProductId)
            console.log(state.products);
        }
    }
})
