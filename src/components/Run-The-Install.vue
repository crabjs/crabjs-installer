<template>
    <el-card class="box-card">
                    <span>
                        All right, sparky! You've made it through this part of the installation. Crabjs can now communicate with your database.
                        If you are ready, time now to...
                    </span>
        <el-row class="box-button">
            <router-link to="/fill-information"><el-button size="small" type="primary">Run the install</el-button></router-link>
        </el-row>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            crabjs: 'Run The Install'
        }
    }
}

</script>