<template>
    <div id="crabjs">
        <el-row :gutter="24">
            <el-col :span="4" :offset="2">
                <el-steps direction="vertical" :space="150" :active="1">
                    <el-step title="Get Started" icon="edit"></el-step>
                    <el-step title="Before Config" icon="upload"></el-step>
                    <el-step title="Configuration" icon="setting"></el-step>
                    <el-step title="Finish" icon="check"></el-step>
                </el-steps>
            </el-col>
            <el-col :span="12">
                <el-row class="box-logo">
                    <img src="https://vuejs.org/images/logo.png" width="80" class="image">
                </el-row>
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>
<style>
html {
    background: #F5F5F5;
    font-family: monospace
}

span, strong {
    line-height: 22px;
}

span, div {
    font-family: monospace;
}

#crabjs {
    margin-top:65px;
}

.box-logo {
    text-align: center;
}

.box-button {
    margin-top: 15px;
}

.el-row {
    margin-left:0 !important;
    margin-right: 0 !important;
    margin-bottom: 20px;
    padding: 0;
}
</style>
<script>
export default {
    data() {
        return {
            msg: 'Hello, Installer for Crabjs!!'
        }
    }
}
</script>
