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
import placeholder from '../../../assets/icon.png';
import UrlInput from './UrlInput';

function VideoForm() {
  const [thumb, setThumb] = useState('');
  const [title, setTitle] = useState('');
  const [isValid, setValid] = useState(false);

  const handleDLBut = () => {
    // console.log('works');
    window.electron.ipcRenderer.getVideo('https://youtu.be/1Z6CHioIn3s');
  };

  const handleThumbChange = (url: string) => {
    setThumb(url);
  };
  return (
    <Card withBorder radius="md">
      <Image
        src={thumb === '' ? placeholder : thumb}
        alt="Video Thumbnail"
        height={200}
        width={200}
      />
      <Title>{title === '' ? 'Video Title' : title}</Title>
      <TextInput
        height="md"
        label="Video Url"
        placeholder="https://youtube.com/ShjfSa"
      />
      <Center p={5}>
        <Button onClick={handleDLBut} color="red" disabled={isValid}>
          Download
        </Button>
      </Center>
    </Card>
  );
}

export default VideoForm;
