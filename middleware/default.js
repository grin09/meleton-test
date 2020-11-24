export default async function ({ isHMR, store, route, redirect }) {
  if (isHMR) {
    return false
  }

  if (route.name === 'index') {
    redirect(301, { name: 'courses' })
    return false
  }

  await store.dispatch('list/load')
}
