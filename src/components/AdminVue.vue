<template>
<div class="admin-wrapper">
    <div class="current_user_wrapper"></div>
    <NewPizza />
    <div class="menu_wrapper">
        <h3>Menu:</h3>
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Remove from Menu</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Margherita</td>
                    <td>
                        <button type="button" class="btn_red">&times;</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="order_wrapper">
        <h3>Current Orders (5):</h3>
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Size</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr class="order_number">
                <th colspan="4">
                    <strong>Order Number: 4</strong>
                    <button type="button" class="btn_red">&times;</button>
                </th>
                </tr>
                <tr>
                    <td>Margherita</td>
                    <td>9"</td>
                    <td>4</td>
                    <td>$13</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>   
</template>

<script>
import NewPizza from './NewPizza.vue'


export default{
    name: 'adminVue',
    components: {
        NewPizza
}
}
</script>

<style scoped>
.admin_wrapper{
    margin: 10px;
}

.current_user_wrapper,
.order_wrapper,
.menu_wrapper{
    margin: 10px 0;
    padding: 10px;
    border: solid 1px #f79e38
}
table{
    text-align: left;
    width: 70vw;
}

.order_number th{
    background: #ddd;
}
.order_number button{
    margin: 0 10px;
}



</style>