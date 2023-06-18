import React, {useContext, useEffect, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {timeTo12, timeTo60_5} from '../storages/formatData';
import TimeWheel from '../component/TimeWheel';
import AlarmContext from '../contexts/AlarmContext';
import {DateBox, WeekBox} from '../component/AlarmAddComponent';

const AlarmAddScreen = ({route}) => {
  const alarm = route.params?.item;
  const navigator = useNavigation();

  const {onCreate, onModify} = useContext(AlarmContext);

  const [timeZone, setTimeZone] = useState(1);
  const [hour, setHour] = useState(5);
  const [min, setMin] = useState(alarm?.min ? alarm.min / 5 : 5);

  const [date, setDate] = useState(
    alarm?.date ? new Date(alarm.date) : new Date(),
  );

  const [week, setWeek] = useState(
    alarm?.week ?? [false, false, false, false, false, false, false],
  );
  const [weekCheck, setWeekCheck] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (week.some(item => item == true)) setWeekCheck(true);
    else setWeekCheck(false);
  }, [week]);

  useEffect(() => {
    if (alarm) {
      if (alarm.hour > 12) {
        setTimeZone(1);
        setHour(alarm.hour - 13);
      } else {
        setTimeZone(0);
        setHour(alarm.hour - 1);
      }
    }
  }, []);

  const onConfirm = selectedDate => {
    setVisible(false);
    setDate(selectedDate);
  };

  const handleSave = () => {
    if (alarm) {
      onModify({
        id: alarm.id,
        hour: hour + 1 + timeZone * 12,
        min: min * 5,
        week: week,
        toggle: true,
        date: date,
        weekCheck: weekCheck,
      });
    } else {
      onCreate({
        hour: hour + 1 + timeZone * 12,
        min: min * 5,
        week: week,
        toggle: true,
        date: date,
        weekCheck: weekCheck,
      });
    }
    navigator.navigate('Main');
  };

  const weekHandle = index => {
    const clickedWeek = week.map((item, idx) => (index === idx ? !item : item));
    setWeek(clickedWeek);
  };

  return (
    <SafeAreaView>
      <View style={styles.timeBox}>
        <TimeWheel
          index={timeZone}
          setIndex={setTimeZone}
          options={['오전', '오후']}
        />
        <TimeWheel index={hour} setIndex={setHour} options={timeTo12} />
        <TimeWheel index={min} setIndex={setMin} options={timeTo60_5} />
      </View>

      <DateBox
        setVisible={setVisible}
        date={date}
        weekCheck={weekCheck}
        week={week}
      />
      <WeekBox week={week} weekHandle={weekHandle} />

      <Button title="취소" onPress={() => navigator.navigate('Main')} />
      <Button title="저장" onPress={handleSave} />
      <DateTimePickerModal
        isVisible={visible}
        onConfirm={onConfirm}
        onCancel={() => setVisible(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  timeBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '20%',
    marginBottom: '10%',
  },
});
export default AlarmAddScreen;
