import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import EventsList from './EventsList';
import EventRow from './EventRow';

function setup() {
    const props = {
        events: [
            {
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
            },
            {
                "id": "5190562268",
                "type": "PushEvent",
                "actor": {
                    "id": 12358962,
                    "login": "CodePipeline-Test2",
                    "display_login": "CodePipeline-Test",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/CodePipeline-Test",
                    "avatar_url": "https://avatars.githubusercontent.com/u/12358972?"
                },
                "repo": {
                    "id": 7,
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
        ]
    };

    return shallow(<EventsList {...props} />);
}

it('renders list of EventRows', () => {
    const wrapper = setup();
    expect(wrapper.find(EventRow).length).toBe(2);
});
