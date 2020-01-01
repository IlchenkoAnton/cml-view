import { Injectable, ElementRef } from '@angular/core';
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';

@Injectable()
export class DrawingCoreService {
    private scene: Scene;
    private camera: PerspectiveCamera;
    private renderer: WebGLRenderer;

    get Scene(): Scene {
        return this.scene;
    }

    get Camera(): PerspectiveCamera {
        return this.camera;
    }

    get Renderer(): WebGLRenderer {
        return this.renderer;
    }

    public initialization(container: ElementRef): void {
        const width: number = container.nativeElement.clientWidth;
        const height: number = container.nativeElement.clientHeight;

        this.scene = new Scene();
        this.camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
        this.renderer = new WebGLRenderer();

        this.renderer.setSize(width, height);

        container.nativeElement.appendChild(this.renderer.domElement);
    }
}