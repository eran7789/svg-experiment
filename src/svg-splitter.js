import { min, last, remove } from "lodash/fp";

export const breakPathD = pathD => {
  return breakCapitalM(pathD);
}

const breakCapitalM = pathD => {
  let paths = [];
  let stop = false;

  while (!stop) {
    const firstIndex = min([
      pathD.indexOf('M'),
      pathD.indexOf('m')
    ]);
    const nextIndex = min(remove(value => value === -1, [
      pathD.indexOf('M', firstIndex + 1),
      pathD.indexOf('m', firstIndex + 1),
      pathD.indexOf('Z', firstIndex + 1),
      pathD.indexOf('z', firstIndex + 1)
    ]));

    stop = firstIndex === -1;

    if (stop) {
      break;
    }

    let newPath = pathD.substring(firstIndex, nextIndex + 1);
    pathD = pathD.substring(0, firstIndex) + pathD.substring(nextIndex, pathD.length);

    paths = [...paths, newPath];
  }

  return paths;
}