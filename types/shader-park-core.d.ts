declare module "shader-park-core/dist/shader-park-core.esm" {
  import type { BufferGeometry, Mesh } from "three";

  export function createSculpture(
    source: (() => void) | string,
    uniformCallback?: () => Record<string, unknown>,
    params?: {
      radius?: number;
      geometry?: BufferGeometry;
    },
    generatedGLSL?: string,
  ): Mesh;

  export function createSculptureWithGeometry(
    geometry: BufferGeometry,
    source: (() => void) | string,
    uniformCallback?: () => Record<string, unknown>,
    params?: {
      radius?: number;
      geometry?: BufferGeometry;
    },
    generatedGLSL?: string,
  ): Mesh;
}
