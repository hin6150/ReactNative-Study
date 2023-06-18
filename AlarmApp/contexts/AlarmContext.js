import React, {useEffect} from 'react';
import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import alarmStorage from '../storages/alarmStorage';

const AlarmContext = createContext();

export function AlarmContextProvider({children}) {
  const [alarms, setAlarms] = useState([
    {
      id: new uuidv4(),
      hour: 12,
      min: 30,
      week: [false, false, false, false, false, false, false],
      toggle: true,
      date: new Date(),
      weekCheck: false,
    },
  ]);

  useEffect(() => {
    alarmStorage.get().then(setAlarms).catch(console.error);
  }, []);

  useEffect(() => {
    alarmStorage.set(alarms).catch(console.error);
  }, [alarms]);

  const onToggle = id => {
    const nextAlrams = alarms.map(alram =>
      alram.id === id ? {...alram, toggle: !alram.toggle} : alram,
    );
    setAlarms(nextAlrams);
  };

  const onRemove = id => {
    const nextAlrams = alarms.filter(alarm => alarm.id !== id);
    setAlarms(nextAlrams);
  };

  const onCreate = ({hour, min, week, toggle, date, weekCheck}) => {
    const alarm = {
      id: uuidv4(),
      hour,
      min,
      week,
      toggle,
      date,
      weekCheck,
    };
    setAlarms([alarm, ...alarms]);
  };
  const onModify = modified => {
    // alarms 배열을 순회해 id가 일치하면 log를 교체하고 그렇지 않으면 유지
    const nextAlrams = alarms.map(alarm =>
      alarm.id === modified.id ? modified : alarm,
    );
    setAlarms(nextAlrams);
  };

  return (
    <AlarmContext.Provider
      value={{alarms, onCreate, onToggle, onRemove, onModify}}>
      {children}
    </AlarmContext.Provider>
  );
}

export default AlarmContext;
