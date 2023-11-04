import '@/styles/globals.css'
import store from '../store';
import { Provider } from 'react-redux';
import { setDiscordId } from "@/slices/formSlice";
import { useDispatch } from "react-redux";

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
