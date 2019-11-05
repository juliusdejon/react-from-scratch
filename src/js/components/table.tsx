import { Table } from 'antd';
import * as React from "react";

const { useState, useEffect } = React;
const columns = [
    {
        title: 'Name',
        dataIndex: 'employee_name',
        key: 'employee_name',
        sorter: (a, b) => {
            console.log(a, b)
            return a.employee_name.localeCompare(b.employee_name)

        },
        sortDirections: ['descend'],
    },
];


const RotundaTable = () => {
    const [data, setData] = useState([])

    const fetchApi = async () => {
        const response = await fetch('http://dummy.restapiexample.com/api/v1/employees');
        const myJson = await response.json();
        setData(myJson)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <Table
            columns={columns as any}
            dataSource={data}
            bordered
        />
    )
}


export { RotundaTable };

