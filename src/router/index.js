import ProductForm from '../views/ProductForm.vue'
import ProductList from '../views/ProductList.vue'

const routes    =   [
        {
            path:   '/ProductForm/:id?',
            name:   'Form',
            component:  ProductForm
        },
        {
            path:   '/',
            name:   'List',
            component:  ProductList
        },
        
    ]

export default routes