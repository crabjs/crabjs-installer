<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>Below you should enter your database connection details. If you're not sure about these, contact your server.</span>
        </div>
        <el-form label-position="left" label-width="120px">
            <el-form-item label="Database name">
                <el-input placeholder="crabjs"></el-input>
            </el-form-item>
            <el-form-item label="Username">
                <el-input placeholder="root"></el-input>
            </el-form-item>
            <el-form-item label="Password">
                <el-input type="password"></el-input>
            </el-form-item>
            <el-form-item label="Database host">
                <el-input placeholder="127.0.0.1"></el-input>
            </el-form-item>
        </el-form>
        <el-row class="box-button">
            <router-link to="/install"><el-button size="small" type="primary">Submit <i class="el-icon-arrow-right el-icon-right"/></el-button></router-link>
        </el-row>
    </el-card>
</template>
<script>
  export default {
    data() {
      return {

      };
    }
  }
</script>