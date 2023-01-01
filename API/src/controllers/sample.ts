import { NextFunction, Request, Response } from 'express';

const serverHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    res.send('plunk');
    return res.status(200).json({
        message: 'pong',
       
    });
};

export default { serverHealthCheck };
