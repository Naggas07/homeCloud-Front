import http from "./global.items";

const getFolder = (folderData) => {
  const route = `/paths/myPaths/${folderData}`;
  return http.get(route).then((folder) => folder.data);
};

const newFolder = (route, items) => {
  const routes = `/paths/new/${route}`;

  return http.post(routes, items).then((folder) => folder.data);
};

const deleteFolder = (route) => {
  const routes = `/paths/delete/${route}`;

  return http
    .post(routes)
    .then((res) => res)
    .catch((err) => {
      return { message: "Error deleting" };
    });
};

let filesFoldersService = {
  getFolder,
  newFolder,
  deleteFolder,
};

export default filesFoldersService;
