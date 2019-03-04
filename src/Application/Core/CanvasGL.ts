import { Application } from '..';

export class CanvasGL {
    app: Application;
    
    gl: WebGL2RenderingContext;
    canvas: HTMLCanvasElement;

    isActive: boolean = true;

    constructor(app: Application) {
        this.app = app;
        this.InitCanvas(this.app.host);
    }
    private InitCanvas(hostDiv: HTMLElement) {
        // this.isGLBlending = false;
        // this.blendingNum = 0;
        console.log(hostDiv.style.height);
        console.log(hostDiv.style.width);

        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'absolute';
        this.canvas.style.height = hostDiv.style.height + 'px';
        this.canvas.style.width = hostDiv.style.width + 'px';
        // this.canvas.style.zIndex = '3';
        hostDiv.appendChild(this.canvas);
        this.canvas.id = 'WebGL2';
        this.canvas.className = 'WebGLRenderer';
        this.canvas.style.pointerEvents = 'none';
        // this.canvas.style[`mixBlendMode`] = COLORBLENDING.SOURCE_OVER;
        // this.canvas.style[`mixBlendMode`] = COLORBLENDING.COLOR;
        // this.canvas.style[`mixBlendMode`] = COLORBLENDING.SOURCE_OVER;
        let GLParm = { preserveDrawingBuffer: true, antialias: true, depth: true };
        this.gl = this.canvas.getContext('webgl2', GLParm) as WebGL2RenderingContext; // experimental-webgl
        // if (!this.gl) { console.debug('webGL does not support, try experimental-webgl'); this.gl = this.canvas.getContext('experimental-webgl') as WebGLRenderingContext; }
        if (!this.gl) { console.debug('your browser does not support WebGL.'); }

        this.canvas.width = hostDiv.clientWidth; // hostDivForSize.clientWidth;
        this.canvas.height = hostDiv.clientHeight; // hostDivForSize.clientHeight;
        this.LoopIndependentCanvas(this.gl);
    }
    LoopIndependentCanvas(gl: WebGL2RenderingContext) {
        if (!this.isActive) { return; }
        requestAnimationFrame(() => { this.LoopIndependentCanvas(gl); }); 
        this.RenderIndependentCanvas(gl);        
    }
    RenderIndependentCanvas(gl: WebGL2RenderingContext) {
        console.log('implementation needed');
    }  
}