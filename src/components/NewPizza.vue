<template>

<form>
    <h3>Add New Pizza:</h3>
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="newPizza.name">
    </div>
    <div class="form-group">
        <label for="description">Description</label>
        <textarea type="text" id="description" v-model="newPizza.description" rows="5"></textarea>
    </div>
    <p>
        <strong>Option 1:</strong>
    </p>
    <div class="form-group">
        <label for="size1">Size("")</label>
        <input type="text" id="size1" v-model="newPizza.options[0].size">
    </div>
    <div class="form-group">
        <label for="price1">Price</label>
        <input type="text" id="price1" v-model="newPizza.options[0].price" >
    </div>
     <p>
        <strong>Option 2:</strong>
    </p>
    <div class="form-group">
        <label for="size">Size("")</label>
        <input type="text" id="size2" v-model="newPizza.options[1].size">
    </div>
    <div class="form-group">
        <label for="price2">Price</label>
        <input type="text" id="price2" v-model="newPizza.options[1].price">
    </div>
    <button type="button" class="btn_green" @click="createPizza">Add</button>
    {{ this.newPizza}}
</form>


</template>


<script>
import { dbMenuRef } from '../firebase.js'
import { addDoc } from 'firebase/firestore'

export default {
    name: 'addNewPizza',
 
data(){
    return {
        newPizza:{
  name: 'Eg. Margherita',
  'description': 'Eg. A delicious tomato based pizza topped with mozzarella',
  'options': [{
    'size': '',
    'price': ''
  }, {
    'size': '',
    'price': ''
  }]
}
    }
},
methods: {
   async createPizza(){
       alert('pizza created')
     const addedPizza = await addDoc(dbMenuRef, this.newPizza);
        console.log(addedPizza);
    
  }
}
}



</script>

<style>
.form-group{
    margin: 10px 0
}
label {
    display: block;
    margin: 0 0 10px 0
}
input,
textarea{
    width: 50%;
    padding: 5px;
    box-sizing: border-box;
    background-color: rgb(254, 254, 252);
    border: solic 1px #f79e38
}
button{
    background-color: rgb(63, 145, 63);
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
}
</style>