let bangs = '';
const bangsArr = [];
const repoNum = 10;

const addBangs = (num) => {
  for (let i = 0; i < num; i++) {
    bangsArr.push('!');
  }
  bangs = bangsArr.join('');
  console.log(`Repo Test 10${bangs}`);
};

addBangs(repoNum);
