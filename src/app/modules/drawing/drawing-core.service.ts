import { Injectable } from '@angular/core';
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Object3D,
    Color,
    Light,
    Euler
} from 'three';
import * as _ from 'lodash';

@Injectable()
export class DrawingCoreService {
    private scene: Scene;
    private camera: PerspectiveCamera;
    private renderer: WebGLRenderer;

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
            return !(child instanceof Light);
        });

        _.forEach(items, (item) => {
            this.scene.remove(item);
        });

        this.redrawScene();
    }

    public rotateXScene(value: number): void {
        this.scene.rotateX(value);

        this.redrawScene();
    }

    public rotateYScene(value: number): void {
        this.scene.rotateY(value);

        this.redrawScene();
    }

    private redrawScene(): void {
        this.renderer.render(this.scene, this.camera);
    }
}