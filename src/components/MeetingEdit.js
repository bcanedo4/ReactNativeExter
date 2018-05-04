import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MeetingForm from './MeetingForm';
import { meetingUpdate, meetingSave } from '../actions';
import { Card, CardSection, Button } from './common';

class MeetingEdit extends Component {

    componentWillMount() {
        _.each(this.props.meeting, (value, prop) => {
            this.props.meetingUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, location, day, group } = this.props;

        this.props.meetingSave({ name, location, day, group, uid: this.props.meeting.uid });
    }

    render() {
        return (
            <Card>
                <MeetingForm />

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, location, day, group } = state.meetingForm;

    return { name, location, day, group };
};

export default connect(mapStateToProps, { 
    meetingUpdate, meetingSave
})(MeetingEdit);
