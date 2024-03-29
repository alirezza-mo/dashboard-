import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined'; 
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sideWrapper">
        <div className="sideMenu">
          <h3 className='sidebarTitle'> dashboard</h3>
          <ul className='sidebarList'>
            <Link to= '/' className='link'>

            <li className='sidebarListItem active'>
              <LineStyleIcon className='sidebarIcon' />
              Home
            </li>
            </Link>
            <li className='sidebarListItem'>
              <TimelineIcon className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUpIcon className='sidebarIcon' />
              Sales
              </li>
          </ul>
        </div>
        <div className="sideMenu">
          <h3 className='sidebarTitle'>Quick menu</h3>
          <ul className='sidebarList'>
            <Link to='/Users' className='link'>

            <li className='sidebarListItem active'>
              <PermIdentityIcon className='sidebarIcon' />
              Users
            </li>
            </Link>
            <Link to='/newUser' className='link'>

            <li className='sidebarListItem'>
              <StorefrontIcon className='sidebarIcon' />
              NewUser
            </li>
            </Link>
            <Link to= '/products' className='link'>

            <li className='sidebarListItem'>
              <AttachMoneyIcon className='sidebarIcon' />
              Products
              </li>
            </Link>
              <li className='sidebarListItem'>
              <BarChartIcon className='sidebarIcon' />
              Transaction
              </li>
              <li className='sidebarListItem'>
              <MailOutlineIcon className='sidebarIcon' />
              Reports
              </li>
          </ul>
        </div>
        <div className="sideMenu">
          <h3 className='sidebarTitle'> notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <ChatBubbleOutlineIcon className='sidebarIcon' />
              Mail
            </li>
            <li className='sidebarListItem'>
              <DynamicFeedIcon className='sidebarIcon' />
              Feedback
            </li>
            <li className='sidebarListItem'>
              <MessageOutlinedIcon className='sidebarIcon' />
              Message
              </li>
          </ul>
        </div>
        <div className="sideMenu">
          <h3 className='sidebarTitle'> staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <WorkOutlineIcon className='sidebarIcon' />
              Mange
            </li>
            <li className='sidebarListItem'>
              <TimelineIcon className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <ReportIcon className='sidebarIcon' />
              Report
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
