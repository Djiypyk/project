
// import {render} from 'react-dom'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';

import 'shared/config/i18n/i18n';


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);

// render(
//     <div><Counter/></div>,
//     container
// )