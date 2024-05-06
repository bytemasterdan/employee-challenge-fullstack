import { Router } from 'express';

export class AppRoutes {

  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    // router.use('/api/auth', AuthRoutes.routes);
    router.get('/', (req, res) => {
        res.json("hola")
    })
    
    return router;
  }


}