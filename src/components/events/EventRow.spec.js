import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import EventRow from './EventRow';

function setup() {
    const props = {
        event: {
            "id": "5190562267",
            "type": "CreateEvent",
            "actor": {
                "id": 12358972,
                "login": "CodePipeline-Test",
                "display_login": "CodePipeline-Test",
                "gravatar_id": "",
                "url": "https://api.github.com/users/CodePipeline-Test",
                "avatar_url": "https://avatars.githubusercontent.com/u/12358972?"
            },
            "repo": {
                "id": 63971386,
                "name": "CodePipeline-Test/feature-tests",
                "url": "https://api.github.com/repos/CodePipeline-Test/feature-tests"
            },
            "payload": {
                "ref": "job-worker-features-mE6hZFiyalhrkdSQ9OHm",
                "ref_type": "branch",
                "master_branch": "master",
                "description": "for feature tests",
                "pusher_type": "user"
            },
            "public": true,
            "created_at": "2017-01-21T10:39:34Z"
        }
    };

    return shallow(<EventRow {...props} />);
}

it('renders h1 and events page', () => {
    const wrapper = setup();
    expect(wrapper.find('tr').length).toBe(1);
    expect(wrapper.find('td').length).toBe(4);
});
