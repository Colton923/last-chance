export const MakeLink = (title: string) => {
  return title.replace(/ /g, '%20').replace(/&/g, '%26').replace(/\//g, '%2F')
}
