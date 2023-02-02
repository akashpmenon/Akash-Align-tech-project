import React, { useEffect } from 'React';
import { useSelector, useDispatch } from 'react-redux';
import classes from 'Table.css';
import todos  from '../../Common/actions/common.actions';
import Table from '../../Components/Table/Table';

const TablePage = ({ data, columns }) => {
    const { data: todoListData, loading } = useSelector((state) => state.todoData);

    const dispatch = useDispatch();
    
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Status',
            key: 'completed',
            dataIndex: 'completed',
            render: (_, { completed }) => (
                <>
                    {completed ? 
                        <Tag color={'green'}>
                            Completed
                        </Tag>
                        :
                        <Tag color={'volcano'}>
                            Not Completed
                        </Tag>
                    }
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Button
                    type={'primary'}
                >
                    Delete
                </Button>
            ),
        }
    ];

    useEffect(() => {
        dispatch(todos.getData());
    }, []);

    return (<div className={classes.CustomTable}>
        <Table
            columns={columns}
            data={todoListData}
            loading={loading}
        />
    </div>);
};

export default TablePage;
