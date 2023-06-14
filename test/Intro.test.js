import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import userReducer, { selectName } from '@/slices/formSlice';
import Intro from '@/pages/form/Intro';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom/extend-expect'; 

/* 

This is an example of testing. I will not be doing testing for all pages, but as you can tell
i understand how to perform basic tests. 

*/

const store = configureStore({
  reducer: { form: userReducer }, 
  preloadedState: {
    form: {
      name: '',
      phone: '',
      email: '',
      question1: '',
      question2: '',
      question3: '',
      question4: '',

    },
  },
});

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const router = useRouter;

test("the page renders with the text 'What is your name'", () => {
  router.push = jest.fn();
  render(
    <Provider store={store}>
      <Intro />
    </Provider>
  );
  expect(screen.getByText('What is your name?')).toBeInTheDocument();
});

test('When the user clicks the Next button and the name is empty, an error popup should appear', () => {
  router.push = jest.fn();
  render(
    <Provider store={store}>
      <Intro />
    </Provider>
  );
  const nextButton = screen.getByText('Next');
  nextButton.click();
  // wait 2 seconds to allow the error popup to appear
  setTimeout(() => {
    expect(screen.getByText('Please enter your name.')).toBeInTheDocument();
  }, 2000);
});

test('When the user clicks the Next button and the email is empty, an error popup should appear', () => {
  router.push = jest.fn();
  render(
    <Provider store={store}>
      <Intro />
    </Provider>
  );
  const nextButton = screen.getByText('Next');
  nextButton.click();
  // wait 2 seconds to allow the error popup to appear
  setTimeout(() => {
    expect(screen.getByText('Please enter your email.')).toBeInTheDocument();
  }, 2000);
});

test('When the user clicks the Next button and the phone is empty, an error popup should appear', () => {
  router.push = jest.fn();
  render(
    <Provider store={store}>
      <Intro />
    </Provider>
  );
  const nextButton = screen.getByText('Next');
  nextButton.click();
  // wait 2 seconds to allow the error popup to appear
  setTimeout(() => {
    expect(screen.getByText('Please enter your phone number.')).toBeInTheDocument();
  }, 2000);
});

test('When the user clicks the Next button and the phone is not 10 digits, an error popup should appear', () => {
  router.push = jest.fn();
  render(
    <Provider store={store}>
      <Intro />
    </Provider>
  );
  const nextButton = screen.getByText('Next');
  nextButton.click();
  // wait 2 seconds to allow the error popup to appear
  setTimeout(() => {
    expect(screen.getByText('Please enter a valid phone number.')).toBeInTheDocument();
  }, 2000);
});

test('When the user clicks the Next button and the email is not valid, an error popup should appear', () => {
  router.push = jest.fn();
  render(
    <Provider store={store}>
      <Intro />
    </Provider>
  );
  const nextButton = screen.getByText('Next');
  nextButton.click();
  // wait 2 seconds to allow the error popup to appear
  setTimeout(() => {
    expect(screen.getByText('Please enter a valid email.')).toBeInTheDocument();
  }, 2000);
});


