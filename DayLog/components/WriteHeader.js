import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import {Text, Pressable, StyleSheet, View} from 'react-native';
import TransparentCircleButton from './TransparentCircleButton';

function WriteHeader({onSave, onAskRemove, isEditing, date, onChangeDate}) {
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.pop();
  };
  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <TransparentCircleButton
          onPress={onGoBack}
          name="arrow-back"
          color="#424242"
        />
      </View>
      <View style={styles.buttons}>
        {isEditing && (
          <TransparentCircleButton
            name="delete-forever"
            color="#ef5350"
            hasMarginRight
            onPress={onAskRemove}
          />
        )}

        <TransparentCircleButton
          name="check"
          color="#009688"
          onPress={onSave}
        />
      </View>

      <View style={styles.center}>
        <Pressable>
          <Text>
            {format(new Date(date), 'PPP', {
              locale: ko,
            })}
          </Text>
        </Pressable>
        <View style={styles.separator} />
        <Pressable>
          <Text>{format(new Date(date), 'p', {locale: ko})}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
    flexDirection: 'row',
  },
  separator: {
    width: 8,
  },
});

export default WriteHeader;