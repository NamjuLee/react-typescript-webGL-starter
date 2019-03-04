import { Application } from '../';
export class Scene{
    app: Application;

    geo:any = [];

    constructor(app: Application){
        this.app = app;
    }
    public Render(gl : WebGL2RenderingContext ){
        
        
        for(let g of this.geo){
            g.Render(gl);
        }
        console.log('render!!');
        
    }
}