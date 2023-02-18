export function matchVideoId(url: string): string {
  const re = /\/view\/(?<id>\d+)\.html/;

  return re.exec(url)!.groups!.id;
}
