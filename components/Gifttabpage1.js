import React from 'react';
import Gifttab1layout from './Gifttab1layout';
import controls from './Imports';
const Gifttabpage1 = () => {
  const navigation = controls.useNavigation()
  return (
    <controls.ScrollView bounces={false} alwaysBounceVertical={false}>
      <Gifttab1layout />
      <controls.View style={styles.container}>
        <controls.Text style={styles.headingtext}>Received A Gift Card?</controls.Text>
        <controls.TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('REDEEM GIFT CARD') }} activeOpacity={1} >
          <controls.Text style={styles.buttonText}>Check Card Balance & Validity</controls.Text>
        </controls.TouchableOpacity>
      </controls.View>
    </controls.ScrollView>
  );
};
export default Gifttabpage1;
const styles = controls.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 18
  },
  button: {
    borderWidth: 1,
    borderColor: '#ff4500',
    marginTop: 8,
    padding: 10,
  },
  buttonText: {
    color: '#ff4500',
    textAlign: 'center',
    marginBottom: 6
  },
  headingtext: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black'
  }
});