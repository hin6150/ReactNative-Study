import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {StyleSheet, Animated} from 'react-native';
import {Images} from './Images';

// MainPage 컴포넌트
function MainPage() {
  return (
    <>
      <View>
        <MainPageView /> {/* navigation prop 전달 */}
      </View>
    </>
  );
}

// MainPageView 컴포넌트
function MainPageView() {
  const [playBtnClicked, setPlayBtnClicked] = useState(false); // play 버튼 클릭 여부 상태 변수
  const [titleOpacity] = useState(new Animated.Value(0)); // title 투명도 조절 초깃값 0 설정

  const handlePlayBtnClick = () => {
    // play 버튼 클릭 시
    // 클릭 시 true와 false가 전환됨
    setPlayBtnClicked(!playBtnClicked);
    console.log('play button clicked');
  };

  useEffect(() => {
    // 해당 페이지 실행과 동시에 2초 동안 title의 투명도를 0에서 1로 변경
    Animated.timing(titleOpacity, {
      toValue: 1,
      duration: 2000,
    }).start();
  }, []);

  const getOpacityStyle = () => {
    // play 버튼 투명도 스타일 반환
    return titleOpacity.Value;
  };

  return (
    <View style={styles.block}>
      {/* 배경 이미지 */}
      <Image source={Images.MainBackground} style={styles.backgroundImage} />
      <View style={styles.inner}>
        {/* 애니메이션 적용된 이미지들 */}
        <Animated.Image
          source={Images.Object1}
          style={[styles.object1, {opacity: titleOpacity}]}
        />
        <Animated.Image
          source={Images.Object2}
          style={[styles.object2, {opacity: titleOpacity}]}
        />
        <Animated.Image
          source={Images.Title}
          style={[styles.title, {opacity: titleOpacity}]}
        />
        {/* Play 버튼 */}
        <TouchableOpacity
          style={[styles.playBtn, getOpacityStyle()]}
          activeOpacity={0.7}
          onPress={handlePlayBtnClick}>
          <Image
            source={Images.PlayBtn}
            style={{width: '100%', height: '100%'}}
          />
        </TouchableOpacity>
      </View>
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
  title: {
    position: 'absolute',
    top: 250,
    left: 70,
    width: 365,
    height: 166,
    flexShrink: 0,
  },
  object1: {
    position: 'absolute',
    bottom: 250,
    right: 240,
    width: 260,
    height: 356,
    flexShrink: 0,
  },
  object2: {
    position: 'absolute',
    top: 100,
    right: 50,
    width: 146,
    height: 186,
    flexShrink: 0,
  },
  playBtn: {
    position: 'absolute',
    top: 450,
    right: 170,
    width: '35%',
    height: '5%',
    flexShrink: 0,
    borderColor: 'green',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainPage;
