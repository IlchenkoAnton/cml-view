import { Injectable } from '@angular/core';
import {
    Mesh,
    BoxGeometry,
    MeshPhongMaterial,
    DirectionalLight,
    SphereGeometry,
    Geometry,
    LineBasicMaterial,
    Line,
    Vector3
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

    public getLine(): Line {
        const geometry: Geometry = new Geometry();
        const material: LineBasicMaterial = new LineBasicMaterial({
            color: 0x000000,
            linewidth: 10 // TODO Разобраться, почему не работает
        });

        geometry.vertices.push(new Vector3(-1, 0, 0));
        geometry.vertices.push(new Vector3(0, 1, 0));

        return new Line(geometry, material);
    }

    // ---------------
    // Закрытые методы
    // ---------------

    private getDefaultMaterial(): MeshPhongMaterial {
        const defaultMaterialColor: number = 0x44aa88;

        return new MeshPhongMaterial({ color: defaultMaterialColor });
    }
}