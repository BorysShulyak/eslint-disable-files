import fs from 'node:fs';
import path from 'node:path';

import { getDeepFilesFromDir } from '@borisshulyak/node-utils';

const eslintDisableFiles = (rootDir = './', pattern = /\.[cm]?[jt]sx?$/) => {
  const files = getDeepFilesFromDir(rootDir, pattern);

  files.forEach((file) => {
    const filePath = path.join(rootDir, file);

    const contents = fs.readFileSync(filePath, 'utf8');
    if (!contents.trim().startsWith('/* eslint-disable */')) {
      const updatedContents = `/* eslint-disable */\n\n${contents}`;
      fs.writeFileSync(filePath, updatedContents);
    }
  });
};

export default eslintDisableFiles;
