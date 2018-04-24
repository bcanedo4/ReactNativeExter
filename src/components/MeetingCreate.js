import React, { Component } from 'react';
import { connect } from 'react-redux';
import { meetingUpdate, meetingCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import MeetingForm from './MeetingForm';

class MeetingCreate extends Component {
    onButtonPress() {
        const { name, location, day, group } = this.props;

        this.props.meetingCreate({ name, location, day, group });
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
    const { name, location, day, group } = state.meetingForm;

    return { name, location, day, group };
};

export default connect(mapStateToProps, {
    meetingUpdate, meetingCreate
})(MeetingCreate);
