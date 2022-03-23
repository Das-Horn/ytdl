import { createStyles, TextInput } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    paddingTop: 18,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
}));

const UrlInput = () => {
  const classes = useStyles();
  return (
    <TextInput
      height="md"
      label="Video Url"
      placeholder="https://youtube.com/ShjfSa"
    />
  );
};

export default UrlInput;
