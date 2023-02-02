import React from 'React';
import classes from 'Table.css';
import { Button, Table, Tag } from 'antd';

const Table = ({ data, columns }) => {
    return (<div className={classes.CustomTable}>
        <Table
            columns={columns}
            data={data}
        />
    </div>);
};
