import React from 'react';
import {Text, View, StyleSheet, Image, TouchableHighlight} from 'react-native';

import {capitalizeFirstLetter} from '../util';

const PeopleListItem = props => {
    const { people, navigateToPeopleDetail } = props;
    const { title, first, last }  = people.name;
    return(
        <TouchableHighlight onPress={() => {
            console.log('Colocou em mim!!!', first);
            navigateToPeopleDetail({people});
        }}>
            <View style = {styles.line}>
                <Image style={styles.avatar} source={{uri: people.picture.thumbnail}} />
                <Text style={styles.lineText}>
                    {`${
                        capitalizeFirstLetter(title)
                    } ${
                        capitalizeFirstLetter(first)
                    } ${
                        capitalizeFirstLetter(last)}`}
                </Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",

        alignItems: 'center',
        flexDirection: 'row',
    },
    lineText: {
       fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,

        marginLeft: 15,
        borderRadius: 50
    }
});

export default PeopleListItem;