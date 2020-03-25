export const isErrorResponse = (response:Response): boolean => {
    return response.status / 100 === 5 || response.status / 100 === 4;
};
