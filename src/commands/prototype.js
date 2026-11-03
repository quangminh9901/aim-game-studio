import chalk from 'chalk';
import { openClaude, checkClaude, checkProject } from '../claude.js';

export function prototypeCommand() {
  checkClaude();
  checkProject();
  console.log(chalk.bold('\n  Starting quick prototype...\n'));
  console.log(chalk.dim('  Throwaway code to test an idea fast.\n'));
  openClaude('/prototype');
}
