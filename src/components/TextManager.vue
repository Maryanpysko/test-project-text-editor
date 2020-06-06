<template>
    <div class="manager-block">
        {{JsonItems}}
    </div>
</template>

<script>
import ItemsModel from '../models/ItemsModel'
export default {
    data() {
        return{
        
        }
    },
    props: {
        items: Array
    },
    computed: {
        JsonItems() {
            let currentItems = []
            for(let i = 0;i < this.items.length;i++){
                let element = this.items[i]
                let items = new ItemsModel(element)
                currentItems.push(items)
            }
            return JSON.stringify(currentItems)
        } 
    }
    

}
</script>
<style scoped>
.manager-block{
    margin-top: 100px;
}
</style>