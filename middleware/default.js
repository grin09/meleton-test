export default async function ({ isHMR, store, route, redirect }) {
  if (isHMR) {
    return false;
  }

  if (route.name == "index") {
    redirect(301, { name: "list" });
    return false;
  }

  store.dispatch("list/load");
}
