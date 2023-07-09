import {useState, useEffect, useRef} from 'react';
import {Images, backgroundImageList, objectImageList} from '../pages/Images';
import {Animated} from 'react-native';

function useHooks() {
  const [backgroundImage, setBackgroundImage] = useState(Images.Background3);
  const [objectImage, setObjectImage] = useState(Images.Object3);
  const [startButtonOpacity, setStartButtonOpacity] = useState(1);
  const [startButtonDisabled, setStartButtonDisabled] = useState(false);
  const [toggleFail, setToggleFail] = useState(false);

  const objectY = useRef(new Animated.Value(100)).current;
  let animation = useRef(null);

  useEffect(() => {
    getRandomValue();
  }, []);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getRandomValue = () => {
    const backgroundImageNumber = getRandomNumber(0, 2);
    const objectImageNumber = getRandomNumber(0, 4);

    setBackgroundImage(backgroundImageList[backgroundImageNumber]);
    setObjectImage(objectImageList[objectImageNumber]);
  };

  const startBtnClick = () => {
    if (!animation.current) {
      setStartButtonDisabled(!startButtonDisabled);
      setStartButtonOpacity(0.5);
      animation.current = Animated.timing(objectY, {
        toValue: 700,
        duration: getRandomNumber(10, 20) * 100, // 애니메이션 지속 시간(ms)
        useNativeDriver: true, // 네이티브 드라이버 사용 여부
      });
      animation.current.start();
    } else {
      getRandomValue();
      objectY.setValue(100); // 초기값으로 되돌리기
      setToggleFail(false);
      animation.current = null;
    }
  };

  const stopBtnClick = () => {
    if (animation.current) {
      setStartButtonDisabled(false);
      setStartButtonOpacity(1);
      animation.current.stop();
    }
  };

  useEffect(() => {
    const listener = objectY.addListener(({value}) => {
      if (value > 500) {
        setStartButtonDisabled(false);
        setStartButtonOpacity(1);
        animation.current.stop();
        setToggleFail(true);
      }
    });

    return () => {
      objectY.removeListener(listener);
    };
  }, [objectY]);

  return {
    backgroundImage,
    objectImage,
    startButtonOpacity,
    startButtonDisabled,
    toggleFail,
    objectY,
    startBtnClick,
    stopBtnClick,
  };
}

export default useHooks;
