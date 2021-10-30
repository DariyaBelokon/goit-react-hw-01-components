// import logo from './logo.svg';
import './App.css';

import UserProfile from '../components/user-profile/user-profile';
import user from '../data/user-profile.json';

import Statistics from '../components/statistics/statistics';
import statisticalData from '../data/statistical-data.json';

import Friends from '../components/friends/friends';
import friends from '../data/friends.json';

import TransactionHistory from '../components/TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export default function App() {
  return (
    <div>
      <UserProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Friends friends={friends} />,
      <TransactionHistory items={transactions} />;
    </div>
  );
}
