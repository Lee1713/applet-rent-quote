import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: 410,
    height: 250
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '2019年报价趋势图',
      left: 'center'
    },
    color: ["#37A2DA"],
    // legend: {
    //   data: ['A'],
    //   top: 50,
    //   left: 'center',
    //   backgroundColor: 'red',
    //   z: 100
    // },
    // grid: {
    //   containLabel: true
    // },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      // x轴的字体样式
      axisLabel: {
        show: true,
        textStyle: {
          color: '#000',
          fontSize: '14',
        }
      },
      // 控制网格线是否显示
      splitLine: {
        show: true,
        //  改变轴线颜色
        lineStyle: {
          // 使用深浅的间隔色
          color: ['#aaaaaa']
        }
      },
      // x轴的颜色和宽度
      axisLine: {
        lineStyle: {
          color: '#000',
          width: 1,   //这里是坐标轴的宽度,可以去掉
        }
      }
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },

      // show: false
    },
    series: [{
      name: 'A',
      type: 'line',
      smooth: false,
      data: [15, 2, 30, 16, 10, 17, 15, 22, 27, 9]
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
  }
});
