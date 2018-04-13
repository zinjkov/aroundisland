/**
 * Created by zinjk on 12.07.2017.
 */
import {Line, mixins} from 'vue-chartjs'
const {reactiveProp} = mixins

export default Line.extend({
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    // this.chartData is created in the mixin
    console.log(this.options);
    this.renderChart(this.chartData, this.options)
  }
})
