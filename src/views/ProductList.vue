<template>
  <v-container>
     <!-- <v-btn
          color="primary darken-1"
          dark
          top
          right
          fab
          absolute
          small
          class="mt-8"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn> -->
        <v-card class="text-right elevation-0 pa-5 pr-3 mb-3">
          <v-btn
            tile
            color="primary darken-1"
            to="/ProductForm"
            small
          >
            <!-- <v-icon left>
              mdi-plus
            </v-icon> -->
            Add Product
          </v-btn>
        </v-card>
        <!-- <v-card>
          <v-subheader class="primary darken-1 white--text subtitle-1">Products</v-subheader>
        </v-card> -->
      <v-data-table
        :headers="headers"
        :items="$store.state.products"
        class="elevation-3"
      >
        <template v-slot:item.action="{ item }">
            <v-btn
              icon
              color="primary darken-1"
              @click="editProduct(item.id)"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              icon
              color="red"
              @click="deleteProduct(item.id)"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
        </template>
      </v-data-table>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            headers:  [
            { text: 'Sl. No', value: 'id' },
            { text: 'Name', value: 'name' },
            { text: 'Category', value: 'category' },
            { text: 'Manufactored Date', value: 'mfd', sortable: false },
            { text: 'Currency', value: 'currency' },
            { text: 'Price', value: 'price' },
            { text: 'Action', value: 'action', sortable: false }
          ],
        }
    },
    methods: {
      deleteProduct(id) {
        this.$store.dispatch('deleteProduct',id);
      },
      editProduct(id) {
        this.$router.push('/ProductForm/'+id);
      }
    }
}
</script>

<style>

</style>