import chalk from 'chalk';
import { openClaude, checkClaude, checkProject } from '../claude.js';

export function epicCommand() {
  checkClaude();
  checkProject();
  console.log(chalk.bold('\n  Creating epics from your game design...\n'));
  console.log(chalk.dim('  Claude will read your GDDs and break them into feature epics.\n'));
  openClaude('/create-epics');
}
