import * as url from 'url';

export const settings = {
  //CORS
  cosrs: {

  },

  process: {
    PROJECT_DIR: url.fileURLToPath(new URL('.', import.meta.url)),
  }
};