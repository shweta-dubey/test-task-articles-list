import React from 'react';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import Home from '../components/page/home';
import { HomeData } from "../constData/homeDetails"

const middlewares = [thunk]

test('renders the home component', () => {
  const mockStore = configureMockStore(middlewares);
  const store = mockStore({
    home: {
      homeItems: HomeData
    }
  });

  const { getByText } = render(
      <Provider store={store}>
        <Home/>
      </Provider>
  );

  expect(getByText(`Articles List`)).toBeInTheDocument();
  expect(getByText(`Most Upvoted`)).toBeInTheDocument();
  expect(getByText(`Most Recent`)).toBeInTheDocument();
});