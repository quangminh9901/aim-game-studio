import chalk from 'chalk';
import { openClaude, checkClaude, checkProject } from '../claude.js';

export function doneCommand(story) {
  checkClaude();
  checkProject();
  const prompt = story ? `/story-done ${story}` : '/story-done';
  console.log(chalk.bold('\n  Marking story complete...\n'));
  console.log(chalk.dim('  Claude will run QA checks, verify tests, and collect evidence.\n'));
  openClaude(prompt);
}
