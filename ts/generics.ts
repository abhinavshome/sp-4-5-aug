class Blog <T>{
    post: T;
}

class AudioPost {}
class VideoPost {}
class TextPost {}

let b = new Blog<AudioPost>();
console.log(b.post);

let fruits: Array<string> = ['Mango', 'Banana'];
let fruits1: string[] = ['Mango', 'Banana'];