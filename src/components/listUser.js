import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import "antd/dist/antd.css";
// import reactDom from 'react-dom';


function ListUSers() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        console.log('akakakak');
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
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}
// reactDom.render(<ListUSers />);

export default ListUSers;
