import { Provider } from 'react-redux';
import store from '../_redux/store';

function Page() {
  return (
    <Provider store={store}>
      <div>CartPage</div>
    </Provider>
  );
}

export default Page;
