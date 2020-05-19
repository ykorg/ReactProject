import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logo from '~/assets/logo.png';
import * as homeActions from '../redux/reduces/home';
import Chart from './Charts';

@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class App extends Component {
  state = {
    renderer: 'canvas'
  };

  componentWillMount() {
    const {initalLogo} = this.props;
    initalLogo();
  }
  handleBrowserChange = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/docs');
  }
  render() {
    const {home: {movelogo}} = this.props;
    const renderer = this.state.renderer;
    const option = this.getOption();

    return (
      <div className="home" style={{paddingTop: 100,height:400}}>
        <Chart renderer={'canvas'} option={option} style={{width:400 , height:400}} />
      </div>
    );
  }

  getOption = () => {
    // 组装数据，返回配置 option
    // const currentData = this.props.charts.heatmap;

    return {
      xAxis: {
        type: 'category',
        data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie','Matcha Latte1', 'Milk Tea2', 'Cheese Cocoa2', 'Walnut Brownie2']
    },
    yAxis: {},
    series: [
        {
            type: 'line',
            name: '2015',
            data: [89.3, 92.1, 94.4, 85.4,89.3, 92.1, 94.4, 95.4]
        },
        {
            type: 'line',
            name: '2016',
            data: [95.8, 89.4, 91.2, 76.9,89.3, 92.1, 94.4, 15.4]
        },
        {
            type: 'line',
            name: '2017',
            data: [97.7, 83.1, 92.5, 78.1,89.3, 92.1, 94.4, 55.4]
        },
        {
          type: 'line',
          name: '2010',
          data: [19.3, 92.1, 94.4, 85.4,89.3, 92.1, 94.4, 45.4]
      },
      {
          type: 'line',
          name: '2018',
          data: [35.8, 89.4, 91.2, 76.9,89.3, 92.1, 94.4, 35.4]
      },
      {
          type: 'line',
          name: '2019',
          data: [9.7, 83.1, 92.5, 78.1,89.3, 92.1, 94.4, 5.4]
      }
    ]
    }
  };
}
export default App;
