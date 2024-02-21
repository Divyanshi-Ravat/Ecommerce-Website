import React from 'react';
import {
  ShoppingCart,
  ViewColumn,
  Archive,
  Menu,
  Settings,
} from '@material-ui/icons';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      style={{
        display: openSidebarToggle ? 'inline' : '',
        backgroundColor: '#263043',
        overflowY: 'auto',
        transition: 'all 0.5s',
        '-webkit-transition': 'all 0.5s',
      }}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <ShoppingCart className="icon_header" /> SHOP
        </div>
        <span
          className="icon close_icon"
          style={{ color: 'red', marginLeft: '30px', marginTop: '10px', cursor: 'pointer' }}
          onClick={OpenSidebar}
        >
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item" style={{ padding: '20px 20px 20px 20px', fontSize: '18px' }}>
          <a href="">
            <ViewColumn className="icon" /> Dashboard
          </a>
        </li>
        {/* Other list items... */}
      </ul>
    </aside>
  );
}

export default Sidebar;