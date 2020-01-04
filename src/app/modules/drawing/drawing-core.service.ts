import { Injectable } from '@angular/core';
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Object3D
} from 'three';

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

    public initialization(canvas: HTMLCanvasElement): void {
        const fov: number = 75;                                             // Угол обзора камеры
        const aspect: number = canvas.clientWidth / canvas.clientHeight;    // Соотношение сторон
        const near: number = 0.1;                                           // Ближняя граница просмотра камеры
        const far: number = 100;                                            // Дальняя граница просмотра камеры

        this.renderer = new WebGLRenderer({ canvas });
        this.camera = new PerspectiveCamera(fov, aspect, near, far);
        this.scene = new Scene();

        this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        this.camera.position.z = 2;
    }

    public addObjectToScene(obj: Object3D): void {
        this.scene.add(obj);
        this.renderer.render(this.scene, this.camera);
    }
}