import React, { Fragment } from 'react';
import Form from './Form.js';
import Tasks from './Tasks.js';

export default function Dashboard() {
    return (
        <Fragment>
            <Form />
            <Tasks />
        </Fragment>
    )
}
