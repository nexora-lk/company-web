export default function cloudinaryLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
    if (src.includes('res.cloudinary.com')) {
        const cleanSrc = src
            .replace(/\/upload\/c_limit,w_\d+/, '/upload')
            .replace(/\/upload\/q_auto,f_auto/, '/upload')
            .replace(/\/upload\/q_auto\/f_auto/, '/upload');

        return cleanSrc.replace('/image/upload', `/image/upload/w_${width},q_${quality || 'auto'},f_auto,c_limit`);
    }
    return src;
}
