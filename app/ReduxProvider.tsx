"use client"
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';

interface LayoutProps {
    children: ReactNode;
}

const ReduxProvider = ({ children }: LayoutProps) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default ReduxProvider;