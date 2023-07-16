import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
} from 'react-native';

import Images from './Images';

// CharacterSelectPage 컴포넌트
function CharacterSelectPage() {
  return (
    <>
      <CharacterSelectPageView />
    </>
  );
}

// CharacterSelectPageView 컴포넌트
function CharacterSelectPageView() {
  const [selectedCharacters, setSelectedCharacters] = useState([]); // 선택된 캐릭터 함수
  const [titleOpacity] = useState(new Animated.Value(0)); // title 투명도 조절 초깃값 0설정

  const handleCharacterPress = character => {
    //캐릭터를 선택하거나 해체할 경우 호출되는 함수
    const isSelected = selectedCharacters.includes(character);
    if (isSelected) {
      // 선택된 캐릭터를 해체하는 경우
      const updatedCharacters = selectedCharacters.filter(
        selectedCharacter => selectedCharacter !== character,
      );
      setSelectedCharacters(updatedCharacters);
    } else {
      // 캐릭터를 선택하는 경우
      setSelectedCharacters([...selectedCharacters, character]);
    }
  };

  // 캐릭터가 2개 선택된 경우 play 버튼 활성화

  const handlePlayButtonPress = () => {
    // play 버튼을 눌렀을 때
    console.log('Play button pressed');
    // 캐릭터 선택 초기화
  };

  useEffect(() => {
    // 해당 페이지 실행과 동시에 2초 동안 title의 투명도를 0에서 1로 변경
    Animated.timing(titleOpacity, {
      toValue: 1,
      duration: 2000,
    }).start();
  }, []);

  return (
    <>
      <View style={styles.block}>
        {/* 배경 이미지 */}
        <Image
          source={Images.CharacterBackground}
          style={styles.backgroundImage}
        />
        <View style={styles.inner}>
          <View style={styles.Character}>
            <View style={styles.charactersRow}>
              {/* 캐릭터 1 */}
              <TouchableOpacity
                onPress={() => handleCharacterPress('character1')}
                style={[
                  selectedCharacters.includes('character1') &&
                    styles.selectedCharacter,
                ]}>
                <Image source={Images.Character1} style={styles.character1} />
                {selectedCharacters.includes('character1') && (
                  <Text style={styles.playerText}>Player 1</Text>
                )}
              </TouchableOpacity>

              {/* 캐릭터 2 */}
              <TouchableOpacity
                onPress={() => handleCharacterPress('character2')}
                style={[
                  selectedCharacters.includes('character2') &&
                    styles.selectedCharacter,
                ]}>
                <Image source={Images.Character2} style={styles.character2} />
                {selectedCharacters.includes('character2') && (
                  <Text style={styles.playerText}>Player 2</Text>
                )}
              </TouchableOpacity>

              {/* 캐릭터 3 */}
              <TouchableOpacity
                onPress={() => handleCharacterPress('character3')}
                style={[
                  selectedCharacters.includes('character3') &&
                    styles.selectedCharacter,
                ]}>
                <Image source={Images.Character3} style={styles.character3} />
                {selectedCharacters.includes('character3') && (
                  <Text style={styles.playerText}>Player 3</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* 타이틀 이미지 */}
          <Animated.Image
            source={Images.CharacterPageTitle}
            style={[styles.CharacterPageTitle, {opacity: titleOpacity}]}
          />

          {/* Play 버튼 */}
          {isPlayButtonVisible && (
            <TouchableOpacity
              onPress={handlePlayButtonPress}
              style={styles.PlayButton}>
              <Image
                source={Images.CharacterBtn}
                style={styles.CharacterBtnImage}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
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
    top: -50,
    left: 0,
    width: '100%',
    height: '90%',
    flexShrink: 0,
  },
  inner: {
    position: 'relative',
    width: 529,
    height: 961,
    flexShrink: 0,
  },
  Character: {
    position: 'absolute',
    width: 311.195,
    height: 266.533,
    flexShrink: 0,
    top: 400,
    right: 0,
  },
  charactersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectedCharacter: {
    borderColor: 'white',
    opacity: 0.7,
  },
  character1: {
    width: 81.992,
    height: 240.821,
    flexShrink: 0,
    top: -10,
    right: 105,
  },
  character2: {
    width: 112.713,
    height: 266.435,
    flexShrink: 0,
    top: -10,
    right: 105,
  },
  character3: {
    width: 81.966,
    height: 240.818,
    flexShrink: 0,
    top: -10,
    right: 105,
  },
  CharacterPageTitle: {
    width: '85%',
    height: 200,
    flexShrink: 0,
    top: 140,
    right: -50,
  },
  PlayButton: {
    width: 130.606,
    height: 75.001,
    flexShrink: 0,
    top: 420,
    right: -200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CharacterBtnImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  playerText: {
    fontFamily: 'DOSPilgiMedium',
    fontSize: 16,
    color: 'white',
    marginTop: 5,
    textAlign: 'center',
    left: -102,
  },
});

export default CharacterSelectPage;
