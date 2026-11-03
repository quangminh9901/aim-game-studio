import chalk from 'chalk';
import { runClaude, checkClaude, checkProject } from '../claude.js';

export function statusCommand() {
  checkClaude();
  checkProject();
  console.log(chalk.bold('\n  Checking project status...\n'));
  runClaude('/sprint-status');
}
