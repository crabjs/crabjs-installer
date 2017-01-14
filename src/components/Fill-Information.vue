<template>
    <el-card class="box-card">
        <h2>Welcome</h2>
        <hr><br>
        <span>Welcome to the famous five minute Crabjs installation process! You may want to browse the
        <a href="#">README document</a> at our GitHub. Otherwise, just fill in the information below and you'll
        be on your way to using the most extendabe and powerful personal publishing platform in the world.</span>
        <br><br>
        <h2>Information needed</h2>
        <hr><br>
        <span>Please provide the following information. Don't worry, you always change these settings later.</span>
        <br><br>
        <el-form label-position="left" label-width="120px">
            <el-form-item label="Site Title">
                <el-input placeholder="100dayproject Technical Blog"></el-input>
            </el-form-item>
            <el-form-item label="Username">
                <el-input placeholder="admin"></el-input>
            </el-form-item>
            <el-form-item label="Password">
                <el-input type="password"></el-input>
            </el-form-item>
            <el-form-item label="Your E-mail">
                <el-input placeholder="example@crabjs.com"></el-input>
            </el-form-item>
            <el-form-item label="Privacy">
                <el-checkbox label="Allow search engines to index this site." name="privacy"></el-checkbox>
            </el-form-item>
        </el-form>
        <el-row class="box-button">
            <router-link to="/installation"><el-button size="small" type="primary">Install Crabjs <i class="el-icon-arrow-right el-icon-right"/></el-button></router-link>
        </el-row>
    </el-card>
</template>