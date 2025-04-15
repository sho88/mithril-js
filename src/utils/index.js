export const asyncify = promise => promise.then(data => [null, data]).catch(error => [error]);
