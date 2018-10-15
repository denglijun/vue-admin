<template>
  <imp-panel>
    <h3 class="box-title" slot="header" style="width: 100%;">
      <el-date-picker
          v-model="searchKey"
          type="date"
          placeholder="选择日期"
          @change=search($event)>
        </el-date-picker>
    </h3>
    <div slot="body">
      <div id="myChart" :style="{width: '1000px', height: '600px'}"></div>
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
          tongjiApi.CountFriend2blind({
            key: this.searchKey,
            pageSize: this.tableData.pagination.pageSize,
            pageNo: this.tableData.pagination.pageNo
          })
          .then(res => {
            this.tableData.rows = res.records;
            this.tableData.pagination.total = res.total;
             //初始化
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: { text: '亲友绑定的盲人数分布' },
                xAxis: {
                    type: 'category',
                    data: ["0个","1个","2个","3个","4个","5个","6-10个","10个以上"]
                },
                yAxis: {
                  type: 'value'
                },
                series: [{
                    type: 'line',
                    data: [res.records[0].zero, res.records[0].one,res.records[0].two, res.records[0].three, res.records[0].four, res.records[0].five,res.records[0].sixtoten,res.records[0].overten]
                }]
            });
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
