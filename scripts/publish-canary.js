const { execSync } = require("child_process");

/**
 * 패키지를 canary version으로 배포합니다.
 * version preid를 branch 이름 기반으로 만들기 위한 프로그래밍이 필요해 별도의 스크립트 파일로 만들었습니다.
 * canary로 배포되는 버전 포맷: vX.X.X-alpha.branch-name.X
 * features/web3-log -> vX.X.X-alpha.features.web3-log.X
 */
function publishPackages() {
  try {
    const branch = execSync("git rev-parse --abbrev-ref HEAD")
      .toString()
      .trim();
    const featuresMatch = branch.match(/^(.*)\/(.*)$/);
    const branchType = featuresMatch?.[1].replace("/", ".");
    const branchName = featuresMatch?.[2].replace("/", "-");
    if (branchType && branchName) {
      const yes = process.argv.includes("--yes") ? "--yes" : false;
      const commands = [
        "lerna",
        "publish",
        "--canary",
        `--preid=alpha.${branchType}.${branchName}`,
        yes,
      ]
        .filter(Boolean)
        .join(" ");
      execSync(commands, { stdio: "inherit" });
    } else {
      throw new Error(`Not found preid. branch :>> ${branch}`);
    }
  } catch (error) {
    console.log("error :>> ", error);
    process.exit(1);
  }
}

publishPackages();
