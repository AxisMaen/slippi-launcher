// Check if the renderer and main bundles are built
function CopyDolphin() {
  const platform = process.platform;

  // TODO: Create empty Slippi folder
  // TODO: Clear out cache and overwrite user folder
  switch (platform) {
  case "darwin":
    console.log("Copying the mac build of dolphin to package");
    break;
  case "win32":
    console.log("Copying the windows build of dolphin to package");
    break;
  }
}

CopyDolphin();
