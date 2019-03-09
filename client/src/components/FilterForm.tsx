import React from 'react';
import FilterFormOptionDate from './FilterFormOptionDate';
import FilterFormOptionAmount from './FilterFormOptionAmount';
import { Store, FilterOptions } from '../types';

const testOptions = {
  startDate: { isOn: true, value: new Date() },
  endDate: { isOn: true, value: new Date() },
  currency: { isOn: false, value: 'EUR' },
  minAmount: { isOn: true, value: 5000 },
  maxAmount: { isOn: false, value: 0 },
};

interface Props {
  trans: any;
  options: FilterOptions;
  onClick: (options: FilterOptions) => void;
}

class FilterForm extends React.Component<Props> {
  state: FilterOptions;
  constructor(props: Props) {
    super(props);
    this.state = this.props.options;
  }
  handleCheck = (e: any, element: string) => {
    const isOn = e.target.checked;
    console.log(isOn);
    this.setState({ [element]: { ...this.state[element], isOn } });
  };
  handleDateChange = (e: any) => {
    const value = new Date(e.target.value);
    const element = e.target.name;
    this.setState({ [element]: { ...this.state[element], value } });
  };
  handleChange = (e: any) => {
    const value = e.target.value;
    const element = e.target.name;
    this.setState({ [element]: { ...this.state[element], value } });
  };
  isDisabled = (element: string) => {
    return !this.state[element].isOn;
  };
  render() {
    const trans = this.props.trans;

    return (
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <FilterFormOptionDate text={trans.startDate}
          optionName={'startDate'}
          filterOption={this.state.startDate}
          handleCheck={this.handleCheck}
          handleChange={this.handleDateChange}
        />
        <FilterFormOptionDate text={trans.endDate}
          optionName={'endDate'}
          filterOption={this.state.endDate}
          handleCheck={this.handleCheck}
          handleChange={this.handleDateChange}
        />
        <FilterFormOptionAmount text={trans.minAmount}
          optionName={'minAmount'}
          filterOption={this.state.minAmount}
          handleCheck={this.handleCheck}
          handleChange={this.handleChange}
        />
        <FilterFormOptionAmount text={trans.maxAmount}
          optionName={'maxAmount'}
          filterOption={this.state.maxAmount}
          handleCheck={this.handleCheck}
          handleChange={this.handleChange}
        />
        <div className="row">
          <button onClick={() => this.props.onClick(this.state)}>{trans.filter}</button>
        </div>
      </form>
    );
  }
}

export default FilterForm;
