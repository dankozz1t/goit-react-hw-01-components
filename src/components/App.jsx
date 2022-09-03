import Container from './Container/Container';
import TaskList from './Tasks/TaskList';

import Profile from './Profile/Profile';
import Task from './Tasks/Task';
import user from '../data/user.json';

import Statistics from './Statistics/Statistics';
import data from '../data/data.json';

import FriendList from './Friends/FriendList';
import friends from '../data/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Container>
        <TaskList>
          <Task title="Task 1">
            <Profile
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
            />
          </Task>

          <Task title="Task 2">
            <Statistics title="Upload stats" stats={data} />
            <Statistics stats={data} />
          </Task>

          <Task title="Task 3">
            <FriendList friends={friends} />
          </Task>

          <Task title="Task 4">
            <TransactionHistory items={transactions} />
          </Task>
        </TaskList>
      </Container>
    </div>
  );
};
