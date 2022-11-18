import React from 'react';
import {Image, StyleSheet, View,Modal} from 'react-native';
export const Loader = props => {
    const {
        loading,
        ...attributes
    } = props;
    return (
        <Modal    transparent={true}>
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                                  <Image
                        source={require('../assets/indicator.gif')}
                        style={{width: 100, height: 60,  alignSelf: 'center',borderRadius:10}}
                    />
                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',position:'absolute',alignSelf:'center',top:'38%',
        justifyContent: 'space-around', borderRadius: 10,
        backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});

