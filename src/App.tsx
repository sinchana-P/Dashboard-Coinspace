import { useState } from 'react'
import './style/App.css'
import { Avatar, Button, Card, Descriptions, Divider, Empty, Form, Input, Layout, List, Menu, Space, Steps, Table, TimePicker, Typography , Tag} from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import { AiFillHome } from "react-icons/ai";
import { RiBitCoinFill, RiExchangeFill } from "react-icons/ri";
import { SlWallet } from "react-icons/sl";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsBank2 } from "react-icons/bs";
import { FaGift } from "react-icons/fa6";
import { TbBulb } from "react-icons/tb";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbTriangleSquareCircleFilled } from "react-icons/tb";
import { FaPowerOff } from "react-icons/fa6";
import { BsFilterRight } from "react-icons/bs";
import { IoCubeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaBitcoin } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";
import { GoArrowDown } from "react-icons/go";
import { FaEthereum } from "react-icons/fa";
import { TbBrandNem } from "react-icons/tb";
import { SiXrp } from "react-icons/si";
import { Select } from 'antd';
import { GiRingingBell  } from "react-icons/gi";
import { TbArrowsDownUp } from "react-icons/tb";
import type { ColumnsType } from 'antd/es/table';
import { SiBitcoincash } from "react-icons/si";
import { SiLitecoin } from "react-icons/si";
import { TbCurrencyEthereum } from "react-icons/tb";


function App() {

  interface DataType {
    key: string;
    date: string;
    detail: string;
    price: string;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Detail',
      dataIndex: 'detail',
      key: 'detail',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    }
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      date: '2018/10/02 10:57:46',
      detail: 'Deposit Japanese Yen',
      price: '+10,000 JPY',
    },
    {
      key: '2',
      date: '2018/10/10 10:57:46',
      detail: 'Bought Bitcoin',
      price: '+0.00018147 BTC',
    },
    {
      key: '3',
      date: '2018/10/10 10:57:46',
      detail: 'Service fee',
      price: '-500 JPY',

    },
    {
      key: '4',
      date: '2018/10/02 10:57:46',
      detail: 'Deposit Japanese Yen',
      price: '+10,000 JPY',
    },
    {
      key: '5',
      date: '2018/10/10 10:57:46',
      detail: 'Bought Bitcoin',
      price: '+0.00018147 BTC',
    },
    {
      key: '6',
      date: '2018/10/10 10:57:46',
      detail: 'Service fee',
      price: '-500 JPY',

    }
  ];

  return (
   <>
    <Layout>
      <Layout>
        <Sider 
          theme="dark"
          className='sider-container'
        >   

          <div className='logo-container'>
            <TbTriangleSquareCircleFilled size={22} color={"#6487EC"} />
            <h1>COINSPACE</h1>
          </div>

          <Divider className='divider'/>

          <div className='quick-access-container'>
            <h1>Quick Access</h1>

            <Menu
              mode="inline"
              theme="dark"
              items = {[
                {
                  label: "Dashboard",
                  key:"dashboard",
                  icon: <AiFillHome size={21} />
                },
                {
                  label: "Exchange",
                  key:"exchange",
                  icon: <RiExchangeFill size={21} />
                },
                {
                  label: "My Wallet",
                  key:"mywallet",
                  icon: <SlWallet size={21} />
                },
                {
                  label: "Tradeview",
                  key:"tradeview",
                  icon: <BsGraphUpArrow size={21} />
                },
              ]}
            >

            </Menu>
          </div>

          <div className='service-container'>
            <h1>Service</h1>

            <Menu
              mode='inline'
              theme="dark"
              items = {[
                {
                  label: "Transactions",
                  key:"transactions",
                  icon: <BsBank2 /> ,
                  children: [
                    {
                      label: "Buy & Sell Coin",
                      key: "buyandsellcoin",
                    },
                    {
                      label: "Deposit Yen",
                      key: "deposityen",
                    },
                    {
                      label: "withdraw Yen",
                      key: "withdrawyen",
                    },
                    {
                      label: "Send Coin",
                      key: "sendcoin",
                    },
                    {
                      label: "Receive Coin",
                      key: "receivecoin",
                    },
                    {
                      label: "Deposit Coin",
                      key: "depositcoin",
                    },
                  ]
                },
                {
                  label: "Rewards",
                  key: "rewards",
                  icon: <FaGift />,
                  children: [
                    {
                      label: "Rewards",
                      key: "reward",
                    }
                  ]
                },
                {
                  label: "Utility Plan",
                  key: "utilityplan",
                  icon: <TbBulb />,
                  children: [
                    {
                      key: "plan",
                      label: "Plan"
                    }
                  ]
                }
                
              ]}
            >
            </Menu>

            <div className='account-container'>
              <h1>Account</h1>
              <Menu
              mode='inline'
              theme='dark'
                items = {[
                  {
                    label: "Notification",
                    key: "notification",
                    icon: <HiOutlineSpeakerphone />
                  },
                  {
                    label: "Settings",
                    key: "settings",
                    icon: <IoSettingsOutline />
                    ,
                  },
                  {
                    label: "FAQ",
                    key: "faq",
                    icon: <FaRegQuestionCircle />
                  }
                ]}
              >
              </Menu>
            </div>


            <div className='logout-container'>
            <Divider className='divider'/>
              <Menu
                mode='inline'
                theme='dark'
                items = {[
                  {
                    key: "logout",
                    label: "Log Out",
                    icon: <FaPowerOff />
                  }
                ]}
              >
              </Menu>
              
            </div>    
          </div>
          


        </Sider>

        <Content className='content'>

          <Card className='header-container'>
            <BsFilterRight size={21} className="header-icons" />
            <IoCubeOutline size={21} className="header-icons" />
            <Input size="small" placeholder="search" prefix={<CiSearch />} />
            <Avatar src="https://th.bing.com/th/id/OIP.4oYqJqInuQd2TAlPPdggLgHaHa?w=211&h=211&c=7&r=0&o=5&dpr=1.1&pid=1.7" className="header-icons" />
            <IoSettingsOutline size={21} className="header-icons" />
            <HiOutlineSpeakerphone size={21} className="header-icons" />
            <Avatar src="https://th.bing.com/th/id/OIP.-UhCusNp-fNE_DruwEZkXwHaF3?pid=ImgDet&rs=1" className="header-icons" />
          </Card>

          {/* <Card className='header-container'>
              <Card>
                <BsFilterRight size={21} className="header-icons" />
                <IoCubeOutline size={21} className="header-icons" />
              </Card>

              <Card>
                <Input size="small" placeholder="search" prefix={<CiSearch />} />
              </Card>

              <Card>
                <Avatar src="https://th.bing.com/th/id/OIP.4oYqJqInuQd2TAlPPdggLgHaHa?w=211&h=211&c=7&r=0&o=5&dpr=1.1&pid=1.7" className="header-icons" />
                <IoSettingsOutline size={21} className="header-icons" />
                <HiOutlineSpeakerphone size={21} className="header-icons" />
                <Avatar src="https://th.bing.com/th/id/OIP.-UhCusNp-fNE_DruwEZkXwHaF3?pid=ImgDet&rs=1" className="header-icons" />
              </Card>
            </Card> */}

            <div className='dashboard-container'>
              <div className='welcome-container'>
                <p>Welcome</p>
                <p>Dashboard</p>
              </div>

              <div className='top-section-container'>
                  {/* <Card className='top-card' style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}> */}
                  <Card className='top-card'>
                      {/* <FaBitcoin size={32} className={"coin-logo"} style={{ color: "#FFC246" }} /> */}
                      <FaBitcoin size={20} style={{ color: "white", backgroundColor: "#FFC246", width: "45px", height: "45px", borderRadius: "50%", padding: "6px" }} />
                      <div className='top-card-text'>
                        <h1>BTC</h1>
                        <p>Bitcoin</p>
                      </div>
                      <div className="top-card-currency">
                        <h1>¥ 721,882</h1>
                        <p className='pink-font'>-4.66%  <GoArrowDown /></p>
                      </div>
                  </Card>
                  <Card className='top-card'>
                      <FaEthereum size={20} style={{ color: "white", backgroundColor: "#5470DE", width: "45px", height: "45px", borderRadius: "50%", padding: "6px" }}/>
                      <div className='top-card-text'>
                        <h1>ETH</h1>
                        <p>Ethereum</p>
                      </div>
                      <div className="top-card-currency">
                        <h1>¥ 22,370</h1>
                        <p className='green-font'>+0.45% <BsArrowUp /></p>
                      </div>
                  </Card>
                  <Card className='top-card'>
                      <TbBrandNem size={20} style={{ color: "white", backgroundColor: "#07BEAA", width: "45px", height: "45px", borderRadius: "50%", padding: "6px" }}/>
                      <div className='top-card-text'>
                        <h1>XEM</h1>
                        <p>NEM</p>
                      </div>
                      <div className="top-card-currency">
                        <h1>¥ 10.604</h1>
                        <p className='pink-font'>-1.07%  <GoArrowDown /></p>
                      </div>
                  </Card>
                  <Card className='top-card'>
                      <SiXrp size={20} style={{ color: "white", backgroundColor: "#1786C4", width: "45px", height: "45px", borderRadius: "50%", padding: "6px" }}/>
                      <div className='top-card-text'>
                        <h1>XRP</h1>
                        <p>Ripple</p>
                      </div>
                      <div className="top-card-currency">
                        <h1>¥ 50.839</h1>
                        <p className='green-font'>+0.66% <BsArrowUp /> </p>
                      </div>
                  </Card>
              </div>

              
              <Layout >
                
                  <Card className='chart-container'>
                    <Space direction="horizontal">
                    
                    <Card>
                      <div className='chart-sec-1'>
                        <div className='chart-sec-1-text'>
                          <h2>BTC</h2>
                          <Space wrap>
                            <Select
                              defaultValue="/JPY"
                              // style={{ width: 120 }}
                              bordered={false}
                              options={[
                                { value: 'jpy', label: '/JPY' },
                                { value: 'jpy2', label: 'JPY2' },
                                { value: 'jpy3', label: 'JPY3' },
                              ]}
                            />
                            
                          </Space>
                        </div>
                        <Button className='buy-button'>BUY</Button>
                      </div>
                      
                      {/* <Divider type='vertical' /> */}
                      <Divider />
                    

                      <div className='chart-sec-2'>
                        <div className='chart-sec-2-text'>
                          <h2>721,882</h2>
                          <p className='pink-font'>-4.66%  <GoArrowDown /></p>                  
                        </div>
                        <div className='chart-sec-2-text'>
                          <p className='grey-font'>High</p>                  
                          <h2>725,974</h2>
                        </div>
                        <div className='chart-sec-2-text'>
                          <p className='grey-font'>Low</p>                  
                          <h2>718,000</h2>
                        </div>
                        <div className='chart-sec-2-text'>
                          <p className='grey-font'>24h Volume</p>                  
                          <h2>677.7 BTC</h2>
                        </div>
                        <div className='chart-sec-2-text price-alert'>
                          <p className='grey-font'>Price Alert</p>                  
                          <GiRingingBell size={34} style={{color: "#130EAD"}} />
                        </div>
                        
                      </div>
                    </Card>

                    {/* <Divider orientation='right' /> */}
                    {/* <Divider type='vertical' /> */}
                    {/* <Divider style={{ height: '100%', float: 'right' }} type="vertical" /> */}
                    

                    <Card>
                      <div className='chart-sec-right'>
                        <div className='chart-sec-right-header'>
                          <h1>Market Cap</h1>
                          <TbArrowsDownUp size={22} style={{ color: "grey" }} />
                        </div>
                        <div className='market-cap-div'>
                          <div className='market-cap-div-left'>
                            <FaBitcoin size={18} style={{ color: "white", backgroundColor: "#FFC246", width: "40px", height: "40px", borderRadius: "50%", padding: "6px" }} />
                            <h2>BTC</h2>
                          </div>               
                          <div className='market-cap-div-right'>
                            <h2>¥ 721,882</h2>
                            <p className='pink-font'>-4.66%  <GoArrowDown /></p>                 
                          </div>    
                        </div>

                        <div className='market-cap-div'>
                          <div className='market-cap-div-left'>
                            <SiBitcoincash size={18} style={{ color: "white", backgroundColor: "#DE510F", width: "40px", height: "40px", borderRadius: "50%", padding: "6px" }} />
                            <h2>BCH</h2>
                          </div>               
                          <div className='market-cap-div-right'>
                            <h2>¥ 48,676</h2>
                            <p className='green-font'>+0.38%  <BsArrowUp /></p>                 
                          </div>    
                        </div>

                        <div className='market-cap-div'>
                          <div className='market-cap-div-left'>
                            <FaEthereum size={18} style={{ color: "white", backgroundColor: "#1E11D6", width: "40px", height: "40px", borderRadius: "50%", padding: "6px" }} />
                            <h2>ETH</h2>
                          </div>               
                          <div className='market-cap-div-right'>
                            <h2>¥ 22,370</h2>
                            <p className='green-font'>+0.45%  <BsArrowUp /></p>                 
                          </div>    
                        </div>

                        <div className='market-cap-div'>
                          <div className='market-cap-div-left'>
                            <SiLitecoin size={18} style={{ color: "white", backgroundColor: "#AA9B94", width: "40px", height: "40px", borderRadius: "50%", padding: "6px" }} />
                            <h2>LTC</h2>
                          </div>               
                          <div className='market-cap-div-right'>
                            <h2>¥ 5,788.5</h2>
                            <p className='pink-font'>-0.23%  <GoArrowDown /></p>                 
                          </div>    
                        </div>

                        <div className='market-cap-div'>
                          <div className='market-cap-div-left'>
                            <TbCurrencyEthereum size={18} style={{ color: "white", backgroundColor: "#19B73C", width: "40px", height: "40px", borderRadius: "50%", padding: "6px" }} />
                            <h2>ETC</h2>
                          </div>               
                          <div className='market-cap-div-right'>
                            <h2>¥ 1,660.7</h2>
                            <p className='pink-font'>-0.09%  <GoArrowDown /></p>                 
                          </div>    
                        </div>

                        <div className='market-cap-div'>
                          <div className='market-cap-div-left'>
                            <SiXrp size={18} style={{ color: "white", backgroundColor: "#4F6BE8", width: "40px", height: "40px", borderRadius: "50%", padding: "6px" }} />
                            <h2>XRP</h2>
                          </div>               
                          <div className='market-cap-div-right'>
                            <h2>¥ 50.839</h2>
                            <p className='green-font'>+0.66%  <BsArrowUp /></p>                 
                          </div>    
                        </div>

                        <div className='market-cap-div'>
                          <div className='market-cap-div-left'>
                            <FaBitcoin size={18} style={{ color: "white", backgroundColor: "#2F344B", width: "40px", height: "40px", borderRadius: "50%", padding: "6px" }} />
                            <h2>FCT</h2>
                          </div>               
                          <div className='market-cap-div-right'>
                            <h2>¥ 534.68</h2>
                            <p className='green-font'>+8.47%  <BsArrowUp /></p>                 
                          </div>    
                        </div>

                        <div className='market-cap-div'>
                          <div className='market-cap-div-left'>
                            <FaBitcoin size={18} style={{ color: "white", backgroundColor: "#04167B", width: "40px", height: "40px", borderRadius: "50%", padding: "6px" }} />
                            <h2>LSK</h2>
                          </div>               
                          <div className='market-cap-div-right'>
                            <h2>¥ 321.14</h2>
                            <p className='pink-font'>-0.47%  <GoArrowDown /></p>                 
                          </div>    
                        </div>

                        <div className='market-cap-div'>
                          <div className='market-cap-div-left'>
                            <TbBrandNem size={18} style={{ color: "white", backgroundColor: "#77ECC7", width: "40px", height: "40px", borderRadius: "50%", padding: "6px" }} />
                            <h2>XEM</h2>
                          </div>               
                          <div className='market-cap-div-right'>
                            <h2>¥ 10.604</h2>
                            <p className='pink-font'>-1.07%  <GoArrowDown /></p>                 
                          </div>    
                        </div>
                      </div>
                      
                      <Divider />
                    
          
                    </Card>
                    </Space> 
                  </Card>
              
                
              </Layout>

              <div className='bottom-section-container'>
                <Card>
                  <div >
                    <h2>Latest Activities</h2>
                    <div className='activities-list'>
                      <List.Item className='each-activity'>ALL</List.Item>
                      <List.Item className='each-activity'>BTC</List.Item>
                      <List.Item className='each-activity'>ETH</List.Item>
                      <List.Item className='each-activity'>XRP</List.Item>
                      <List.Item className='each-activity'>XEM</List.Item>
                      <List.Item className='each-activity'>LSK</List.Item>
                      <List.Item className='each-activity'>BTH</List.Item>
                      <List.Item className='each-activity'>FCT</List.Item>
                      <List.Item className='each-activity'>ETC</List.Item>
                      <List.Item className='each-activity'>JPY</List.Item>   
                    </div>

                    <Divider />

                  </div>

                  <div className='latest-activities-container'>
                    <Table
                      columns={columns}
                      dataSource={data}
                    />
                  </div>
                </Card>

                <Card>
                  <h1>Crypto Newsfeed</h1>
                  <Card className='newsfeed-container'>
                    <h4>Today 11:36</h4>
                    <h2>Beyond Bad Trades: Cybersecurity Risks to Cryptocurrency Exchange Users</h2>
                    <p>Cryptocurrency-mining malware is not the only type of cryptocurrency-related threat — cybercriminals have resorted…</p>
                  </Card>
                  <Card className='newsfeed-container'>
                    <h4>Today 11:36</h4>
                    <h2>Beyond Bad Trades: Cybersecurity Risks to Cryptocurrency Exchange Users</h2>
                    <p>Cryptocurrency-mining malware is not the only type of cryptocurrency-related threat — cybercriminals have resorted…</p>
                  </Card>
                  <Card className='newsfeed-container'>
                    <h4>Today 11:36</h4>
                    <h2>Beyond Bad Trades: Cybersecurity Risks to Cryptocurrency Exchange Users</h2>
                    <p>Cryptocurrency-mining malware is not the only type of cryptocurrency-related threat — cybercriminals have resorted…</p>
                  </Card>
                  
                </Card>
              </div>
              
            </div>



        </Content>
      </Layout>
   </Layout>


   </>
  )
}

export default App
