export function startListener(history, store) {
  history.listen(location => {
    console.log("loc", location);
  });
}
