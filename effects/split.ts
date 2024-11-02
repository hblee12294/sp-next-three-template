import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  GridHelper,
  AxesHelper,
  Group,
} from "three";
import { createSculpture } from "shader-park-core/dist/shader-park-core.esm";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { spCode } from "@/sp-codes/split";

export class SplitEffect {
  private container: HTMLDivElement;
  private renderer: WebGLRenderer;
  private scene: Scene;
  private camera: PerspectiveCamera;
  private rect!: DOMRect;
  private params = { time: 0 };
  private controls: OrbitControls;
  private helpers: Group;

  constructor(container: HTMLDivElement) {
    this.container = container;

    // Setups

    this.renderer = new WebGLRenderer({ antialias: false, alpha: true });
    this.renderer.domElement.style.width = "100%";
    this.renderer.domElement.style.height = "100%";
    this.container.prepend(this.renderer.domElement);

    this.scene = new Scene();

    this.camera = new PerspectiveCamera(75, 1, 0.1, 100);
    this.camera.position.set(0, 0, -2);
    this.camera.lookAt(0, 0, 0);

    window.addEventListener("resize", this.onWindowResize);
    this.onWindowResize();

    this.controls = new OrbitControls(this.camera, this.container);
    this.controls.enabled = false;

    this.helpers = new Group();
    this.helpers.visible = false;

    const gridHelper = new GridHelper();
    this.helpers.add(gridHelper);

    const axesHelper = new AxesHelper();
    this.helpers.add(axesHelper);

    this.scene.add(this.helpers);

    // Shader Park Setup
    const mesh = createSculpture(spCode, () => ({
      time: this.params.time,
      _scale: 0.8,
    }));

    this.scene.add(mesh);
  }

  public start = async () => {
    this.renderer.setAnimationLoop(this.render);
  };

  public dispose = () => {
    this.renderer.setAnimationLoop(null);
    this.renderer.domElement.remove();
    this.renderer.dispose();

    window.removeEventListener("resize", this.onWindowResize);
  };

  public enableHelpers = () => {
    this.controls.enabled = true;
    this.helpers.visible = true;
  };

  /**
   * Private
   */

  private render = () => {
    this.params.time += 0.01;

    this.renderer.render(this.scene, this.camera);
  };

  private onWindowResize = () => {
    this.rect = this.container.getBoundingClientRect();
    const pixelRatio = window.devicePixelRatio;

    this.camera.aspect = this.rect.width / this.rect.height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(
      this.rect.width * pixelRatio,
      this.rect.height * pixelRatio,
      false
    );
  };
}
