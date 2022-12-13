import './App.css';
import React, { Component } from 'react';
import { Layout, Avatar, Menu, Breadcrumb } from 'antd';
import { UserOutlined, SettingOutlined, DashboardOutlined, ToolOutlined, BarChartOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';

const { Header, Footer, Sider, Content } = Layout;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenuItem: "dashboard",
      contentArray: [
        {key: "dashboard", title: "Dashboard", text: "Dashboard content"},
        {key: "components", title: "Components", text: "Components content"},
        {key: "analytics1", title: "Anaytics 1", text: "Analytics 1 content"},
        {key: "analytics2", title: "Anaytics 2", text: "Analytics 2 content"},
        {key: "settings", title: "Settings", text: "Settings content"}
      ]
    }
  }

  handleSelected = (e) => {
    this.setState({
      selectedMenuItem: e.key
    })
  }

  

  displayContent() {
    const selectedItem = this.state.contentArray.find(item => item.key === this.state.selectedMenuItem)
    return (
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>{selectedItem.title}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{selectedItem.text}</div>
      </Content>
    )
  }

  render() {
    return (
      <div className="App">
        <h3>Predictive Maintenance Dashboard</h3>
        <Layout>
          <Header style={{ padding: 10, backgroundColor: "purple" }}>
            <Avatar size={32} icon={<UserOutlined />} style={{ float: "right" }} />
            <Title style={{ color: "white", float: "left" }} level={3}>Blessing</Title>
          </Header>
          <Layout>
            <Sider style={{ background: "blue" }}>
              <Menu
                //defaultSelectedKeys={["dashboard"]}
                selectedKeys={[this.state.selectedMenuItem]}
                mode="inline"
              >
                <Menu.Item onClick={this.handleSelected} icon={<DashboardOutlined />} key="dashboard">Dashboard</Menu.Item>
                <Menu.Item onClick={this.handleSelected} icon={<ToolOutlined />} key="components">Components</Menu.Item>
                <Menu.SubMenu icon={<BarChartOutlined />} key="analytics" title="Analytics">
                  <Menu.Item onClick={this.handleSelected} key="analytics1">Analytics 1</Menu.Item>
                  <Menu.Item onClick={this.handleSelected} key="analytics2">Analytics 2</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item onClick={this.handleSelected} icon={<SettingOutlined />} key="settings">Settings</Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              {this.displayContent()}
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2022 designed by Blessing N Musungate</Footer>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );

  }
}

export default App;
