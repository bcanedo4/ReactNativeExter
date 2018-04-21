import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { meetingsFetch } from '../actions';
import MeetingListItem from './MeetingListItem';

class MeetingList extends Component {
    componentWillMount() {
        this.props.meetingsFetch();

        this.createDataSource(this.props);
    }

    createDataSource({ meetings }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(meetings);
    }

    renderRow(meeting) {
        return <MeetingListItem meeting={meeting} />;
    }

    render() {
        return (
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    const meetings = _.map(state.meetings, (val, uid) => {
        return { ...val, uid };
    });

    return { meetings };
};

export default connect(mapStateToProps, { meetingsFetch })(MeetingList);
