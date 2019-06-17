import { Context } from 'probot' // eslint-disable-line no-unused-vars
import { MERGE_LABEL } from './checkRunCompletedHandler'

async function createLabel (context: Context, owner: string, repo: string) {
  const github = context.github
  const description = 'See: https://github.com/phstc/probot-merge-when-green/'
  const color = '2cbe4e'
  await github.issues.createLabel({
    owner,
    repo,
    name: MERGE_LABEL,
    color,
    description
  })
}

export async function installationCreatedHandler (context: Context, repos: any) {
  repos.forEach(async (item: any) => {
    const [owner, repo] = item.full_name.split('/')

    await createLabel(context, owner, repo)
  })
}
