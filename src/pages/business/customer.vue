<template>
  <imp-panel>
    <h3 class="box-title" slot="header" style="width: 100%;">
      <el-row style="width: 100%;">
        <el-col :span="12">
          <router-link :to="{ path: 'customerAdd'}">
            <el-button type="primary" icon="plus">新增</el-button>
          </router-link>
        </el-col>
        <el-col :span="12">
          <div class="el-input" style="width: 200px; float: right;">
            <i class="el-input__icon el-icon-search"></i>
            <input type="text" placeholder="输入用户手机号" v-model="searchKey" @keyup.enter="search($event)"
                   class="el-input__inner">
          </div>
        </el-col>
      </el-row>
    </h3>
    <div slot="body">
      <el-table
        :data="tableData.rows"
        border
        style="width: 100%"
        v-loading="listLoading"
        @selection-change="handleSelectionChange">
        <!--checkbox 适当加宽，否则IE下面有省略号 https://github.com/ElemeFE/element/issues/1563-->
        <el-table-column
          prop="id"
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="tel"
          label="手机号">
        </el-table-column>
        <el-table-column
          prop="gender"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="avatar"
          label="头像">
        </el-table-column>
         </el-table-column>
         <el-table-column
          prop="birthday"
          label="生日">
        </el-table-column>
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          prop="eyesight"
          label="视力">
        </el-table-column>
        <el-table-column label="操作" width="285">
          <template slot-scope="scope">
            <el-button
              size="small"
              type="default"
              icon="edit"
              @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handlePwdConfig(scope.$index, scope.row)">更新密码
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="tableData.pagination.pageNo"
        :page-sizes="[5, 10, 20]"
        :page-size="tableData.pagination.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.pagination.total">
      </el-pagination>
      <el-dialog title="修改客服密码" v-model="dialogVisible" size="tiny">
         <el-form ref="form" :model="form" label-width="180px">
            <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
            </el-form-item>
         </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="customerPwdUpdate">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </imp-panel>
</template>

<script>
  import panel from "../../components/panel.vue"
  import * as api from "../../api"
  import testData from "../../../static/data/data.json"
  import * as businessApi from '../../services/business'

  export default {
    components: {
      'imp-panel': panel
    },
    data(){
      return {
        form: {
          id: '',
          tel: '',
          password: '',
        },
        currentRow: {},
        dialogVisible: false,
        dialogLoading: false,
        defaultProps: {
          children: 'children',
          label: 'rolename',
          id: "id",
        },
        roleTree: [],
        listLoading: false,
        searchKey: '',
        tableData: {
          pagination: {
            total: 0,
            pageNo: 1,
            pageSize: 10,
            parentId: 0
          },
          rows: []
        }
      }
    },
    methods: {
      search(target){
        this.loadData();
      },
      handleSelectionChange(val){

      },
      handlePwdConfig(index, row){
        this.form.id = row.id;
        this.form.tel = row.tel;
        this.dialogVisible = true;
       
      },
      customerPwdUpdate(){
        this.$http.post(api.CUSTOMER_PWD_UPDATE, this.form)
          .then(res => {
               this.$message('修改成功');
              this.dialogVisible = false;
          }).catch(err=>{

        })
      },
      handleSizeChange(val) {
        this.tableData.pagination.pageSize = val;
        this.loadData();
      },
      handleCurrentChange(val) {
        this.tableData.pagination.pageNo = val;
        this.loadData();
      },
      handleEdit(index, row){
        this.$router.push({path: 'customerAdd', query: {id: row.id}})
      },
      handleDelete(index, row){
        businessApi.customerDelete({id:row.id}).then(res => {
          if ( res.code == "200" || res.code == 200 ) {
            this.$message(res.msg);
            this.loadData();
          } else {
             this.$message(res.msg);
          }
        });
      },
      loadData(){
          businessApi.customerList({
            key: this.searchKey,
            pageSize: this.tableData.pagination.pageSize,
            pageNo: this.tableData.pagination.pageNo
          })
          .then(res => {
            this.tableData.rows = res.records;
            this.tableData.pagination.total = res.total;
          });
      }
    },
    created(){
      this.loadData();
    }
  }
</script>
<style>
  .el-pagination {
    float: right;
    margin-top: 15px;
  }
</style>
