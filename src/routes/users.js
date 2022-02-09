import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { Modal, Table, Tag, Space } from 'antd';
import "antd/dist/antd.css";
import '../css/home.css';



const data = [
    {
        key: 1,
        id: 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
        key: 2,
        id: 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
        key: 3,
        id: 3,
        "email": "emma.wong@reqres.in",
        "first_name": "Emma",
        "last_name": "Wong",
        "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
    {
        key: 4,
        id: 4,
        "email": "eve.holt@reqres.in",
        "first_name": "Eve",
        "last_name": "Holt",
        "avatar": "https://reqres.in/img/faces/4-image.jpg"
    },
    {
        key: 5,
        id: 5,
        "email": "charles.morris@reqres.in",
        "first_name": "Charles", "last_name": "Morris",
        "avatar": "https://reqres.in/img/faces/5-image.jpg"
    },
    {
        key: 6,
        id: 6,
        "email": "tracey.ramos@reqres.in",
        "first_name": "Tracey",
        "last_name": "Ramos",
        "avatar": "https://reqres.in/img/faces/6-image.jpg"
    }
]


function showIds(id) {
    console.log('este es Id', id)
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
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            showIds(record.id)
                        }}
                    >
                        Go
                    </a>
                </Space >
            )
        },
    }
]

function Users() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Modal title="List Users" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Table key={data.id} columns={columns} dataSource={data} />
            </Modal>
            <SegundoBox showModal={showModal} />
        </>
    )
}

function SegundoBox({ showModal }) {
    return (
        <div className='secondBox'>
            {/* pasar este Link al ancor Go y redicreccionar a otra ruta donde este el otro modal de personalInfo */}
            <Link to="/users">
                ir
            </Link>
            <button onClick={showModal} className='downloaderButton'>Download</button>
            <fieldset className='subBoxTwo'>
                <legend>Karen - New York</legend>
                <div >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
            </fieldset>
            <fieldset className='subBoxThree'>
                <legend>Karen - New York</legend>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
            </fieldset>

            <fieldset className='subBoxFour'>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
                <legend>Karen - New York</legend>
            </fieldset>

            <fieldset className='subBoxFive'>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
                <legend>Karen - New York</legend>
            </fieldset>
        </div>
    )
}


export default Users;
