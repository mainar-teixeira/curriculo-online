import { listA } from './main';


export function mouseHover() {
    listA.forEach(all => {
        all.style.color = 'black';
    });
}
