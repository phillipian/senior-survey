/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .exeter.schools-applying').highcharts({
    colors: ['#8d0c0c', '#be2d2d', '#db5151',  '#ed7878', '#f7bbbb', '#fae0e0'],
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        '1-5',
        '6-10',
        '11-15',
        '16-20',
        '21+'
      ]
    },
    yAxis: {
      max: 100
    },
    plotOptions: {
      series: {
        colorByPoint: true
      }
    },
    title: {
      text: 'How many schools are you planning on applying to in total?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [18.41, 40.3, 31.84, 7.46, 1.99],
      showInLegend: false
    }]
  });
});
