import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTask, get } from '../../actions/tasks'

export class Form extends Component {
    state = {
        job_type: '',
        work_order: '',
        serial_num: '',
        part_num: '',
        email: '',
        environment: '',
        details: '',
        status: '',
        assignedTo: '',
        resource: ''
    }


  static propTypes = {
    addTask: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { job_type, work_order, serial_num, part_num, email, environment, details, status, assignedTo, resource } = this.state;
    const task = { job_type, work_order, serial_num, part_num, email, environment, details, status, assignedTo, resource };
    this.props.addTask(task);
    this.setState({
        job_type: '', 
        work_order: '', 
        serial_num: '', 
        part_num: '', 
        email: '',
        environment: '', 
        details: '',
        status: '',
        assignedTo: '',
        resource: ''
    });
  };

  render() {
    const { job_type, work_order, serial_num, part_num, email, environment, details } = this.state;
    return (
      
      <div id="collapseExample" className="collapse  card card-body mt-4 mb-4 form">
        <h2>Add Task</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            {/* 
            <label>Job Type</label>
            <input
              className="form-control"
              type="text"
              name="job_type"
              onChange={this.onChange}
              value={job_type}
            />
            */}
              <label htmlFor="inputType">Type</label>
              <select name="job_type" value="{job_type" id="inputType" className="form-control" onChange={this.onChange}
              value={job_type}>
                <option defaultValue>Select: ATP/QTP/DEV</option>
                <option>ATP</option>
                <option>QTP</option>
                <option>DEV</option>
                <option>N/A</option>
              </select>
          </div>
          <div className="form-group">
              <label htmlFor="inputType">Type</label>
              <select name="environment" value="{environment" id="inputType" className="form-control" onChange={this.onChange}
              value={environment}>
                <option defaultValue>Select: Vibe/Thermal/Shock</option>
                <option>Vibe</option>
                <option>Thermal</option>
                <option>Shock</option>
                <option>N/A</option>
              </select>
          </div>
          <div className="form-group">
            <label>Work Order</label>
            <input
              className="form-control"
              type="work_order"
              name="work_order"
              onChange={this.onChange}
              value={work_order}
            />
          </div>
          <div className="form-group">
            <label>Serial Number</label>
            <textarea
              className="form-control"
              type="text"
              name="serial_num"
              onChange={this.onChange}
              value={serial_num}
            />
          </div>
          <div className="form-group">
            <label>Part Number</label>
            <textarea
              className="form-control"
              type="text"
              name="part_num"
              onChange={this.onChange}
              value={part_num}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <textarea
              className="form-control"
              type="text"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Additional Details</label>
            <textarea
              className="form-control"
              type="text"
              name="details"
              onChange={this.onChange}
              value={details}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
    </div>
    );
  }
}

export default connect(null, { addTask })(Form);