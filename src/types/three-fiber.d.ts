import { Object3DNode } from '@react-three/fiber';
import { Mesh, BoxGeometry, SphereGeometry, TorusGeometry, MeshStandardMaterial, Object3D } from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: Object3DNode<Mesh, typeof Mesh>;
      boxGeometry: Object3DNode<BoxGeometry, typeof BoxGeometry>;
      sphereGeometry: Object3DNode<SphereGeometry, typeof SphereGeometry>;
      torusGeometry: Object3DNode<TorusGeometry, typeof TorusGeometry>;
      meshStandardMaterial: Object3DNode<MeshStandardMaterial, typeof MeshStandardMaterial>;
      primitive: { object: Object3D; [key: string]: any };
    }
  }
}
