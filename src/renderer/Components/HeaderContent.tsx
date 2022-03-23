import { Title, ThemeIcon, Group, Container } from '@mantine/core';
import { IoLogoYoutube } from 'react-icons/io5';

function HeaderContent() {
  return (
    <Group spacing="md" position="apart">
      <Group>
        <ThemeIcon size="lg" radius="xl" color="red">
          <IoLogoYoutube />
        </ThemeIcon>
        <Title>Youtube DL</Title>
      </Group>
    </Group>
  );
}

export default HeaderContent;
