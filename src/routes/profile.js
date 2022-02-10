// import React, { useState, useEffect } from 'react';
// import { Modal, Table, Button, Space } from 'antd';
// import "antd/dist/antd.css";
// import '../css/home.css';
// import { Link } from "react-router-dom";
// import axios from 'axios';


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
//             const data = (await fetchUser(user.id)) || [];
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

// function Profile(id) {

//     const [isSecondModalVisible, setIsSecondModalVisible] = useState(true);
//     const { user, loadingUSer, refetchUser } = useGetUSer();
//     const userData = user.map((user) => ({ ...user, key: user.id }));

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
//                 <h1>ssjsjsjsj</h1>
//                 {/* <Table columns={columns} dataSource={userData} /> */}
//                 <Link to="/users">
//                     <Button onClick={showSecondModal}>Users</Button>
//                 </Link>
//             </Modal>
//         </>
//     )
// }


// export default Profile;