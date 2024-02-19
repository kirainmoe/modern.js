import path from 'path';
import { fs } from '@modern-js/utils';
import { runCli, initBeforeTest } from '../../utils';

initBeforeTest();

describe('force transpile with swc', () => {
  const fixtureDir = __dirname;
  it('buildType is bundle', async () => {
    const configFile = path.join(fixtureDir, './modern.config.ts');
    await runCli({
      argv: ['build'],
      configFile,
      appDirectory: fixtureDir,
    });
    const distFilePath = path.join(fixtureDir, './dist/index.js');
    const content = await fs.readFile(distFilePath, 'utf-8');
    expect(content.includes('[COMMENT]')).toBe(true);
  });
});
