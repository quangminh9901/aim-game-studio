import chalk from 'chalk';
import { openClaude, checkClaude, checkProject } from '../claude.js';

export function testCommand() {
  checkClaude();
  checkProject();
  console.log(chalk.bold('\n  Running smoke check...\n'));
  openClaude('/smoke-check');
}
