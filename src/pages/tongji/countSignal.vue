<template>

  <imp-panel>
    <h3 class="box-title" slot="header" style="width: 100%;">
      <el-row style="width: 100%;">
        <el-col :span="12">
            <el-button type="primary" icon="download" @click="download()">导出excel</el-button>
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
          prop="chat_id"
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          prop="chat_id"
          label="通话ID" 
          >
        </el-table-column>
        <el-table-column
          prop="call_type"
          label="呼叫对像" 
          >
        </el-table-column>
        <el-table-column
          prop="caller_tel"
          label="呼叫者电话" 
          >
        </el-table-column>
        <el-table-column
          prop="callee_tel"
          label="被呼叫者电话"
         >
        </el-table-column>
        <el-table-column
          prop="hanguper_tel"
          label="挂断者电话" 
        >
        </el-table-column>
        <el-table-column
          prop="call_time"
          label="呼叫时间"
         >
        </el-table-column>
         <el-table-column
          prop="arrived_time"
          label="响应时间"
         >
        </el-table-column>
        <el-table-column
          prop="answer_time"
          label="应答时间"
         >
        </el-table-column>
        <el-table-column
          prop="hangup_time"
          label="挂断时间"
         >
        </el-table-column>
        <el-table-column
          prop="notified_count"
          label="通知人数"
         >
        </el-table-column>
        <el-table-column
          prop="notified_family"
          label="通知亲友数"
         >
        </el-table-column>
        <el-table-column
          prop="notified_cs"
          label="通知客服数"
         >
        </el-table-column>
         <el-table-column
          prop="notified_vt"
          label="通知志愿者数"
         >
        </el-table-column>
        </el-table-column>
         <el-table-column
          prop="notified_msg"
          label="消息通知"
         >
        </el-table-column>
        </el-table-column>
        <el-table-column
          prop="notified_push"
          label="消息通知"
         >
        </el-table-column>
        <el-table-column
          prop="arrived_count"
          label="响应数量"
         >
        </el-table-column>
        <el-table-column
          prop="refused_count"
          label="拒绝数量"
         >
        </el-table-column>
        <el-table-column
          prop="call_arrived"
          label="呼叫到响应时间段"
         >
        </el-table-column>
        <el-table-column
          prop="call_answer"
          label="呼叫到应答时间段"
         >
        </el-table-column>
          <el-table-column
          prop="call_hangup"
          label="呼叫到挂断时间段"
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
          console.log(target);
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
      download() {
        tongjiApi.CountcallDetailExcel({
          searchKey:this.searchKey
        })
        .then(res => {
           if ( res.code == "200" || res.code == 200 ) {
              window.open("http://101.132.132.117:12580/"+res.data,"_self");
            }
        })
      },
      loadData(){
          tongjiApi.CountSignal({
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
