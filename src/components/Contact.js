import React from 'react';
import { Form, Input, Row, Col, Button, Typography, Space, Card } from 'antd';
import img from "./assets/img/1.png"
import FormItem from 'antd/lib/form/FormItem';
import Header from './Header';
import i from './assets/img/i2.png';
import "./assets/css/Main.css";
const { Text } = Typography;

const inputChangeHandler = (event, type) => {

}

const onFinish = () => {

}

const style = { padding: '8px 0' };

const divStyle = { width: '300px', borderStyle:'1px solid #00B478', borderRadius:'1px'};

const Contact = () => {
    return (
        <div>
            <Header />
            <img src={img} alt={""} width={"100%"} />
            <Row>
                <Col span={4}></Col>
                <Col span={6}>
                    <Card style={{
                        width: 400,
                        height: 600,
                        background: "#00B478",
                        marginLeft: "100px",
                        paddingTop: "50px",
                        paddingRight: "30px",
                        paddingBottom: "50px",
                        paddingLeft: "30px"
                    }}>
                        <div className="space-align-container">
                            <div className="space-align-block">
                                <Space align="center" size={4} direction="horizontal">
                                    <span className="mock-block">{"         "}</span>
                                    <h1 style={{ alignItems: "center", color: "white", marginLeft: "60px", }}>Contact Us</h1>
                                    <span className="mock-block"></span>
                                </Space>
                            </div>
                        </div>
                        <Form onFinish={onFinish} style={{ marginLeft: "inherit" }}>
                            <Form.Item required >
                                <p><Text style={{ color: "white" }}>Email</Text></p>
                                <Input />
                            </Form.Item>
                            <Form.Item required>
                                <p><Text style={{ color: "white" }}>Subject</Text></p>
                                <Input />
                            </Form.Item>
                            <Form.Item required>
                                <p><Text style={{ color: "white" }}>Your Message</Text></p>
                                <Input.TextArea />
                            </Form.Item>
                            <div className="space-align-container">
                                <div className="space-align-block">
                                    <Space align="center">
                                        <span className="mock-block">   </span>
                                        <Form.Item>
                                            <Button
                                                style={{
                                                    backgroundColor: "#00B478",
                                                    color: "white",
                                                    borderRadius: "4px",
                                                    fontSize: "12px",
                                                    borderStyle: "solid 1px white",
                                                    marginLeft: "75px",
                                                }}>

                                                Submit
                </Button>
                                        </Form.Item>
                                        <span className="mock-block"></span>
                                    </Space>
                                </div>
                            </div>
                        </Form>
                    </Card>
                </Col>
                <Col span={2}>
                    <Card style={{ width: 400, height: 600, marginLeft: "160px"}}>
                        <div style={{width: '300px', borderStyle:'1px solid #00B478', borderRadius:'1px'}}></div><br/>
                        <img src={i} alt={""} width={"100%"} />
                    </Card>,
                </Col>

            </Row>
        </div>
    )
}

export default Contact;