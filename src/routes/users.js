import React, { useState, useEffect } from 'react';
import { Modal, Table, Button, Space, Avatar } from 'antd';
import "antd/dist/antd.css";
import '../css/home.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { render } from '@testing-library/react';

async function fetchUsers() {
    try {
        const res = await axios.get(`https://reqres.in/api/users?page=1`);
        return res.data.data;
    } catch (error) {
        console.error(error);
    }
}

function useGetUsers() {
    const [users, setUsers] = useState([]);
    const [loadingUSers, setLoadingUsers] = useState(false);

    const fetch = async () => {
        try {
            setLoadingUsers(true);
            const data = (await fetchUsers()) || [];
            setUsers(data);
            setLoadingUsers(false);
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
    return { users, loadingUSers, refetchUsers: refetch };
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
                    <Button
                        type='primary'
                        onClick={(e) => {
                            e.preventDefault()
                            render(
                                <Profile
                                    data={record}
                                    value={true}
                                ></Profile
                                >
                            )
                        }}
                    >Personal Info...</Button>
                </Space >
            )
        },
    }
]

const columnsUser = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
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
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
]

function Profile(data, value) {

    const [isModalVisible, setIsModalVisible] = useState(value);

    const valores = [];
    valores.push(data.data);


    const displayModal = () => {
        setIsModalVisible(false)
    }

    return (
        <>
            <Modal
                title="Personal Information"
                visible={isModalVisible}
                footer={null}
            >
                <Avatar
                    size={64}
                    src={valores[0].avatar}
                    style={{
                        display: 'block',
                        margin: 'auto',
                        marginBottom: '1%'
                    }}
                />
                <Table columns={columnsUser} dataSource={valores} />
                <Button
                    type='danger'
                    onClick={displayModal}
                >
                    cerrar
                </Button>
            </Modal>
        </>
    )
}

function Users() {
    const [isModalVisible, setIsModalVisible] = useState(true);

    const { users, loadingUSers, refetchUsers } = useGetUsers();
    const usersDataSource = users.map((users) => ({ ...users, key: users.id }));

    const showModal = () => {
        setIsModalVisible(false);
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