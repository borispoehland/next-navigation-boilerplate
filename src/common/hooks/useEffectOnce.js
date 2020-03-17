import { useEffect } from 'react';

const useEffectOnce = (callback) => {
  useEffect(() => {
    callback();
  }, []); // empty array = use once initially
};

export default useEffectOnce;
