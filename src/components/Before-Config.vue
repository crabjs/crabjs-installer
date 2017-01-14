<template>
    <el-card class="box-card">
        <span>Welcome to Crabjs. Before getting started, we need some information on the database. You will need to know the following items
        before proceeding.</span>
        <ul>
            <li>Database name</li>
            <li>Database username</li>
            <li>Database password</li>
            <li>Database host</li>
        </ul>
        <strong>
            If for any reason this automatic file creation doesn't work, don't worry. All this does is fill in the
            database
            information to a configuration file. You may also simply open <i>crab-config-sample.js</i> in a text editor,
            fill in your information, and save it as crab-config.js.
        </strong>
        <br>
        <br>
        <span>In all likelihood, these items were supplied to you by your Server. If you do not have this information, then you will need to contact
        theme before you can continue. If you're all ready...</span>

        <el-row class="box-button">
            <router-link to="/config">
                <el-button @click="next" size="small" type="primary">Let's go! <i class="el-icon-arrow-right el-icon-right"/>
                </el-button>
            </router-link>
        </el-row>
    </el-card>
</template>

<style scoped>
    li {
        list-style-type: decimal;
    }

</style>

<script>
export default {
    data() {
        return {
            crabjs: 'Before Configuration'
        }
    },
    methods: {
        next: function(el) {
            this.$parent.$parent.$parent.stepActive = 2
            this.$parent.active = 2;
        }
    }
}


</script>