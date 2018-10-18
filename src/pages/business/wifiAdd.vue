<template>
  <imp-panel :title="form.id ? '编辑':'新增wifi'">
    <el-form ref="form" :model="form" label-width="180px">
      <el-form-item label="手机">
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-form-item label="wifi名称">
        <el-input v-model="form.wifiname"></el-input>
      </el-form-item>
       <el-form-item label="wifi密码">
        <el-input v-model="form.wifipwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="info" @click="onEditSubmit" v-if="form.id">保存</el-button>
        <el-button type="primary" @click="onSubmit" v-else>立即创建</el-button>
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
          id: null,
          wifiname: '',
          wifipwd: '',
          tel: ''
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
        this.$http.post(api.SYS_USER_UPDATE, this.form)
          .then(res => {
            this.form = res.data;
            this.$confirm('修改成功, 是否返回列表?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'success'
            }).then(() => {
              this.$router.push({path: 'userList'})
            })
          })
      },
      loadData(){
        if (this.$route.query && this.$route.query != null && this.$route.query.id && this.$route.query.id != null) {
          this.form.id = this.$route.query.id;
          this.$http.get(api.SYS_USER_GET + "?id=" + this.form.id)
            .then(res => {
              this.form = res.data;
            })
        }
      }
    }
  }
</script>
