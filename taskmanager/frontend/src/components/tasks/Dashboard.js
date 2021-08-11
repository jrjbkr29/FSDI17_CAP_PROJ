import React, { Fragment } from 'react';
import Form from './Form.js';

import { FAQ } from './FAQ';

export default function Dashboard() {
    return (
        <Fragment>
            <div className="center">
                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Create New Request
                </button>
                <Form></Form>
                <FAQ></FAQ>
            </div>
        </Fragment>
    )
}
