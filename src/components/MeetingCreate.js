import React, { Component } from 'react';
import { connect } from 'react-redux';
import { meetingUpdate, meetingCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import MeetingForm from './MeetingForm';

class MeetingCreate extends Component {
    onButtonPress() {
        const { name, location, time, group } = this.props;

        this.props.meetingCreate({ name, location, time, group });
    }

    render() {
        return (
            <Card>
                <MeetingForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, location, time, group } = state.meetingForm;

    return { name, location, time, group };
};

export default connect(mapStateToProps, {
    meetingUpdate, meetingCreate
})(MeetingCreate);
