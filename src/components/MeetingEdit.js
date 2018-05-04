import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MeetingForm from './MeetingForm';
import { meetingUpdate, meetingSave, meetingDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class MeetingEdit extends Component {
    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.meeting, (value, prop) => {
            this.props.meetingUpdate({ prop, value });
        });
    }

    /* Function for Save Button */
    onButtonPress() {
        const { name, location, day, group } = this.props;

        this.props.meetingSave({ name, location, day, group, uid: this.props.meeting.uid });
    }

    /* Accept Deletion */
    onAccept() {
        const { uid } = this.props.meeting;
        
        this.props.meetingDelete({ uid });
    }

    /* Decline Deletion */
    onDecline() {
        this.setState({ showModal: false });
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

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Delete Meeting
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this meeting?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, location, day, group } = state.meetingForm;

    return { name, location, day, group };
};

export default connect(mapStateToProps, { 
    meetingUpdate, meetingSave, meetingDelete
})(MeetingEdit);
