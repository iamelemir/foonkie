import React, { useState, useEffect } from 'react';
import { Modal, Table, Button, Space } from 'antd';
import "antd/dist/antd.css";
import '../css/home.css';
import { Link } from "react-router-dom";
import axios from 'axios';

async function fetchUsers() {
    try {
        const res = await axios.get(`https://reqres.in/api/users?page=1`);
        return res.data.data;
    } catch (error) {
        console.error(error);
    }
}

// async function fetchUser(id) {
//     try {
//         const res = await axios.get(`https://reqres.in/api/users?page=1`);
//         let data = res.data.data;
//         let person = data.filter(user => user.id == id);
//         console.log(person[0]);

//         return person[0];
//     } catch (error) {
//         console.error(error);
//     }
// }

// function useGetUSer() {
//     const [user, setUser] = useState([]);
//     const [loadingUser, setLoadingUser] = useState(false);

//     const fetch = async () => {
//         try {
//             setLoadingUser(true);
//             const data = (await fetchUser()) || [];
//             console.log(data)
//             setUser(data);
//             setLoadingUser(false);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const refetch = async () => {
//         await fetch();
//     };

//     useEffect(() => {
//         fetch();
//     }, []);
//     return { user, loadingUser, refetchUser: refetch };
// }

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
                    {/* <Link
                        to="profile"
                    >
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                console.log(record.id)
                            }}
                        >
                            View Profile
                        </button>
                    </Link> */}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault()
                            console.log(record.id)
                        }}
                    >Ver</a>
                </Space >
            )
        },
    }
]


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

// function Profile() {

//     const [isSecondModalVisible, setIsSecondModalVisible] = useState(true);

//     const { user, loadingUSer, refetchUser } = useGetUSer();
//     // const userData = user.map((user) => ({ ...user, key: user.id }));

//     console.log(user.id)

//     const showSecondModal = () => {
//         setIsSecondModalVisible(false);
//     }
//     return (
//         <>
//             <Modal
//                 title="Personal Profile"
//                 visible={isSecondModalVisible}
//                 footer={null}
//             >
//                 <h1>{user.id}</h1>
//                 {/* <Table columns={columns} dataSource={userData} /> */}
//                 <Link to="/users">
//                     <Button onClick={showSecondModal}>Users</Button>
//                 </Link>
//             </Modal>
//         </>
//     )
// }

// export {
//     Users,
//     Profile
// }

export default Users;