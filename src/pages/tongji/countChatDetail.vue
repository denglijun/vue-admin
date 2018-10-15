<template>

  <imp-panel>
    <h3 class="box-title" slot="header" style="width: 100%;">
      <el-row style="width: 100%;">
        <el-col :span="12">
          <router-link :to="{ path: 'userAdd'}">
            <el-button type="primary" icon="plus">新增</el-button>
          </router-link>
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
          prop="caller_tel"
          label="呼叫者电话"
         >
        </el-table-column>
        <el-table-column
          prop="caller_name"
          label="呼叫者姓名"
         >
        </el-table-column>
        <el-table-column
          prop="callee_tel"
          label="被呼叫者电话"
         >
        </el-table-column>
         <el-table-column
          prop="hangup_reason"
          label="挂断原因"
         >
        </el-table-column>
         <el-table-column
          prop="call_time"
          label="呼叫时间"
         >
        </el-table-column>
         <el-table-column
          prop="hangup_time"
          label="挂断时间"
         >
        </el-table-column>
         <el-table-column
          prop="duration"
          label="通话时长"
         >
        </el-table-column>
         <el-table-column
          prop="ua"
          label="亲友端APP版本号"
         >
        </el-table-column>
         <el-table-column
          prop="ub"
          label="盲人端APP版本号"
         >
        </el-table-column>
         <el-table-column
          prop="callAt"
          label="呼叫日期"
         >
        </el-table-column>
        <el-table-column
          prop="createdAt"
          label="日期"
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
      loadData(){
          tongjiApi.CountChatDetail({
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
