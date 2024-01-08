import './App.css';

import React, { useState } from 'react';
import { Drawer } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';

const SideDrawer = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <>
      <div>
        
        <div type="primary" className='icon-bar' onClick={showDrawer}>
          <UnorderedListOutlined className='icon'/>
          Quizmingle
        </div>
      </div>
      <Drawer
        title="Quizmingle"
        placement='left'
        closable={false}
        onClose={onClose}
        open={open}
        key='left'
        width={200}
      >
        <h4>Media</h4>
        <p>Blog</p>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>About Us</p>
        <h4>Legal</h4>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
      </Drawer>
    </>
  );
};
export default SideDrawer;