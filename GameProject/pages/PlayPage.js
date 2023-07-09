import React, {useState, useEffect, useRef} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {StyleSheet, Animated, Image} from 'react-native';
import {Images, backgroundImageList, objectImageList} from './Images';
import SoundPlayer from 'react-native-sound-player';
import useHooks from '../hooks/useHooks';

function PlayPage() {
  useEffect(() => {
    try {
      SoundPlayer.playSoundFile('mainbgm', 'mp3');
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  }, []);

  return (
    <View>
      <PlayPageView />
    </View>
  );
}

function PlayPageView() {
  const {
    backgroundImage,
    objectImage,
    startButtonOpacity,
    startButtonDisabled,
    toggleFail,
    objectY,
    startBtnClick,
    stopBtnClick,
  } = useHooks();

  return (
    <>
      <View style={styles.block}>
        <Image source={backgroundImage} style={styles.backgroundImage} />
        <View style={styles.inner}>
          <HeaderBtn />
          <CharacterIcon />
          <Animated.Image
            source={objectImage}
            style={[
              styles.objectImage,
              {
                transform: [{translateY: objectY}],
              },
            ]}
          />
          <View style={styles.StopLine} />
          <OperationBtn
            startButtonDisabled={startButtonDisabled}
            startBtnClick={startBtnClick}
            startButtonOpacity={startButtonOpacity}
            stopBtnClick={stopBtnClick}
          />
          {toggleFail && <Image source={Images.Failed} style={styles.Failed} />}
        </View>
      </View>
    </>
  );
}

function HeaderBtn() {
  return (
    <View style={styles.HeaderBtn}>
      <Image source={Images.HeaderBtn1} style={styles.HeaderBtn1} />
      <Image source={Images.HeaderBtn2} style={styles.HeaderBtn2} />
      <Image source={Images.HeaderBtn3} style={styles.HeaderBtn3} />
    </View>
  );
}

function CharacterIcon() {
  return (
    <>
      <Image source={Images.Score} style={styles.Score} />
      <View style={styles.CharacterIcon}>
        <Image source={Images.CharacterIcon1} style={styles.CharacterIcon1} />
        <Image source={Images.CharacterIcon2} style={styles.CharacterIcon2} />
        <Image source={Images.CharacterIcon3} style={styles.CharacterIcon3} />
      </View>
    </>
  );
}

function OperationBtn({
  startButtonDisabled,
  startBtnClick,
  startButtonOpacity,
  stopBtnClick,
}) {
  return (
    <View style={styles.OperationBtn}>
      <TouchableOpacity
        disabled={startButtonDisabled}
        onPress={startBtnClick}
        activeOpacity={0.8}>
        <Image
          source={Images.StartBtn}
          style={[styles.StartBtn, {opacity: startButtonOpacity}]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={stopBtnClick} activeOpacity={0.8}>
        <Image source={Images.StopBtn} style={styles.StopBtn} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    position: 'relative',
    height: 844,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '90%',
  },
  inner: {
    position: 'relative',
    width: 499,
    height: 915,
    flexShrink: 0,
  },
  HeaderBtn: {
    width: 48,
    height: 48,
    flexShrink: 0,
    flexDirection: 'row',
    top: 70,
    right: -80,
  },
  HeaderBtn3: {
    right: -190,
    top: -5,
  },
  CharacterIcon: {
    flexDirection: 'row',
    top: -10,
    right: -100,
  },
  Score: {
    top: 100,
    right: -37,
  },
  objectImage: {
    resizeMode: 'contain',
    position: 'absolute',
    top: -50,
    right: 200,
    width: 100,
    height: 100,
    flexShrink: 0,
  },
  OperationBtn: {
    flexDirection: 'row',
    top: 310,
    right: -80,
  },
  StopBtn: {
    top: -7,
    right: -60,
  },
  StopLine: {
    top: 300,
    right: -50,
    width: 404,
    borderWidth: 0,
    borderBottomWidth: 5,
    borderStyle: 'dotted',
    borderColor: 'red',
  },
  Failed: {
    position: 'absolute',
    top: 300,
    right: 85,
  },
});

export default PlayPage;
