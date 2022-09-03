import Container from './Container/Container';
import TaskList from './TaskList/TaskList';

import Profile from './Profile/Profile';
import TaskItem from './TaskItem/TaskItem';
import user from '../data/user.json';

import Statistics from './Statistics/Statistics';
import data from '../data/data.json';

import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Container>
        <TaskList>
          <TaskItem title="Task 1">
            <Profile
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
            />
          </TaskItem>

          <TaskItem title="Task 2">
            <Statistics title="Upload stats" stats={data} />
            <Statistics stats={data} />
          </TaskItem>

          <TaskItem title="Task 3">
            <FriendList friends={friends} />
          </TaskItem>

          <TaskItem title="Task 4">
            <TransactionHistory items={transactions} />
          </TaskItem>
        </TaskList>
      </Container>
    </div>
  );
};
