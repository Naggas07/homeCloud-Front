import http from "./global.items";

const getFolder = (folderData) => {
  const route = `/paths/myPaths/${folderData}`;

  return http.get(route).then((folder) => folder.data);
};

let filesFoldersService = {
  getFolder,
};

export default filesFoldersService;
