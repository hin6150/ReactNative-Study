import React, {useEffect, useState} from 'react';
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
import {timeTo12, timeTo60_5} from '../storages/formatData';
import TimeWheel from '../Component/TimeWheel';

const AlarmAddScreen = () => {
  const [timeZone, setTimeZone] = useState(1);
  const [hour, setHour] = useState(5);
  const [min, setMin] = useState(5);

  const navigator = useNavigation();

  const [month, setMonth] = useState(new Date().getMonth());
  const [day, setDay] = useState(new Date().getDate());

  const [week, setWeek] = useState([
    {name: '월', status: false},
    {name: '화', status: false},
    {name: '수', status: false},
    {name: '목', status: false},
    {name: '금', status: false},
    {name: '토', status: false},
    {name: '일', status: false},
  ]);

  const onConfirm = selectedDate => {
    console.log(selectedDate);
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

  const weekHandle = name => {
    const clickedWeek = week.map(item =>
      item.name === name ? {...item, status: !item.status} : item,
    );
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
                <TouchableNativeFeedback onPress={() => weekHandle(data.name)}>
                  <View
                    style={[
                      styles.weekBox,
                      {
                        borderWidth: data.status ? 1 : 0,
                      },
                    ]}>
                    <Text
                      style={{
                        color: data.status ? 'blue' : 'black',
                      }}>
                      {data.name}
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
          navigator.navigate('Main');
          console.log(
            `시간: ${timeZone ? '오후' : '오전'} ${hour + 1}시 ${min * 5}분`,
          );
          console.log(`날짜: ${month + 1}월 ${day}일`);
          console.log(
            week.filter(data => (data.status == true ? data.name : null)),
          );
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
