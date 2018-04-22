import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { meetingUpdate } from '../actions';
import { CardSection, Input } from './common';

class MeetingForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input 
                        label="Meeting Name"
                        placeholder="Scrum Meeting"
                        value={this.props.name}
                        onChangeText={value => this.props.meetingUpdate({ 
                            prop: 'name', value 
                        })}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Location"
                        placeholder="My Office"
                        value={this.props.location}
                        onChangeText={value => this.props.meetingUpdate({ 
                            prop: 'location', value 
                        })}
                    />
                </CardSection>
                
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Time</Text>
                    <Picker
                        selectedValue={this.props.time}
                        onValueChange={value => this.props.meetingUpdate({
                            prop: 'time', value
                        })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>

                {/* temporarily input */}
                <CardSection>
                    <Input 
                        label="Group"
                        placeholder="Frontend Developers"
                        value={this.props.group}
                        onChangeText={value => this.props.meetingUpdate({
                            prop: 'group', value
                        })}
                    />
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name, location, time, group } = state.meetingForm;

    return { name, location, time, group };
};

export default connect(mapStateToProps, { meetingUpdate })(MeetingForm);
