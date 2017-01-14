<template>
    <el-card class="box-card">
                    <span>There doesn't seem to be a <i>crab-config.js</i> file. I need this before we can get started.</span>
                    <br><br>
                    <span>Need more help? <a href="#">Got it.</a></span>
                    <br><br>
        <span>You can create a <i>crab-config.js</i> file through a web interface, but this doesn't work for all server setups. The safest way is
        to manually create the file.</span>
        <br><br>

        <el-row class="box-button">
            <router-link to="/setup-config"><el-button size="small" type="primary">Create a Configuration File</el-button></router-link>
        </el-row>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            crabjs: 'Get Started'
        }
    }
}

</script>