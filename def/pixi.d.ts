declare module PIXI {

    export var WEBGL_RENDERER: number;
    export var CANVAS_RENDERER: number;
    export var VERSION: string;

    export enum blendModes {
        NORMAL,
        ADD,
        MULTIPLY,
        SCREEN,
        OVERLAY,
        DARKEN,
        LIGHTEN,
        COLOR_DODGE,
        COLOR_BURN,
        HARD_LIGHT,
        SOFT_LIGHT,
        DIFFERENCE,
        EXCLUSION,
        HUE,
        SATURATION,
        COLOR,
        LUMINOSITY
    }

    export enum scaleModes {
        DEFAULT,
        LINEAR,
        NEAREST
    }

    export var defaultRenderOptions: PixiRendererOptions;

    export var INTERACTION_REQUENCY: number;
    export var AUTO_PREVENT_DEFAULT: boolean;

    export var PI_2: number;
    export var RAD_TO_DEG: number;
    export var DEG_TO_RAD: number;

    export var RETINA_PREFIX: string;
    export var identityMatrix: Matrix;
    export var glContexts: WebGLRenderingContext[];

    export var BaseTextureCache: { [key: string]: BaseTexture };
    export var TextureCache: { [key: string]: Texture };

    export function rgb2hex(rgb: number[]): string;
    export function hex2rgb(hex: string): number[];

    export function autoDetectRenderer(width?: number, height?: number, options?: PixiRendererOptions): PixiRenderer;
    export function autoDetectRecommendedRenderer(width?: number, height?: number, options?: PixiRendererOptions): PixiRenderer;

    export function canUseNewCanvasBlendModes(): boolean;
    export function getNextPowerOfTwo(number: number): number;

    export function AjaxRequest(): XMLHttpRequest;

    export function CompileFragmentShader(gl: WebGLRenderingContext, shaderSrc: string[]): any;
    export function CompileProgram(gl: WebGLRenderingContext, vertexSrc: string[], fragmentSrc: string[]): any;


    export interface IEventCallback {
        (e?: IEvent): void
    }

    export interface IEvent {
        type: string;
        content: any;
    }

    export interface HitArea {
        contains(x: number, y: number): boolean;
    }

    export interface IInteractionDataCallback {
        (interactionData: InteractionData): void
    }

    export interface PixiRenderer {
        height: number;
        transparent: boolean;
        type: number;
        width: number;
        view: HTMLCanvasElement;

        render(stage: Stage): void;
        resize(width: number, height: number): void;
    }

    export interface PixiRendererOptions {
        antialiasing?: boolean;
        clearBeforeRender?: boolean;
        preserveDrawingBuffer?: boolean;
        resolution?: number;
        transparent?: boolean;
        view?: HTMLCanvasElement;
    }

    export interface BitmapTextStyle {
        font?: string;
        align?: string;
        tint?: string;
    }

    export interface TextStyle {
        align?: string;
        dropShadow?: boolean;
        dropShadowColor?: string;
        dropShadowAngle?: number;
        dropShadowDistance?: number;
        fill?: string;
        font?: string;
        stroke?: string;
        strokeThickness?: number;
        wordWrap?: boolean;
        wordWrapWidth?: number;
    }

    export interface Loader {
        load(): void;
    }

    export interface MaskData {
        alpha: number;
        worldTransform: number[];
    }

    export interface RenderSession {
        context: CanvasRenderingContext2D;
        maskManager: CanvasMaskManager;
        scaleMode: scaleModes;
        smoothProperty: string;
        roundPixels: boolean;
    }

    export interface ShaderAttribute {
        // TODO: Find signature of shader attributes
    }

    export interface FilterBlock {
        visible: boolean;
        renderable: boolean;
    }

    export class AbstractFilter {
        constructor(fragmentSrc: string[], uniforms: any);

        dirty: boolean;
        padding: number;
        uniforms: any;
        fragmentSrc: string[];

        apply(frameBuffer: WebGLFramebuffer): void;
        syncUniforms(): void;
    }

    export class AlphaMaskFilter extends AbstractFilter {
        constructor(texture: Texture);

        map: Texture;

        onTextureLoaded(): void;
    }

    export class AsciiFilter extends AbstractFilter {
        size: number;
    }

    export class AssetLoader implements Mixin {
        constructor(assetURLs: string[], crossorigin: boolean);

        assetURLs: string[];
        crossorigin: boolean;
        loadersByType: { [key: string]: Loader };

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        load(): void;
    }

    export class AtlasLoader implements Mixin {
        constructor(url: string, crossorigin: boolean);

        url: string;
        baseUrl: string;
        crossorigin: boolean;
        loaded: boolean;

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        load(): void;
    }

    export class BaseTexture implements Mixin {
        static fromImage(imageUrl: string, crossorigin?: boolean, scaleMode?: scaleModes): BaseTexture;
        static fromCanvas(canvas: HTMLCanvasElement, scaleMode?: scaleModes): BaseTexture;

        constructor(source: HTMLImageElement, scaleMode: scaleModes);
        constructor(source: HTMLCanvasElement, scaleMode: scaleModes);

        height: number;
        hasLoaded: boolean;
        premultipliedAlpha: boolean;
        resolution: number;
        scaleMode: scaleModes;
        source: HTMLImageElement;
        width: number;

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        destroy(): void;
        dirty(): void;
        updateSourceImage(newSrc: string): void;
        unloadFromGPU(): void;
    }

    export class BitmapFontLoader implements Mixin {
        constructor(url: string, crossorigin: boolean);

        baseUrl: string;
        crossorigin: boolean;
        texture: Texture;
        url: string;

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        load(): void;
    }

    export class BitmapText extends DisplayObjectContainer {
        static fonts: any;

        constructor(text: string, style: BitmapTextStyle);

        dirty: boolean;
        fontName: string;
        fontSize: number;
        textWidth: number;
        textHeight: number;
        tint: number;
        style: BitmapTextStyle;

        setText(text: string): void;
        setStyle(style: BitmapTextStyle): void;
    }

    export class BlurFilter extends AbstractFilter {
        blur: number;
        blurX: number;
        blurY: number;
    }

    export class BlurXFilter extends AbstractFilter {
        blur: number;
    }

    export class BlurYFilter extends AbstractFilter {
        blur: number;
    }

    export class CanvasBuffer {
        constructor(width: number, height: number);

        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        height: number;
        width: number;

        clear(): void;
        resize(width: number, height: number): void;
    }

    export class CanvasMaskManager {
        pushMask(maskData: MaskData, renderSession: RenderSession): void;
        popMask(renderSession: RenderSession): void;
    }

    export class CanvasRenderer implements PixiRenderer {
        constructor(width?: number, height?: number, options?: PixiRendererOptions);

        clearBeforeRender: boolean;
        context: CanvasRenderingContext2D;
        count: number;
        height: number;
        maskManager: CanvasMaskManager;
        refresh: boolean;
        renderSession: RenderSession;
        resolution: number;
        transparent: boolean;
        type: number;
        view: HTMLCanvasElement;
        width: number;

        destroy(removeView?: boolean): void;
        render(stage: Stage): void;
        resize(width: number, height: number): void;
    }

    export class CanvasTinter {
        static getTintedTexture(sprite: Sprite, color: number): HTMLCanvasElement;
        static tintWithMultiply(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
        static tintWithOverlay(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
        static tintWithPerPixel(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
        static roundColor(color: number): void;

        static cacheStepsPerColorChannel: number;
        static convertTintToImage: boolean;
        static canUseMultiply: boolean;
        static tintMethod: any;
    }

    export class Circle implements HitArea {
        constructor(x: number, y: number, radius: number);

        x: number;
        y: number;
        radius: number;

        clone(): Circle;
        contains(x: number, y: number): boolean;
        getBounds(): Rectangle;
    }

    export class ColorMatrixFilter extends AbstractFilter {
        matrix: Matrix;
    }

    export class ColorStepFilter extends AbstractFilter {
        step: number;
    }

    export class ConvolutionFilter extends AbstractFilter {
        constructor(matrix: number[], width: number, height: number);

        matrix: Matrix;
        width: number;
        height: number;
    }

    export class CrossHatchFilter extends AbstractFilter {
        blur: number;
    }

    export class DisplacementFilter extends AbstractFilter {
        constructor(texture: Texture);

        map: Texture;
        offset: Point;
        scale: Point;
    }

    export class DotScreenFilter extends AbstractFilter {
        angle: number;
        scale: Point;
    }

    export class DisplayObject {
        alpha: number;
        buttonMode: boolean;
        cacheAsBitmap: boolean;
        defaultCursor: string;
        filterArea: Rectangle;
        filters: AbstractFilter[];
        hitArea: HitArea;
        interactive: boolean;
        mask: Graphics;
        parent: DisplayObjectContainer;
        pivot: Point;
        position: Point;
        renderable: boolean;
        rotation: number;
        scale: Point;
        stage: Stage;
        visible: boolean;
        worldAlpha: number;
        worldVisible: boolean;
        x: number;
        y: number;

        // Custom field
        fadeIn(time:number, cb ?: () => void) : DisplayObject;
        fadeOut(time:number, cb ?: () => void) : DisplayObject;
        wait(time:number, cb ?: () => void) : DisplayObject;

        click(e: InteractionData): void;
        getBounds(matrix?: Matrix): Rectangle;
        getLocalBounds(): Rectangle;
        generateTexture(resolution: number, scaleMode: scaleModes, renderer: PixiRenderer): RenderTexture;
        mousedown(e: InteractionData): void;
        mousemove(e: InteractionData): void;
        mouseout(e: InteractionData): void;
        mouseover(e: InteractionData): void;
        mouseup(e: InteractionData): void;
        mouseupoutside(e: InteractionData): void;
        rightclick(e: InteractionData): void;
        rightdown(e: InteractionData): void;
        rightup(e: InteractionData): void;
        rightupoutside(e: InteractionData): void;
        setStageReference(stage: Stage): void;
        tap(e: InteractionData): void;
        toGlobal(position: Point): Point;
        toLocal(position: Point, from: DisplayObject): Point;
        touchend(e: InteractionData): void;
        touchendoutside(e: InteractionData): void;
        touchstart(e: InteractionData): void;
        touchmove(e: InteractionData): void;
    }

    export class DisplayObjectContainer extends DisplayObject {
        constructor();

        children: DisplayObject[];
        height: number;
        width: number;

        addChild(child: DisplayObject): DisplayObject;
        addChildAt(child: DisplayObject, index: number): DisplayObject;
        getBounds(): Rectangle;
        getChildAt(index: number): DisplayObject;
        getChildIndex(child: DisplayObject): number;
        getLocalBounds(): Rectangle;
        removeChild(child: DisplayObject): DisplayObject;
        removeChildAt(index: number): DisplayObject;
        removeChildren(beginIndex?: number, endIndex?: number): DisplayObject[];
        removeStageReference(): void;
        setChildIndex(child: DisplayObject, index: number): void;
        swapChildren(child: DisplayObject, child2: DisplayObject): void;
    }

    export class DOMEvent {
        altKey : boolean;
        bubbles : boolean;
        button: number;
        clientX : number;
        clientY: number;
        ctrlKey: boolean;
        layerX : number;
        layerY : number;
        pageX : number;
        pageY : number;
        which : number;
    }

    export class Ellipse implements HitArea {
        constructor(x: number, y: number, width: number, height: number);

        x: number;
        y: number;
        width: number;
        height: number;

        clone(): Ellipse;
        contains(x: number, y: number): boolean;
        getBounds(): Rectangle;
    }

    export class Event extends DOMEvent {
        constructor(target: any, name: string, data: any);

        target: any;
        type: string;
        data: any;
        timeStamp: number;

        stopPropagation(): void;
        preventDefault(): void;
        stopImmediatePropagation(): void;
    }

    export class EventTarget {
        static mixin(obj: any): void;
    }

    export class FilterTexture {
        constructor(gl: WebGLRenderingContext, width: number, height: number, scaleMode: scaleModes);

        fragmentSrc: string[];
        frameBuffer: WebGLFramebuffer;
        gl: WebGLRenderingContext;
        program: WebGLProgram;
        scaleMode: number;
        texture: WebGLTexture;

        clear(): void;
        resize(width: number, height: number): void;
        destroy(): void;
    }

    export class GraphicsData {
        constructor(lineWidth?: number, lineColor?: number, lineAlpha?: number, fillColor?: number, fillAlpha?: number, fill?: boolean, shape?: any);

        lineWidth: number;
        lineColor: number;
        lineAlpha: number;
        fillColor: number;
        fillAlpha: number;
        fill: boolean;
        shape: any;
    }

    export class Graphics extends DisplayObjectContainer {
        blendMode: number;
        boundsPadding: number;
        fillAlpha: number;
        isMask: boolean;
        lineWidth: number;
        lineColor: string;
        tint: number;
        worldAlpha: number;

        arc(cx: number, cy: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): Graphics;
        arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): Graphics;
        beginFill(color: number, alpha?: number): Graphics;
        bezierCurveTo(cpX: number, cpY: number, cpX2: number, cpY2: number, toX: number, toY: number): Graphics;
        clear(): Graphics;
        destroyCachedSprite(): void;
        drawCircle(x: number, y: number, radius: number): Graphics;
        drawEllipse(x: number, y: number, width: number, height: number): Graphics;
        drawPolygon(path: any): Graphics;
        drawRect(x: number, y: number, width: number, height: number): Graphics;
        drawRoundedRect(x: number, y: number, width: number, height: number, radius: number): Graphics;
        drawShape(shape: Circle): GraphicsData;
        drawShape(shape: Rectangle): GraphicsData;
        drawShape(shape: Ellipse): GraphicsData;
        drawShape(shape: Polygon): GraphicsData;
        endFill(): Graphics;
        lineStyle(lineWidth: number, color: number, alpha: number): Graphics;
        lineTo(x: number, y: number): Graphics;
        moveTo(x: number, y: number): Graphics;
        quadraticCurveTo(cpX: number, cpY: number, toX: number, toY: number): Graphics;
        updateBounds(): void;
    }

    export class GrayFilter extends AbstractFilter {
        constructor();

        gray: number;
    }

    export class ImageLoader implements Mixin {
        constructor(url: string, crossorigin?: boolean);

        texture: Texture;

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        load(): void;
        loadFramedSpriteSheet(frameWidth: number, frameHeight: number, textureName: string): void;
    }

    export class InteractionData {
        global: Point;
        target: Sprite;
        originalEvent: DOMEvent;

        getLocalPosition(displayObject: DisplayObject): Point;
    }

    export class InteractionManager {
        constructor(stage: Stage);

        currentCursorStyle: string;
        last: number;
        mouse: InteractionData;
        mouseOut: boolean;
        mouseoverEnabled: boolean;
        onMouseMove: Function;
        onMouseDown: Function;
        onMouseOut: Function;
        onMouseUp: Function;
        onTouchStart: Function;
        onTouchEnd: Function;
        onTouchMove: Function;
        pool: InteractionData[];
        resolution: number;
        stage: Stage;
        touches: { [id: string]: InteractionData };
    }

    export class InvertFilter extends AbstractFilter {
        invert: number;
    }

    export class JsonLoader implements Mixin {
        constructor(url: string, crossorigin?: boolean);

        baseUrl: string;
        crossorigin: boolean;
        loaded: boolean;
        url: string;

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        load(): void;
    }

    export class Matrix {
        a: number;
        b: number;
        c: number;
        d: number;
        tx: number;
        ty: number;

        append(matrix: Matrix): Matrix;
        apply(pos: Point, newPos: Point): Point;
        applyInverse(pos: Point, newPos: Point): Point;
        determineMatrixArrayType(): number[];
        identity(): Matrix;
        rotate(angle: number): Matrix;
        fromArray(array: number[]): void;
        translate(x: number, y: number): Matrix;
        toArray(transpose: boolean): number[];
        scale(x: number, y: number): Matrix;
    }

    export interface Mixin {
        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;
    }

    export class MovieClip extends Sprite {
        static fromFrames(frames: string[]): MovieClip;
        static fromImages(images: HTMLImageElement[]): HTMLImageElement;

        constructor(textures: Texture[]);

        animationSpeed: number;
        currentFrame: number;
        loop: boolean;
        playing: boolean;
        textures: Texture[];
        totalFrames: number;

        gotoAndPlay(frameNumber: number): void;
        gotoAndStop(frameNumber: number): void;
        onComplete(): void;
        play(): void;
        stop(): void;
    }

    export class NoiseFilter extends AbstractFilter {
        noise: number;
    }

    export class NormalMapFilter extends AbstractFilter {
        map: Texture;
        offset: Point;
        scale: Point;
    }

    export class PixelateFilter extends AbstractFilter {
        size: number;
    }

    export interface IPixiShader {
        fragmentSrc: string[];
        gl: WebGLRenderingContext;
        program: WebGLProgram;
        vertexSrc: string[];

        destroy(): void;
        init(): void;
    }

    export class PixiShader implements IPixiShader {
        constructor(gl: WebGLRenderingContext);

        attributes: ShaderAttribute[];
        defaultVertexSrc: string[];
        dirty: boolean;
        firstRun: boolean;
        textureCount: number;
        fragmentSrc: string[];
        gl: WebGLRenderingContext;
        program: WebGLProgram;
        vertexSrc: string[];

        initSampler2D(): void;
        initUniforms(): void;
        syncUniforms(): void;

        destroy(): void;
        init(): void;
    }

    export class PixiFastShader implements IPixiShader {
        constructor(gl: WebGLRenderingContext);

        textureCount: number;
        fragmentSrc: string[];
        gl: WebGLRenderingContext;
        program: WebGLProgram;
        vertexSrc: string[];

        destroy(): void;
        init(): void;
    }

    export class PrimitiveShader implements IPixiShader {
        constructor(gl: WebGLRenderingContext);
        fragmentSrc: string[];
        gl: WebGLRenderingContext;
        program: WebGLProgram;
        vertexSrc: string[];

        destroy(): void;
        init(): void;
    }

    export class ComplexPrimitiveShader implements IPixiShader {
        constructor(gl: WebGLRenderingContext);

        fragmentSrc: string[];
        gl: WebGLRenderingContext;
        program: WebGLProgram;
        vertexSrc: string[];

        destroy(): void;
        init(): void;
    }

    export class StripShader implements IPixiShader {
        constructor(gl: WebGLRenderingContext);

        fragmentSrc: string[];
        gl: WebGLRenderingContext;
        program: WebGLProgram;
        vertexSrc: string[];

        destroy(): void;
        init(): void;
    }

    export class Point {
        constructor(x?: number, y?: number);

        x: number;
        y: number;

        clone(): Point;
        set(x: number, y: number): void;
    }

    export class Polygon implements HitArea {
        constructor(points: Point[]);
        constructor(points: number[]);
        constructor(...points: Point[]);
        constructor(...points: number[]);

        points: number[];

        clone(): Polygon;
        contains(x: number, y: number): boolean;
    }

    export class Rectangle implements HitArea {
        constructor(x?: number, y?: number, width?: number, height?: number);

        x: number;
        y: number;
        width: number;
        height: number;

        clone(): Rectangle;
        contains(x: number, y: number): boolean;
    }

    export class RGBSplitFilter extends AbstractFilter {
        constructor();

        red: Point;
        green: Point;
        blue: Point;

    }

    export class Rope extends Strip {
        constructor(texture: Texture, points: Point[]);

        points: Point[];

        refresh(): void;
        setTexture(texture: Texture): void;
    }

    export class SepiaFilter extends AbstractFilter {
        constructor();

        sepia : number;
    }

    export class SmartBlurFilter extends AbstractFilter {
        constructor();

        blur: number;
    }

    export class SpineLoader implements Mixin {
        constructor(url: string, crossOrigin: boolean);

        url: string;
        crossorigin: boolean;
        loaded: boolean;

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        load(): void;
    }

    export class Spine extends DisplayObjectContainer {
        constructor(url: string);

        createSprite(slot: any, descriptior: any): void;
    }

    export class Sprite extends DisplayObjectContainer {
        static fromFrame(frameId: string): Sprite;
        static fromImage(url: string, crossorigin?: boolean, scaleMode?: scaleModes): Sprite;

        constructor(texture: Texture);

        anchor: Point;
        blendMode: blendModes;
        shader: IPixiShader;
        texture: Texture;
        tint: number;

        setTexture(texture: Texture): void;
    }

    export class SpriteBatch extends DisplayObjectContainer {
        constructor(texture?: Texture);

        ready: boolean;
        textureThing: Texture;

        initWebGL(gl: WebGLRenderingContext): void;
    }

    export class SpriteSheetLoader implements Mixin {
        constructor(url: string, crossorigin?: boolean);

        baseUrl: string;
        crossorigin: boolean;
        frames: any;
        texture: Texture;
        url: string;

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        load(): void;
    }

    export class Stage extends DisplayObjectContainer {
        constructor(backgroundColor: number);

        interactionManager: InteractionManager;

        getMousePosition(): Point;
        setBackgroundColor(backgroundColor: number): void;
        setInteractionDelegate(domElement: HTMLElement): void;
    }

    export class Strip extends DisplayObjectContainer {
        constructor(texture: Texture);

        colors: number[];
        dirty: boolean;
        indices: number[];
        padding: number;
        texture: Texture;
        uvs: number[];
        vertices: number[];
    }

    export class Text extends Sprite {
        constructor(text: string, style?: TextStyle);

        context: CanvasRenderingContext2D;
        resolution: number;

        destroy(destroyTexture: boolean): void;
        setStyle(style: TextStyle): void;
        setText(text: string): void;
    }

    export class Texture implements Mixin {
        static fromCanvas(canvas: HTMLCanvasElement, scaleMode?: scaleModes): Texture;
        static fromFrame(frameId: string): Texture;
        static fromImage(imageUrl: string, crossorigin?: boolean, scaleMode?: scaleModes): Texture;
        static addTextureToCache(texture: Texture, id: string): void;
        static removeTextureFromCache(id: string): Texture;

        constructor(baseTexture: BaseTexture, frame?: Rectangle, crop?: Rectangle, trim?: Rectangle);

        baseTexture: BaseTexture;
        crop: Rectangle;
        frame: Rectangle;
        height: number;
        noFrame: boolean;
        requiresUpdate: boolean;
        trim: Point;
        width: number;
        scope: any;
        valid: boolean;

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        destroy(destroyBase: boolean): void;
        setFrame(frame: Rectangle): void;
    }

    export class TilingSprite extends Sprite {
        constructor(texture: Texture, width: number, height: number);

        blendMode: number;
        texture: Texture;
        tint: number;
        tilePosition: Point;
        tileScale: Point;
        tileScaleOffset: Point;

        generateTilingTexture(forcePowerOfTwo: boolean): void;
        setTexture(texture: Texture): void;
    }

    export class TiltShiftFilter extends AbstractFilter {
        constructor();

        blur: number;
        gradientBlur: number;
        start: number;
        end: number;
    }

    export class TiltShiftXFilter extends AbstractFilter {
        constructor();

        blur: number;
        gradientBlur: number;
        start: number;
        end: number;

        updateDelta(): void;
    }

    export class TiltShiftYFilter extends AbstractFilter {
        constructor();

        blur: number;
        gradientBlur: number;
        start: number;
        end: number;

        updateDelta(): void;
    }

    export class TwistFilter extends AbstractFilter {
        constructor();

        angle: number;
        offset: Point;
        radius: number;
    }

    export class VideoTexture extends BaseTexture {
        static baseTextureFromVideo(video: HTMLVideoElement, scaleMode: number): BaseTexture;
        static textureFromVideo(video: HTMLVideoElement, scaleMode: number): Texture;
        static fromUrl(videoSrc: string, scaleMode: number): Texture;

        autoUpdate: boolean;

        destroy(): void;
        updateBound(): void;
    }

    export class WebGLBlendModeManager {
        currentBlendMode: number;

        destroy(): void;
        setBlendMode(blendMode: number): boolean;
        setContext(gl: WebGLRenderingContext): void;
    }

    export class WebGLFastSpriteBatch {
        constructor(gl: CanvasRenderingContext2D);

        currentBatchSize: number;
        currentBaseTexture: BaseTexture;
        currentBlendMode: number;
        renderSession: RenderSession;
        drawing: boolean;
        indexBuffer: any;
        indices: number[];
        lastIndexCount: number;
        matrix: Matrix;
        maxSize: number;
        shader: IPixiShader;
        size: number;
        vertexBuffer: any;
        vertices: number[];
        vertSize: number;

        end(): void;
        begin(spriteBatch: SpriteBatch, renderSession: RenderSession): void;
        destroy(removeView?: boolean): void;
        flush(): void;
        render(spriteBatch: SpriteBatch): void;
        renderSprite(sprite: Sprite): void;
        setContext(gl: WebGLRenderingContext): void;
        start(): void;
        stop(): void;
    }

    export class WebGLFilterManager {
        filterStack: AbstractFilter[];
        transparent: boolean;
        offsetX: number;
        offsetY: number;

        applyFilterPass(filter: AbstractFilter, filterArea: Texture, width: number, height: number): void;
        begin(renderSession: RenderSession, buffer: ArrayBuffer): void;
        destroy(): void;
        initShaderBuffers(): void;
        popFilter(): void;
        pushFilter(filterBlock: FilterBlock): void;
        setContext(gl: WebGLRenderingContext): void;
    }

    export class WebGLGraphics {
        reset(): void;
        upload(): void;
    }

    export class WebGLMaskManager {
        destroy(): void;
        popMask(renderSession: RenderSession): void;
        pushMask(maskData: any[], renderSession: RenderSession): void;
        setContext(gl: WebGLRenderingContext): void;
    }

    export class WebGLRenderer implements PixiRenderer {
        static createWebGLTexture(texture: Texture, gl: WebGLRenderingContext): void;

        constructor(width?: number, height?: number, options?: PixiRendererOptions);

        clearBeforeRender: boolean;
        contextLost: boolean;
        contextLostBound: Function;
        contextRestoreLost: boolean;
        contextRestoredBound: Function;
        height: number;
        gl: WebGLRenderingContext;
        offset: Point;
        preserveDrawingBuffer: boolean;
        projection: Point;
        resolution: number;
        renderSession: RenderSession;
        shaderManager: WebGLShaderManager;
        spriteBatch: WebGLSpriteBatch;
        maskManager: WebGLMaskManager;
        filterManager: WebGLFilterManager;
        stencilManager: WebGLStencilManager;
        blendModeManager: WebGLBlendModeManager;
        transparent: boolean;
        type: number;
        view: HTMLCanvasElement;
        width: number;

        destroy(): void;
        initContext(): void;
        mapBlendModes(): void;
        render(stage: Stage): void;
        renderDisplayObject(displayObject: DisplayObject, projection: Point, buffer: WebGLBuffer): void;
        resize(width: number, height: number): void;
        updateTexture(texture: Texture): void;
    }

    export class WebGLShaderManager {
        maxAttibs: number;
        attribState: any[];
        stack: any[];
        tempAttribState: any[];

        destroy(): void;
        setAttribs(attribs: ShaderAttribute[]): void;
        setContext(gl: WebGLRenderingContext): void;
        setShader(shader: IPixiShader): boolean;
    }

    export class WebGLStencilManager {
        stencilStack: any[];
        reverse: boolean;
        count: number;

        bindGraphics(graphics: Graphics, webGLData: any[], renderSession: RenderSession): void;
        destroy(): void;
        popStencil(graphics: Graphics, webGLData: any[], renderSession: RenderSession): void;
        pushStencil(graphics: Graphics, webGLData: any[], renderSession: RenderSession): void;
        setContext(gl: WebGLRenderingContext): void;
    }

    export class WebGLSpriteBatch {
        blendModes: number[];
        currentBatchSize: number;
        currentBaseTexture: Texture;
        defaultShader: AbstractFilter;
        dirty: boolean;
        drawing: boolean;
        indices: number[];
        lastIndexCount: number;
        textures: Texture[];
        shaders: IPixiShader[];
        size: number;
        sprites: any[]; //todo Sprite[]?
        vertices: number[];
        vertSize: number;

        begin(renderSession: RenderSession): void;
        destroy(): void;
        end(): void;
        flush(shader?: IPixiShader): void;
        render(sprite: Sprite): void;
        renderBatch(texture: Texture, size: number, startIndex: number): void;
        renderTilingSprite(sprite: TilingSprite): void;
        setBlendMode(blendMode: blendModes): void;
        setContext(gl: WebGLRenderingContext): void;
        start(): void;
        stop(): void;
    }

    export class RenderTexture extends Texture {
        constructor(width?: number, height?: number, renderer?: PixiRenderer, scaleMode?: scaleModes, resolution?: number);

        frame: Rectangle;
        baseTexture: BaseTexture;
        renderer: PixiRenderer;
        resolution: number;
        valid: boolean;

        clear(): void;
        getBase64(): string;
        getCanvas(): HTMLCanvasElement;
        getImage(): HTMLImageElement;
        resize(width: number, height: number, updateBase: boolean): void;
        render(displayObject: DisplayObject, position?: Point, clear?: boolean): void;
    }

}

declare function requestAnimFrame(callback:Function): void;

declare module PIXI.PolyK {
    export function Triangulate(p: number[]): number[];
}
