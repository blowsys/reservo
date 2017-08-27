import api from 'packages/api';

export const GetTablesList = (options?: any): Promise<IServiceResult1<IUserData$1>> => {
  const uri = '/api/tables/:id';
  return api.get(uri, options).then(response => response.json());
};
