import { useDispatch, useSelector } from 'react-redux';


function Home() {
  let auth = useSelector(state => state.auth);
  return (
    <div>
      <p>
        See the Ratings!
      </p>
    </div>
  )
}

export default Home;
