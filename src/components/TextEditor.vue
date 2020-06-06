<template>
<div>
    <div  v-on:click="hideTooltip" class="relative-position">
      <div v-if="edit" v-on:click.stop>
        <input type="text" v-model="items[index].text">
      </div>
       <TextComponent :items="items" @editText="editText" @selectedText="selectedText" :newLineId="newLineId" @newLine="newLine" />
    </div>
    <div class="button-block">
      <button @click="createColorText(indexColor++)">Color text</button>
      <button @click="createFontSize(indexColor++)">Font size</button>
      <button @click="createBackgColor(indexColor++)">Substrate color</button>
    </div>
    <TextManager :items="items"/>
</div>
</template>

<script>
import TextComponent from './TextComponent';
import TextManager from './TextManager';
export default {
  name: 'TextEditor',
  data(){
    return{
      items: [
        {
          text: 'Hi',
          fontSize: 32,
          color: '',
          backgroundColor: 'rgb(248, 187, 208)',
          isSelected: false,
          newLine: true,
          borderRadius: 4,
          paddingLeft: 3,
          paddingRight: 3
        },
        {
          text: 'My lovely',
          fontSize: 32,
          color: '',
          backgroundColor: 'rgb(248, 187, 208)',
          isSelected: false,
          newLine: false,
          borderRadius: 4,
          paddingLeft: 3,
          paddingRight: 3,
          marginRight: 4
        }, 
        {
          text: 'little',
          fontSize: 54,
          color: 'rgb(136, 14, 79)',
          backgroundColor: '',
          isSelected: false,
          newLine: false
        }, 
        {
          text: 'Ponny',
          fontSize: 32,
          color: 'rgb(186, 104, 200)',
          backgroundColor: 'rgb(248, 187, 0)',
          isSelected: false,
          marginLeft: 4,
          newLine: false
        }],
      edit: false,
      index: null,
      colors: ['red', 'blue', 'white', 'black', 'rgb(136, 14, 79)', 'rgb(186, 104, 200)', 'rgb(248, 187, 208)'],
      backgroundColors: ['rgb(248, 187, 208)', 'rgb(248, 187, 0)', 'rgb(136, 14, 79)', ''],
      fontSizes: [12,14,18,22,24,28,32,54],
      indexColor: 0,
      newLineId: null
    }
  },
  components: {
    TextComponent,
    TextManager
  },
  methods: {
    createColorText() {
      for(let i = 0; i < this.items.length;i++){
        if(this.items[i].isSelected === true) {
          if(this.indexColor > this.colors.length - 1){
            this.indexColor = 0;
          }
          this.items[i].color = this.colors[this.indexColor]
        }
      }
    },
    createBackgColor() {
      for(let i = 0; i < this.items.length;i++){
        if(this.items[i].isSelected === true) {
          if(this.indexColor > this.backgroundColors.length - 1){
            this.indexColor = 0;
          }
          this.items[i].backgroundColor = this.backgroundColors[this.indexColor]
        }
      }
    },
    createFontSize() {
      for(let i = 0; i < this.items.length;i++){
        if(this.items[i].isSelected === true) {
          if(this.indexColor > this.fontSizes.length - 1){
            this.indexColor = 0;
          }
          this.items[i].fontSize = this.fontSizes[this.indexColor]
        }
      }
    },
    editText(id) {
      this.index = id;
      this.edit = !this.edit
    },
    hideTooltip(){
      this.edit = false;
    },
    selectedText(id) {
      this.items[id].isSelected = !this.items[id].isSelected;
      this.newLineId = id
    },
    newLine(index){
      this.items[index].newLine = !this.items[index].newLine
      console.log(index)
    }

  },
  /*mounted() {
    this.mess.push(JSON.stringify(this.items))
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-block{
  margin-top: 40px;
  margin-right: 10px;
}

.relative-position{
  color: rgb(255, 255, 255);
  opacity: 1; 
  border-radius: 6px; 
  transform: rotate(0deg); 
  border: 0px solid rgb(70, 144, 247); 
  padding: 10px; text-align: center; 
  letter-spacing: 0px; font-size: 32px; 
  font-family: Aleo; font-weight: 300; 
  text-decoration: none; box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px; 
  text-transform: initial; font-style: normal; 
  z-index: 2002; 
  text-shadow: rgba(0, 0, 0, 0.2) 2px 2px 0px; 
  line-height: 1.5em;
}

</style>
