/* eslint import/prefer-default-export: off, import/no-mutable-exports: off */
import { URL } from 'url';
import path from 'path';
import youtubeDlExec from 'youtube-dl-exec';

export let resolveHtmlPath: (htmlFileName: string) => string;

if (process.env.NODE_ENV === 'development') {
  const port = process.env.PORT || 1212;
  resolveHtmlPath = (htmlFileName: string) => {
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  };
} else {
  resolveHtmlPath = (htmlFileName: string) => {
    return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
  };
}

function downloadAudio(url: string) {
  youtubeDlExec(url, { audioFormat: 'mp3' });
}

export async function downloadVideo(url: string) {
  const out = await youtubeDlExec(url, {
    skipDownload: true,
    dumpSingleJson: true,
  });
  return out;
}
