<template>
  <imp-panel :title="form.user_id? '编辑':'新增客服'">
    <el-form ref="form" :model="form" label-width="180px">
     <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-form-item label="登录密码" v-if="!form.id">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="性别" :label-width="formLabelWidth">
        <el-radio class="radio" v-model="form.gender" :label="1">男</el-radio>
        <el-radio class="radio" v-model="form.gender" :label="2">女</el-radio>
      </el-form-item>
      <el-form-item label="生日">
        <el-input v-model="form.birthday" placeholder="格式:1989-10-11"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="视力情况">
        <el-input v-model="form.eyesight"></el-input>
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
          id: '',
          name: '',
          tel: '',
          password: '',
          gender: '',
          birthday: '',
          address: '',
          eyesight: '',
        }
      }
    },
    created(){
      this.loadData();
    },
    methods: {
      onSubmit(){
          console.log(this.form);
          businessApi.customerAdd(this.form)
          .then(res => {
            console.log(res);
            if ( res.code == 200 || res.code == "200" ) {
              this.form = res.data;
              this.$confirm('添加成功, 是否返回列表?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'success'
              }).then(() => {
                this.$router.push({path: 'customer'})
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
        businessApi.customerUpdate(this.form)
          .then(res => {
            console.log(res);
            if ( res.code == 200 && res.code == "200" ) {
              this.$confirm('修改成功, 是否返回列表?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'success'
              }).then(() => {
                this.$router.push({path: 'customer'})
              })
            } else {
              this.$message(res.msg);
            }      
          })
      },
      loadData(){
        if (this.$route.query && this.$route.query != null && this.$route.query.id && this.$route.query.id != null) {
          this.form.id = this.$route.query.id;
          businessApi.getCustomer({id:this.form.id})
          .then(res => {
            this.form = res.data;
          });
        }
      }
    }
  }
</script>
