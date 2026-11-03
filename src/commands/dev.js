import chalk from 'chalk';
import { openClaude, checkClaude, checkProject } from '../claude.js';

export function devCommand(story) {
  checkClaude();
  checkProject();
  const prompt = story ? `/dev-story ${story}` : '/dev-story';
  console.log(chalk.bold('\n  Starting development...\n'));
  if (story) {
    console.log(chalk.dim(`  Story: ${story}\n`));
  } else {
    console.log(chalk.dim('  Claude will ask which story to work on.\n'));
  }
  openClaude(prompt);
}
