import { Group, Text } from '@mantine/core';
import VideoForm from './VideoForm';

function Home() {
  return (
    <Group direction="column">
      <VideoForm />
      <Text>Help</Text>
    </Group>
  );
}

export default Home;
