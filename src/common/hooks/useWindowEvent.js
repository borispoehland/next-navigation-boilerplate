import { useEffect } from 'react';
import $ from 'jquery';

const useWindowEvent = (event, callback, dependencies = []) => {
  useEffect(() => {
    $(window).on(event, callback);
    return () => $(window).off(event, callback);
  }, dependencies);
};

export default useWindowEvent;
