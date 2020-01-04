import { Injectable, ElementRef } from '@angular/core';
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

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
        const fov: number = 75; // Угол обзора камеры
        const aspect: number = canvas.clientWidth / canvas.clientHeight; // Соотношение сторон
        const near: number = 0.1; // Ближняя граница просмотра камеры
        const far: number = 5; // Дальняя граница просмотра камеры

        this.renderer = new WebGLRenderer({ canvas });
        this.camera = new PerspectiveCamera(fov, aspect, near, far);
        this.scene = new Scene();

        this.camera.position.z = 2;
    }

    public drawCube(): void {
        const geometry: BoxGeometry = new BoxGeometry(1, 1, 1);
        const material: MeshBasicMaterial = new MeshBasicMaterial({ color: 0x44aa88 });
        const cube: Mesh = new Mesh(geometry, material);

        this.scene.add(cube);
        this.renderer.render(this.scene, this.camera);
    }
}