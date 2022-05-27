import Router from './routes'

export default {
  async fetch(request: Request): Promise<Response> {
    return Router.handle(request)
  },
};
