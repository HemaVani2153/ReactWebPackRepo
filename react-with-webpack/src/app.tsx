import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import { IAppState } from './app-state';
// import Warning from './warning';
import './styles.css';

// lazy loading warning component...
const Warning = React.lazy(() => import('./warning'));

class App extends React.Component<unknown, IAppState> {
    constructor(props: unknown) {
        super(props);
        this.state = {
            count: 0,
            errName: 'Here is warning!',
        };
    }

    render() {
        const { count } = this.state;
        const warnCls = count > 10 ? 'warn' : '';
        // Now we can open app.js in developer tools and put debugger
        return (
            <React.StrictMode>
                <div className="cls">
                    {new Date().toLocaleDateString()}
                    <div data-testid="higherCount" className={warnCls}>
                        Counter: {count}
                    </div>
                    <h1>Hello World!</h1>
                    <div>
                        <button
                            onClick={() =>
                                this.setState((state: IAppState) => ({
                                    ...state,
                                    count: state.count + 1,
                                }))
                            }
                            type="button"
                        >
                            +
                        </button>
                        <button
                            onClick={() =>
                                this.setState((state: IAppState) => ({
                                    ...state,
                                    count: state.count - 1,
                                }))
                            }
                            type="button"
                        >
                            -
                        </button>
                    </div>
                    {warnCls && (
                        <Suspense fallback={null}>
                            <Warning name={{ ...this.state }.errName} />
                        </Suspense>
                    )}
                </div>
            </React.StrictMode>
        );
    }
}

export default hot(App);
