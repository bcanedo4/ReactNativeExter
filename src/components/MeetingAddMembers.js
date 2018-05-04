import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { meetingAddMembers } from '../actions';
import { CardSection, Input } from './common';

class MeetingAddMembers extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.group}</Text>
                <CardSection>
                    <Input 
                        label="Member"
                        placeholder="Alberto"
                        value={this.props.member}
                        onChangeText={value => 
                            this.props.meetingAddMembers({ prop: 'member', value })
                        }
                    />
                    
                </CardSection>
                   
                <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="818-123-4567"
                        value={this.props.phone}
                        onChangeText={
                            value => this.props.meetingAddMembers({ prop: 'phone', value })
                        }
                    />
                </CardSection>
                {/*
                <CardSection>
                    <Button onPress={Actions.pop()}>Done</Button>
                </CardSection>
                */}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { member, phone } = state.meetingForm;

    return { member, phone };
};

export default connect(mapStateToProps, { meetingAddMembers })(MeetingAddMembers);
