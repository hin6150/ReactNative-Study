import React, {useState} from 'react';
import Counter from './Counter';

const App = () => {
  const [value, setValue] = useState(0);
  const onPressLeftButton = () => {
    setValue(value + 1);
  };
  const onPressRightButton = () => {
    setValue(value - 1);
  };
  return (
    <Counter
      style={{flex: 1}}
      value={value}
      leftButtonText="+1"
      rightButtonText="-1"
      onPressLeftButton={onPressLeftButton}
      onPressRightButton={onPressRightButton}
    />
  );
};

export default App;
