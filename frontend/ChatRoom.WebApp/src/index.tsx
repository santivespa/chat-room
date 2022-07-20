import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import ChatRoom from './ChatRoom';
import { store } from './store/store';
import './styles/styles.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={ store }>
    <ChatRoom />
  </Provider>
);

