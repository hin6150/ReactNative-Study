import React, {useContext, useEffect, useState} from 'react';
import WheelPicker from 'react-native-wheely';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {timeTo12, timeTo60_5, weekString} from '../storages/formatData';
import TimeWheel from '../component/TimeWheel';
import AlarmContext from '../contexts/AlarmContext';

const AlarmAddScreen = ({route}) => {
  const alarm = route.params?.item;

  const {onCreate, onModify} = useContext(AlarmContext);

  const [timeZone, setTimeZone] = useState(1);
  const [hour, setHour] = useState(5);
  const [min, setMin] = useState(alarm?.min ? alarm.min / 5 : 5);

  const navigator = useNavigation();

  const [month, setMonth] = useState(new Date().getMonth());
  const [day, setDay] = useState(new Date().getDate());

  const [week, setWeek] = useState(
    alarm?.week ?? [false, false, false, false, false, false, false],
  );

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

    setDay(selectedDate.getDate());
    setMonth(selectedDate.getMonth());

    // const nextId =
    //   alarms.length > 0 ? Math.max(...alarms.map(alram => alram.id)) + 1 : 1;

    // const newAlarm = {
    //   id: nextId,
    //   hour: selectedDate.getHours(),
    //   min: selectedDate.getMinutes(),
    //   toggle: true,
    // };

    // setAlrams(alarms.concat(newAlarm));
  };
  const onCancel = () => {
    setVisible(false);
  };
  const [visible, setVisible] = useState(false);

  const weekHandle = index => {
    // const clickedWeek = week.map(item =>
    //   item.name === name ? {...item, status: !item.status} : item,
    // );
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

      <View>
        <View style={styles.dataBox}>
          <Text style={{fontSize: 20}}>{`${month + 1}월 ${day}일`}</Text>
          <TouchableNativeFeedback onPress={() => setVisible(true)}>
            <Icon name="calendar-today" color={'black'} size={20} />
          </TouchableNativeFeedback>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          {week.map((data, key) => {
            return (
              <View
                key={key}
                style={{
                  borderRadius: 24,
                  overflow: 'hidden',
                }}>
                <TouchableNativeFeedback onPress={() => weekHandle(key)}>
                  <View
                    style={[
                      styles.weekBox,
                      {
                        borderWidth: data ? 1 : 0,
                      },
                    ]}>
                    <Text
                      style={{
                        color: data ? 'blue' : 'black',
                      }}>
                      {weekString[key]}
                    </Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            );
          })}
        </View>

        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 24}}>
            {timeZone ? '오후' : '오전'} {hour + 1}시 {min * 5}분
          </Text>
        </View>
      </View>

      <Button title="취소" onPress={() => navigator.navigate('Main')}></Button>
      <Button
        title="저장"
        onPress={() => {
          if (alarm) {
            onModify({
              id: alarm.id,
              hour: hour + 1 + timeZone * 12,
              min: min * 5,
              week: week,
              toggle: true,
            });
          } else {
            onCreate({
              hour: hour + 1 + timeZone * 12,
              min: min * 5,
              week: week,
              toggle: true,
            });
          }
          navigator.navigate('Main');
          // console.log(
          //   `시간: ${timeZone ? '오후' : '오전'} ${hour + 1}시 ${min * 5}분`,
          // );
          // console.log(`날짜: ${month + 1}월 ${day}일`);
          // console.log(
          //   week.filter(data => (data.status == true ? data.name : null)),
          // );
        }}></Button>

      <DateTimePickerModal
        isVisible={visible}
        onConfirm={onConfirm}
        onCancel={onCancel}></DateTimePickerModal>
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
  dataBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  weekBox: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 24,
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
});
export default AlarmAddScreen;
