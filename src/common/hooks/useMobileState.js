import { useEffect, useState } from 'react';
import $ from 'jquery';

function mobileState() {
  const [isMobile, setIsMobile] = useState(false);

  function setMobile() {
    setIsMobile($(window).outerWidth() < 768);
  }

  useEffect(() => {
    setMobile();
    $(window).on('resize', setMobile);
    return () => $(window).off('resize');
  }, []);

  return isMobile;
}

export default mobileState;
