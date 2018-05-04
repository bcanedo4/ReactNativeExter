import moment from 'moment';
import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { connect } from 'react-redux';
import { meetingUpdate } from '../actions';
import { CardSection, Input } from './common';

class MeetingForm extends Component {
    state = {
        isDateTimePickerVisible: false,
    };
    
    showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    
    hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    
    handleDatePicked = (date) => {
        const value = moment(date).format('MMMM, Do YYYY HH:mm');
        this.props.meetingUpdate({
            prop: 'day', value
        });

        this.hideDateTimePicker();  
    };

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

                <CardSection>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={this.showDateTimePicker}>
                            <Text style={styles.pickerTextStyle}>Show DatePicker</Text>
                        </TouchableOpacity>
                        <Text style={styles.pickerTextStyle}>{this.props.day}</Text>
                        <DateTimePicker
                            mode="datetime"
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this.handleDatePicked}
                            onCancel={this.hideDateTimePicker}
                        />
                    </View>
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
    const { name, location, day, group } = state.meetingForm;

    return { name, location, day, group };
};

export default connect(mapStateToProps, { meetingUpdate })(MeetingForm);
