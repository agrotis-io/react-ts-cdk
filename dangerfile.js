import { message, danger, warn } from "danger";

// Checks if yarn.lock is changed when package.json was modified and vice-versa
const packageChanged = danger.git.modified_files.includes("package.json");
const lockfileChanged = danger.git.modified_files.includes("yarn.lock");

if (packageChanged && !lockfileChanged) {
  const message = "Changes were made to package.json, but not to yarn.lock";
  const idea = "Perhaps you need to run `yarn install`?";
  warn(`${message} - <i>${idea}</i>`);
}

// Warn when there is a big PR
const bigPRThreshold = 600;
if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
  warn(":exclamation: Big PR");
  markdown(
    "> Pull Request size seems relatively large. If Pull Request contains multiple changes, split each into separate PR will helps faster, easier review."
  );
}

// Always ensure we assign someone, so that our Slackbot can do its work correctly
if (danger.github.pr.assignee === null) {
  warn(
    "Please assign someone to merge this PR, and optionally include people who should review."
  );
}

// Checks for new dependencies
schedule(async () => {
  const packageDiff = await danger.git.JSONDiffForFile("package.json");
  if (packageDiff && packageDiff.dependencies) {
    let dependenciesString;
    const newDependencies = packageDiff.dependencies.added;

    if (newDependencies.length > 0) {
      newDependencies.forEach(newDependency => {
        if (!dependenciesString) {
          dependenciesString = newDependency;
        } else {
          dependenciesString = `${dependenciesString}, ${newDependency}`;
        }
      });
      message(
        `There are ${newDependencies.length} new ${
          newDependencies.length === 1 ? "dependency" : "dependencies"
        } added in this PR: ${dependenciesString}`
      );
    }
  }
});