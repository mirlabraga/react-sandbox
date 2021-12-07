import React, { useState } from 'react';
import { auth0 } from '../../libs/auth0';
import styles from './Home.module.scss';

const URL_BASE = 'http://localhost:3001';

export interface Cat {
  name: string;
  age: number;
  breed: string;
}

const Home = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  const fetchCats = async () => {
    const token  = await auth0.getTokenSilently();
    const result = await fetch(`${URL_BASE}/cats`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    setCats(await result.json());
  }

  const logout = async () => {
    auth0.logout();
  }

  return (
    <div className={styles.Home} data-testid="Home">
      Home Component<br />
      <button onClick={fetchCats}>fetch cats</button><br />
      {cats.map(cat => <>{cat.name}<br/></>)}
      <button id="logout" onClick={logout}>Logout</button>
    </div>
  )
};

export default Home;
