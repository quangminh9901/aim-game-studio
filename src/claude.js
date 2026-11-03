import { spawn, execSync } from 'child_process';
import chalk from 'chalk';
import { existsSync } from 'fs';
import { resolve } from 'path';

export function checkClaude() {
  try {
    execSync('claude --version', { stdio: 'ignore' });
    return true;
  } catch {
    console.error(chalk.red('\n  Claude Code is not installed.\n'));
    console.error(chalk.dim('  Install it with:'));
    console.error(chalk.cyan('    npm install -g @anthropic-ai/claude-code\n'));
    process.exit(1);
  }
}

export function checkProject() {
  const claudeMd = resolve(process.cwd(), 'CLAUDE.md');
  if (!existsSync(claudeMd)) {
    console.error(chalk.red('\n  Not in a CCGS project directory.\n'));
    console.error(chalk.dim('  Run this command from a Claude Code Game Studios project,'));
    console.error(chalk.dim('  or create one with:'));
    console.error(chalk.cyan('    aim init\n'));
    process.exit(1);
  }
}

export function runClaude(prompt, opts = {}) {
  checkClaude();
  if (!opts.skipProjectCheck) checkProject();

  console.log(chalk.dim(`\n  Running: claude -p "${prompt}"\n`));

  const child = spawn('claude', ['-p', prompt], {
    stdio: 'inherit',
    cwd: process.cwd(),
    shell: true,
  });

  child.on('error', (err) => {
    console.error(chalk.red(`  Failed to run Claude: ${err.message}`));
    process.exit(1);
  });

  child.on('close', (code) => {
    if (code !== 0) {
      console.error(chalk.yellow(`\n  Claude exited with code ${code}`));
    }
  });
}

export function openClaude(initialPrompt) {
  checkClaude();

  const args = initialPrompt ? ['--prompt', initialPrompt] : [];

  console.log(chalk.dim(`\n  Opening Claude Code...\n`));

  const child = spawn('claude', args, {
    stdio: 'inherit',
    cwd: process.cwd(),
    shell: true,
  });

  child.on('error', (err) => {
    console.error(chalk.red(`  Failed to open Claude: ${err.message}`));
    process.exit(1);
  });
}
