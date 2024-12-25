const fs = require('fs').promises;
const path = require('path');

const projectRoot = __dirname;
const nestedProjectDir = path.join(projectRoot, 'thor-services-project');

async function reconcileProject() {
  try {
    // 1. Move all files from nested directory to root
    const nestedFiles = await fs.readdir(nestedProjectDir);
    for (const file of nestedFiles) {
      const sourcePath = path.join(nestedProjectDir, file);
      const destPath = path.join(projectRoot, file);
      await fs.rename(sourcePath, destPath);
    }

    // 2. Remove the now-empty nested directory
    await fs.rmdir(nestedProjectDir);

    // 3. Ensure correct directory structure
    const directories = ['components', 'pages', 'styles', 'app', 'lib'];
    for (const dir of directories) {
      await fs.mkdir(path.join(projectRoot, dir), { recursive: true });
    }

    // 4. Move files to correct locations
    const fileMoves = [
      { from: 'index.tsx', to: 'pages/index.tsx' },
      { from: '_app.tsx', to: 'pages/_app.tsx' },
      { from: 'globals.css', to: 'styles/globals.css' },
      { from: 'utils.ts', to: 'lib/utils.ts' },
    ];

    for (const move of fileMoves) {
      const sourcePath = path.join(projectRoot, move.from);
      const destPath = path.join(projectRoot, move.to);
      try {
        await fs.access(sourcePath);
        await fs.rename(sourcePath, destPath);
      } catch (error) {
        console.log(`File ${move.from} not found or already in correct location.`);
      }
    }

    // 5. Remove unnecessary files
    const filesToRemove = [
      'create-components.js',
      'create-package-json.js',
      'create-remaining-files.js',
      'fix-components.js',
      'populate-files.js',
      'verify-content-thorough.js',
      'verify-content.js',
      'verify-project.js',
    ];

    for (const file of filesToRemove) {
      try {
        await fs.unlink(path.join(projectRoot, file));
      } catch (error) {
        console.log(`File ${file} not found or already removed.`);
      }
    }

    console.log('Project structure reconciled successfully!');
  } catch (error) {
    console.error('Error reconciling project structure:', error);
  }
}

reconcileProject();

