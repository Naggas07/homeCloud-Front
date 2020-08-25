import http from "./global.items";

const getFolder = (folderData) => {
  const route = `/paths/myPaths/${folderData}`;

  return http.get(route).then((folder) => folder.data);
};

const newFolder = (folderData) => {
  const route = `/paths/myPaths/${folderData.route}`;

  return http.post(route, folderData.name).then((folder) => folder.data);
};

let filesFoldersService = {
  getFolder,
  newFolder,
};

export default filesFoldersService;
