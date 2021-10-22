<template>
    <div class="side-bar">
        <ul>
            <li>
                <router-link to="/">首页</router-link>
            </li>
        </ul>
        <template v-for="(item,index) in $store.state.userRouters">
            <MenuItem :key="index" :item="item"></MenuItem>
        </template>
    </div>
</template>

<script>
import MenuItem from "./MenuItem";
export default {
    name:'MyHeader',
    components:{
        MenuItem
    },
}
</script>
<style lang="scss" scoped>
    .side-bar{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        height: 100%;
        width: 200px;
        padding-top: 90px;
        box-sizing: border-box;
        background-color: #ededed;
    }
</style>