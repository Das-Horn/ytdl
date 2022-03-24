import {
  Container,
  Image,
  Text,
  Button,
  Card,
  Title,
  Center,
  TextInput,
} from '@mantine/core';
import { useState } from 'react';
import { YtResponse } from 'youtube-dl-exec';
import placeholder from '../../../assets/icon.png';

let changeInt;
let vidTimeout: NodeJS.Timeout;

function VideoForm() {
  const [thumb, setThumb] = useState('');
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState(false);
  const [isValid, setValid] = useState(false);

  const vidCallback = () => {
    console.log('Updating Form');
    setTitle(window.sessionStorage.getItem('Title') || '');
    setThumb(window.sessionStorage.getItem('Thumb') || '');
    setValid(true);
  };

  const handleDLBut = () => {
    // console.log('works');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const url: HTMLInputElement = document.querySelector('#UrlIn')!;
    const urlString: string = url.value;
    // setLoad(true);
    // setValid(false);
  };

  const handleUrlEntry = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    clearTimeout(vidTimeout);
    const url: HTMLInputElement = document.querySelector('#UrlIn')!;
    const urlString: string = url.value;
    if (urlString !== '') {
      setValid(true);
    } else {
      setValid(false);
    }

    vidTimeout = setTimeout(() => {
      window.electron.ipcRenderer.getVideo(urlString);
    }, 1000);

    setTitle('');
    setThumb('');
    setValid(false);
    window.sessionStorage.setItem('Title', '');
    window.sessionStorage.setItem('Thumb', '');
  };

  changeInt = setInterval(vidCallback, 2500);
  return (
    <Card withBorder radius="md">
      <Center>
        <Image
          src={thumb === '' || null ? placeholder : thumb}
          alt="Video Thumbnail"
          // height={200}
          width={350}
          radius="md"
        />
      </Center>
      <Title>{title === '' || null ? '...' : title}</Title>
      <TextInput
        id="UrlIn"
        height="md"
        label="Video Url"
        placeholder="https://youtube.com/ShjfSa"
        onChange={() => handleUrlEntry()}
      />
      <Center p={5}>
        <Button
          loading={load}
          onClick={handleDLBut}
          color="red"
          disabled={!isValid}
        >
          Download
        </Button>
      </Center>
    </Card>
  );
}

export default VideoForm;
