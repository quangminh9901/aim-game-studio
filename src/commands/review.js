import chalk from 'chalk';
import { openClaude, checkClaude, checkProject } from '../claude.js';

export function reviewCommand() {
  checkClaude();
  checkProject();
  console.log(chalk.bold('\n  Running code review...\n'));
  openClaude('/code-review');
}
