import { times } from 'lodash';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

let iconLib;

// Create font-awesome icons library
function createIconLibrary() {
  iconLib = Object
  .keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => Icons[icon]);

  library.add(...iconLib);

  return getIconsList();
}

function getIconsList() {
  if(!iconLib) {
    createIconLibrary();
  }

  return iconLib.map(icon =>(
    icon.iconName
  ));
}

export function getRandomIcons(n) {
  let rand_list = [];
  const iconList = getIconsList();

  times(n, () => {
    let rand_icon = iconList[Math.floor(Math.random(0) * iconList.length-1)];
    rand_list.push(rand_icon);
  });

  return rand_list;
}