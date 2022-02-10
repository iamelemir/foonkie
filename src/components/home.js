
import '../css/home.css';
import '../css/mediaQuerys.css';
import frutas from '../images/frutas.png'
import logo from '../images/FoonkieMonkey.png'
import linkedin from '../images/Shape.png'
import facebook from '../images/facebook.png'
import twitter from '../images/Twitter.png'
// import ListUSers from './listUser';

import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { Modal, Table, Tag, Space } from 'antd';
import "antd/dist/antd.css";

// import Users from '../routes/users';

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
                    <Link to="/users">
                        ir
                    </Link>
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

function Home() {
    return (
        <div className='container'>
            <PrimerBox />
            {/* <Users ></Users> */}
            <img className='frutas' src={frutas} alt="" />
            <SegundoBox />
            <TercerBox />
            <Footer />
        </div>
    )
}

function Nav() {
    return (
        <nav>
            <a href="">
                Item1
            </a>
            <a href="">
                Item2
            </a>
            <a href="">
                Item3
            </a>
            <button className='loginButton'>
                Login
            </button>
        </nav>
    )
}

function PrimerBox() {
    return (
        <div className='boxOne'>
            <Nav />

            <div className='boxOneFrist'>
                <p> Title Lorem ipsum</p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, architecto ipsum? Molestias distinctio pariatur optio inventore blanditiis doloremque, consequatur qui quae odio. Provident consectetur ratione alias, in laboriosam nemo assumenda.
                </p>
            </div>
            <div className='boxOneSecond'>
                <div className='radianBox'>

                </div>
            </div>
        </div>
    )
}

function SegundoBox() {

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
        <div className='secondBox'>
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

            <Modal title="List Users" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Table key={data.id} columns={columns} dataSource={data} />
            </Modal>
            <SegundoBox showModal={showModal} />
        </div>
    )
}


function TercerBox() {
    return (
        <div className='threeBox'>
            <div className='threeBoxCircle'>
                <div className='circleTwo1'>
                    <span>All your meals with personalized recipes.</span>
                </div>
                <div className='circleTwo2'>Learn new ways to improve your health in your routine
                </div>
                <div className='circleTwo3'>
                    Take care of your health.
                </div>
                <div className='circleTwo'>
                </div>
            </div>
            <div className='threeBoxText'>
                <h1>
                    Lorem ipsum.
                </h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa laboriosam quae alias maxime!
                </p>
                <button>
                    Download
                </button>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <div className='footerFinal'>
            <footer>
                <div className='footerOne'>
                    <img src={logo} alt="" />
                    <span>+0 (0000) 000 00-00</span>
                    <span>support@sniff.com</span>
                </div>
                <div className='footerTwo'>
                    Quick Links
                    <div className='footerTwo2'>
                        <span>
                            Product
                        </span>
                        <span>
                            Information
                        </span>
                        <span>
                            Company
                        </span>
                        <span>
                            Foonkie monkey
                        </span>
                    </div>
                </div>
                <div className='footerThree'>
                    Subscribe
                    <input placeholder='Get product updates' type="text" name="" id="" />
                </div>
            </footer>
            <hr />
            <div className='footerInitial'>
                <div className='footerImages'>
                    <img src={linkedin} alt="" />
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                </div>
                <div className='footerLogo'>
                    <span>Powered by</span>
                    <img src={logo} alt="" />
                </div>
                <div className='footerInformation'>
                    <span>© 2021 FM. All rights reserved</span>
                </div>
            </div>
        </div>
    )
}



export default Home;