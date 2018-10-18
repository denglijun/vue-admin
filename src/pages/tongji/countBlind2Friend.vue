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
          tongjiApi.CountBlind2Friend({
            key: this.searchKey,
            pageSize: this.tableData.pagination.pageSize,
            pageNo: this.tableData.pagination.pageNo
          })
          .then(res => {
            //初始化
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: { text: '盲人绑定的亲友数分布', x:'center' },
                tooltip : {
                  trigger: 'item',
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                      orient: 'vertical',
                      left: 'left',
                      data: ['未绑定亲友','绑定1个亲友','绑定2个亲友','绑定3个亲友','绑定4个亲友','绑定5个亲友','绑定6-10个亲友','绑定10个以上的亲友']
                },
                series : [
                  {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:res.records[0].zero, name:'未绑定亲友'},
                        {value:res.records[0].one, name:'绑定1个亲友'},
                        {value:res.records[0].two, name:'绑定2个亲友'},
                        {value:res.records[0].three, name:'绑定3个亲友'},
                        {value:res.records[0].four, name:'绑定4个亲友'},
                        {value:res.records[0].five, name:'绑定5个亲友'},
                        {value:res.records[0].sixtoten, name:'绑定6-10个亲友'},
                        {value:res.records[0].overten, name:'绑定10个以上亲友'},

                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            });
          });
      },

    },
    created(){
      this.loadData();
    },

  }
</script>
<style>
  .el-pagination {
    float: right;
    margin-top: 15px;
  }
</style>
