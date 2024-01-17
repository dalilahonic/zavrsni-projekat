import { useSelector } from 'react-redux';
import styles from './Navigation.module.css';
import { Link, useNavigate } from 'react-router-dom';
import SliderButton from '../Header/SliderButton';

export default function Navigation({ classN }) {
  const navigate = useNavigate('');
  const darkTheme = useSelector(
    (state) => state.theme.darkTheme
  );

  const isUserLoggedIn = useSelector(
    (state) => state.users.isUserLoggedIn
  );

  console.log(isUserLoggedIn);

  return (
    <nav>
      <div
        className={`${styles.leftNavigation} ${
          styles[classN]
        } ${darkTheme ? styles.dark : styles.light}`}
      >
        <h4 onClick={() => navigate('/')}>Dalila</h4>
      </div>
      <div
        className={`${styles.rightNavigation} ${
          styles[classN]
        } ${darkTheme ? styles.dark : styles.light}`}
      >
        <ul>
          <Link to='/posts'>
            <li>writing</li>
          </Link>
          <Link to='/speaking'>
            <li>speaking</li>
          </Link>
          <Link>
            <li>workshop</li>
          </Link>
          <Link
            to={isUserLoggedIn ? '/profile' : '/signin'}
          >
            <li>
              {isUserLoggedIn ? 'profile' : 'register'}
            </li>
          </Link>
          <SliderButton />
        </ul>
      </div>
    </nav>
  );
}
