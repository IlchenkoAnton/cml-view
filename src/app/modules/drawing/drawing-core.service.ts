import { Injectable } from '@angular/core';
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Object3D,
    Mesh,
    Color
} from 'three';
import * as _ from 'lodash';

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
        this.camera.position.z = 3;
        this.scene.background = new Color(0xffffe0);
    }

    public addObjectToScene(obj: Object3D): void {
        this.scene.add(obj);
        this.redrawScene();
    }

    public removeAllObjectToScene(): void {
        const items: Object3D[] = _.filter(this.scene.children, (child) => {
            return child instanceof Mesh;
        });

        _.forEach(items, (item) => {
            this.scene.remove(item);
        });

        this.redrawScene();
    }

    private redrawScene(): void {
        this.renderer.render(this.scene, this.camera);
    }
}