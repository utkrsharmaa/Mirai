import {useEffect} from 'react';
import { useAreaContext } from './activeAreaContext';

const useKeyPress = () => {
  const { setArea } = useAreaContext();
  
  useEffect(()=> {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case '1':
          setArea("Home");
          break;
        case '2':3123
          setArea("Collection");
          break;
        case '3':
          setArea("Settings");
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [setArea]);
}

export default useKeyPress;