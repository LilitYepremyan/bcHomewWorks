import React from 'react';
import styles from './Calculator.module.css';
import initialState from '../helpers/LocalStorage';

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  // handleInc = () => {
  //   if (this.state.count + this.state.step >= this.state.inc) {
  //     return;
  //   }
  //   localStorage.setItem('count', this.state.count + this.state.step);
  //   this.setState({
  //     count: this.state.count + this.state.step,
  //   });
  // };
  // handleDec = () => {
  //   if (this.state.count + this.state.step <= this.state.dec) {
  //     return;
  //   }
  //   localStorage.setItem('count', this.state.count - this.state.step);
  //   this.setState({
  //     count: this.state.count - this.state.step,
  //   });
  // };
  // reset = () => {
  //   localStorage.setItem('count', 0);
  //   this.setState({
  //     count: 0,
  //   });
  // };
  // handleIncChange = (evn) => {
  //   if (this.state.count + this.state.step >= Number(evn.target.value)) {
  //     return;
  //   }
  //   if (Number(evn.target.value) <= 0) {
  //     evn.target.value = '';
  //   }
  //   localStorage.setItem('inc', evn.target.value);
  //   this.setState({
  //     increment: Number(evn.target.value),
  //   });
  // };

  // handleDecChange = (evn) => {
  //   let v
  //   if (Number(evn.target.value) <= 0) {
  //     evn.target.value = '';
  //     return;
  //   }
  //   v = this.state.count - this.state.step <= this.state.dec ? this.state
  //   localStorage.setItem('dec', evn.target.value);
  //   this.setState({
  //     decrement: Number(evn.target.value),
  //   });
  // };
  // handleStepChange = (evn) => {
  //   if (Number(evn.target.value) < 0) {
  //     evn.target.value = '';
  //   }
  //   localStorage.setItem('step', evn.target.value);
  //   this.setState({
  //     step: Number(evn.target.value),
  //   });
  // };

  btnClickHandler = (type) => {
    let { count, min, max, step } = this.state;
    let value;
    switch (type) {
      case 'plus':
        value = count + step >= max ? count : count + step;
        localStorage.setItem('count', value);
        this.setState({ count: value });
        break;
      case 'minus':
        value = count - step <= min ? count : count - step;
        localStorage.setItem('count', value);
        this.setState({ count: value });
        break;
      case 'reset':
        localStorage.setItem('count', 0);
        this.setState({ count: 0 });
        break;
      default:
        return;
    }
  };

  inputClickHandler = (evn, type) => {
    switch (type) {
      case 'step':
        if (+evn.target.value < 0) {
          evn.target.value = '';
          return;
        }
        localStorage.setItem('step', evn.target.value);
        this.setState({ step: Number(evn.target.value) });
        break;
      case 'max':
        if (+evn.target.value < 0) {
          evn.target.value = '';
          return;
        }
        localStorage.setItem('max', evn.target.value);
        this.setState({ max: Number(evn.target.value) });
        break;
      case 'min':
        if (+evn.target.value < 0) {
          evn.target.value = '';
          return;
        }
        localStorage.setItem('min', evn.target.value);
        this.setState({ min: Number(evn.target.value) });
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <div className={styles.wrapperMain}>
        <div className="calcName">
          <h1>Calculator {this.props.id}</h1>
        </div>
        <input
          onChange={(evn) => this.inputClickHandler(evn, 'max')}
          placeholder={
            localStorage.getItem('max')
              ? Number(localStorage.getItem('max'))
              : 'Maximal Value'
          }
          type="number"
        />
        <input
          onChange={(evn) => this.inputClickHandler(evn, 'min')}
          placeholder={
            localStorage.getItem('min')
              ? Number(localStorage.getItem('min'))
              : 'Minimal Value'
          }
          type="number"
        />
        <input
          onChange={(evn) => this.inputClickHandler(evn, 'step')}
          placeholder={
            localStorage.getItem('step')
              ? Number(localStorage.getItem('step'))
              : 'Step'
          }
          type="number"
        />
        <p>Value:{this.state.count}</p>
        <button
          onClick={() => this.btnClickHandler('plus')}
          disabled={this.state.count + this.state.step > this.state.inc}
        >
          +
        </button>
        <button
          onClick={() => this.btnClickHandler('minus')}
          disabled={this.state.count + this.state.step < this.state.dec}
        >
          -
        </button>
        <button onClick={() => this.btnClickHandler('reset')}>Reset</button>
      </div>
    );
  }
}
