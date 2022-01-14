<template>
  <v-container>
      <v-layout justify-center>
        <v-card class="ma-5 mt-15" style="width: 40%">
            <!-- <v-toolbar
                color="primary darken-1"
                dark
                >
                <v-toolbar-title>Add Product</v-toolbar-title>
            </v-toolbar> -->
            <v-subheader class="primary darken-1 white--text subtitle-1 text-center">Add Product</v-subheader>
            <v-form class="pa-5" ref="form" v-model="valid" lazy-validation>
                    <v-text-field
                        v-model="objProduct.name"
                        :rules="[v => !!v || 'Name is required', v => !!v && v.length > 20 == false || 'Name cannot be more than 20 letters']"
                        :counter="20"
                        label="Name"
                        required
                    ></v-text-field>

                    <v-select
                        v-model="objProduct.category"
                        :rules="[v => !!v || 'Category is required']"
                        :items="categoryItems"
                        label="Category"
                        required
                    ></v-select>

                    <v-menu
                        v-model="menu"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="objProduct.mfd"
                            :rules="[v => !!v || 'Manufactored Date is required']"
                            label="Manufactored Date"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker
                        v-model="objProduct.mfd"
                        @input="menu = false"
                        :max="new Date().toISOString().slice(0, 10)"
                        ></v-date-picker>
                    </v-menu>

                    <v-select
                        v-model="objProduct.currency"
                        :items="currencyItems"
                        :rules="[v => !!v || 'Currency is required']"
                        label="Currency"
                        required
                    ></v-select>

                    <v-text-field
                        v-model="objProduct.price"
                        :rules="[v => !!v || 'Price is required',
                                v => !!v && (objProduct.currency == 'INR' ? v <= 100 == false : v <= 5 == false) || 'Price cannot be less than $5 or ₹100']"
                        type="number"
                        label="Price"
                        required
                    ></v-text-field>
                    
                    <div class="text-center">
                        <v-btn
                        class="mr-4"
                        tile
                        color="primary darken-1"
                        @click="validate"
                        :disabled="!valid"
                        small
                        >
                        Save
                        </v-btn>
                        <!-- <v-btn @click="clear">
                        clear
                        </v-btn> -->
                    </div>
                </v-form>
        </v-card>
      </v-layout>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            objProduct: {},
            categoryItems: [
                'Electronics',
                'Toys',
                'Fashions',
                'Grocery'
            ],
            currencyItems: [
                'INR',
                'USD'
            ],
            menu: false,
            // mandatoryRule: [
            //     v => !!v || 'Required'
            // ],
            valid: false,
            intProductId: this.$route.params.id
        }
    },
    created() {
        // const intProductId    =   this.$route.params.id;

        if(this.intProductId) {
            const totalProducts   =   this.$store.state.products;
            const tempProduct     =   totalProducts.find((val) => val.id == this.intProductId);
            if(tempProduct) {
                this.objProduct =   tempProduct;
            }
        }
    },
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.addEditProduct();
            }
        },
        addEditProduct() {
            if(this.intProductId) {
                this.$store.dispatch('editProduct',this.objProduct)
            }
            else {
                this.$store.dispatch('addProduct', this.objProduct)
            }
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>