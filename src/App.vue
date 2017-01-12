<template>
    <div>
        <el-switch
                v-model="value2"
                on-color="#13ce66"
                off-color="#ff4949">
        </el-switch>
        <p v-show="value2">{{msg}}</p>
    </div>
</template>
<style>
    div {
        text-align: center;
        padding-top: 25px;
    }
</style>
<script>
export default {
    data() {
        return {
            msg: 'Hello, Installer for Crabjs!!',
            value2: true
        }
    }
}
</script>
