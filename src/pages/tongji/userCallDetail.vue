<template>

  <imp-panel>
    <h3 class="box-title" slot="header" style="width: 100%;">
      <el-row style="width: 100%;">
        <el-col :span="6">
            <el-button type="primary" icon="download" @click="download()">导出excel</el-button>
        </el-col>
        <el-col :span="6">
          <div class="el-input" style="width: 200px;">
            <i class="el-input__icon el-icon-search"></i>
            <input type="text" placeholder="输入用户手机号" v-model="searchtel" @keyup.enter="search($event)"
                   class="el-input__inner">
          </div>
        </el-col>
        <el-col :span="12">
            <el-date-picker
              v-model="searchKey" 
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd HH:mm:ss"
              @change="search($event)">
            </el-date-picker>
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
          prop="chat_id"
          label="接通id" 
          >
        </el-table-column>
        <el-table-column
          prop="user_id"
          label="用户id"
         >
        </el-table-column>
        <el-table-column
          prop="name"
          label="视友姓名"
         >
        </el-table-column>
        <el-table-column
          prop="address"
          label="城市"
         >
        </el-table-column>
         <el-table-column
          prop="age"
          label="年龄"
         >
        </el-table-column>
         <el-table-column
          prop="gender"
          label="性别"
         >
        </el-table-column>
         <el-table-column
          prop="tel"
          label="电话"
         >
        </el-table-column>
         <el-table-column
          prop="eyesight"
          label="视力状况"
         >
        </el-table-column>
         <el-table-column
          prop="status"
          label="接通状态"
         >
        </el-table-column>
            <el-table-column
          prop="hangup_reason"
          label="通话状态"
         >
        </el-table-column>
         <el-table-column
          prop="service_type"
          label="呼叫对象"
         >
        </el-table-column>
        
        <el-table-column
          prop="calldate"
          label="日期"
         >
        </el-table-column>
         <el-table-column
          prop="calltime"
          label="呼叫时间"
         >
        </el-table-column>
         <el-table-column
          prop="hanguptime"
          label="挂断时间"
         >
        </el-table-column>
         <el-table-column
          prop="chat_duration"
          label="通话时间"
         >
        </el-table-column>
         <el-table-column
          prop="ua"
          label="亲友端版本号"
         >
        </el-table-column>
         </el-table-column>
         <el-table-column
          prop="ub"
          label="视友端版本号"
         >
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
    </div>
  </imp-panel>
</template>

<script>
  import panel from "../../components/panel.vue"
  import * as api from "../../api"
  import testData from "../../../static/data/data.json"
  import * as tongjiApi from '../../services/tongji'
  export default {
    components: {
      'imp-panel': panel
    },
    data(){
      return {
        currentRow: {},
        dialogVisible: false,
        dialogLoading: false,
        defaultProps: {
          children: 'children',
          label: 'name',
          id: "id",
        },
        roleTree: [],
        listLoading: false,
        searchKey: '',
        searchtel: '',
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
    handleSizeChange(val) {
        this.tableData.pagination.pageSize = val;
        this.loadData();
      },
      handleCurrentChange(val) {
        this.tableData.pagination.pageNo = val;
        this.loadData();
      },
      download(){
        tongjiApi.userCallDetailExcel({
          key: this.searchKey,
          tel: this.searchtel
        })
        .then( res => {
          if ( res.code == "200" || res.code == 200 ) {
              window.open("http://101.132.132.117:12580/"+res.data,"_self");
              //window.open("http://localhost:12580/"+res.data,"_self");
            }
        });
      },
      loadData(){
          tongjiApi.userCallDetail({
            key: this.searchKey,
            tel: this.searchtel,
            pageSize: this.tableData.pagination.pageSize,
            pageNo: this.tableData.pagination.pageNo
          })
          .then(res => {
            this.tableData.rows = res.data.records;
            this.tableData.pagination.total = res.data.total;
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
