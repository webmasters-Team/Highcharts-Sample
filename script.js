Highcharts.chart('container', {
    chart: {
      height: 600,
      inverted: true
    },
  
    title: {
      text: 'Highcharts Org Chart'
    },
  
    accessibility: {
      point: {
        descriptionFormatter: function (point) {
          var nodeName = point.toNode.name,
            nodeId = point.toNode.id,
            nodeDesc = nodeName === nodeId ? nodeName : nodeName + ', ' + nodeId,
            parentDesc = point.fromNode.id;
          return point.index + '. ' + nodeDesc + ', reports to ' + parentDesc + '.';
        }
      }
    },
  
    series: [{
      type: 'organization',
      name: 'Highsoft',
      keys: ['from', 'to'],
      data: [
        ['Shareholders', 'Board'],
        ['Board', 'CEO'],
        ['CEO', 'CTO'],
        ['CEO', 'CPO'],
        ['CEO', 'CSO'],
        ['CEO', 'CMO'],
        ['CEO', 'HR'],
        ['CTO', 'Product'],
        ['CTO', 'Web'],
        ['CSO', 'Sales'],
        ['CMO', 'Market']
      ],
      levels: [{
        level: 0,
        color: 'white',
        borderWidth: 3,
        borderColor: '#89cede',
        dataLabels: {
          color: 'black'
        },
        height: 25
      }, {
        level: 1,
        color: 'white',
        borderWidth: 3,
        borderColor: '#89cede',
        dataLabels: {
          color: 'black'
        },
        height: 25
      }, {
        level: 2,
        color: 'white',
        borderWidth: 3,
        borderColor: '#89cede',
      }, {
        level: 4,
        color: 'white',
        borderWidth: 3,
        borderColor: '#f8710e',
      }],
      nodes: [{
        id: 'Shareholders'
      }, {
        id: 'Board'
      }, {
        id: 'CEO',
        title: 'CEO',
        name: 'Grethe Hjetland',
      }, {
        id: 'HR',
        title: 'HR/CFO',
        name: 'Anne Jorunn Fjærestad',
        color: 'white',
        borderWidth: 3,
        borderColor: '#e2b22c',
        column: 3,
        offset: '75%'
      }, {
        id: 'CTO',
        title: 'CTO',
        name: 'Christer Vasseng',
        column: 4,
        layout: 'hanging'
      }, {
        id: 'CPO',
        title: 'CPO',
        name: 'Torstein Hønsi',
        column: 4,
        
      }, {
        id: 'CSO',
        title: 'CSO',
        name: 'Anita Nesse',
        column: 4,
        
        layout: 'hanging'
      }, {
        id: 'CMO',
        title: 'CMO',
        name: 'Vidar Brekke',
        column: 4,
        layout: 'hanging'
      }, {
        id: 'Product',
        name: 'Product developers'
      }, {
        id: 'Web',
        name: 'Web devs, sys admin'
      }, {
        id: 'Sales',
        name: 'Sales team'
      }, {
        id: 'Market',
        name: 'Marketing team'
      }],
      colorByPoint: false,
      color: 'white',
      dataLabels: {
        color: 'black'
      },
      borderWidth: 3,
      borderColor: '#5f91b3',
      nodeWidth: 65
    }],
    tooltip: {
      outside: true
    },
    exporting: {
      allowHTML: true,
      sourceWidth: 800,
      sourceHeight: 600
    }
  
  });