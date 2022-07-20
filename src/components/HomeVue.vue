<template>
<div class="background">
    <div class="background-overlay">
        <h2>Welcome to Pizza Planet!</h2>
        <img src="../assets/roller.png" alt="roller">
        <h3>Feeling hungry?</h3>
        <button class="order">Let's Order!</button>
    </div>

</div>


</template>

<script>
export default{
    name: "HomeVue"
}

</script>

<style>
h2, h3 {
    margin: 2%
}

.background{
    background: url('../assets/dough.jpg');
    background-size: cover;
    height: 30vh;
    display: flex;
    text-align: center;
    align-items: center;
}
.background-overlay {
    display: flex;
    flex-direction: column;
    background: #f1e6da;
    opacity: 0.8;
    width: 50%;
    margin: 0 auto;
    padding: 5px;
    align-items: center;
}
.background-overlay > img{
    max-width: 15%;
}

.order{
    background-color: #f79f38;
    border-radius: 3px;
    border-bottom: 10px;
    padding: 10px;
    cursor: pointer;
}
</style>