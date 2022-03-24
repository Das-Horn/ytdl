import { render } from 'react-dom';
import { YtResponse } from 'youtube-dl-exec';
import App from './App';
import VideoForm from './Components/VideoForm';

render(<App />, document.getElementById('root'));

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});

window.electron.ipcRenderer.on('ipc-video', (arg: YtResponse) => {
  console.log(arg);
  window.sessionStorage.setItem('Title', arg.title);
  window.sessionStorage.setItem('Thumb', arg.thumbnail);
});

window.electron.ipcRenderer.on('ipc-video-save', (arg) => {
  console.log(arg);
});
// window.electron.ipcRenderer.myPing();
