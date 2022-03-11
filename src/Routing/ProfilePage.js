import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import { parse } from 'query-string';
import { useEffect, useState } from 'react';
// import { queryString } from '../../utils';
import jsonUsers from './users.json';

export default function ProfilePage() {
  const params = useParams();
  console.log('~ params', params);

  const location = useLocation();
  console.log('~ location', location);

  const query = parse(location.search);
  console.log('~ query', query);

  // not efficient
  // const myQuery = queryString(location.search);
  // console.log('~ myQuery', myQuery);

  let navigate = useNavigate();

  const goToHome = () => {
    navigate('/', { replace: true });
    // <Navigate to='/' replace={true} />; NOT WORKING BECAUSE IT IS A JSX NOT A FUNCTION
  };

  const [users, setUsers] = useState(null);

  useEffect(() => {
    setTimeout(() => setUsers(jsonUsers), 1000);
  }, []);

  return (
    <>
      {params.id && <div>profile of user {params.id}</div>}
      {query.id && <div>profile of user {query.id}</div>}
      {!params.id &&
        !query.id &&
        users &&
        users.map((user, index) => (
          <Link key={index} to={`./${user.id}`} replace>
            <div>{user.name}</div>
          </Link>
        ))}
      <button onClick={goToHome}>go to home</button>
    </>
  );
}
