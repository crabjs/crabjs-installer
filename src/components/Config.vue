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
            <el-button :loading="loading" @click.prevent="testConnection" :plain="true" size="small" :type="typeStatus"><i
                    :class="iconStatus"/> Test connection</el-button>
            <router-link to="/install">
                <el-button :disabled="incorrect" size="small" type="primary">Submit <i
                        class="el-icon-arrow-right el-icon-right"/></el-button>
            </router-link>
        </el-row>
        <i>Nếu thông tin kết nối không đúng, bạn vẫn có thể tiếp tục tuy nhiên sau đó bạn phải thay đổi thông tin này trong file cấu hình.</i>
        <br><br>
    </el-card>
</template>
<script>
  export default {
    data() {
      return {
        Crabjs: "Configuration!!",
        iconStatus: "el-icon-information el-icon-left",
        typeStatus: "warning",
        loading: false,
        incorrect: true
      };
    },
    methods: {
        next: function() {

        },
        testConnection: function() {
            var self = this;
            this.iconStatus = '';
            this.loading = true;
            setTimeout(()=> {
                self.loading = false;
                self.iconStatus = 'el-icon-check el-icon-left';
                self.typeStatus = 'success';
                self.incorrect = false;
            }, 1000)
        }
    }
  }



</script>