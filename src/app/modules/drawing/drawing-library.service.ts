import { Injectable } from '@angular/core';
import {
    Mesh,
    BoxGeometry,
    MeshPhongMaterial,
    DirectionalLight,
    SphereGeometry
} from 'three';

@Injectable()
export class DrawingLibraryService {
    public getDirectionalLight(): DirectionalLight {
        const light: DirectionalLight = new DirectionalLight(0xffffff, 1);

        light.position.set(-1, 2, 4);

        return light;
    }

    public getCube(size: number = 0.5): Mesh {
        const geometry: BoxGeometry = new BoxGeometry(size, size, size);
        const material: MeshPhongMaterial = this.getDefaultMaterial();

        return new Mesh(geometry, material);
    }

    public getSphere(radius: number = 0.5): Mesh {
        const geometry: SphereGeometry = new SphereGeometry(radius, 32, 32);
        const material: MeshPhongMaterial = this.getDefaultMaterial();

        return new Mesh(geometry, material);
    }

    // ---------------
    // Закрытые методы
    // ---------------

    private getDefaultMaterial(): MeshPhongMaterial {
        const defaultMaterialColor: number = 0x44aa88;

        return new MeshPhongMaterial({ color: defaultMaterialColor });
    }
}