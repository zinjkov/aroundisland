<template>
  <div class="container">
    Analytics
    <b-form-select
      v-model="selected" :options="selectOptions" class="mb-3">
    </b-form-select>
    <line-chart v-if="selected!=null"
                :height="chartSize.height"
                :width="chartSize.width"
                class="graph"
                :options="chartOptions"
                :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import LineChart from './js/LineChart'
  export default {
    name: 'analytics',
    components: {
      LineChart,
    },
    data () {
      return {
        selected: 0,
        selectOptions: [
          {text: 'Напряжение', value: 0},
          {text: 'Спутники', value: 1},
          {text: 'Скорость', value: 2}
        ],
        chartSize: {
          height: parseInt(document.documentElement.clientHeight / 2.5),
          width: parseInt(document.documentElement.clientWidth * 0.57),
        },
        chartOptions: {
          maintainAspectRatio: true,
          responsive: false,
        },
        datacollection: null,
        dataset: [0, 0],
      }
    },
    props: [],
    created() {
      this.chartSize.width = parseInt(document.documentElement.clientWidth / 2);
      this.chartSize.height = parseInt(document.documentElement.clientHeight / 2);
    },
    mounted () {
      this.fillData()
    },

    watch: {
      selected: function () {
        this.render();
      },
      battery_dataset() {
        this.render();
      }
    },

    computed: {
      ...mapGetters([
        'battery_dataset',
        'speed_dataset',
        'time_dataset',
        'satellites_dataset'
      ]),
    },

    methods: {
      fillData () {
        this.datacollection = {
          labels: this.time_dataset,
          datasets: [
            {
              label: this.selectOptions[this.selected].text,
              backgroundColor: '#3d75f8',
              data: this.dataset
            }
          ]
        }
      },
      render () {
        switch (this.selected) {
          case 0:
            this.dataset = this.battery_dataset;
            break;
          case 1:
            this.dataset = this.satellites_dataset;
            break;
          case 2:
            this.dataset = this.speed_dataset;
            break;
          default:
            break;
        }
        this.fillData();
      }
    }


  }
</script>

<style scoped>

</style>
