<template>
  <imp-panel :title="form.user_id? '编辑':'新增wifi'">
    <el-form ref="form" :model="form" label-width="180px"  v-if="form.user_id">
      <el-form-item label="wifi密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="info" @click="onEditSubmit">保存</el-button>
      </el-form-item>
    </el-form>
    <el-form ref="form" :model="form" label-width="180px" v-else>
     <el-form-item label="wifi名称">
        <el-input v-model="form.ssid"></el-input>
      </el-form-item>
       <el-form-item label="wifi密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
          <el-form-item label="手机">
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </imp-panel>
</template>
<script>
  import panel from "../../components/panel.vue"
  import * as api from "../../api"
  import * as businessApi from "../../services/business"
  import {mapGetters, mapActions, mapMutations} from 'vuex'


  export default {
    components: {
      'imp-panel': panel
    },
    data(){
      return {
        form: {
          user_id: '',
          ssid: '',
          password: '',
          tel: '',
          version: ''
        }
      }
    },
    created(){
      this.loadData();
    },
    methods: {
      onSubmit(){
          console.log(this.form);
          businessApi.wifiAdd(this.form)
          .then(res => {
            console.log(res);
            if ( res.code == 200 || res.code == "200" ) {
              this.form = res.data;
              this.$confirm('添加成功, 是否返回列表?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'success'
              }).then(() => {
                this.$router.push({path: 'wifi'})
              })
            } else {
              this.$message({
                  type: 'info',
                  message: res.msg
              })
            }
            
          });
      },
      onEditSubmit(){
        businessApi.wifiUpdate(this.form)
          .then(res => {
            console.log(res);
            if ( res.code == 200 && res.code == "200" ) {
              this.$confirm('修改成功, 是否返回列表?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'success'
              }).then(() => {
                this.$router.push({path: 'wifi'})
              })
            } else {
              this.$message(res.msg);
            }      
          })
      },
      loadData(){
        if (this.$route.query && this.$route.query != null && this.$route.query.uid && this.$route.query.uid != null) {
          this.form.user_id = this.$route.query.uid;
          this.form.ssid = this.$route.query.ssid;
          businessApi.getWifi({uid:this.form.user_id,ssid: this.form.ssid})
          .then(res => {
            this.form = res.data;
          });
        }
      }
    }
  }
</script>
