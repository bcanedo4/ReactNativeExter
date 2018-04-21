import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

class MeetingListItem extends Component {
    render() {
        const { meetingName } = this.props.meetingName;

        return (
            <TouchableWithoutFeedback>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {meetingName}
                        </Text>
                    </CardSection>
                </View>
                
            </TouchableWithoutFeedback>
            
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default MeetingListItem;
