import React, { useState, useEffect } from 'react';
import { Modal, Table, Button, Space } from 'antd';
import "antd/dist/antd.css";
import '../css/home.css';
import { Link } from "react-router-dom";
import axios from 'axios';


async function fetchTodo() {
    try {
        const res = await axios.get(`https://reqres.in/api/users?page=1`);
        return res.data.data;
    } catch (error) {
        console.error(error);
    }
}

function useGetTodos() {
    const [todo, setTodo] = useState([]);
    const [loadingTodos, setLoadingTodos] = useState(false);

    const fetch = async () => {
        try {
            setLoadingTodos(true);
            const data = (await fetchTodo()) || [];
            setTodo(data);
            setLoadingTodos(false);
        } catch (error) {
            console.error(error);
        }
    };

    const refetch = async () => {
        await fetch();
    };

    useEffect(() => {
        fetch();
    }, []);
    return { todo, loadingTodos, refetchTodo: refetch };
}

const columns = [
    {
        title: 'Name',
        dataIndex: 'first_name',
        key: 'first_name',
    },
    {
        title: 'Last Name',
        dataIndex: 'last_name',
        key: 'last_name',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => {
            return (
                <Space size="middle" >
                    <a
                        href={record.first_name}
                        onClick={(e) => {
                            e.preventDefault();
                            console.log(record.first_name)
                        }}
                    >
                        View Profile
                    </a>
                </Space >
            )
        },
    }
]

function Users() {
    const [isModalVisible, setIsModalVisible] = useState(true);

    const { todo, loadingTodos, refetchTodo } = useGetTodos();
    const usersDataSource = todo.map((todos) => ({ ...todos, key: todos.id }));

    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <>
            <Modal
                title="List Users"
                visible={isModalVisible}
                footer={null}
            >
                <Table columns={columns} dataSource={usersDataSource} />
                <Link to="/">
                    <Button onClick={showModal}>Go Home</Button>
                </Link>
            </Modal>
        </>
    )
}

export default Users;

