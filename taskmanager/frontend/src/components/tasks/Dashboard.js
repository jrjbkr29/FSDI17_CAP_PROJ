import React, { Fragment } from 'react';
import Form from './Form.js';
import Tasks from './Tasks.js';
import { FAQ } from './FAQ';

export default function Dashboard() {
    return (
        <Fragment>
            <Form />
            <FAQ />
        </Fragment>
    )
}
