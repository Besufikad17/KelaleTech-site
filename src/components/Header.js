import React from 'react';
import { Layout, Row, Menu, Col, Button, Dropdown, Divider } from 'antd';
import icon from "./assets/img/logo.png";
import { Link } from "react-router-dom";
import {
  InfoCircleOutlined,
  ContactsOutlined,
  HomeOutlined,
  FormatPainterOutlined,
  AlignRightOutlined,
  SendOutlined
} from "@ant-design/icons";

const { Header } = Layout;

const Test = () => {


  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<HomeOutlined />}>
        <Link to="/">
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<FormatPainterOutlined />}>
        <Link to="./jobs">
          Jobs
        </Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<InfoCircleOutlined />}>
        <Link to="./about">
          About
        </Link>
      </Menu.Item>
      <Menu.Item key="4" icon={<ContactsOutlined />}>
        <Link to="./contact">
          Contact
        </Link>
      </Menu.Item>
      <Menu.Item key="5" icon={<SendOutlined />}>
        <Link to="./newsletter">
          Newsletter
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ height: "100%", backgroundColor: "#00B478" }}>
      <Layout>
        <Header style={{ backgroundColor: "#00B478", height: "120%" }}>
          <Row gutter={16}>
            <Col className="gutter-row" span={8}>
              <div className="logo">
                <img src={icon} width={"150px"} alt={""} />
              </div>
            </Col>
            <Col className="gutter-row" span={12}></Col>
            <Col className="gutter-row" span={2}>
              <Button
                style={{
                  backgroundColor: "#00B478",
                  color: "white",
                  borderRadius: "4px",
                  fontSize: "12px",
                  borderStyle: "solid 1px white"
                }}>

                let's Talk!
                </Button>
            </Col>
            <Col className="gutter-row" span={2}>    
              <Dropdown overlay={menu}>
                <Button style={{ backgroundColor: "#00B478", color: "white" , borderStyle: "none"}}>
                  <AlignRightOutlined /> Menu 
                </Button>
              </Dropdown>
            </Col>
          </Row>
        </Header>
      </Layout>
    </Layout>
  )
}

export default Test;