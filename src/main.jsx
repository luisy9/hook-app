import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormWithCustomHook from './02-useEffect/FormWithCustomHook';
import MultipleCustomHooks from './03-examples/MultipleCustomHooks';
import FocusScreen from './04-useRef/FocusScreen';
import Layout from './05-useLayaoutEffect/Layout';
// import Memorize from './06-memos/Memorize';
import { MemoHook } from './06-memos/MemoHook';
import CallbackHook from './06-memos/CallbackHook';
import { Padre } from './07-tarea-memo/Padre';
import './08-useReducer/intro-reducer'
import TodoApp from './08-useReducer/TodoApp';
// import CounterApp from './01-useState/CounterApp';
// import CounterWithCustomHook from './01-useState/CounterWithCustomHook';
// import SimpleForm from './02-useEffect/SimpleForm';
// import { CounterApp } from './01-useState/CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp />
    {/* <Padre /> */}
    {/* <CallbackHook />   */}
    {/* <MemoHook /> */}
    {/* <Memorize /> */}
    {/* <Layout /> */}
    {/* <FocusScreen /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FormWithCustomHook /> */}
    {/* <CounterApp />
    <div className='pt-5'>
      <CounterWithCustomHook />
    </div>
    <div className='pt-5'>
      <SimpleForm />
    </div> */}
  </React.StrictMode>
);