import Vue from 'vue'
import PieChart from 'src/examples/PieExample'

describe('PieChart', () => {
  let el

  beforeEach(() => {
    el = document.createElement('div')
  })

  it('should render a canvas', () => {
    const vm = new Vue({
      template: '<pie-chart></pie-chart>',
      components: { PieChart }
    }).$mount(el)

    expect(vm.$el.querySelector('#pie-chart')).not.to.be.an('undefined')
    expect(vm.$el.querySelector('canvas')).not.to.be.an('undefined')
    expect(vm.$el.querySelector('canvas')).not.to.be.an('null')
    expect(vm.$el.querySelector('canvas')).to.exist
  })

  it('should change id based on prop', () => {
    const vm = new Vue({
      template: '<pie-chart chartId="piechartprop"></pie-chart>',
      components: { PieChart }
    }).$mount(el)

    expect(vm.$el.querySelector('#piechartprop')).not.to.be.an('undefined')
  })
})
