import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTasks, deleteTask } from '../../actions/tasks';

export class Tasks extends Component {
    static propTypes = {
        tasks: PropTypes.array.isRequired,
        getTasks: PropTypes.func.isRequired,
        deleteTask: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getTasks();
    }
    render() {
        return (
            <Fragment>
                <h2>Tasks</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Job Type</th>
                            <th>Work Order</th>
                            <th>Serial Number</th>
                            <th>Part Number</th>
                            <th>email</th>
                            <th>Details</th>
                            <th>Created</th>
                            <th></th>
                        </tr>
                    </thead>    
                        <tbody>
                            { this.props.tasks.map(task => (
                                <tr key={task.id}>
                                    <td>{ task.job_type }</td>
                                    <td>{ task.work_order }</td>
                                    <td>{ task.serial_num }</td>
                                    <td>{ task.part_num }</td>
                                    <td>{ task.email }</td>
                                    <td>{ task.details }</td>
                                    <td>{ task.created_at }</td>
                                    <td><button onClick= {this.props.deleteTask.bind(this, task.id)} className="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                            )) }
                        </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks.tasks
})

export default connect(mapStateToProps, { getTasks, deleteTask })(Tasks);