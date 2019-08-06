import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
          <CommentDetail author="Sam" timeAgo="Today at 5:00PM" content="Nice Job!" avatar={faker.image.avatar()} />
    </ApprovalCard>
      <ApprovalCard>
            <CommentDetail author="Jane" timeAgo="Yesterday at 2:00AM" content="You are lovely!" avatar={faker.image.avatar()} />
      </ApprovalCard>
          <ApprovalCard>
              <CommentDetail author="Julie" timeAgo="Tomorrow at 3:00PM" content="I am in Love" avatar={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(
  <App />, document.querySelector('#root')
);
