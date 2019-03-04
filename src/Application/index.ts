import { CanvasGL } from './Core/CanvasGL';
import { Renderer } from './Core/Renderer';

import { Scene } from './Scene/Scene';

import { Point } from './Geometry/Point';

export class Application {

    host: HTMLElement;
    canvas: CanvasGL;
    renderer:Renderer;

    scene: Scene;

    constructor(id: string) {
        console.log('id: ' + id + ', App Init!!!!!');
        const host = document.getElementById(id);
        if (host) {this.host = host; }

        this.Init();
        this.InitPost();
    }
    Init(){
        this.scene = new Scene(this);
        this.canvas = new CanvasGL(this);
        this.renderer = new Renderer(this);
        this.canvas.RenderIndependentCanvas = this.renderer.Render;
    }
    InitPost(){
        new Point(this, this.canvas.gl,1,0,0)
    }
}