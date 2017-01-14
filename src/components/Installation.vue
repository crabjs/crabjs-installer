<template>
    <el-card class="box-card">
        <h2>Success!</h2>
        <hr><br>
        <span>Crabjs has been installed. Were you expecting more steps? Sorry to disappoint.</span>
        <br><br>
        <el-form label-position="left" label-width="120px">
            <el-form-item label="Username">
                <span>admin</span>
            </el-form-item>
            <el-form-item label="Password">
                <i>Your chosen password.</i>
            </el-form-item>
        </el-form>
        <el-row class="box-button">
            <router-link to="/login.crab"><el-button size="small" type="primary">Log In</el-button></router-link>
        </el-row>
    </el-card>
</template>