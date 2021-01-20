import React from 'react';
import { Row, Col, Layout, Typography, Space, Divider} from 'antd';
import { Link } from 'react-router-dom';
import img from "./assets/img/logo2.png";
import FooterToolbar from 'ant-design-pro/lib/FooterToolbar';
import {
    ArrowRightOutlined,
    TwitterOutlined,
    FacebookOutlined,
    LinkedinOutlined,
    InstagramOutlined
} from "@ant-design/icons";

const { Footer } = Layout;
const { Text, Paragraph } = Typography;

const FooterLayout = () => {
    return (
        <Footer style={{ textAlign: 'center', background: "#F9F9F9" ,padding:12}}>
            <Row>
                <Col span={6} style={{mariginTop: '50px'}}>
                    <Space direction="vertical">
                        <img src={img} alt={""} width={"150px"} />
                        <Paragraph style={{ fontFamily: "DejaVu Sans Light" }}>We Empower Makers <br/> Using Digital Platforms.</Paragraph>
                        <Text><Link style={{ color: "#00B478" }} to="#">Talk to sales <ArrowRightOutlined /></Link></Text>
                        <Row>
                            <Col span={4}>
                                <TwitterOutlined />
                            </Col>
                            <Col span={4}>
                                <FacebookOutlined />
                            </Col>
                            <Col span={4}>
                                <InstagramOutlined />
                            </Col>
                            <Col span={4}>
                                <LinkedinOutlined />
                            </Col>
                        </Row>
                    </Space>
                </Col>
                <Col span={5}>

                </Col>
                <Col span={6} style={{mariginTop: '50px'}}>
                    <Space direction="vertical">
                        <Text strong>SOLUTIONS</Text>
                        <Text><Link style={{ color: "black" }} to="#">Design a website</Link></Text>
                        <Text><Link style={{ color: "black" }} to="#">Develop a web app</Link></Text>
                        <Text><Link style={{ color: "black" }} to="#">Build a mobile app</Link></Text>
                        <Text><Link style={{ color: "black" }} to="#">Open Source</Link></Text><br/>
                    </Space>

                </Col>
                <Col span={6}>
                    <Space direction="vertical">
                        <Text strong>COMPANY</Text>
                        <Text><Link style={{ color: "black" }} to="./about">About Us</Link></Text>
                        <Text><Link style={{ color: "black" }} to="./contact">Contact</Link></Text>
                        <Text><Link style={{ color: "black" }} to="./jobs">Jobs</Link></Text>
                        <Text><Link style={{ color: "black" }} to="#">Newsletter</Link></Text>
                    </Space>
                </Col>
            </Row>
            <Divider />
            <Row justify="space-between">
                <Col span={4}>
                    <Text><Link style={{ color: "black" ,fontSize:"10px"}} to="#">2020 @Kelale Tech PLC. All rights reserved</Link></Text>
                </Col>
                <Col span={4}>
                    
                </Col>
                <Col span={4}>
                    
                </Col>
                <Col span={4}>
                    
                </Col>
                <Col span={2}>
                    
                </Col>
                <Col span={2}>
                     <Text><Link style={{ color: "black",fontSize:"10px" }} to="#">Terms</Link></Text>
                </Col>
                <Col span={4}>
                    <Text><Link style={{ color: "black" ,fontSize:"10px"}} to="#">Privacy Policy</Link></Text>
                </Col>  
            </Row>
            
        </Footer>
    )
}

export default FooterLayout;