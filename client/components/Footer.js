import React from 'react';

const Footer = () => {
  return (
    <footer id='footer'>
      <hr />
      <div className='footer'>
        <p>Made with ❤️ in Grace Hopper</p>
        <p className='contributors'>
          Created by{' '}
          <a href='https://www.linkedin.com/in/laurenmhbaca/'>Lauren Baca</a>,{' '}
          <a href='https://www.linkedin.com/in/allie-hc-wang/'>Allie Wang</a>,{' '}
          <a href='https://www.linkedin.com/in/siyunfeng/'>Siyun Feng</a>, and{' '}
          <a href='https://www.linkedin.com/in/zchristine/'>Christine Zheng</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
