<template>
<div>
    <div class="text-block">
        <span v-for="(item,index) in items" :key="index" @dblclick="editText(index)" 
        :style="{backgroundColor : item.isSelected ? 'grey' : item.backgroundColor, fontSize: item.fontSize + 'px',
         color: item.color, borderRadius: item.borderRadius + 'px', paddingLeft: item.paddingLeft + 'px', paddingRight: item.paddingRight + 'px',
         marginLeft: item.marginLeft + 'px', marginRight: item.marginRight + 'px'}"
        @click="selectedText(index)">{{item.text}}<br v-if="item.newLine"></span>
    </div>
     <button v-if="selected" @click="newLine">New line</button>
</div>
</template>
<script>
export default {
    data() {
        return {
            id: null,
            selected: false
        }
    },
    props: {
        items: Array,
        newLineId: Number
    },
    methods:{
        selectedText(index) {
            this.id=index;
            this.selected = !this.selected
            this.$emit('selectedText', index)
        },
        editText(index) {
            this.$emit('editText', index)
        },
        newLine(){
            this.$emit('newLine', this.id)
        }
    }
   
}
</script>
<style scoped>

</style>