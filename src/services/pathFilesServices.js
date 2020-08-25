import http from "./global.items";

const getFolder = (folderData) => {
  const route = `/paths/myPaths/${folderData}`;
  return http.get(route).then((folder) => folder.data);
};

const newFolder = (route, items) => {
  const routes = `/paths/new/${route}`;

  return http.post(routes, items).then((folder) => folder.data);
};

let filesFoldersService = {
  getFolder,
  newFolder,
};

export default filesFoldersService;
