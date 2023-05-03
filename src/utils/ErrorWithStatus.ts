const correctResponse = (status: number, message: unknown) => ({ status, message });
const errorResponse = (status: number, message: unknown) => ({ status, message: { message } });

export { correctResponse, errorResponse };