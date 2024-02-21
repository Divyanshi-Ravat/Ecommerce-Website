import React from 'react'
import 
{ Archive, Notifications}
 
 from '@material-ui/icons'
 import './Admin.css'

 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home(props) {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main style={{
      gridArea: 'main',
      overflowY: 'auto',
      padding: '20px 20px',
      color: 'rgba(255, 255, 255, 0.95)',
    }}>
        <div className='main-title' style={{
          display:'flex',
          justifyContent: 'space-between'
        }}>
            <h3>DASHBOARD</h3>
        </div>

        <div  style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap: '20px',
          margin: '15px 0',
        }}>
            {/* <div  style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              padding:'8px 15px',
              borderRadius: '5px'
            }}>
                <div  style={{
                  display :'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                    <h3>PRODUCTS</h3>
                    <Archive className='card_icon' style={{
                      fontSize : '25px'
                    }}/>
                </div>
                <h1>300</h1>
            </div> */}
            <div className='card'  style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              padding:'8px 15px',
              borderRadius: '5px'}}>
                <div className='card-inner' style={{
                  display :'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                    <h3>Products</h3>
                    {/* <BsFillGrid3X3GapFill className='card_icon'/> */}
                </div>
                <h1>{props.products}</h1>
            </div>
            <div className='card' style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              padding:'8px 15px',
              borderRadius: '5px'}}>
                <div className='card-inner' style={{
                  display :'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                    <h3>CUSTOMERS</h3>
                    {/* <PeopleFill className='card_icon'/> */}
                </div>
                <h1>{props.customers}</h1>
            </div>

            <div className='card' style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              padding:'8px 15px',
              borderRadius: '5px'}}>
                <div className='card-inner' style={{
                  display :'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                    <h3>ORDERS</h3>
                    <Notifications className='card_icon' style={{
                      fontSize : '25px'
                    }} />
                    
                </div>
                <h1>42</h1>
            </div>

            <div className='card' style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              padding:'8px 15px',
              borderRadius: '5px'}}>
                <div className='card-inner' style={{
                  display :'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                    <h3>ADD PRODUCT</h3>
                    {/* <PeopleFill className='card_icon'/> */}
                </div>
                <h1>{props.customers}</h1>
            </div>
        </div>

        <div className='charts' style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          marginTop: '60px',
          height: '300px'
        }}>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home